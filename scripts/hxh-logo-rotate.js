let img
let img2
let img3
let img4
function preload () {
    img = loadImage('../assets/hxh-logo-inner.png')
    img2 = loadImage('../assets/hxh-logo-middle.png')
    img3 = loadImage('../assets/hxh-logo.jpg')
    img4 = loadImage('../assets/hxh-circle-2.png')
}

function setup () {
    createCanvas(img3.width, img3.height)
    frameRate(30)
}

let rotater = 0
let rotaterCuff = 0
let rotateDirection = -1
function draw () {
    background(255)
    push()
    image(img3, 0, 0, img3.width, img3.height)
    pop()

    let test4 = img4.get(0, 0, img4.width, img4.height)

    
    push()
    imageMode(CENTER)
    scale(2.00)
    translate(width / 4 - 1.92, height / 4 + 1.1)
    rotate( rotateDirection * (PI * rotater) % (2 * PI) )
    if (Math.floor((PI * rotater) % (2 * PI)) <= 40) {
        // rotaterCuff = 50
        console.log('zero')
        rotateDirection *= -1
    }

    image(test4, 0, 0, img4.width / 2, img4.height / 2)
    imageMode(CENTER)
    pop()
    

 
    if (rotaterCuff == 0) rotater += 0.0075
    if (rotaterCuff > 0) rotaterCuff -= 1
}

function saveWork () {
    if (keyCode === 222) {
        saveCanvas()
    }
}

function keyPressed () {
    saveWork()
}