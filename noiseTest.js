let distribution = new Array(360)
let counter = 0
function setup () {
    createCanvas(500, 500)
    background(50)
    stroke(255)
    noFill()
    frameRate(3)
    colorMode(HSB, 360, 100, 100)

    for (let i = 0; i < distribution.length; i++) {
        distribution[i] = floor(randomGaussian(0, 55))
    }


}

function draw () {
    stroke(0, 0, 50)
    circle(250, 250, random(150), random(200))
    translate(250, 250)
    for (let i = 0; i < distribution.length; i++) {
        stroke(255 % random(255), 50, 50)
        rotate(TWO_PI / distribution.length)
        let dist = abs(distribution[i])
        line(0, 0, dist, 0)
    }

    counter++
    if (counter > 50) { 
        noLoop()
        saveCanvas()
    }

}