const playerName = document.getElementById("player-name");
const saveScoreButton = document.getElementById("save-score-button");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highscores")) || []

const MAX_HIGH_SCORES = 8;

finalScore.innerText = mostRecentScore;

playerName.addEventListener("keyup", function(){
    saveScoreButton.disabled = !playerName.value
});

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: playerName.value
    };

    highScores.push(score);

    highScores.sort((a,b) => {
        return b.score - a.score;
    });

    highScores.splice(5);

    localStorage.setItem(mostRecentScore, JSON.stringify(highScores));

    document.getElementById("currentHighscores").innerText = localStorage.getItem(mostRecentScore);

    window.location.assign("/highscores.html");

}

const clearHighscores = document.getElementById("clearHighscores").addEventListener("click", function() {
    localStorage.clear();
})

