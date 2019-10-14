const rowLength = 20
const colLength = 15

function setup () {
    createCanvas(600, 450)
    colorMode(HSB, 360, 100, 100)
    background(0, 0, 85)
    noLoop()
    noStroke()
}

function draw () {
    for (let i = 0; i < colLength - 1; i++) {
        for (let j = 0; j < rowLength - 1; j++) {
            if ( j === rowLength - 2 && i === colLength - 2 ) {
                fill(0, 0, 0)
                translate(width - 30, height - 43)
                rotate(radians(45))
                square(0, 0, 25 / Math.sqrt(2))
            } else {
                square(j * 600 / rowLength + 17.5, i * 450 / colLength + 17.5, 25)
            }
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