var state = 0;
var countdownNumber = 10;
var timer = null;

// Function to change the state of the body class
function changeState(state) {
    document.body.className = 'body-state' + state;
    clearInterval(timer);
    if (state == 2) {
        timer = setInterval(function () {
            document.getElementById('countdown').innerHTML = countdownNumber;
            countdownNumber = countdownNumber - 1;
            if (countdownNumber <= 0) {
                changeState(3);
            }
        }, 500);
    }
    else if (state == 3) {
        var success = setTimeout(function () {
            var randomNumber = Math.round(Math.random() * 10);
            console.log('randomNumber:', randomNumber)

            //success
            if (randomNumber > 5) {
                //do somthing
                changeState(4)
            }
            else {
                //do somthing else
                changeState(5)
            }
        })
    }
}
