const getTextPositionInSector = (nameStartRadius, sectorA, sectorDa, textHeight, diagrammCenter) => {
    const a = sectorA + sectorDa / 2;
    const x0 = diagrammCenter + nameStartRadius * Math.cos(a);
    const y0 = diagrammCenter + nameStartRadius * Math.sin(a);

    const vABx = diagrammCenter - x0;
    const vABy = diagrammCenter - y0;

    const vAB1x = vABx / nameStartRadius;
    const vAB1y = vABy / nameStartRadius;

    const vAC1x = vAB1y;
    const vAC1y = -vAB1x;

    const textOffsetRatio = 3.8;

    const vACx = vAC1x * (textHeight / textOffsetRatio);
    const vACy = vAC1y * (textHeight / textOffsetRatio);

    const x = x0 + vACx;
    const y = y0 + vACy;

    return { a, x, y };
};

const getSectorSizeWidth = (r, da) => {
    return 2 * r * Math.sin(da / 2);
};

const toDegrees = a => a * (180 / Math.PI);

const toRadians = a => a * (Math.PI / 180);

const calculateTextWidth = (text, fontSize) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = fontSize + 'px ISOCPEUR';
    return context.measureText(text).width;
};

export { getTextPositionInSector, toDegrees, toRadians, calculateTextWidth, getSectorSizeWidth };