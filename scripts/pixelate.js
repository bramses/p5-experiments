let img
let threeQuarters
let randomDisplacement
let rotateMultiplier
let offset
let plusOrMinus 
let squareSize

function preload () {
    img = loadImage('../assets/a13815-blur.jpg')
}

function setup () {
    createCanvas(600,600)
    threeQuarters = 3 * height / 4

    randomDisplacement = 15
    rotateMultiplier = 20
    offset = 10

    squareSize = floor(sqrt(width))
    frameRate(1)
    noLoop()
}

function draw () {

    // base img
    image(img, 0, 0, width, height)
    for (let i = 0; i < width; i += squareSize) {
        for (let j = 0; j < height; j += squareSize) {
            plusOrMinus = Math.random() < 0.5 ? -1 : 1
            
            let rotateAmt = j / width * Math.PI / 180 * plusOrMinus * Math.random() * rotateMultiplier
            // let translateAmt = j / width * plusOrMinus * Math.random() * randomDisplacement

            
            push()
            let c = get(i, j, squareSize, squareSize)
            // translate(i + translateAmt + offset, j + offset)
            rotate(rotateAmt)
            square(i, j, squareSize)
            image(c, i, j, squareSize, squareSize)
            pop()
        }
    }
}

function saveWork () {
    if (keyCode === 222) {
        saveCanvas()
    }
}

function keyPressed () {
    saveWork()
}