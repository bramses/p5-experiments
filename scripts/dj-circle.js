let song
let amplitude


function preload () {
    loadSong()
}

function setup () {
    createCanvas(500, 500)
    noStroke()
    colorMode(HSB, 360, 100, 100)
    amplitude = new p5.Amplitude()
    song.amp(0.2)
}

let radius = 100
let minMap = 100
let maxMap = 350
let alpha = 0.6


function draw () {
    background(0, 0, 5)
    fill(265, 72, 100, alpha)
    let level = amplitude.getLevel()
    let numVertices = 75
    let spacing = 360 / numVertices
    translate(width / 2, height / 2)
    beginShape()
    for (let i = 0; i < numVertices + 1; i++) {
        if (level < 0.065) {
            radius = 100 + random(4)
        } else {
            radius = 95 + random(30)
        }
        
        let x = cos(radians(i * spacing)) * radius
        let y = sin(radians(i * spacing)) * radius
        vertex(x, y)
    }
    endShape()

    
    drawAmplitudeCircle(level)
}

function togglePlay () {
    if (song.isPlaying()) {
        song.pause()
    } else {
        song.play()
    }
}

function loadSong () {
    soundFormats('mp3')
    song = loadSound('../assets/Formality.mp3') // put a song in the assets folder and try it out!
}

function drawAmplitudeCircle (level) {    
    let radius = map(level, 0, 1, minMap, maxMap)
    fill(307, 100, 75)
    circle(0, 0, radius)
}

function mousePressed () {
    let d = dist(mouseX, mouseY, width / 2, height / 2)
    if (d < 60) {
        togglePlay()
    }
}
