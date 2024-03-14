import { SVG_NS, SVG_SIZE, CENTER, FONT_SIZE, BORDER_COLOR, TEXT_COLOR, DEFAULT_BACKGROUND } from './constants.js';
import { getTextPositionInSector, toDegrees } from './helpers.js';

let svg;

const createSvg = () => {
  svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('xmlns', SVG_NS);
  svg.setAttribute('width', SVG_SIZE);
  svg.setAttribute('height', SVG_SIZE);
  return document.body.appendChild(svg);
};

const printCircle = (x, y, radius, borderColor = BORDER_COLOR, backgroundColor = DEFAULT_BACKGROUND) => {
  const circle = document.createElementNS(SVG_NS, 'circle');
  circle.setAttribute('cx', x);
  circle.setAttribute('cy', y);
  circle.setAttribute('r', radius);
  circle.setAttribute('fill', backgroundColor);
  circle.setAttribute('stroke', borderColor);
  svg.appendChild(circle);
};

const addDot = (x, y, color = 'red') => {
  printCircle(x, y, 1, 'none', color);
};

const addTextToCoords = (text, x, y, fontSize = FONT_SIZE, rotate = 0) => {
  const textElement = document.createElementNS(SVG_NS, 'text');
  textElement.setAttribute('fill', TEXT_COLOR);
  textElement.setAttribute('font-size', fontSize + 'px');

  textElement.setAttribute('transform', `translate(${x}, ${y}) rotate(${toDegrees(rotate)})`);
  textElement.textContent = text;
  svg.appendChild(textElement);
};

const addNameToSector = (name, r, a, dA, fontSize = FONT_SIZE) => {
  const { x, y, a: rotate } = getTextPositionInSector(r, a, dA, fontSize);
  addTextToCoords(name, x, y, fontSize, rotate);

  // <g transform="translate(306.5435810997357, 231.13623815498656) rotate(16.29044548452888)">
  //   <text fill="red" font-size="10px" y="-5">Nam2222s</text>
  //   <text fill="red" font-size="10px" y="5">NamePers</text>
  // </g>
};

const addSector = (r, dr, a, dA, name = '', fontSize = FONT_SIZE, backgroundColor = DEFAULT_BACKGROUND) => {
  const path = document.createElementNS(SVG_NS, 'path');

  const x1 = CENTER + r * Math.cos(a);
  const y1 = CENTER + r * Math.sin(a);

  const x2 = CENTER + r * Math.cos(a + dA);
  const y2 = CENTER + r * Math.sin(a + dA);

  const x3 = CENTER + (r + dr) * Math.cos(a + dA);
  const y3 = CENTER + (r + dr) * Math.sin(a + dA);

  const x4 = CENTER + (r + dr) * Math.cos(a);
  const y4 = CENTER + (r + dr) * Math.sin(a);

  const arcAdj = dA > Math.PI ? 1 : 0;

  path.setAttribute(
    'd',
    `M ${x1} ${y1} A ${r} ${r}, 0, ${arcAdj}, 1, ${x2} ${y2} L ${x3} ${y3} A ${r + dr} ${r + dr}, 0, ${arcAdj}, 0, ${x4} ${y4} Z`
  );
  path.setAttribute('stroke', BORDER_COLOR);
  path.setAttribute('fill', backgroundColor);

  svg.appendChild(path);

  if (name) addNameToSector(name, r + 3, a, dA, fontSize);
};

export { createSvg, printCircle, addTextToCoords, addNameToSector, addSector, addDot };