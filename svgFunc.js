import { SVG_NS } from './constants.js';

const getSvg = (svgSize) => {
  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('xmlns', SVG_NS);
  svg.setAttribute('width', svgSize);
  svg.setAttribute('height', svgSize);
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

const getText = (text, fontSize, className) => {
  const textElement = document.createElementNS(SVG_NS, 'text');
  textElement.setAttribute('font-size', fontSize);
  textElement.textContent = text;
  className && textElement.setAttribute('class', className);
  return textElement;
};

const getDonut = (r, dr, center) => {
  const path = document.createElementNS(SVG_NS, 'path');

  const y1 = center - r;

  const y2 = center + r;

  const y3 = center - r - dr;

  const y4 = center + r + dr;

  path.setAttribute(
    'd',
    `M ${center} ${y1} A ${r} ${r} 0 1 1 ${center} ${y2} A ${r} ${r} 0 1 1 ${center} ${y1} Z M ${center} ${y3} A ${r + dr} ${r + dr} 0 1 0 ${center} ${y4} A ${r + dr} ${r + dr} 0 1 0 ${center} ${y3} Z`
  );

  return path;
};

const getSector = (r, dr, a, dA, center) => {
  const path = document.createElementNS(SVG_NS, 'path');

  const x1 = center + r * Math.cos(a);
  const y1 = center + r * Math.sin(a);

  const x2 = center + r * Math.cos(a + dA);
  const y2 = center + r * Math.sin(a + dA);

  const x3 = center + (r + dr) * Math.cos(a + dA);
  const y3 = center + (r + dr) * Math.sin(a + dA);

  const x4 = center + (r + dr) * Math.cos(a);
  const y4 = center + (r + dr) * Math.sin(a);

  const arcAdj = dA > Math.PI ? 1 : 0;

  path.setAttribute(
    'd',
    `M ${x1} ${y1} A ${r} ${r}, 0, ${arcAdj}, 1, ${x2} ${y2} L ${x3} ${y3} A ${r + dr} ${r + dr}, 0, ${arcAdj}, 0, ${x4} ${y4} Z`
  );

  return path;
};

export { getSvg, getCircle, getDot, getGroup, getText, getDonut, getSector };