
var ball;

var ball2;
window.addEventListener("gamepadconnected", function(e) {

    ball = document.getElementById("ball");
    ball.style.backgroundColor = "green";

    ball2 = document.getElementById("ball2");
    ball2.style.backgroundColor = "blue";
    document.getElementsByTagName("p")[0].innerHTML = e.gamepad.id;
    updateLoop();

});

function updateLoop() {
    var gp = navigator.getGamepads()[0];
    console.log(gp.axes)
    var left = (gp.axes[0] + 1) / 2 * (window.innerWidth - ball.offsetWidth);
    var right = (gp.axes[1] + 1) / 2 * (window.innerHeight - ball.offsetHeight);

    ball.style.left = left + "px";
    ball.style.top =  right + "px";

    var left2 = (gp.axes[3] + 1) / 2 * (window.innerWidth - ball2.offsetWidth);
    var right2 = (gp.axes[4] + 1) / 2 * (window.innerHeight - ball2.offsetHeight);

    ball2.style.left = left2 + "px";
    ball2.style.top =  right2 + "px";

    if (gp.buttons[0].pressed) {
      document.body.style.backgroundColor = "red";
    } else {
        document.body.style.backgroundColor = "white";
    }

    requestAnimationFrame(updateLoop);

}
