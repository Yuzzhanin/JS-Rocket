var state = 0;
var countdownNumber = 10;
var timer = null;

// Function to change the state of the body class
function changeState(state) {
    document.body.className = 'body-state' + state;
    clearInterval(timer);
    countdownNumber = 10;
    document.getElementById('countdown').innerHTML = countdownNumber;
    countdownNumber = countdownNumber - 1;

    //state 2
    if (state == 2) {
        timer = setInterval(function () {
            countdownNumber = countdownNumber - 1;
            document.getElementById('countdown').innerHTML = countdownNumber;
            //state 3
            if (countdownNumber <= 0) {
                changeState(3);
            }
            //success
            if (countdownNumber > 4 && countdownNumber <= 7) {
                //cant-wait
                document.getElementById('nervous').className = 'nervous show';
            } else {
                document.getElementById('nervous').className = 'nervous';
            }
            if (countdownNumber > 1 && countdownNumber <= 4) {
                //nervous
                document.getElementById('cant-wait').className = 'cant-wait show';
            } else {
                document.getElementById('cant-wait').className = 'cant-wait';
            }
        }, 500);
    }
    //state 4-5
    else if (state == 3) {
        var success = setTimeout(function () {
            var randomNumber = Math.round(Math.random() * 10);
            console.log('randomNumber:', randomNumber)
            if (randomNumber > 5) {
                //do somthing
                changeState(4)
            }
            else {
                //do somthing else
                changeState(5)
            }
        }, 2000)
    }
}
