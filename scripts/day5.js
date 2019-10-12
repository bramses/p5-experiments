let _w = 800
let _h = 800

let _noise = 0.0

let iterations = 10

function setup () {
    createCanvas(_w, _h)
    colorMode(HSB, 360, 100, 100)
    background(0, 0, 20)
    stroke(0, 0, 100)    
    noLoop()
}


function draw () {
    noFill()
    beginShape()
    for ( let i = 0; i < iterations; i++ ) {
        curveVertex(random(i, 255), random(i, 800))
    }
    endShape()

    beginShape()
    for ( let i = 0; i < iterations; i++ ) {
        vertex(random(i, 255) + 300, random(i, 800))
    }
    endShape()

    beginShape()
    for ( let i = 0; i < iterations; i++ ) {
        curveVertex(random(i, 255) + 500, random(i, 800))
    }
    endShape()
}

function keyPressed () {
    if (keyCode === 222) {
        saveCanvas()
    }
}