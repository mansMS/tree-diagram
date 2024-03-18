import { SVG_NS, SVG_SIZE, CENTER, DEFAULT_FONT_SIZE } from './constants.js';

const getSvg = () => {
  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('xmlns', SVG_NS);
  svg.setAttribute('width', SVG_SIZE);
  svg.setAttribute('height', SVG_SIZE);
  return svg;
};

const getCircle = (x, y, radius, className) => {
  const circle = document.createElementNS(SVG_NS, 'circle');
  circle.setAttribute('cx', x);
  circle.setAttribute('cy', y);
  circle.setAttribute('r', radius);
  className && circle.setAttribute('class', className);
  return circle;
};

const getDot = (x, y) => {
  const dot = getCircle(x, y, 1);
  return dot;
};

const getGroup = (id, className) => {
  const g = document.createElementNS(SVG_NS, 'g');
  g.setAttribute('id', id);

  className && g.setAttribute('class', className);
  return g;
};

const getText = (text, fontSize = DEFAULT_FONT_SIZE, className) => {
  const textElement = document.createElementNS(SVG_NS, 'text');
  textElement.setAttribute('font-size', fontSize);
  className && textElement.setAttribute('class', className);
  textElement.textContent = text;
  return textElement;
};

const getSector = (r, dr, a, dA, className) => {
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
  className && path.setAttribute('class', className);

  return path;
};

export { getSvg, getCircle, getDot, getGroup, getText, getSector };