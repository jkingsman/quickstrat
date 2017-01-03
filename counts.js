// win/loss/count ratio vars
var wins = 0;
var streak = 0;
var losses = 0;

var count = 0;
var currentCountBet = 1;

var bettingUnit = 1;

function drawWinLossCount() {
    // populate UI with totals
    document.querySelector('#winCount').innerHTML = wins;
    document.querySelector('#loseCount').innerHTML = losses;

    // quick math to prevent NaN
    var winRate = Math.round((wins / (wins + losses)) * 1000) / 10;
    if (isNaN(winRate)) {
        winRate = 0;
    }
    document.querySelector('#winRate').innerHTML = winRate;
    document.querySelector('#streak').innerHTML = streak;

    // implement up & pull betting scheme
    if (streak === 0) {
        document.querySelector('#upPull').innerHTML = 2 * bettingUnit;
    } else {
        document.querySelector('#upPull').innerHTML = streak * bettingUnit;
    }

    // populate count & bet spread
    document.querySelector('#count').innerHTML = count;
    document.querySelector('#countBet').innerHTML = currentCountBet * bettingUnit;
}

// set the correct bet according to the current count
function setCountBet() {
    if (count > 2 && currentCountBet < 8) {
        currentCountBet *= 2;
        return;
    }

    if (count < 2) {
        currentCountBet = 1;
    }
}

// compute bankroll and betting unit data
function computeBankroll() {
    bettingUnit = Number(document.querySelector('#minimum').value);
    document.querySelector('#bankroll').value = bettingUnit * 20;
    document.querySelector('#maxBet').value = bettingUnit * 8

    // refresh the bet indicators
    drawWinLossCount();
}

// update win/loss/count totals
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
        losses = wins = streak = count = 0;
        setCountBet();
    }

    if (e.keyCode === 70) { // f; increment count
        e.preventDefault();
        count++;
        setCountBet();
    }

    if (e.keyCode === 68) { // d; decrement count
        e.preventDefault();
        count--;
        setCountBet();
    }

    drawWinLossCount();
});

document.querySelector('#minimum').addEventListener('keyup', computeBankroll);

computeBankroll();
drawWinLossCount();
