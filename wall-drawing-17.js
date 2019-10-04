/*
Wall Drawing #17 (1969)

Four-part drawing with a different line direction in each part.
*/

function setup () {
    createCanvas(400,400);
}

function draw() {
    background(900);
    

    // column 1
    stroke(160);
    for ( let i = 0; i < 31; i++ ) {
        line(
            0 + 3*i, 0,
            0 + 3*i, 400
        )
    }

    // column 2
    stroke(160);
    for ( let i = 0; i < 135; i++ ) {
        line(
            100, (0 + 3*i),
            190, (0 + 3*i)
        )
    }

    // column 3
    stroke(160);
    for ( let i = -50; i < 135; i++ ) {
        line(
            200, 100 + 6*i,
            290, 0 + 6*i
        )
    }

    // column 4
    stroke(160);
    for ( let i = -50; i < 135; i++ ) {
        line(
            300, 0 + 6*i,
            390, 100 + 6*i
        )
    }
}