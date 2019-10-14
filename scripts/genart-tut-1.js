let canvas = document.querySelector('canvas')
let context = canvas.getContext('2d')

let size = window.innerWidth / 4
let dpr = window.devicePixelRatio

canvas.width = size * dpr
canvas.height = size * dpr
context.scale(dpr, dpr)

context.lineCap = 'square'
context.lineWidth = 2

function draw (x, y, width, height) {
    let leftToRight = Math.random() > 0.5

    if (leftToRight) {
        context.moveTo(x, y)
        context.lineTo(x + width, y + height)
    } else {
        context.moveTo(x + width, y)
        context.lineTo(x, y + height)
    }
    context.stroke()
}
let step = 10
console.log(size)

for ( let i = 0; i < size; i += step ) {
    for ( let j = 0; j < size; j += step ) {
        draw(i, j, step, step)
    }
}
