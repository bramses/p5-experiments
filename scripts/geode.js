// WIP!

let w = 800
let h = 800

let noiseIncrement = 0.03
let offsetFrame = 0
let offsetBlob = 0

let colorBackground = [60, 7, 86]
let colorForeground = [0, 0, 25]
let colorStroke = [0, 0, 25]

function setup () {
    createCanvas(w, h)
    colorMode(HSB, 360, 100, 100)
    frameRate(60)

    // textMode(CENTER)
    textAlign(CENTER, CENTER)

    background(...colorBackground)
    stroke(...colorStroke)
    fill(...colorForeground)
}

function draw () {
    background(...colorBackground)
    fill(...colorBackground)

    offsetFrame += noiseIncrement

    let r = 60
    let rDelta = 80
    let numPoints = 200

    for (let i = 0; i < 410; i += 2) {
        offsetBlob += 0.02
        beginShape()
        for (let [x, y] in circleNoiseLocations( w / 2 + i - 200, h / 2, r, rDelta, numPoints, offsetFrame) ) {
            vertex(x, y)
        }
        endShape()
    }
}

const circleNoiseLocations = function ( cx, cy, r, rDelta, numPoints, noiseOffset ) {
    let offsetAngle = 0
    let x0, y0 = 0

    for (let i = 0; i < numPoints; i++) {
        offsetAngle = noiseIncrement
        a = i * TAU / numPoints
        let rNoise = r + map( noise( 1* cos(a), cx * 0.01, noiseOffset), 0, 1, r - rDelta, r + rDelta )
        let x = rNoise * cos(a) + cx
        let y = 1.6 * rNoise * sin(a) + cy
        if (i == 0) {
            x0 = x
            y0 = y
        } 
        
    }
    console.log([x,y])
    return [x0, y0]
}