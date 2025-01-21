


export const latestCoordinates = (arr, coordObj) => {
    const uniqueKey = "name";

    arr.push(coordObj);

    const uniqueArray = Object.values(arr.reduce((acc, obj) => {
        acc[obj[uniqueKey]] = obj;
        return acc;
    }, {}))

    // console.log("Latest Array: ", uniqueArray);
    return uniqueArray;
}

export const easeInOutQuad = t => { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t };





const addVarX = 6;
const addVarY = 2;

export const posObj = {
    GKX: 115, GKY: 1, LWX: 40, LCMX: 90, RCMX: 140, RWX: 190, BackY: 50, MidY: 220, ForwY: 430 
}

export const playerDataArray = [
    { 
        name: "GK",
        src: "./src/PlayerIcons-GK.png", 
        x: posObj.GKX, 
        y: posObj.GKY, 
        minX: posObj.GKX - addVarX, 
        minY: posObj.GKY - addVarY, 
        maxX: posObj.GKX + addVarX, 
        maxY: posObj.GKY + addVarY 
    },
    { 
        name: "LWB",
        src: "./src/PlayerIcons-LWB.png", 
        x: posObj.LWX, 
        y: posObj.BackY, 
        minX: posObj.LWX - addVarX, 
        minY: posObj.BackY - addVarY, 
        maxX: posObj.LWX + addVarX, 
        maxY: posObj.BackY + addVarY 
    },
    { 
        name: "LCB",
        src: "./src/PlayerIcons-LCB.png", 
        x: posObj.LCMX, 
        y: posObj.BackY, 
        minX: posObj.LCMX - addVarX, 
        minY: posObj.BackY - addVarY, 
        maxX: posObj.LCMX + addVarX, 
        maxY: posObj.BackY + addVarY 
    },
    { 
        name: "RCB",
        src: "./src/PlayerIcons-RCB.png", 
        x: posObj.RCMX, 
        y: posObj.BackY, 
        minX: posObj.RCMX - addVarX, 
        minY: posObj.BackY - addVarY, 
        maxX: posObj.RCMX + addVarX, 
        maxY: posObj.BackY + addVarY 
    },
    { 
        name: "RWB",
        src: "./src/PlayerIcons-RWB.png", 
        x: posObj.RWX, 
        y: posObj.BackY, 
        minX: posObj.RWX - addVarX, 
        minY: posObj.BackY - addVarY, 
        maxX: posObj.RWX + addVarX, 
        maxY: posObj.BackY + addVarY 
    },
    { 
        name: "LWF",
        src: "./src/PlayerIcons-LWF.png", 
        x: posObj.LWX, 
        y: posObj.MidY, 
        minX: posObj.LWX - addVarX, 
        minY: posObj.MidY - addVarY, 
        maxX: posObj.LWX + addVarX, 
        maxY: posObj.MidY + addVarY 
    },
    { 
        name: "LMF",
        src: "./src/PlayerIcons-LMF.png", 
        x: posObj.LCMX, 
        y: posObj.MidY, 
        minX: posObj.LCMX - addVarX, 
        minY: posObj.MidY - addVarY, 
        maxX: posObj.LCMX + addVarX, 
        maxY: posObj.MidY + addVarY 
    },
    { 
        name: "RMF",
        src: "./src/PlayerIcons-RMF.png", 
        x: posObj.RCMX, 
        y: posObj.MidY, 
        minX: posObj.RCMX - addVarX, 
        minY: posObj.MidY - addVarY, 
        maxX: posObj.RCMX + addVarX, 
        maxY: posObj.MidY + addVarY 
    },
    { 
        name: "RWF",
        src: "./src/PlayerIcons-RWF.png", 
        x: posObj.RWX, 
        y: posObj.MidY, 
        minX: posObj.RWX - addVarX, 
        minY: posObj.MidY - addVarY, 
        maxX: posObj.RWX + addVarX, 
        maxY: posObj.MidY + addVarY 
    },
    { 
        name: "LF",
        src: "./src/PlayerIcons-LF.png", 
        x: posObj.LCMX, 
        y: posObj.ForwY, 
        minX: posObj.LCMX - addVarX, 
        minY: posObj.ForwY - addVarY, 
        maxX: posObj.LCMX + addVarX, 
        maxY: posObj.ForwY + addVarY 
    },
    { 
        name: "RF",
        src: "./src/PlayerIcons-RF.png", 
        x: posObj.RCMX, 
        y: posObj.ForwY, 
        minX: posObj.RCMX - addVarX, 
        minY: posObj.ForwY - addVarY, 
        maxX: posObj.RCMX + addVarX, 
        maxY: posObj.ForwY + addVarY 
    },
]
