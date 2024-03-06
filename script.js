const SVG_NS = 'http://www.w3.org/2000/svg';
const SVG_SIZE = 400;
const CENTER = SVG_SIZE / 2;

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

const tree = {
  id: 1,
  name: 'Жана-ХIажи',
  info: 'Такой-то такой-то',
  childs: [
    {
      name: 'Первый',
      info: 'Такой-то такой-то',
      wife: 20,
      childs: [{ name: 'Первый I', name: 'Первый II', name: 'Первый III' }],
    },
    {
      name: 'Второй',
      info: 'Такой-то такой-то',
      childs: [{ name: 'Второй I', name: 'Второй II', name: 'Второй III', name: 'Второй IV', name: 'Второй V' }]
    },
    {
      name: 'Третий',
      childs: [{ name: 'Третий I' }]
    },
  ],
};


const addLevel = (radius, parentDA, parentA, width, parts) => {
  const partsSum = parts.reduce((acc, sum) => acc + sum, 0);
  const partsWidth = parts.map(part => parentDA / partsSum * part);

  let nextA = parentA;

  partsWidth.forEach(partWidth => {
    addSector(radius, width, nextA, partWidth, 'NamePers');
    nextA += partWidth;
  });
};

addLevel(30, 360, 0, 40, [10, 1]);

// addLevel(70, 360, 0, 40, [5, 3, 2]);

addLevel(70, 360, 0, 40, [5, 3, 2]);

addLevel(110, 180, 0, 60, [124, 100, 40, 23]);
addLevel(110, 10, 0, 50, [1]);
addLevel(110, 10, 10, 50, [1]);

addLevel(110, 108, 180, 60, [57, 34, 19, 7]);

addLevel(110, 72, 288, 60, [30, 20]);

