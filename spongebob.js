function setup () {
    createCanvas(windowWidth, windowHeight)
    colorMode(HSB, 360, 100, 100)
    background(245, 100, 100)

    noStroke()
    
    // background
    for (let i = 0; i < windowHeight; i++) {
        fill( color(245, 100 - 100 * (i / windowHeight), 100) )
        circle( (windowWidth * .5), (windowHeight * .5), windowHeight - i )
    }

    // sb
    stroke(51, 100, 79)
    rectMode(CENTER)
    
}

let dot1x;
let dot1y;

let dot2x;
let dot2y;

let dot3x;
let dot3y;

let dot4x;
let dot4y;

let dot5x;
let dot5y;

let dot6x;
let dot6y;


function draw () {
    

    // main body
    fill( color(63, 100, 100) )
    rect(windowWidth / 2, windowHeight / 2, 200, 300)
    
    // side body
    fill( color(63, 60, 100) )
    rect(windowWidth / 2 + 100, windowHeight / 2, 45, 300)
    

    // dots
    fill( color(349, 7, 28) )
    ellipse(dot1x, dot1y, 30, 50)
    ellipse(dot2x, dot2y, 30, 50)
    ellipse(dot3x, dot3y, 30, 50)
    ellipse(dot4x, dot4y, 30, 50)
    ellipse(dot5x, dot5y, 30, 50)
    ellipse(dot6x, dot6y, 30, 50)


    stroke(0, 0, 0)
    // main pants brown
    fill( color(32, 100, 55) )
    rect(windowWidth / 2 - 11, windowHeight / 2 + 125, 177, 50)

    // main pants white
    fill( color(0, 0, 100) )
    rect(windowWidth / 2 - 11, windowHeight / 2 + 110, 177, 20)

    

    // side pants brown
    fill( color(32, 100, 55) )
    rect(windowWidth / 2 + 100, windowHeight / 2 + 125, 45, 50)

    // side pants white
    fill( color(0, 0, 100) )
    rect(windowWidth / 2 + 100, windowHeight / 2 + 110, 45, 20)

    // belt
    fill( color(0, 0, 0) )
    rect(windowWidth / 2 + 5, windowHeight / 2 + 133, 25, 10)
    rect(windowWidth / 2 - 40, windowHeight / 2 + 133, 25, 10)
    rect(windowWidth / 2 - 80, windowHeight / 2 + 133, 25, 10)
    rect(windowWidth / 2 + 50, windowHeight / 2 + 133, 25, 10)
    rect(windowWidth / 2 + 100, windowHeight / 2 + 133, 25, 10)

    // tie
    fill( color(7, 100, 100) )
    // tie trapezoid
    beginShape()
    vertex(windowWidth / 2 - 30, windowHeight / 2 + 100)
    vertex(windowWidth / 2, windowHeight / 2 + 100)
    vertex(windowWidth / 2 - 10, windowHeight / 2 + 120)
    vertex(windowWidth / 2 - 20, windowHeight / 2 + 120)
    endShape(CLOSE)
    // tie kite
    beginShape()
    vertex(windowWidth / 2 - 10, windowHeight / 2 + 120) // top right
    vertex(windowWidth / 2 - 5, windowHeight / 2 + 130) // middle right
    vertex(windowWidth / 2 - 15, windowHeight / 2 + 148)
    vertex(windowWidth / 2 - 25, windowHeight / 2 + 130) // middle left
    vertex(windowWidth / 2 - 20, windowHeight / 2 + 120) // top left
    endShape(CLOSE)

    // eyes - whites
    fill( color(0, 0, 100) )
    ellipse(windowWidth / 2 - 50, windowHeight / 2 - 70, 60, 75)
    ellipse(windowWidth / 2 + 30, windowHeight / 2 - 70, 60, 75)

    // eyes - blues
    fill( color(194, 69, 100) )
    ellipse(windowWidth / 2 - 50, windowHeight / 2 - 70, 25, 30)
    ellipse(windowWidth / 2 + 30, windowHeight / 2 - 70, 25, 30)

    // eyes - blacks
    fill( color(0, 0, 0) )
    ellipse(windowWidth / 2 - 50, windowHeight / 2 - 70, 10, 10)
    ellipse(windowWidth / 2 + 30, windowHeight / 2 - 70, 10, 10)

    // nose
    fill( color(63, 100, 100) )
    beginShape()
    curveVertex(windowWidth / 2, windowHeight / 2 - 35)
    curveVertex(windowWidth / 2, windowHeight / 2 - 35)

    curveVertex(windowWidth / 2 - 39, windowHeight / 2 - 45)
    curveVertex(windowWidth / 2 - 39, windowHeight / 2 - 25)

    curveVertex(windowWidth / 2, windowHeight / 2 - 19)
    curveVertex(windowWidth / 2, windowHeight / 2 - 19)
    endShape()

    // mouth
    fill( color(349, 50, 100) )
    arc(windowWidth / 2, windowHeight / 2 - 20, 80, 80, 0, 3.5*QUARTER_PI, CHORD)

    
}

function mouseMoved () {
    // random dots
    dot1x = random(windowWidth / 2, windowWidth / 2 + 40)
    dot1y = random(windowHeight / 2, windowHeight / 2 + 40)

    dot2x = random(windowWidth / 2 - 50, windowWidth / 2 - 20)
    dot2y = random(windowHeight / 2 - 30, windowHeight / 2 + 50)

    dot3x = random(windowWidth / 2 + 70, windowWidth / 2 + 90)
    dot3y = random(windowHeight / 2 - 50, windowHeight / 2 - 20)

    dot4x = random(windowWidth / 2 + 70, windowWidth / 2 + 110)
    dot4y = random(windowHeight / 2 + 10, windowHeight / 2 + 70)

    dot5x = random(windowWidth / 2 - 90, windowWidth / 2 - 60)
    dot5y = random(windowHeight / 2 - 120, windowHeight / 2 - 100)

    dot6x = random(windowWidth / 2 + 100, windowWidth / 2 + 120)
    dot6y = random(windowHeight / 2 - 120, windowHeight / 2 - 100)
    return false
}