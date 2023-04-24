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
        }, 1000);
    }
    //state 4-5
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
        }, 5000)
    }
}
