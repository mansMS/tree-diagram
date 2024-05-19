import { TREE_HEAD_ID } from './constants.js';
import printDiagramm from './printDiagramm.js';
import { closeInfo, openInfo } from './printInfo.js';
import { highlightSearched } from './helpers.js';
import tree from './tree.js';

let diagrammHeadId = TREE_HEAD_ID;
let printingTreeKeys;
let svg;
const headListBlock = document.body.getElementsByClassName('head-list')[0];
const infoBlock = document.body.getElementsByClassName('info-block')[0];
const headList = [];

const flatTree = {};

const flattenTree = (tree, id) => {
  const generation = id.length - 1;
  const branch = { ...tree, id, generation };

  if (tree.childs) {
    const childIds = tree.childs.map((_, index) => id + (index + 1).toString(16));

    const childs = tree.childs.map((child, index) => flattenTree(child, childIds[index]));
    childs.forEach(child => { child.parentId = id });

    const childsMaxBulksSum = childs.reduce((acc, child) => acc + child.maxBulk, 0);
    const maxBulk = Math.max(tree.childs.length, childsMaxBulksSum); // Максимальное количество потомков в одном поколении

    delete branch.childs;

    return flatTree[id] = { ...branch, maxBulk: maxBulk, childIds: childIds.sort((a, b) => flatTree[a].maxBulk - flatTree[b].maxBulk) };
  } else {
    return flatTree[id] = { ...branch, maxBulk: 1 };
  };
};
flattenTree(tree, TREE_HEAD_ID);

const treeKeys = Object.keys(flatTree).sort((a, b) => a.length - b.length);

const addHeadButton = headItem => {
  headList.push({ ...headItem });
  const newHead = document.createElement('button');
  newHead.className = headItem.id + ' ' + headItem.gender;
  newHead.textContent = headItem.name;
  headListBlock.appendChild(newHead);

  newHead.addEventListener('click', (e) => {
    const newDiagrammHeadId = e.target.id;
    if (newDiagrammHeadId !== headList.at(-1).id) {
      updateHeadList(headItem.id);
      startPrinting(headItem.id);

      const searchFieldValue = document.body.getElementsByClassName('search-field')[0].value;
      highlightSearched(flatTree, searchFieldValue);
    };
  });
};

const updateHeadList = diagrammHeadId => {
  const headIndex = headList.findIndex(person => person.id === diagrammHeadId);
  if (headIndex >= 0) {
    const removingHeads = headList.splice(headIndex);
    removingHeads.forEach(person => headListBlock.getElementsByClassName(person.id)[0].remove())
  } else {
    const addingHeadList = [];
    const headListStart = headList.at(-1);
    if (!headListStart) {
      addHeadButton(flatTree[diagrammHeadId]);
      return;
    };
    let headListEnd = flatTree[diagrammHeadId];
    while (headListEnd.id !== headListStart.id) {
      addingHeadList.unshift(headListEnd);
      headListEnd = flatTree[headListEnd.parentId];
    };

    addingHeadList.forEach(addHeadButton);
  };
};

const startPrinting = diagrammHeadId => {
  if (svg) svg.remove();

  updateHeadList(diagrammHeadId);

  printingTreeKeys = treeKeys.reduce((acc, key) => {
    if (acc.includes(flatTree[key].parentId)) acc.push(key);
    return acc;
  }, [diagrammHeadId]);

  svg = printDiagramm(diagrammHeadId, flatTree, printingTreeKeys);

  svg.addEventListener('click', (e) => {
    const sectorId = e.target.parentElement.id;
    const tag = e.target.tagName;

    if (tag === 'text') {
      if (sectorId !== infoBlock.dataset.personId) openInfo(flatTree[sectorId], infoBlock);
    } else if (sectorId in flatTree && sectorId !== diagrammHeadId) {
      if (sectorId !== infoBlock.dataset.personId) closeInfo(infoBlock);
      diagrammHeadId = sectorId;
      startPrinting(diagrammHeadId);

      const searchFieldValue = document.body.getElementsByClassName('search-field')[0].value;
      highlightSearched(flatTree, searchFieldValue);
    };
  });
};

startPrinting(diagrammHeadId);

const searchWorking = () => {
  const searchField = document.body.getElementsByClassName('search-field')[0];
  searchField.addEventListener("input", e => highlightSearched(flatTree, e.target.value));
};
searchWorking();