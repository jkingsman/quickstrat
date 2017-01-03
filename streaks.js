// win/loss ratio vars
var wins = 0;
var streak = 0;
var losses = 0;

function drawWinLoss() {
    // populate UI with totals
    document.querySelector('#winCount').innerHTML = wins;
    document.querySelector('#loseCount').innerHTML = losses;

    // quick math to prevent NaN
    var winRate = Math.round((wins / (wins + losses)) * 1000) / 10;
    if(isNaN(winRate)){
      winRate = 0;
    }
    document.querySelector('#winRate').innerHTML = winRate;

    document.querySelector('#streak').innerHTML = streak;

    // implement up & pull betting scheme
    if (streak === 0) {
        document.querySelector('#upPull').innerHTML = 2;
    } else {
        document.querySelector('#upPull').innerHTML = streak;
    }
}

// update win/loss totals
document.addEventListener('keydown', function(e) {
    if (e.keyCode === 87) { // w; increment wins
        e.preventDefault();
        wins++;
        streak++;
    }

    if (e.keyCode === 76) { // l; increment losses
        e.preventDefault();
        losses++;
        streak = 0;
    }

    if (e.keyCode === 67) { // c; clear all
        e.preventDefault();
        losses = wins = streak = 0;
    }

    drawWinLoss();
});
