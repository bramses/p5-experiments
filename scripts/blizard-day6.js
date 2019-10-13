let showText = false


function hideAll() {
    const hidden = ["hello", "ready", "down", "up", "one", "begin"]
    for ( let i = 0; i < hidden.length; i++ ) {
        sl.hide(hidden[i])
    }
}

function preload () {
    hideAll()
}

function setup () {
   
    sl.wait("showIntro()", 0)
    sl.wait("showReady()", 2000)
    sl.wait("showBegin()", 3000)
    sl.wait("showDown()", 4000)
    sl.wait("showUp()", 5000)
    sl.wait("showOne()", 6000)
    sl.wait("goCrazy()", 7750)    
}

function showBegin () {
    hideAll()
    sl.show("begin")
}

function goCrazy () {
    hideAll()
    const downTypes = ["down", "DOWN", "dOwN", "dwn"]
    const upTypes = ["up", "DOWN", "uP", "upp", "UP"]
    const fontSizes = ['16pt', '24pt', '32pt', '8pt', '72pt']
    const colors = ["black", "white", "red"]
    const colorsUp = ["green", "blue", "magenta"]
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            let downer = document.createElement("p")
            downer.innerText = downTypes[floor(random() * downTypes.length)]
            downer.style=`font-size: ${fontSizes[floor(random() * fontSizes.length)]}; position: absolute; left: ${floor(random() * 1000)}px; top: ${floor(random() * 600)}px; color: ${colors[floor(random() * colors.length)]}`
            document.body.appendChild(downer)
        }, i*100)
        setTimeout(() => {
            let upper = document.createElement("p")
            upper.innerText = upTypes[floor(random() * upTypes.length)]
            upper.style=`font-size: ${fontSizes[floor(random() * fontSizes.length)]}; position: absolute; left: ${floor(random() * 1000)}px; top: ${floor(random() * 600)}px; color: ${colorsUp[floor(random() * colorsUp.length)]}`
            document.body.appendChild(upper)
        }, i*100)
        
    }
}

function showIntro () {
    hideAll()
    sl.show("hello")
}

function showReady () {
    hideAll()
    sl.show("ready")
}

function showDown () {
    hideAll()
    sl.show("down")
}

function showUp () {
    hideAll()
    sl.show("up")
}

function showOne () {
    hideAll()
    sl.show("one")
}
 
function draw () {}

// function keyPressed () {
//     if (showText) {
//         sl.hide("down")
//         showText = false
//     } else {
//         sl.show("down")
//         showText = true
//     }
// }