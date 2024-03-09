import tree from './tree.js';

const SVG_NS = 'http://www.w3.org/2000/svg';
const SVG_SIZE = 400;
const CENTER = SVG_SIZE / 2;
const LEVELS_WIDTHS = [20, 30, null, 30, 50, 60];

const createSvg = () => {
  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('width', SVG_SIZE);
  svg.setAttribute('height', SVG_SIZE);
  return document.body.appendChild(svg);
}

const svg = createSvg();


const addDot = (x, y, color = 'red') => {
  const circle = document.createElementNS(SVG_NS, 'circle');
  circle.setAttribute('cx', x);
  circle.setAttribute('cy', y);
  circle.setAttribute('r', 2);
  circle.setAttribute('fill', color);
  svg.appendChild(circle);
}

addDot(CENTER, CENTER, 'black');


const toDegrees = a => a * (180 / Math.PI);
const toRadians = a => a * (Math.PI / 180);

const addNameToSector = (name, r, aRadian, daRadian, fontSize) => {
  const text = document.createElementNS(SVG_NS, 'text');
  text.setAttribute('fill', 'red');
  text.setAttribute('font-size', fontSize + 'px');

  const nameA = aRadian + daRadian / 2 + fontSize / (4 * r);

  const nameX = CENTER + r * Math.cos(nameA);
  const nameY = CENTER + r * Math.sin(nameA);
  text.setAttribute('transform', `translate(${nameX}, ${nameY}) rotate(${toDegrees(nameA)})`);
  text.textContent = name;
  svg.appendChild(text);

  // <g transform="translate(306.5435810997357, 231.13623815498656) rotate(16.29044548452888)">
  //   <text fill="red" font-size="10px" y="-5">Nam2222s</text>
  //   <text fill="red" font-size="10px" y="5">NamePers</text>
  // </g>
};


const addSector = (r, dr, a, da, name = '', fontSize = 10) => {
  const path = document.createElementNS(SVG_NS, 'path');

  const aRadian = toRadians(a);
  const daRadian = toRadians(da);

  const x1 = CENTER + r * Math.cos(aRadian);
  const y1 = CENTER + r * Math.sin(aRadian);
  // addDot(x1, y1);

  const x2 = CENTER + r * Math.cos(aRadian + daRadian);
  const y2 = CENTER + r * Math.sin(aRadian + daRadian);
  // addDot(x2, y2, 'green');

  const x3 = CENTER + (r + dr) * Math.cos(aRadian + daRadian);
  const y3 = CENTER + (r + dr) * Math.sin(aRadian + daRadian);
  // addDot(x3, y3, 'blue');

  const x4 = CENTER + (r + dr) * Math.cos(aRadian);
  const y4 = CENTER + (r + dr) * Math.sin(aRadian);
  // addDot(x4, y4, 'black');

  const arcAdj = da > 180 ? 1 : 0;

  path.setAttribute(
    'd',
    `M ${x1} ${y1} A ${r} ${r}, 0, ${arcAdj}, 1, ${x2} ${y2} L ${x3} ${y3} A ${r + dr} ${r + dr}, 0, ${arcAdj}, 0, ${x4} ${y4} Z`
  );
  path.setAttribute('stroke', 'grey');
  path.setAttribute('fill', 'white');

  svg.appendChild(path);

  if (name) addNameToSector(name, r + 1, aRadian, daRadian, fontSize);
};


const addLevel = (id, radius, parentDA, parentA, width, parts, text) => {
  debugger;
  const partsSum = parts.reduce((acc, sum) => acc + sum, 0);
  const partsWidth = parts.map(part => parentDA / partsSum * part);

  let a = parentA;

  partsWidth.forEach(partBulk => {
    addSector(radius, width, a, partBulk, text);
    sectorParams[id].a = a;
    sectorParams[id].partBulk = partBulk;

    a += partBulk;
  });
};



// addLevel(30, 360, 0, 40, [10, 1]);

// // addLevel(70, 360, 0, 40, [5, 3, 2]);

// addLevel(70, 360, 0, 40, [5, 3, 2]);

// addLevel(110, 180, 0, 60, [124, 100, 40, 23]);
// addLevel(110, 10, 0, 50, [1]);
// addLevel(110, 10, 10, 50, [1]);

// addLevel(110, 108, 180, 60, [57, 34, 19, 7]);

// addLevel(110, 72, 288, 60, [30, 20]);


const flatTree = {};

const traverseTree = (tree, parentId) => {
  flatTree[tree.id] = { ...tree, parrent: parentId, generation: (flatTree[parentId]?.generation || 0) + 1 };
  // sectorParams[tree.id].radius = tree.radius || (sectorParams[sectorParams[tree.id].parrent]?.radius || 0) + levelsWidths[tree.id.length - 1];
  // sectorParams[tree.id].name = tree.name;
  // // sectorParams[tree.id].radius =

  if (tree.childs) {
    flatTree[tree.id].childs = tree.childs.map(child => child.id);

    // debugger;
    const childsMaxBulk = tree.childs.map(child => traverseTree(child, tree.id));
    const childsMaxBulkSum = childsMaxBulk.reduce((acc, maxBulk) => acc + maxBulk, 0);
    const maxBulk = Math.max(tree.childs.length, childsMaxBulkSum); // Максимальное количество потомков в одном поколении
    return flatTree[tree.id].maxBulk = maxBulk;
    // return flatTree[tree.id].maxBulk = Math.max(tree.childs.length, tree.childs.map(traverseTree, tree.id).reduce((acc, maxBulk) => acc + maxBulk, 0));
  } else {
    return flatTree[tree.id].maxBulk = 1;
  };
};

traverseTree(tree);
console.log('flatTree', flatTree);

// Object.keys(sectorParams).forEach(key => {
//   const params = sectorParams[key];
//   addLevel(key, params.radius, params.parentDA, params.parentA, params.width, params.parts, params.name);
// });


