import { CENTER, DEFAULT_FONT_SIZE } from './constants.js';
import { getSvg, getCircle, getGroup, getText, getSector } from './svgFunc.js';
import { getTextPositionInSector, toDegrees, calculateTextWidth } from './helpers.js';
import tree from './tree.js';

const svg = getSvg();
document.body.appendChild(svg);

const flatTree = {};
const levelsWidths = [];

const flattenTree = (tree, id) => {
  const generation = id.length - 1;
  const fontSize = DEFAULT_FONT_SIZE * (1 - 0.05 * (generation - 1));
  const nameWidth = calculateTextWidth(tree.name, fontSize);
  const width = nameWidth + fontSize * 0.4;
  const branch = { ...tree, id, generation, fontSize, nameWidth, width };

  if (!levelsWidths[branch.generation] || levelsWidths[branch.generation] < width) {
    levelsWidths[branch.generation] = branch.generation === 1 ? width / 2 : width;
  };

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

const treeKeys = Object.keys(flatTree).sort((a, b) => a.length - b.length);

const calculateSizes = () => {
  treeKeys.forEach(id => {
    const branch = flatTree[id];

    if (branch.generation === 1) {
      branch.sectorSize = 2 * Math.PI;
      branch.sectorStart = 0.7374 * Math.PI;
      branch.radius = 0;
    };

    if (branch.childIds) {
      const childsBulkSum = branch.childIds.reduce((acc, id) => acc + flatTree[id].maxBulk, 0);
      let nextChildPosition = branch.sectorStart;

      branch.childIds.forEach(id => {
        flatTree[id].radius = branch.radius + levelsWidths[branch.generation];
        flatTree[id].sectorSize = branch.sectorSize / childsBulkSum * flatTree[id].maxBulk;
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

  const textElement = getText(branch.name, branch.fontSize);

  if (branch.sectorSize === 2 * Math.PI) {
    const circle = getCircle(CENTER, CENTER, branch.radius + levelsWidths[branch.generation]);
    group.appendChild(circle);

    const textX = (branch.generation === 1 ? CENTER - levelsWidths[branch.generation] : CENTER + branch.radius) + branch.fontSize * 0.2;
    const textY = CENTER + branch.fontSize * 0.25;
    addTextToCoords(textElement, group, textX, textY);
  } else {
    const sector = getSector(branch.radius, levelsWidths[branch.generation], branch.sectorStart, branch.sectorSize);
    group.appendChild(sector);

    const { x: textX, y: textY, a: textRotate } = getTextPositionInSector(branch.radius + branch.fontSize * 0.2, branch.sectorStart, branch.sectorSize, branch.fontSize);
    addTextToCoords(textElement, group, textX, textY, textRotate);
  };
};

const printDiagramm = () => {
  Object.values(flatTree).forEach(printBranchs);
};

printDiagramm();