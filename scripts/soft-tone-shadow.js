function setup () {
    createCanvas(500, 500, WEBGL)
    colorMode(HSB, 360, 100, 100)
}


function draw () {
    orbitControl()
    background(198,76,100)
    
    
    translate(-20, -20, 0)
    
    drawHenge(4, -50, -50)
    
    translate(0, 0, 4)
    drawHenge(4, -50, -50)
    
    translate(0, 0, 4)
    drawHenge(4, -50, -50)
    
    translate(0, 0, 4)
    drawHenge(4, -50, -50)
    
    translate(0, 0, 4)
    drawHenge(4, -50, -50)
    
    translate(0, 0, 4)
    drawHenge(4, -50, -50)
    
    translate(0, 0, 4)
    drawHenge(4, -50, -50)
    
    translate(0, 0, 4)
    drawHenge(4, -50, -50)
    
    translate(0, 0, 4)
    drawHenge(4, -50, -50)


    translate(25, 50, 50)
    drawHenge(2, 0, 0)
    translate(0, 0, 4)
    
    drawHenge(2, 0, 0)
    translate(0, 0, 4)

    drawHenge(2, 0, 0)
    translate(0, 0, 4)

    drawHenge(2, 0, 0)
    translate(0, 0, 4)

    drawHenge(2, 0, 0)
    translate(0, 0, 4)

    drawHenge(2, 0, 0)
    translate(0, 0, 4)

    translate(50,0, 25)

    drawHenge(1, 50, 50)
    translate(0, 0, 4)

    drawHenge(1, 50, 50)
    translate(0, 0, 4)
    
    drawHenge(1, 50, 50)
    translate(0, 0, 4)

    drawHenge(1, 50, 50)
    translate(0, 0, 4)

    drawHenge(1, 50, 50)
    translate(0, 0, 4)

    drawHenge(1, 50, 50)
    translate(0, 0, 4)
}

function drawHenge(scale = 1, startX, startY) {
    
    let bottomLeftY = scale * 50 + startY 
    
    let bottomInsideLeftX = scale * 20 + ( startX  )
    let bottomInsideLeftY = bottomLeftY
    
    let roofInsideLeftX = bottomInsideLeftX
    let roofInsideLeftY = scale * 20 + ( startX )

    let roofInsideRightX = scale * 20 + ( roofInsideLeftX )
    let roofInsideRightY = roofInsideLeftY

    let bottomInsideRightX = scale * 20 + ( bottomInsideLeftX )
    let bottomInsideRightY = bottomLeftY

    let bottomOutsideRightX = scale * 20 + ( bottomInsideRightX )
    let bottomOutsideRightY = bottomLeftY
    
    let topRightX = bottomOutsideRightX
    
   
    
    push()
    fill(0, 0, 83)
    rotateY(10)
    beginShape()
        vertex(startX, startY) // top left
        vertex(startX, bottomLeftY) // bottom left
        vertex(bottomInsideLeftX, bottomInsideLeftY) // bottom left inside
        vertex(roofInsideLeftX, roofInsideLeftY) // roof left inside
        vertex(roofInsideRightX, roofInsideRightY) // roof right inside
        vertex(bottomInsideRightX, bottomInsideRightY) // bottom right inside
        vertex(bottomOutsideRightX, bottomOutsideRightY) // bottom right
        vertex(topRightX, startY) // top right
        vertex(startX, startY) // top left -- connect
    endShape()
    pop()
}

/*
 orbitControl()
    ambientLight(255)
    ambientMaterial(46, 4, 73)

    // rotateY(millis() / 1000)
    // box(-50, -50, 50)
    push()
    translate(0, 0, 50 + 300)
    beginContou
    // square(-75, 0, 50)
    translate(0, 0, 100)
    // square(-100, -50, 100)
    pop()
    // square(-50, -50, 50)
    // square(0, -50, 50)

    
    ambientLight(0)
    push()
    translate(-150, 50, 300)
    rotateX(PI / 2)
    // shearX(PI / 4.0)
    ambientMaterial(74, 85, 89)
    square(0, 0, 200)
    pop()

*/