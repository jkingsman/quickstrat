// player/dealer input objects
var player = document.querySelector('#player');
var dealer = document.querySelector('#dealer');

// solve strategy on each keyup
player.addEventListener('keyup', solve);
dealer.addEventListener('keyup', solve);

// focus on player input on domready
document.addEventListener('DOMContentLoaded', function() {
    player.focus();
});

// focus player input when you return to the window
window.addEventListener('focus', function() {
    player.select();
});

// focus player input when you click the window
window.addEventListener('click', function(e) {
    // only focus input if it wasn't a direct click on the dealer box or a strategy
    if (e.target.type !== 'radio' && e.target.type !== 'text') {
        player.select();
    }
});

// catch tab and cycle back to player so you can tab back and forth infinitely
dealer.addEventListener('keydown', function(e) {
    if (e.keyCode === 9) { // tab
        e.preventDefault();
        player.select();
    }
});

// solve the current inputs
function solve() {
    // load card data
    var playerData = player.value;
    var dealerData = dealer.value;

    // set ace presence (soft) and two of a kind (pair) markers to default (false)
    var soft = false;
    var pair = false;

    // trim player hand (if has ace)
    if (playerData.indexOf('a') > -1) {
        playerData = playerData.substring(1); // strip the 'a'
        soft = true;
    }

    // trim player hand (if has pair)
    if (playerData.indexOf('p') > -1) {
        playerData = playerData.substring(1); // strip the 'p'
        pair = true;
    }

    // populate the best move given by selected strategy()
    var strategyFunc = document.querySelector('input[name="strategyOption"]:checked').value;
    document.getElementById('action').innerHTML = window[strategyFunc](Number(playerData), Number(dealerData), soft, pair);
}
