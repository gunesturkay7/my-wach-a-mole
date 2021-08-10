const nest = document.querySelectorAll(".nest");
const time = document.querySelector(".timeLeft");
const score = document.querySelector(".result");
let result = 0;
let timerLeft = 60;
const whacLocation = function() {
    nest.forEach((el) => {
        el.classList.remove("mole");
    });
    const randomLoc = Math.floor(Math.random() * nest.length);
    nest[randomLoc].classList.add("mole");
    nest[randomLoc].addEventListener("click", hitChecker);
};
setInterval(whacLocation, 1000);

const hitChecker = function() {
    console.log(this.classList);
    if (this.classList.value.includes("mole")) {
        result++;
        score.innerText = result;
    }
};

const timer = function() {
    time.innerText = timerLeft;
    setInterval(() => {
        timerLeft--;
        time.innerText = timerLeft;
        if (timerLeft == 0) {
            timerLeft = 60;
            result = 0;
            score.innerText = result;
            alert("GAME OVER!");
        }
    }, 1000);
};
timer();