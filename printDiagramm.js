import { DEFAULT_FONT_SIZE } from './constants.js';
import { getSvg, getGroup, getText, getDonut, getSector } from './svgFunc.js';
import { getTextPositionInSector, toDegrees, calculateTextWidth } from './helpers.js';

const printDiagramm = (diagrammHeadId, flatTree, treeKeys) => {

    const levelsWidths = [];
    const calculateLevelsWidths = () => {
        treeKeys.forEach(key => {
            const branch = flatTree[key];

            const fontSize = DEFAULT_FONT_SIZE * (1 - 0.1 * (flatTree[key].generation - flatTree[diagrammHeadId].generation));
            const nameWidth = calculateTextWidth(flatTree[key].name, fontSize);
            const width = nameWidth + fontSize * 0.4;

            branch.fontSize = fontSize;
            branch.nameWidth = nameWidth;
            branch.width = width;

            if (!levelsWidths[branch.generation] || levelsWidths[branch.generation] < branch.width) {
                levelsWidths[branch.generation] = branch.id === diagrammHeadId ? branch.width / 2 : branch.width;
            };
        });
    };
    calculateLevelsWidths();

    const diagrammRadius = levelsWidths.reduce((acc, witdh) => acc + witdh, 0);

    let svg = getSvg(diagrammRadius * 2);
    const diagramm = document.body.getElementsByClassName('diagramm')[0];
    diagramm.appendChild(svg);

    const calculateSertorsSizes = () => {
        treeKeys.forEach(id => {
            const branch = flatTree[id];

            if (branch.id === diagrammHeadId) {
                branch.sectorSize = 2 * Math.PI;
                branch.sectorStart = 73 / 99 * Math.PI;
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
    calculateSertorsSizes();

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

        const textClass = branch.info ? 'has-info' : '';

        const textElement = getText(branch.name, branch.fontSize, textClass);

        if (branch.sectorSize === 2 * Math.PI) {
            const donut = getDonut(branch.radius, levelsWidths[branch.generation], diagrammRadius);
            group.appendChild(donut);

            const textX = (branch.id === diagrammHeadId ? diagrammRadius - levelsWidths[branch.generation] : diagrammRadius + branch.radius) + branch.fontSize * 0.2;
            const textY = diagrammRadius + branch.fontSize * 0.25;
            addTextToCoords(textElement, group, textX, textY);
        } else {
            const sector = getSector(branch.radius, levelsWidths[branch.generation], branch.sectorStart, branch.sectorSize, diagrammRadius);
            group.appendChild(sector);

            const { x: textX, y: textY, a: textRotate } = getTextPositionInSector(branch.radius + branch.fontSize * 0.2, branch.sectorStart, branch.sectorSize, branch.fontSize, diagrammRadius);
            addTextToCoords(textElement, group, textX, textY, textRotate);
        };
    };
    const printDiagramm = () => {
        treeKeys.forEach(key => printBranchs(flatTree[key]));
    };
    printDiagramm();

    return svg;
};

export default printDiagramm;