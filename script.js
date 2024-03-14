import { CENTER, LEVELS_WIDTHS, DEFAULT_LEVEL_WIDTHS, FONT_SIZE, MALE_BACKGROUND, FEMALE_BACKGROUND } from './constants.js';
import { createSvg, addTextToCoords, addSector, printCircle } from './svgFunc.js';
import tree from './tree.js';

createSvg();

const flatTree = {};

const flattenTree = (tree, id) => {
  if (tree.childs) {
    const childIds = tree.childs.map((_, index) => id + (index + 1).toString(16));

    const childs = tree.childs.map((child, index) => flattenTree(child, childIds[index]));
    childs.forEach(child => { child.parentId = id });

    const childsMaxBulksSum = childs.reduce((acc, child) => acc + child.maxBulk, 0);
    const maxBulk = Math.max(tree.childs.length, childsMaxBulksSum); // Максимальное количество потомков в одном поколении

    const branch = { ...tree, maxBulk: maxBulk, childIds: childIds, generation: id.length };
    delete branch.childs;

    return flatTree[id] = branch;
  } else {
    return flatTree[id] = { ...tree, maxBulk: 1, generation: id.length };
  };
};

flattenTree(tree, '1');

const calculateShares = () => {
  Object.values(flatTree).forEach(person => {
    if (person.generation === 1) {
      person.share = 2 * Math.PI;
      person.sharePosition = 0.737 * Math.PI;
      person.radius = 0;
      person.width = LEVELS_WIDTHS[person.generation - 1] || DEFAULT_LEVEL_WIDTHS;
    };

    if (person.childIds) {
      const childsBulkSum = person.childIds.reduce((acc, id) => acc + flatTree[id].maxBulk, 0);
      let nextChildPosition = person.sharePosition;
      person.childIds.forEach(id => {
        flatTree[id].width = LEVELS_WIDTHS[flatTree[id].generation - 1] || DEFAULT_LEVEL_WIDTHS;
        flatTree[id].radius = person.radius + person.width;
        flatTree[id].share = person.share / childsBulkSum * flatTree[id].maxBulk;
        flatTree[id].sharePosition = nextChildPosition;
        nextChildPosition += flatTree[id].share;
      });
    };
  });
};

calculateShares();

const printBranch = branch => {
  const background = branch.gender === 'male' ? MALE_BACKGROUND : branch.gender === 'female' ? FEMALE_BACKGROUND : undefined;

  if (branch.share === 2 * Math.PI) {
    printCircle(CENTER, CENTER, branch.radius + branch.width, undefined, background);

    const x = branch.generation === 1 ? CENTER - branch.width * 0.72 : CENTER + branch.radius + 5;
    const y = CENTER + FONT_SIZE * 0.25;
    addTextToCoords(branch.name, x, y);


  } else addSector(branch.radius, branch.width, branch.sharePosition, branch.share, branch.name, undefined, background);
};

const printDiagramm = () => {
  Object.values(flatTree).reverse().forEach(printBranch);
};

// const printDiagramm = () => {
//   let time = 0;
//   Object.values(flatTree).forEach(branch => {
//     setTimeout(() => printBranch(branch), time);
//     time += 30;
//   });
// };

printDiagramm();

console.log('flatTree', flatTree);

