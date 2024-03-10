import { CENTER, LEVELS_WIDTHS, FONT_SIZE } from './constants.js';
import { createSvg, addTextToCoords, addSector, printCircle } from './svgFunc.js';
import tree from './tree.js';

createSvg();

const flatTree = {};

const flattenTree = (tree, parentId) => {
  flatTree[tree.id] = { ...tree, parrent: parentId, generation: (flatTree[parentId]?.generation || 0) + 1 };

  if (tree.childs) {
    flatTree[tree.id].childIds = tree.childs.map(child => child.id);
    delete flatTree[tree.id].childs;

    const childsMaxBulk = tree.childs.map(child => flattenTree(child, tree.id));
    const childsMaxBulkSum = childsMaxBulk.reduce((acc, maxBulk) => acc + maxBulk, 0);
    const maxBulk = Math.max(tree.childs.length, childsMaxBulkSum); // Максимальное количество потомков в одном поколении
    return flatTree[tree.id].maxBulk = maxBulk;
  } else {
    return flatTree[tree.id].maxBulk = 1;
  };
};

flattenTree(tree);

const calculateShares = () => {
  Object.values(flatTree).forEach(person => {
    if (person.generation === 1) {
      person.share = 2 * Math.PI;
      person.sharePosition = Math.PI;
      person.radius = 0;
      person.width = LEVELS_WIDTHS[person.generation - 1];
    };

    if (person.childIds) {
      const childsBulkSum = person.childIds.reduce((acc, id) => acc + flatTree[id].maxBulk, 0);
      let nextChildPosition = person.sharePosition;
      person.childIds.forEach(id => {
        flatTree[id].width = LEVELS_WIDTHS[flatTree[id].generation - 1];
        flatTree[id].radius = person.radius + person.width;
        flatTree[id].share = person.share / childsBulkSum * flatTree[id].maxBulk;
        flatTree[id].sharePosition = nextChildPosition;
        nextChildPosition += flatTree[id].share;
      });
    };
  });
};

calculateShares();

const printDiagramm = () => {
  Object.values(flatTree).forEach(branch => {
    if (branch.share === 2 * Math.PI) {
      printCircle(CENTER, CENTER, branch.radius + branch.width);

      const x = branch.generation === 1 ? CENTER - branch.width * 0.7 : CENTER + branch.radius + 1;
      const y = branch.generation === 1 ? CENTER + FONT_SIZE * 0.3 : CENTER + FONT_SIZE * 0.3;
      addTextToCoords(branch.name, x, y);

    } else addSector(branch.radius, branch.width, branch.sharePosition, branch.share, branch.name)
  });
};

// const printDiagramm = () => {
//   let time = 0;
//   Object.values(flatTree).forEach(branch => {
//     setTimeout(() => {
//       // addSector(branch.radius, branch.width, branch.sharePosition, branch.share, branch.name);
//       addSector(branch.radius, branch.width, branch.sharePosition, branch.share, branch.name);
//     }, time);
//     time += 0;
//   });
// };

printDiagramm();

console.log('flatTree', flatTree);

