let rectWidth

function setup () {
    createCanvas(windowWidth, windowHeight)
    colorMode(HSB, 360, 100, 100)
    rectWidth = windowWidth / 3
    noStroke()
}

let hue1 = 0
let hue2 = 120
let hue3 = 240

let saturation = 100
let brightness = 100

const growthRate = 0.2

function draw () {
    // in first rectangle
    if (mouseX < rectWidth) {
        let position = mouseY % 360
        hue1 = position
        hue2 = (position + 120) % 360
        hue3 = (position + 240) % 360
    } else if (mouseX < 2 * rectWidth && mouseX > rectWidth) {
        saturation = (mouseY * growthRate) % 100
    } else {
        brightness = (mouseY * growthRate) % 100
    }

    fill(hue1, saturation, brightness)
    rect(0,0, rectWidth, windowHeight)

    fill(hue2, saturation, brightness)
    rect(rectWidth, 0, 2 * rectWidth, windowHeight)

    fill(hue3, saturation, brightness)
    rect(2 * rectWidth, 0, 3* rectWidth, windowHeight)
}