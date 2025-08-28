
let homeScoreEl = 0
let guestScoreEl = 0


function plusOneHome(){
    homeScoreEl += 1
    document.getElementById("home-score").textContent = homeScoreEl
}
function plusTwoHome(){
    homeScoreEl += 2
    document.getElementById("home-score").textContent = homeScoreEl
}
function plusThreeHome(){
    homeScoreEl += 3
    document.getElementById("home-score").textContent = homeScoreEl
}

function plusOneGuest(){
    guestScoreEl += 1
    document.getElementById("guest-score").textContent = guestScoreEl
}
function plusTwoGuest(){
    guestScoreEl += 2
    document.getElementById("guest-score").textContent = guestScoreEl
}
function plusThreeGuest(){
    guestScoreEl += 3
    document.getElementById("guest-score").textContent = guestScoreEl
}
