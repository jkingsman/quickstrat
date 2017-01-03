strategies.push({
    name: '4+ decks; soft 17 stand',
    function: 'fourPlus17Stand'
});

function fourPlus17Stand(player, dealer, soft, pair) {
    if (soft) {
        if (player >= 8) {
            return S;
        } else if (player === 7) {
            if (dealer === 2) {
                return S;
            } else if (dealer >= 3 && dealer <= 6) {
                return Ds;
            } else if (dealer === 7 || dealer === 8) {
                return S;
            } else {
                return H;
            }
        } else if (player === 6) {
            if (dealer >= 3 && dealer <= 6) {
                return Dh;
            } else {
                return H;
            }
        } else if (player === 4 || player === 5) {
            if (dealer >= 4 && dealer <= 6) {
                return Dh;
            } else {
                return H;
            }
        } else {
            if (dealer === 5 || dealer === 6) {
                return Dh;
            } else {
                return H;
            }
        }
    } else if (pair) {
        if (player === 11) {
            return P;
        } else if (player === 10) {
            return S;
        } else if (player === 9) {
            if (dealer === 7 || dealer >= 10) {
                return S;
            } else {
                return P;
            }
        } else if (player === 8) {
            return P;
        } else if (player === 7) {
            if (dealer >= 8) {
                return H;
            } else {
                return P;
            }
        } else if (player === 6) {
            if (dealer === 2) {
                return Ph;
            } else if (dealer >= 7) {
                return H;
            } else {
                return P;
            }
        } else if (player === 5) {
            if (dealer >= 10) {
                return H;
            } else {
                return Dh;
            }
        } else if (player === 4) {
            if (dealer === 5 || dealer === 6) {
                return Ph;
            } else {
                return H;
            }
        } else {
            if (dealer === 2 || dealer === 3) {
                return Ph;
            } else if (dealer >= 4 && dealer <= 7) {
                return P;
            } else {
                return H;
            }
        }
    } else {
        // begin hard
        if (player >= 17) {
            return S;
        } else if (player === 16) {
            if (dealer <= 6) {
                return S;
            } else if (dealer === 7 || dealer === 8) {
                return H;
            } else {
                return Rh;
            }
        } else if (player === 15) {
            if (dealer <= 6) {
                return S;
            } else if (dealer >= 7 && dealer <= 9) {
                return H;
            } else if (dealer === 10) {
                return Rh;
            } else {
                return H;
            }
        } else if (player === 13 || player === 14) {
            if (dealer <= 6) {
                return S;
            } else {
                return H;
            }
        } else if (player === 12) {
            if (dealer >= 4 && dealer <= 6) {
                return S;
            } else {
                return H;
            }
        } else if (player === 11) {
            if (dealer <= 10) {
                return Dh;
            } else {
                return H;
            }
        } else if (player === 10) {
            if (dealer <= 9) {
                return Dh;
            } else {
                return H;
            }
        } else if (player === 9) {
            if (dealer >= 3 && dealer <= 6) {
                return Dh;
            } else {
                return H;
            }
        } else {
            return H;
        }
    }
}
