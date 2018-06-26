import viewportSize from "viewport-size";

export const noOfColumn = 8;
export const numberOfRow = 12;
export const moveTime = 500;

export const blockSize = () => {
    const calculatedSize = (viewportSize.getWidth() - 20) / 8;

    return calculatedSize < 60 ? calculatedSize : 50;
}


export const COLORS = {
    MOVING: "#42f4f4",
    NOTMOVING: "#7d845b",
    POSSIBLE_WORD: "#32bc4c"
}
