const canvasSketch = require('canvas-sketch');
const p5 = require('p5');
const random = require('canvas-sketch-util/random');

new p5()

const settings = {
  dimensions: [ 2048, 2048 ],
  p5: true
};

random.setSeed(random.getRandomSeed())

const sketch = () => {

  const margin = 200;

  const createGrid = () => {
    const count = 20;
    const points = [];
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        const u = i / (count - 1);
        const v = j / (count - 1);

        points.push({
          position: [u, v]
        });
      }
    }

    return points;
  }

  const points = createGrid()

  const generateOffset = (shape, coords) => {
    fill('black');
    const positiveOffset = 40;
    const negativeOffset = -40;

    if (shape === "triangle") {
      const [x1, y1, x2, y2, x3, y3] = coords.map(coord => coord + positiveOffset);
      triangle(x1, y1, x2, y2, x3, y3);
    } 

    if (shape === "circle") {
      let [x1, y1, circleSize] = coords;
      x1 += positiveOffset
      y1 += positiveOffset
      circle(x1, y1, circleSize);
    }

    if (shape === "tilde") {
      const [x1, y1] = coords.map(coord => coord + positiveOffset);
      
      textSize(300);
      text("〰", x1, y1);
    }

    if (shape === "square") {
      let [x1, y1, squareSize] = coords;
      x1 += positiveOffset
      y1 += positiveOffset
      square(x1, y1, squareSize);
    }
  }


  const generateShape = (shape, width, height, colors) => {
    const color  = colors[Math.floor(Math.random() * colors.length)];

    if (shape === 'triangle') {
      push()

      const x1 = Math.floor(Math.abs(random.value()) * width);
      const y1 = Math.floor(Math.abs(random.value()) * height);
      const x2 = Math.floor(x1 + (width * random.valueNonZero() * .25));
      const y2 = Math.floor(y1 + (height * random.valueNonZero() * .25));

      const x3 = Math.floor(x1 - (width * random.valueNonZero() * .18));
      const y3 = Math.floor(y1 + (height * random.valueNonZero() * .18));

      const coords = [x1, y1, x2, y2, x3, y3];
      generateOffset("triangle", coords);
      fill(color)
      triangle(x1, y1, x2, y2, x3, y3)
      pop()
    }

    if (shape === "circle") {
      
      const x1 = Math.floor(Math.abs(random.value()) * width);
      const y1 = Math.floor(Math.abs(random.value()) * height);
      let circleSize = random.rangeFloor(100, 250);
      const coords = [x1, y1 , circleSize];

      generateOffset("circle", coords);
      fill(color)
      circle(x1, y1, circleSize);
    }

    if (shape === "tilde") {
      
      const x1 = Math.floor(Math.abs(random.value()) * width);
      const y1 = Math.floor(Math.abs(random.value()) * height);

      const coords = [x1, y1];

      push();
      generateOffset("tilde", coords);
      fill(color);
      textSize(300);
      text("〰", x1, y1);
      pop();
    }

    if (shape === "square") {

      const x1 = Math.floor(Math.abs(random.value()) * width);
      const y1 = Math.floor(Math.abs(random.value()) * height);
      let squareSize = random.rangeFloor(100, 250);
      const coords = [x1, y1 , squareSize];

      
      generateOffset("square", coords);
      fill(color)
      square(x1, y1, squareSize);
    }
  }


  return ({ context, width, height }) => {
    console.log(random.getSeed())
    let nintiesColors = ["#AA00FF","#00AAFF","#AAFF00","#FFAA00","#FF00AA"];


    const bgIndex = Math.floor(Math.random() * nintiesColors.length);
    const background = nintiesColors[bgIndex];

    nintiesColors.splice(bgIndex , 1);
    const nintiesUpdated = nintiesColors.slice(0)

    context.fillStyle = background;
    context.fillRect(0, 0, width, height);

    noStroke()

    const circleColor = random.pick(nintiesUpdated);
    points.forEach(data => {
      const { 
        position
      } = data;

      const [x ,y] = position;
      fill('black')
      const circleSize = 40;
      circle(x * width + (circleSize * .175), y * height + circleSize / 4, circleSize);
      fill(circleColor);
      circle(x * width, y * height, circleSize);
    })

    const shapesCount = 75;
    const shapes = ["square", "triangle", "tilde", "circle"];
    for (let i = 0; i < shapesCount; i++) {
      const shape = random.pick(shapes);
      generateShape(shape, width, height, nintiesUpdated);
    }
  };
};

canvasSketch(sketch, settings);
