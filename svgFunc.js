import { SVG_NS, SVG_SIZE, CENTER, FONT_SIZE, BORDER_COLOR, TEXT_COLOR } from './constants.js';
import { getTextPositionInSector, toDegrees } from './helpers.js';

let svg;

const createSvg = () => {
  svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('xmlns', SVG_NS);
  svg.setAttribute('width', SVG_SIZE);
  svg.setAttribute('height', SVG_SIZE);
  return document.body.appendChild(svg);
};

const printCircle = (x, y, radius, color = BORDER_COLOR) => {
  const circle = document.createElementNS(SVG_NS, 'circle');
  circle.setAttribute('cx', x);
  circle.setAttribute('cy', y);
  circle.setAttribute('r', radius);
  circle.setAttribute('fill', 'transparent');
  circle.setAttribute('stroke', color);
  svg.appendChild(circle);
};

// const addDot = (x, y, color = 'red') => {
//   const circle = document.createElementNS(SVG_NS, 'circle');
//   circle.setAttribute('cx', x);
//   circle.setAttribute('cy', y);
//   circle.setAttribute('r', 2);
//   circle.setAttribute('fill', color);
//   svg.appendChild(circle);
// };

const addTextToCoords = (text, x, y, fontSize = FONT_SIZE) => {
  const textElement = document.createElementNS(SVG_NS, 'text');
  textElement.setAttribute('fill', TEXT_COLOR);
  textElement.setAttribute('font-size', fontSize + 'px');

  textElement.setAttribute('transform', `translate(${x}, ${y})`);
  textElement.textContent = text;
  svg.appendChild(textElement);
};

const addNameToSector = (name, r, a, dA, fontSize = FONT_SIZE) => {
  const text = document.createElementNS(SVG_NS, 'text');
  text.setAttribute('fill', TEXT_COLOR);
  text.setAttribute('font-size', fontSize + 'px');

  const { x: textX, y: textY, a: textA } = getTextPositionInSector(r, a, dA, fontSize);
  text.setAttribute('transform', `translate(${textX}, ${textY}) rotate(${toDegrees(textA)})`);
  text.textContent = name;
  svg.appendChild(text);

  // <g transform="translate(306.5435810997357, 231.13623815498656) rotate(16.29044548452888)">
  //   <text fill="red" font-size="10px" y="-5">Nam2222s</text>
  //   <text fill="red" font-size="10px" y="5">NamePers</text>
  // </g>
};

const addSector = (r, dr, a, dA, name = '', fontSize = FONT_SIZE) => {
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
  path.setAttribute('fill', 'white');

  svg.appendChild(path);

  if (name) addNameToSector(name, r + 1, a, dA, fontSize);
};

export { createSvg, printCircle, addTextToCoords, addNameToSector, addSector };