let scoreH = 0
let scoreG = 0

let homeScore = document.querySelector(".score-h")

let guestScore = document.querySelector(".score-g")

const homePlus1Btn = document.getElementById('plus1h')
const homePlus2Btn = document.getElementById('plus2h')
const homePlus3Btn = document.getElementById('plus3h')

const guestPlus1Btn = document.getElementById('plus1g')
const guestPlus2Btn = document.getElementById('plus2g')
const guestPlus3Btn = document.getElementById('plus3g')

homePlus1Btn.addEventListener("click", plus1H);
homePlus2Btn.addEventListener("click", plus2H);
homePlus3Btn.addEventListener("click", plus3H);

function plus1H() {
    scoreH = scoreH + 1 ;
    homeScore.textContent = scoreH ;
}

function plus2H() {
    scoreH = scoreH + 2 ;
    homeScore.textContent = scoreH ;
}

function plus3H() {
    scoreH = scoreH + 3 ;
    homeScore.textContent = scoreH ;
}

function plus(score, scoreEl, points){
    score = score + points ;
    scoreEl.textContent = score ;
}

guestPlus1Btn.addEventListener("click", plus1G);
guestPlus2Btn.addEventListener("click", plus2G);
guestPlus3Btn.addEventListener("click", plus3G);

function plus1G() {
    scoreG = scoreG + 1 ;
    guestScore.textContent = scoreG ;
}

function plus2G() {
    scoreG = scoreG + 2 ;
    guestScore.textContent = scoreG ;
}

function plus3G() {
    scoreG = scoreG + 3 ;
    guestScore.textContent = scoreG ;
}

console.log(scoreH)