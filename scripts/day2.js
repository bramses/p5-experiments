let mySound
let bassCounter = 0
let midCounter = 0
let fft

function preload () {
    soundFormats('mp3')
    mySound = loadSound('assets/Formality.mp3') // put a song in the assets folder and try it out!
}

function setup () {
    let cnv = createCanvas(windowWidth / 2, windowHeight / 2)
    mySound.setVolume(0.3)
    cnv.mouseClicked(togglePlay);
    fft = new p5.FFT();
    mySound.amp(0.2);  
}

function draw(){
    background(0);
  
    let spectrum = fft.analyze()
    let bassEnergy = fft.getEnergy("bass")
    let midEnergy = fft.getEnergy("mid")
    let trebleEnergy = fft.getEnergy("treble")

    if (bassEnergy > 175) {
        bassCounter++
    } else if (bassCounter > 0 && bassCounter < 200) {
        bassCounter--
    } else {
        bassCounter = 0
    }

    if (midEnergy > 175) {
        midCounter++
    } else if (midCounter > 0 && midCounter < 200) {
        midCounter--
    } else {
        midCounter = 0
    }



    var waveform = fft.waveform();
    noFill();
    beginShape();
    if (bassCounter > 50 || midCounter > 50) {
        stroke(0,255,0); // waveform is green
    } else {
        stroke(255,0,0); // waveform is red
    }
    
    strokeWeight(1);
    for (var i = 0; i< waveform.length; i++){
      var x = map(i, 0, waveform.length, 0, width);
      var y = map( waveform[i], -1, 1, 0, height);
      vertex(x,y);
    }
    endShape();
  
    text('click to play/pause', 4, 10);
    text(`bass energy: ${bassEnergy.toFixed(2)}`, 4, 20)
    text(`bass counter: ${bassCounter.toFixed(2)}`, 200, 20)
    text(`mid counter: ${bassCounter.toFixed(2)}`, 200, 30)
    text(`mid energy: ${midEnergy.toFixed(2)}`, 4, 30)
    text(`treble energy: ${trebleEnergy.toFixed(2)}`, 4, 40)

  }

// fade sound if mouse is over canvas
function togglePlay() {
    if (mySound.isPlaying()) {
      mySound.pause();
    } else {
      mySound.play();
    }
}