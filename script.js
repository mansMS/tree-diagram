import { CENTER, LEVELS_WIDTHS, DEFAULT_LEVEL_WIDTH, FONT_SIZE } from './constants.js';
import { getSvg, getCircle, getGroup, getText, getSector } from './svgFunc.js';
import { getTextPositionInSector, toDegrees } from './helpers.js';
import tree from './tree.js';

const svg = getSvg();
document.body.appendChild(svg);

const flatTree = {};

const flattenTree = (tree, id) => {
  const branch = { ...tree, id, generation: id.length - 1 };

  if (tree.childs) {
    const childIds = tree.childs.map((_, index) => id + (index + 1).toString(16));

    const childs = tree.childs.map((child, index) => flattenTree(child, childIds[index]));
    childs.forEach(child => { child.parentId = id });

    const childsMaxBulksSum = childs.reduce((acc, child) => acc + child.maxBulk, 0);
    const maxBulk = Math.max(tree.childs.length, childsMaxBulksSum); // Максимальное количество потомков в одном поколении

    delete branch.childs;

    return flatTree[id] = { ...branch, maxBulk: maxBulk, childIds: childIds };
  } else {
    return flatTree[id] = { ...branch, maxBulk: 1 };
  };
};

flattenTree(tree, 'i1');

const treeKeys = Object.keys(flatTree).sort();

const calculateSizes = () => {
  treeKeys.forEach(id => {
    const person = flatTree[id];

    if (person.generation === 1) {
      person.sectorSize = 2 * Math.PI;
      person.sectorStart = 0.737 * Math.PI;
      person.radius = 0;
      person.width = LEVELS_WIDTHS[person.generation - 1] || DEFAULT_LEVEL_WIDTH;
    };

    if (person.childIds) {
      const childsBulkSum = person.childIds.reduce((acc, id) => acc + flatTree[id].maxBulk, 0);
      let nextChildPosition = person.sectorStart;
      person.childIds.forEach(id => {
        flatTree[id].width = LEVELS_WIDTHS[flatTree[id].generation - 1] || DEFAULT_LEVEL_WIDTH;
        flatTree[id].radius = person.radius + person.width;
        flatTree[id].sectorSize = person.sectorSize / childsBulkSum * flatTree[id].maxBulk;
        flatTree[id].sectorStart = nextChildPosition;
        nextChildPosition += flatTree[id].sectorSize;
      });
    };
  });
};

calculateSizes();

const createStructure = () => {
  treeKeys.forEach(id => {
    const branch = flatTree[id];
    const className = [branch.gender, branch.marriage].filter(Boolean).join(' ') || undefined;
    const g = getGroup(branch.id, className);
    const parent = svg.getElementById(branch.parentId) || svg;
    parent.appendChild(g);
  });
};

createStructure();

const printBranchs = branch => {
  const group = document.getElementById(branch.id);

  const addTextToCoords = (textElement, parent, x, y, rotate = 0) => {
    textElement.setAttribute('transform', `translate(${x}, ${y}) rotate(${toDegrees(rotate)})`);
    parent.appendChild(textElement);
  };

  const textElement = getText(branch.name);

  if (branch.sectorSize === 2 * Math.PI) {
    const circle = getCircle(CENTER, CENTER, branch.radius + branch.width);
    group.appendChild(circle);

    const textX = branch.generation === 1 ? CENTER - branch.width * 0.72 : CENTER + branch.radius + 5;
    const textY = CENTER + FONT_SIZE * 0.25;
    addTextToCoords(textElement, group, textX, textY);
  } else {
    const sector = getSector(branch.radius, branch.width, branch.sectorStart, branch.sectorSize);
    group.appendChild(sector);

    const { x: textX, y: textY, a: textRotate } = getTextPositionInSector(branch.radius + 3, branch.sectorStart, branch.sectorSize, FONT_SIZE);
    addTextToCoords(textElement, group, textX, textY, textRotate);

  };
};

const printDiagramm = () => {
  Object.values(flatTree).forEach(printBranchs);
};

printDiagramm();
