function setup () {
    createCanvas(500, 500)
    background(0)

    noLoop()
}

let lerpPercentage = 0.1
const to = "#ffffff"

function draw () {
    let palette = ['#fe0000', '#fdfe02', '#0bff01', '#011efe', '#fe00f6']
    for (let i = 0; i < 25; i++) {
        let base = palette[ i % palette.length ]
        let _lerp = lerpColor(color(base), color(to), lerpPercentage)
        fill(_lerp)
        for (let j = 0; j < 50; j++) {
            circle(35 * j + 10, 19 * i + 50, 50)
        }

        lerpPercentage += .05
    }
}

function keyPressed () {
    if (keyCode === 222) {
        saveCanvas()
    }
}