


export const latestCoordinates = (arr, coordObj) => {
    const uniqueKey = "name";
    arr.push(coordObj);
    const uniqueArray = Object.values(arr.reduce((acc, obj) => {
        acc[obj[uniqueKey]] = obj;
        return acc;
    }, {}))
    return uniqueArray;
}

export const easeInOutQuad = t => { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t };


const addVarX = 6;
const addVarY = 2;

export const posObj = {
    GKX: 115, GKY: 1, LWX: 40, LCMX: 90, RCMX: 140, RWX: 190, BackY: 50, MidY: 220, ForwY: 400, 
    GKAX: 115, GKAY: 470, LWAX: 40, LCMAX: 90, RCMAX: 140, RWAX: 190, BackAY: 430, MidAY: 250, ForwAY: 80 
}

export const homePlayerDataArray = [
    { 
        name: "HGK",
        src: "./src/PlayerIcons-GK.png", 
        x: posObj.GKX, 
        y: posObj.GKY, 
        minX: posObj.GKX - addVarX, 
        minY: posObj.GKY - addVarY, 
        maxX: posObj.GKX + addVarX, 
        maxY: posObj.GKY + addVarY 
    },
    { 
        name: "HLWB",
        src: "./src/PlayerIcons-LWB.png", 
        x: posObj.LWX, 
        y: posObj.BackY, 
        minX: posObj.LWX - addVarX, 
        minY: posObj.BackY - addVarY, 
        maxX: posObj.LWX + addVarX, 
        maxY: posObj.BackY + addVarY 
    },
    { 
        name: "HLCB",
        src: "./src/PlayerIcons-LCB.png", 
        x: posObj.LCMX, 
        y: posObj.BackY, 
        minX: posObj.LCMX - addVarX, 
        minY: posObj.BackY - addVarY, 
        maxX: posObj.LCMX + addVarX, 
        maxY: posObj.BackY + addVarY 
    },
    { 
        name: "HRCB",
        src: "./src/PlayerIcons-RCB.png", 
        x: posObj.RCMX, 
        y: posObj.BackY, 
        minX: posObj.RCMX - addVarX, 
        minY: posObj.BackY - addVarY, 
        maxX: posObj.RCMX + addVarX, 
        maxY: posObj.BackY + addVarY 
    },
    { 
        name: "HRWB",
        src: "./src/PlayerIcons-RWB.png", 
        x: posObj.RWX, 
        y: posObj.BackY, 
        minX: posObj.RWX - addVarX, 
        minY: posObj.BackY - addVarY, 
        maxX: posObj.RWX + addVarX, 
        maxY: posObj.BackY + addVarY 
    },
    { 
        name: "HLWF",
        src: "./src/PlayerIcons-LWF.png", 
        x: posObj.LWX, 
        y: posObj.MidY, 
        minX: posObj.LWX - addVarX, 
        minY: posObj.MidY - addVarY, 
        maxX: posObj.LWX + addVarX, 
        maxY: posObj.MidY + addVarY 
    },
    { 
        name: "HLMF",
        src: "./src/PlayerIcons-LMF.png", 
        x: posObj.LCMX, 
        y: posObj.MidY, 
        minX: posObj.LCMX - addVarX, 
        minY: posObj.MidY - addVarY, 
        maxX: posObj.LCMX + addVarX, 
        maxY: posObj.MidY + addVarY 
    },
    { 
        name: "HRMF",
        src: "./src/PlayerIcons-RMF.png", 
        x: posObj.RCMX, 
        y: posObj.MidY, 
        minX: posObj.RCMX - addVarX, 
        minY: posObj.MidY - addVarY, 
        maxX: posObj.RCMX + addVarX, 
        maxY: posObj.MidY + addVarY 
    },
    { 
        name: "HRWF",
        src: "./src/PlayerIcons-RWF.png", 
        x: posObj.RWX, 
        y: posObj.MidY, 
        minX: posObj.RWX - addVarX, 
        minY: posObj.MidY - addVarY, 
        maxX: posObj.RWX + addVarX, 
        maxY: posObj.MidY + addVarY 
    },
    { 
        name: "HLF",
        src: "./src/PlayerIcons-LF.png", 
        x: posObj.LCMX, 
        y: posObj.ForwY, 
        minX: posObj.LCMX - addVarX, 
        minY: posObj.ForwY - addVarY, 
        maxX: posObj.LCMX + addVarX, 
        maxY: posObj.ForwY + addVarY 
    },
    { 
        name: "HRF",
        src: "./src/PlayerIcons-RF.png", 
        x: posObj.RCMX, 
        y: posObj.ForwY, 
        minX: posObj.RCMX - addVarX, 
        minY: posObj.ForwY - addVarY, 
        maxX: posObj.RCMX + addVarX, 
        maxY: posObj.ForwY + addVarY 
    },
]

export const awayPlayerDataArray = [
    { 
        name: "AGK",
        src: "./src/PlayerIcons_A-GK.png", 
        x: posObj.GKAX, 
        y: posObj.GKAY, 
        minX: posObj.GKAX - addVarX, 
        minY: posObj.GKAY - addVarY, 
        maxX: posObj.GKAX + addVarX, 
        maxY: posObj.GKAY + addVarY 
    },
    { 
        name: "ALWB",
        src: "./src/PlayerIcons_A-LWB.png", 
        x: posObj.LWAX, 
        y: posObj.BackAY, 
        minX: posObj.LWAX - addVarX, 
        minY: posObj.BackAY - addVarY, 
        maxX: posObj.LWAX + addVarX, 
        maxY: posObj.BackAY + addVarY 
    },
    { 
        name: "ALCB",
        src: "./src/PlayerIcons_A-LCB.png", 
        x: posObj.LCMAX, 
        y: posObj.BackAY, 
        minX: posObj.LCMAX - addVarX, 
        minY: posObj.BackAY - addVarY, 
        maxX: posObj.LCMAX + addVarX, 
        maxY: posObj.BackAY + addVarY 
    },
    { 
        name: "ARCB",
        src: "./src/PlayerIcons_A-RCB.png", 
        x: posObj.RCMAX, 
        y: posObj.BackAY, 
        minX: posObj.RCMAX - addVarX, 
        minY: posObj.BackAY - addVarY, 
        maxX: posObj.RCMAX + addVarX, 
        maxY: posObj.BackAY + addVarY 
    },
    { 
        name: "ARWB",
        src: "./src/PlayerIcons_A-RWB.png", 
        x: posObj.RWAX, 
        y: posObj.BackAY, 
        minX: posObj.RWAX - addVarX, 
        minY: posObj.BackAY - addVarY, 
        maxX: posObj.RWAX + addVarX, 
        maxY: posObj.BackAY + addVarY 
    },
    { 
        name: "ALWF",
        src: "./src/PlayerIcons_A-LWF.png", 
        x: posObj.LWAX, 
        y: posObj.MidAY, 
        minX: posObj.LWAX - addVarX, 
        minY: posObj.MidAY - addVarY, 
        maxX: posObj.LWAX + addVarX, 
        maxY: posObj.MidAY + addVarY 
    },
    { 
        name: "ALMF",
        src: "./src/PlayerIcons_A-LMF.png", 
        x: posObj.LCMAX, 
        y: posObj.MidAY, 
        minX: posObj.LCMAX - addVarX, 
        minY: posObj.MidAY - addVarY, 
        maxX: posObj.LCMAX + addVarX, 
        maxY: posObj.MidAY + addVarY 
    },
    { 
        name: "ARMF",
        src: "./src/PlayerIcons_A-RMF.png", 
        x: posObj.RCMAX, 
        y: posObj.MidAY, 
        minX: posObj.RCMAX - addVarX, 
        minY: posObj.MidAY - addVarY, 
        maxX: posObj.RCMAX + addVarX, 
        maxY: posObj.MidAY + addVarY 
    },
    { 
        name: "ARWF",
        src: "./src/PlayerIcons_A-RWF.png", 
        x: posObj.RWAX, 
        y: posObj.MidAY, 
        minX: posObj.RWAX - addVarX, 
        minY: posObj.MidAY - addVarY, 
        maxX: posObj.RWAX + addVarX, 
        maxY: posObj.MidAY + addVarY 
    },
    { 
        name: "ALF",
        src: "./src/PlayerIcons_A-LF.png", 
        x: posObj.LCMAX, 
        y: posObj.ForwAY, 
        minX: posObj.LCMAX - addVarX, 
        minY: posObj.ForwAY - addVarY, 
        maxX: posObj.LCMAX + addVarX, 
        maxY: posObj.ForwAY + addVarY 
    },
    { 
        name: "ARF",
        src: "./src/PlayerIcons_A-RF.png", 
        x: posObj.RCMAX, 
        y: posObj.ForwAY, 
        minX: posObj.RCMAX - addVarX, 
        minY: posObj.ForwAY - addVarY, 
        maxX: posObj.RCMAX + addVarX, 
        maxY: posObj.ForwAY + addVarY 
    },
]
