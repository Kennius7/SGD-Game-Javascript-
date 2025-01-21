
const addVarX = 6;
const addVarY = 2;

const posObj = {
    GKX: 115, GKY: 1, LWX: 40, LCMX: 90, RCMX: 140, RWX: 190, BackY: 50, MidY: 220, ForwY: 430 
}

export const playerDataArray = [
    { 
        src: "./src/PlayerIcons-GK.png", 
        x: posObj.GKX, 
        y: posObj.GKY, 
        minX: posObj.GKX - addVarX, 
        minY: posObj.GKY - addVarY, 
        maxX: posObj.GKX + addVarX, 
        maxY: posObj.GKY + addVarY 
    },
    { 
        src: "./src/PlayerIcons-LWB.png", 
        x: posObj.LWX, 
        y: posObj.BackY, 
        minX: posObj.LWX - addVarX, 
        minY: posObj.BackY - addVarY, 
        maxX: posObj.LWX + addVarX, 
        maxY: posObj.BackY + addVarY 
    },
    { 
        src: "./src/PlayerIcons-LCB.png", 
        x: posObj.LCMX, 
        y: posObj.BackY, 
        minX: posObj.LCMX - addVarX, 
        minY: posObj.BackY - addVarY, 
        maxX: posObj.LCMX + addVarX, 
        maxY: posObj.BackY + addVarY 
    },
    { 
        src: "./src/PlayerIcons-RCB.png", 
        x: posObj.RCMX, 
        y: posObj.BackY, 
        minX: posObj.RCMX - addVarX, 
        minY: posObj.BackY - addVarY, 
        maxX: posObj.RCMX + addVarX, 
        maxY: posObj.BackY + addVarY 
    },
    { 
        src: "./src/PlayerIcons-RWB.png", 
        x: posObj.RWX, 
        y: posObj.BackY, 
        minX: posObj.RWX - addVarX, 
        minY: posObj.BackY - addVarY, 
        maxX: posObj.RWX + addVarX, 
        maxY: posObj.BackY + addVarY 
    },
    { 
        src: "./src/PlayerIcons-LWF.png", 
        x: posObj.LWX, 
        y: posObj.MidY, 
        minX: posObj.LWX - addVarX, 
        minY: posObj.MidY - addVarY, 
        maxX: posObj.LWX + addVarX, 
        maxY: posObj.MidY + addVarY 
    },
    { 
        src: "./src/PlayerIcons-LMF.png", 
        x: posObj.LCMX, 
        y: posObj.MidY, 
        minX: posObj.LCMX - addVarX, 
        minY: posObj.MidY - addVarY, 
        maxX: posObj.LCMX + addVarX, 
        maxY: posObj.MidY + addVarY 
    },
    { 
        src: "./src/PlayerIcons-RMF.png", 
        x: posObj.RCMX, 
        y: posObj.MidY, 
        minX: posObj.RCMX - addVarX, 
        minY: posObj.MidY - addVarY, 
        maxX: posObj.RCMX + addVarX, 
        maxY: posObj.MidY + addVarY 
    },
    { 
        src: "./src/PlayerIcons-RWF.png", 
        x: posObj.RWX, 
        y: posObj.MidY, 
        minX: posObj.RWX - addVarX, 
        minY: posObj.MidY - addVarY, 
        maxX: posObj.RWX + addVarX, 
        maxY: posObj.MidY + addVarY 
    },
    { 
        src: "./src/PlayerIcons-LF.png", 
        x: posObj.LCMX, 
        y: posObj.ForwY, 
        minX: posObj.LCMX - addVarX, 
        minY: posObj.ForwY - addVarY, 
        maxX: posObj.LCMX + addVarX, 
        maxY: posObj.ForwY + addVarY 
    },
    { 
        src: "./src/PlayerIcons-RF.png", 
        x: posObj.RCMX, 
        y: posObj.ForwY, 
        minX: posObj.RCMX - addVarX, 
        minY: posObj.ForwY - addVarY, 
        maxX: posObj.RCMX + addVarX, 
        maxY: posObj.ForwY + addVarY 
    },
]
