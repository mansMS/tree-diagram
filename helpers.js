import { CENTER } from './constants.js';

const getTextPositionInSector = (sectorRadius, sectorA, sectorDa, textHeight) => {
    const a = sectorA + sectorDa / 2 + textHeight / (4 * sectorRadius);
    const x = CENTER + sectorRadius * Math.cos(a);
    const y = CENTER + sectorRadius * Math.sin(a);
    return { a, x, y };
};

const toDegrees = a => a * (180 / Math.PI);

const toRadians = a => a * (Math.PI / 180);

export { getTextPositionInSector, toDegrees, toRadians };