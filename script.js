import { TREE_HEAD_ID } from './constants.js';
import printDiagramm from './printDiagramm.js';
import tree from './tree.js';

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

let diagrammHeadId = TREE_HEAD_ID;
const treeKeys = Object.keys(flatTree).sort((a, b) => a.length - b.length);
let printingTreeKeys;
let svg;
const headListBlock = document.body.getElementsByClassName('head-list')[0];
const headList = [];

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
    const newDiagrammHeadId = e.target.parentElement.id;
    if (newDiagrammHeadId in flatTree && newDiagrammHeadId !== diagrammHeadId) {
      diagrammHeadId = newDiagrammHeadId;
      startPrinting(diagrammHeadId);
    };
  });
};

startPrinting(diagrammHeadId);
