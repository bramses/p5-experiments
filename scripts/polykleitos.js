let _width = 800
let _height = 800

function setup () {
    createCanvas(_width, _height)
    colorMode(HSB, 360, 100, 100)
    background(0,0,0)

    noLoop()
    noStroke()
}

function draw () {
    let _maxPower = 20
    let _startLength = 1
    rectMode(CENTER)
    let squareLen = Math.pow((_startLength * Math.sqrt(2)), _maxPower)
    for (let i = _maxPower; i > 0; i--) {
        fill(random(255), 50, 50)
        squareLen = Math.pow((_startLength * Math.sqrt(2)), i)
        console.log(squareLen)
        rect(_width / 2, _height / 2, squareLen, squareLen)
    }
}

function keyPressed () {
    if (keyCode === 222) {
        saveCanvas()
    }
}