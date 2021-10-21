function myPlayFunction() {
    document.getElementById("myDIV").style.animationPlayState = "running";
}

function myPauseFunction() {
    document.getElementById("myDIV").style.animationPlayState = "paused";
}

function myresumeFunction() {
    document.getElementById("myDIV").style.animationPlayState = "running";
}

function stop() {

    document.getElementById("myDIV").style.animation = "none";
}