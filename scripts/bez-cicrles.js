let dataArr = []
let dataLength = 35
let radius = 200
const once = false

function setup () {
    createCanvas(600,600)
    colorMode(HSB, 360, 100, 100)
    background(0, 0, 100)
    noFill()
    frameRate(3)
    if (once) dataArr = generateDataArray(dataLength)
}

function draw () {
    background(0, 0, 100)
    if (!once) dataArr = generateDataArray(dataLength)
    translate(width / 2, height / 2)
    strokeWeight(1)
    

    // generate equidistant vertices for dataLen
    const spacing = 360 / dataLength
    const numVertices = dataLength

    const vertices = []
    for (let i = 0; i < numVertices; i++) {

        // x and y of the points
        let x = cos(radians(i * spacing)) * radius
        let y = sin(radians(i * spacing)) * radius

        vertices.push({x, y})
        stroke(0, 100, 100)
        ellipse(x, y, 5 * dataArr[i].importance, 5 * dataArr[i].importance)
    }

    stroke(0, 0, 83)
    // draw connections 
    for (let i = 0; i < dataArr.length; i++) {
        let dataPoint = dataArr[i]
        let startIndex = i
        let connectionsArr = [...dataPoint.connectedTo]
        for (let j = 0; j < connectionsArr.length; j++) {
            let endIndex = connectionsArr[j]
            // line(
            //     vertices[startIndex].x, vertices[startIndex].y,
            //     vertices[endIndex].x, vertices[endIndex].y
            // )

            
            let x1 = vertices[startIndex].x + 50
            let y1 = vertices[startIndex].y + 50

            let x2 = vertices[endIndex].x - 50
            let y2 = vertices[endIndex].y - 50

            curve(
                x1, y1,
                vertices[startIndex].x, vertices[startIndex].y,
                vertices[endIndex].x, vertices[endIndex].y,
                x2, y2
            )
        }

    }
   
    // become alive
    if (!once) {
        radius = floor(random(50, 200))
        dataLength = floor(random(5,25))
    }
    
}

/*
Structure:
    [
        data {
            importance: connectedTo.length
            connectedTo: [number]
            id: uuid
        }
    ]
*/
function generateDataArray (length) {
    let arr = new Array()
    
    for (let i = 0; i < length; i++) {
        arr.push(generateDataPoint(length))
    }

    console.log(arr)
    return arr
}

function generateDataPoint (length) {
    let dataPoint = {}
    dataPoint.uuid = uuid()
    let importance = floor(random(1, length / 4))
    dataPoint.importance = importance
    let connectedTo = new Set()
    for (let i = 0; i < importance; i++) {
        let randomConnection = floor(random(0, length))
        connectedTo.add(randomConnection)
    }
    // update importance to match set length
    dataPoint.importance = connectedTo.size
    
    dataPoint.connectedTo = connectedTo

    return dataPoint
}

function saveWork () {
    if (keyCode === 222) {
        saveCanvas()
    }
}

function keyPressed () {
    saveWork()
}
 