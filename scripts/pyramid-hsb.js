let img
function preload() {
    img = loadImage('../assets/old-paper.jpg')
}

function setup () {
    createCanvas(600,700)
    // background("#41B3A3")
    
    noLoop()
    colorMode(HSB, 360, 100, 100)
    image(img, 0, 0, 600, 700)
}

function draw () {
    translate(0, -40)
    for (let i = 3; i > -1; i--) {
        generateLayer(20, 20, 20, width / 2, height / 2 + 60 * i, 100 - 20 * (i + 1), 100 - 20 * (i + 1))
    }

    for (let i = 6; i > 0; i--) {
        line(
            width / 2 - (20 * i), height / 2 - (20 * i),
            width / 2 - (20 * i), height / 2 + (60 * 3) - (20 * i) 
        )
        line(
            width / 2 + (20 * i), height / 2 - (20 * i),
            width / 2 + (20 * i), height / 2 + (60 * 3) - (20 * i) 
        )
    }

    line(
        width / 2, height / 2 + (60 * 3),
        width / 2, height / 2
    )
}

function generateLayer (size, rowDistance, colDistance, startX, startY, saturation, brightness, hueStart = 10) {

    // top row
    new Triangle(true, size, startX, startY, color(10, saturation, brightness)).createTriangle()
   
    // second row
    new Triangle(true, size, startX - rowDistance, startY - colDistance, color(10 * 2, saturation, brightness) ).createTriangle()
    new Triangle(false, size, startX, startY - (2 * colDistance), color(10 * 3, saturation, brightness) ).createTriangle()
    new Triangle(true, size, startX + rowDistance, startY - colDistance, color(10 * 4, saturation, brightness) ).createTriangle()

    // third row
    new Triangle(true, size, startX - (2 * rowDistance), startY - (2 * colDistance), color(10 * 5, saturation, brightness)).createTriangle()
    new Triangle(false, size, startX - (rowDistance), startY - (3 * colDistance), color(10 * 6, saturation, brightness)).createTriangle()
    new Triangle(true, size, startX, startY - (2 * colDistance), color(10 * 7, saturation, brightness)).createTriangle()
    new Triangle(false, size, startX + rowDistance, startY - (3 * colDistance), color(10 * 8, saturation, brightness)).createTriangle()
    new Triangle(true, size, startX + (2 * rowDistance), startY - (2 * colDistance), color(10 * 9, saturation, brightness)).createTriangle()

    // fourth row
    new Triangle(true, size, startX - (3 * rowDistance), startY - (3 * colDistance), color(10 * 10, saturation, brightness)).createTriangle()
    new Triangle(false, size, startX - (2 * rowDistance), startY - (4 * colDistance), color(10 * 11, saturation, brightness)).createTriangle()
    new Triangle(true, size, startX - rowDistance, startY - (3 * colDistance), color(10 * 12, saturation, brightness)).createTriangle()
    new Triangle(false, size, startX, startY - (4 * colDistance), color(10 * 13, saturation, brightness)).createTriangle()
    new Triangle(true, size, startX + (rowDistance), startY - (3 * colDistance), color(10 * 14, saturation, brightness)).createTriangle()
    new Triangle(false, size, startX + (2 * rowDistance), startY - (4 * colDistance), color(10 * 15, saturation, brightness)).createTriangle()
    new Triangle(true, size, startX + (3 * rowDistance), startY - (3 * colDistance), color(10 * 16, saturation, brightness)).createTriangle()

    // fifth row
    new Triangle(true, size, startX - (4 * rowDistance), startY - (4 * colDistance), color(10 * 17, saturation, brightness)).createTriangle()
    new Triangle(false, size, startX - (3 * rowDistance), startY - (5 * colDistance), color(10 * 18, saturation, brightness)).createTriangle()
    new Triangle(true, size, startX - (2 * rowDistance), startY - (4 * colDistance), color(10 * 19, saturation, brightness)).createTriangle()
    new Triangle(false, size, startX - rowDistance, startY - (5 * colDistance), color(10 * 20, saturation, brightness)).createTriangle()
    new Triangle(true, size, startX, startY - (4 * colDistance), color(10 * 21, saturation, brightness)).createTriangle()
    new Triangle(false, size, startX + (rowDistance), startY - (5 * colDistance), color(10 * 22, saturation, brightness)).createTriangle()
    new Triangle(true, size, startX + (2 * rowDistance), startY - (4 * colDistance), color(10 * 23, saturation, brightness)).createTriangle()
    new Triangle(false, size, startX + (3 * rowDistance), startY - (5 * colDistance), color(10 * 24, saturation, brightness)).createTriangle()
    new Triangle(true, size, startX + (4 * rowDistance), startY - (4 * colDistance), color(10 * 25, saturation, brightness)).createTriangle()

    // sixth row
    new Triangle(true, size, startX - (5 * rowDistance), startY - (5 * colDistance), color(10 * 26, saturation, brightness)).createTriangle()
    new Triangle(false, size, startX - (4 * rowDistance), startY - (6 * colDistance), color(10 * 27, saturation, brightness)).createTriangle()
    new Triangle(true, size, startX - (3 * rowDistance), startY - (5 * colDistance), color(10 * 28, saturation, brightness)).createTriangle()
    new Triangle(false, size, startX - (2 * rowDistance), startY - (6 * colDistance), color(10 * 29, saturation, brightness)).createTriangle()
    new Triangle(true, size, startX - rowDistance, startY - (5 * colDistance), color(10 * 30, saturation, brightness)).createTriangle()
    new Triangle(false, size, startX, startY - (6 * colDistance), color(10 * 31, saturation, brightness)).createTriangle()
    new Triangle(true, size, startX + (rowDistance), startY - (5 * colDistance), color(10 * 32, saturation, brightness)).createTriangle()
    new Triangle(false, size, startX + (2 * rowDistance), startY - (6 * colDistance), color(10 * 33, saturation, brightness)).createTriangle()
    new Triangle(true, size, startX + (3 * rowDistance), startY - (5 * colDistance), color(10 * 34, saturation, brightness)).createTriangle()
    new Triangle(false, size, startX + (4 * rowDistance), startY - (6 * colDistance), color(10 * 35, saturation, brightness)).createTriangle()
    new Triangle(true, size, startX + (5 * rowDistance), startY - (5 * colDistance), color(10 * 36, saturation, brightness)).createTriangle()
}

class Triangle {
    constructor (direction = true, size = 1, x, y, color = "#fffff") {
        this.color = color
        this.direction = direction
        this.size = size
        this.x = x, 
        this.y = y
    }

    createTriangle() {
        fill(this.color)
        if (this.direction) { // down -- top part or triangle faces bottom of screen
            triangle(
                this.x - this.size, this.y - this.size,
                this.x, this.y,
                this.x + this.size, this.y - this.size
            )
        } else {
            triangle(
                this.x - this.size, this.y + this.size,
                this.x, this.y,
                this.x + this.size, this.y + this.size
            )
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