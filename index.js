let wordsArray = ["apple","banana","orange","grape","kiwi","cherry","melon","peach",
                "strawberry", "blueberry", "pineapple", "apricot", "mango", "pear", "lemon"
                , "fig", "plum", "raspberry", "blackberry", "watermelon"];

let defaultLevel = "Easy";
let defaultime = 5;
let scoreRightNow = 0;
let scoreGoal = 20;

let LevelOfRound = document.querySelector(".lvl");
let secondinSetence = document.querySelector(".secondS");
let startButton = document.querySelector(".starT");
let spanOfWord = document.querySelector(".the-word");
let inputOfWord = document.querySelector(".inpuT")
let upcomingWords = document.querySelector(".upcoming-words");
let upcomingDiv = document.querySelector(".upcoming-words div")
let timeOFLevel = document.querySelector(".time span");
let scoreNow = document.querySelector(".score .got");
let scoreGoalspan = document.querySelector(".score .total");
let FinishMsg = document.querySelector(".finish");

scoreGoalspan.textContent = scoreGoal;
timeOFLevel.textContent = defaultime;
LevelOfRound.textContent = defaultLevel;
secondinSetence.textContent = defaultime;

startButton.onclick = function(){
    startButton.remove();
    inputOfWord.focus();
    TheWord();
}

function TheWord() {

    upcomingWords.innerHTML = "";
    let randomword = wordsArray[Math.trunc(Math.random() * wordsArray.length)];
    spanOfWord.textContent = randomword;
    let indexOfRandom = wordsArray.indexOf(randomword);
    wordsArray.splice(indexOfRandom, 1);

    for (let i = 0; i < wordsArray.length; i++){
        
        let divOfWords = document.createElement("div");
        divOfWords.textContent = wordsArray[i];
        upcomingWords.appendChild(divOfWords);

    }
    
    startPlay();
}

function startPlay() {
    let start = setInterval(() => {
        timeOFLevel.textContent--;
        if (timeOFLevel.textContent === "0") {
            clearInterval(start);

            if (spanOfWord.textContent.toLowerCase() === inputOfWord.value.toLowerCase()) {
                spanOfWord.textContent = "";
                inputOfWord.value = "";
                scoreNow.textContent++;
                if (wordsArray.length > 0) {
                    TheWord();
                    timeOFLevel.textContent = defaultime;
                } else {
                let spanCongrat = document.createElement("span")
                spanCongrat.textContent = "Congratulation";
                spanCongrat.classList.add("good");
                FinishMsg.appendChild(spanCongrat);

                }
            } else {
                let spanOver = document.createElement("span")
                spanOver.textContent = "Game Over";
                spanOver.classList.add("bad");
                FinishMsg.appendChild(spanOver)
            }
        }
    }, 1000);
}