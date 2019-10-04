/*
The first drafter has a black marker and makes an irregular horizontal line near the top of the wall. 
Then the second drafter tries to copy it (without touching it) using a red marker. 
The third drafter does the same, using a yellow marker. 
The fourth drafter does the same using a blue marker. 
Then the second drafter followed by the third and fourth copies the last line drawn until the bottom of the wall is reached.
*/

function setup () {
    createCanvas(400,400);

    background(900);
    stroke(0);
    strokeWeight(5);
    let x1 = 0
    let x2 = 10
    let y1 = random(1, 15)
    let y2 = random(1, 15)

    let points = []
    for (let i = 0; i < 30; i++) {
        line(
            x1, y1,
            x2, y2
        )
        
        points.push([x1, x2, y1, y2])
       
        y1 = y2
        x1 = x2
        y2 = random(1, 15)
        x2 = random(x2, x2 + 30);  
    }

    for ( let i = 0; i < 30; i++ ) {
        
        let _color = ['red', 'yellow', 'blue']
        stroke(_color[i % 3]) 
        for ( let j = 0; j < 30; j++ ) {
            line(
                points[j][0], points[j][2] + 10 + 10*i,
                points[j][1], points[j][3] + 10 + 10*i
            )
        }
        
    }
}
  
function draw() {}