strategies.push({
    name: '2 deck; soft 17 hit',
    function: 'twoOnly17Hit'
});

function twoOnly17Hit(player, dealer, soft, pair) {
    if (soft) {
        if (player >= 9) {
            return S;
        } else if (player === 8) {
            if (dealer === 6) {
                return Ds;
            } else {
                return S;
            }
        } else if (player === 7) {
            if (dealer <= 6) {
                return Ds;
            } else if (dealer >= 9) {
                return H;
            } else {
                return S;
            }
        } else if (player === 6) {
            if (dealer >= 3 && dealer <= 6) {
                return Dh;
            } else {
                return H;
            }
        } else if (player >= 3 && player <= 5) {
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
            if (dealer === 11) {
                return Rp;
            } else {
                return P;
            }
        } else if (player === 7) {
            if (dealer === 8) {
                return Ph;
            } else if (dealer >= 9) {
                return H;
            } else {
                return P;
            }
        } else if (player === 6) {
            if (dealer === 7) {
                return Ph;
            } else if (dealer >= 8) {
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
            if (dealer === 5 || player === 6) {
                return Ph;
            } else {
                return H;
            }
        } else {
            if (dealer <= 3) {
                return Ph;
            } else if (dealer >= 4 && dealer <= 7) {
                return P;
            } else {
                return H;
            }
        }
    } else {
        // begin hard
        if (player >= 18) {
            return S;
        } else if (player === 17) {
            if (dealer === 11) {
                return Rs;
            } else {
                return S;
            }
        } else if (player === 16 || player === 15) {
            if (dealer <= 6) {
                return S;
            } else if (dealer >= 7 && dealer <= 9) {
                return H;
            } else {
                return Rh;
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
            return Dh;
        } else if (player === 10) {
            if (dealer <= 9) {
                return Dh;
            } else {
                return H;
            }
        } else if (player === 9) {
            if (dealer <= 6) {
                return Dh;
            } else {
                return H;
            }
        } else {
            return H;
        }
    }
}
