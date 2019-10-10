let _image 
let asciiArt
let asciiArtWidth = 120
let asciiArtHeight = 120

let images = []
let gfx
let asciiArr

let slideCounter = 0
let  timeElapsed = 0.0
let mySound

let slides = [
    {
        timeRequired: 15000
    },
    {
        timeRequired: 18000
    },
    {
        timeRequired: 22000
    },
    {
        timeRequired: 26000
    },
    {
        timeRequired: 30000
    },
    {
        timeRequired: 32000
    },
    {
        timeRequired: 36000
    },
    {
        timeRequired: 39000
    },
    {
        timeRequired: 41000
    },
    {
        timeRequired: 43000
    },
    {
        timeRequired: 45000
    },
    {
        timeRequired: 47000
    },
    {
        timeRequired: 51000
    },
    {
        timeRequired: 55000
    },
    {
        timeRequired: 57000
    },
    {
        timeRequired: 60000
    },
    {
        timeRequired: 63000
    },
    {
        timeRequired: 66000
    },
    {
        timeRequired: 68000
    },
    {
        timeRequired: 71000
    },
    {
        timeRequired: 73000
    },
    {
        timeRequired: 82000
    },
    {
        timeRequired: 86000
    },
    {
        timeRequired: 95000
    },
    {
        timeRequired: 97000
    },
    {
        timeRequired: 101000
    },
    {
        timeRequired: 103000
    },
    {
        timeRequired: 106000
    },
    {
        timeRequired: 109000
    },
    {
        timeRequired: 112000
    },
    {
        timeRequired: 116000
    },
    {
        timeRequired: 118000
    },
    {
        timeRequired: 120000
    },
    {
        timeRequired: 123000
    },
    {
        timeRequired: 125000
    },
    {
        timeRequired: 128000
    },
    {
        timeRequired: 132000
    },
    {
        timeRequired: 135000
    },
    {
        timeRequired: 137000
    },
    {
        timeRequired: 139000
    },
    {
        timeRequired: 140000
    },
    {
        timeRequired: 142000
    },
    {
        timeRequired: 145000
    },
    {
        timeRequired: 148000
    },
    {
        timeRequired: 151000
    },
    {
        timeRequired: 169000
    },
    {
        timeRequired: 178000
    },
    {
        timeRequired: 180000
    }

]


function preload () {
    for (let i = 0; i < 47; i++) {
        images[i] = loadImage(`assets/lyrics/sweatpants/slides-${i}.jpg`)
    }
}

function setup () {
    createCanvas(640, 480)
    gfx = createGraphics(asciiArtWidth, asciiArtHeight)
    gfx.pixelDensity(1)

    asciiArt = new AsciiArt(this)
    // asciiArt.printWeightTable()

    textAlign(CENTER, CENTER)
    textFont('monospace', 8)
    textStyle(NORMAL)
    noStroke()
    fill(255)

    frameRate(30)
}

function draw () {
    
    background(0)

    if ( slides[slideCounter]["timeRequired"] === -1 ) {
        noLoop()
    }
    
    if (timeElapsed > slides[slideCounter]["timeRequired"]) {
        slideCounter++
    } else {
        timeElapsed += parseFloat(millis()) - timeElapsed
    }


    gfx.image(images[slideCounter], 0, 0, gfx.width, gfx.height)
    gfx.filter(POSTERIZE, 3)
    asciiArr = asciiArt.convert(gfx)
    asciiArt.typeArray2d(asciiArr, this)
}
