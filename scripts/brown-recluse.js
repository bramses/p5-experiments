let roboto
let pg

function preload () {
    roboto = loadFont("../assets/fonts/Roboto_Mono/RobotoMono-Regular.ttf")
}

function setup () {
  createCanvas(600, 600);
  pg = createGraphics(600, 600);
  noStroke();
}
// Can't sleep.
// 3 A.M.,\n stare at the ceilin',\n murder the feelin
// Spider crawl\n in the corner,\n brown recluse
// So appropriate, cornucopia
function draw () {
    background(0);
    pg.background(0);
    pg.noStroke();
    pg.fill(255);
    pg.textFont(roboto);
    pg.textSize(40);
    pg.push();
    pg.translate(pg.width / 2, pg.height / 2 );
    pg.textAlign(CENTER, CENTER);
    pg.text("Can't sleep.", 0, 0);
    pg.pop();

    warp(16, 16);

}

function warp (tilesX, tilesY) {
    const tileW = width / tilesX
    const tileH = height / tilesY

    for (let y = 0; y < tilesY; y++) {
        for (let x = 0; x < tilesX; x++) {
            let wave = parseInt(sin(frameCount * 0.05 + (y * x) * 0.015) * 100)
            let sx = parseInt(x * tileW + wave)
            let sy = parseInt(y * tileH)
            let sw = parseInt(tileW)
            let sh = parseInt(tileH)

            let dx = parseInt(x * tileW)
            let dy = parseInt(y * tileH)
            let dw = parseInt(tileW)
            let dh = parseInt(tileH)

            copy(pg, sx, sy, sw, sh, dx, dy, dw, dh)
        }
    }
}

function saveWork () {
    if (keyCode === 222) {
        saveCanvas()
    }
}

function keyPressed () {
    saveWork()
}