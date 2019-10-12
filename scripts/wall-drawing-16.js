/**
Wall Drawing #16 (1969)
Bands of lines 12 inches (30 cm) wide, in three directions (vertical, horizontal, diagonal right) intersecting.
 */

function setup () {
  createCanvas(400,400);
}

function draw() {
  background(900);
  stroke(200);
  // diagonals
  
  for(let i = 0; i < 6; i++) {
    // left diag
    // line(
    //   (0 + 12*i), 0,
    //   400, (400 - 12*i)
    // );
    // line(
    //   0, (0 + 12*i),
    //   (400 - 12*i), 400
    // );

    // right diag
    line(
      400, (0 + 12*i),
      (0 + 12*i), 400
    )
    line(
      (400 - 12*i), 0,
      0, (400 - 12*i)
    )
  }

  // verticals
  for (let i = 0; i < 6; i++) {
    line(
      (200 + 10*i), 0, 
      (200 + 10*i), 400
    );
    line(
      (200 - 10*i), 0, 
      (200 - 10*i), 400
    );
  }

  // horizontals
  for (let i = 0; i < 6; i++) {
    line(
      0, (200 + 10*i),
      400, (200 + 10*i)
    );
    line(
      0, (200 - 10*i),
      400, (200 - 10*i)
    );
  }
  
}