let canvas = document.querySelector('canvas')
let context = canvas.getContext('2d')

let size = window.innerWidth / 4
let dpr = window.devicePixelRatio

canvas.width = size * dpr
canvas.height = size * dpr
context.scale(dpr, dpr)

let step = 10
let lines = []

for (let i = step; i <= size - step; i += step) {
    let line = []
    for (let j = step; j <= size - step; j += step) {
        let distToCenter = Math.abs(j - size / 2)
        let variance = Math.max(size / 2 - 50 - distToCenter, 0)

        let random = Math.random() * variance /2 * -1
        let point = {x: j, y: i + random}
        line.push(point)
    }
    lines.push(line)
}

for (let i = 5; i < lines.length; i++) {
    context.beginPath()
    context.moveTo(lines[i][0].x, lines[i][0].y)

    for(var j = 0; j < lines[i].length - 2; j++) {
        var xc = (lines[i][j].x + lines[i][j + 1].x) / 2;
        var yc = (lines[i][j].y + lines[i][j + 1].y) / 2;
        context.quadraticCurveTo(lines[i][j].x, lines[i][j].y, xc, yc);
      }
      
    context.quadraticCurveTo(lines[i][j].x, lines[i][j].y, lines[i][j + 1].x, lines[i][j + 1].y);
    context.save()
    context.globalCompositeOperation = 'destination-in'
    context.fill()
    context.restore()
    context.stroke()
}

