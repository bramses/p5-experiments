let lyr = `Watching haters wonder why Gambino got the game locked Half-Thai thickie, all she wanna do is Bangkok Got her hair done, French braids, now she ASAP Bino so insensitive, she asking, "Why you say that?!" I'm chillin', real nigga feeling Rich kid, asshole: paint me as a villain Still spitting that cash flow: DJ Khaled I got a penthouse on both coasts, pH balance Real nigga, I rep those, why though? Cause I said so Hip deep in the Pepto, I got five on her like Ben Folds I got more tail than that PetCo, you faker than some Sweet'N Low Yeah, you got some silverware, but really are you eating though? Are you eating though? Nigga, are you eating though? Breakfast, lunch and dinner's for beginners, you ain't even know Never catching cases, why they faces look so e-m-o? Watch a hater hate me, wanna play me like a piano My architect know Japanese, yo' girl, she jocking me No hands like soccer teams and y'all fuck boys like Socrates You niggas ain't copping these, niggas ain't looking like me Nah, I ain't checking I.D. but I bounce 'em with no problem Tell 'em, Problem (Problem!) I'm winnin', yeah, yeah, I'm winnin' Rich kid, asshole, paint me as a villain Don't be mad cause I'm doing me better than you doing you Better than you doing you, fuck it, what you gon' do? Different color, my passport, Instagram my stack load Hashtag my day wear and your girl drink my day care And I'm born rich, life ain't fair (silver spoon coon, ho) Ain't nobody sicker and my Fisker, "vroom, vroom, " ho Ain't nobody Fiskers don't make noise when they start up just so you know Top of the Hold 'em totem, ri-rich forever, a million was not the quota My father owned half of MoMA and did it with no diploma Year off, got no rules, tripping off of them toadstools More green than my Whole Foods and I'm too fly, Jeff Goldblum Got a glass house in the Palisades, that a-k-a White hood, white hood, (okay-kay-kay) Furniture custom, you shop at IKEA So Maserati, you whipping a Kia Spending this money, it's longer than Nia Live like a Coppola, me and Sofia Waking up broke, man, wouldn't wanna be ya Friends with the dope man, help a nigga re-up Bring a girlfriend, man, trouble when I see her "Err-err-err-err": onomatopoeia, oh, I got my cool on! (Tell 'em, mane) I'm winning so they had to dump the Gatorade And I don't give a fuck about my family name Don't be mad cause I'm doing me better than you doing you Better than you doing you, fuck it, what you gon' do?`
let _width
let _height

let createPDF = false


let sketch = function (p) {
    let lyr
    let mansalva
    let cnv

    p.preload = function () {
        mansalva = p.loadFont('assets/Mansalva/Mansalva-Regular.ttf')
        lyr = _.join(p.slides, " ")
    }

    p.setup = function () {
        cnv = p.createCanvas(500, 500)
        p.background(255)
        p.textSize(72)
        p.textFont(mansalva)
        p.textAlign(p.CENTER)
        p.noLoop()
    }

    p.draw = function () {
        p.fill(50)
        p.text(lyr, 10, 10, 490, 490)
        if (createPDF) {
            // hit save first time, then close the window... it will try and run for as my slide #s there are
            // p.saveFrames('out', 'png', 1, 25, data => {
            //     print(data);
            // })

            // only saves first ten canvases for some reason, go by 10 slides
            p.saveCanvas(cnv, `slides-${p.index}`, 'jpg')
        }
        
        
    }
}



let splitLyrics = function (lyrics, lengthLimit) {
    let allWords = _.words(lyrics)
    return _.chunk(allWords, lengthLimit)
}

const splits = splitLyrics(lyr, 10)
for ( let i = 0; i < splits.length; i++ ) {
    let myp5 = new p5(sketch)
    myp5.slides = splits[i]
    myp5.index = i
}
