import { CENTER } from './constants.js';

const getTextPositionInSector = (sectorRadius, sectorA, sectorDa, textHeight) => {
    const a = sectorA + sectorDa / 2;
    const x0 = CENTER + sectorRadius * Math.cos(a);
    const y0 = CENTER + sectorRadius * Math.sin(a);

    const vABx = CENTER - x0;
    const vABy = CENTER - y0;

    const vAB1x = vABx / sectorRadius;
    const vAB1y = vABy / sectorRadius;

    const vAC1x = vAB1y;
    const vAC1y = -vAB1x;

    const textOffsetRatio = 3.8;

    const vACx = vAC1x * (textHeight / textOffsetRatio);
    const vACy = vAC1y * (textHeight / textOffsetRatio);

    const x = x0 + vACx;
    const y = y0 + vACy;

    return { a, x, y };
};

const toDegrees = a => a * (180 / Math.PI);

const toRadians = a => a * (Math.PI / 180);

const calculateTextWidth = (text, fontSize) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = fontSize + 'px ISOCPEUR';
    return context.measureText(text).width;
};

export { getTextPositionInSector, toDegrees, toRadians, calculateTextWidth };