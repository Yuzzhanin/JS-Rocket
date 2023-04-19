var doCoolStuff = function () {
    var currentClassName = document.getElementById('cool').className;

    if (currentClassName == 'cool') {
        document.getElementById('cool').className = 'cool red';
    }
    else {
        document.getElementById('cool').className = 'cool';
    }
}

var sayMyName = function (name) {
    alert('My name is ' + name);
}

var car = {
    make: 'VW',
    type: 'Polo',
    color: 'Blue',
    isTurenedOn: false,
    numberOfWheels: 4,
    seats: [
        'seat1',
        'seat2',
        'seat3',
        'seat4'
    ],
    tronOn: function () {
        this.isTurenedOn = true;
    },
    fly: function () {
        alert('fly');
    },
    switchCar: function (isOn) {
        console.log('turn car ' + isOn);
        if (isOn == true) {
            this.isTurenedOn = true;
        }
        else {
            this.isTurenedOn = false;
        }
    }
};

console.log('Hello there friends!');