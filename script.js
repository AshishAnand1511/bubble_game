var timer = 60;
var score = 0
var hitrn;

function increaseScore() {
    score += 10;
    document.querySelector("#hitscore").textContent = score
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10)
    document.querySelector("#hitval").textContent = hitrn
}

function makeBubble() {
    var clutter = "";

    for (var i = 0; i < 152; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`
    }
    document.querySelector("#pbtm").innerHTML = clutter
}


function runTimer() {
    var timerInt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timeInterval").textContent = timer;
        }
        else {
            document.querySelector("#pbtm").innerHTML = "GAME OVER !!!"
            document.querySelector("#pbtm").innerHTML = `<h3>Note down the score and restart the game</h3><h2>Click on restart button</h2>`
            clearInterval(timerInt)
        }
    }, 1000)
}

document.querySelector("#pbtm").addEventListener("click", (dets) => {
    if (Number(dets.target.textContent) === hitrn) {
        increaseScore();
        getNewHit()
        makeBubble()

    }
})

const button = document.querySelector("button")
button.addEventListener("click", () => {
    window.location.reload();
})

runTimer()
makeBubble()
getNewHit()
