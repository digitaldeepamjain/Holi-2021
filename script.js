var daysElem = document.querySelector('#daysElem');
var hourseElem = document.querySelector('#hoursElem');
var minsElem = document.querySelector('#minsElem');
var secoundsElem = document.querySelector('#secoundsElem');


// start change pr secound code
setInterval(function(){
    var todays = new Date();
    var future = new Date(2021, 0, 28, 0, 0, 0, 0);

    var diff = future - todays;
    var secounds = Math.floor((diff / 1000));
    var mins = Math.floor((diff / (1000 * 60)));
    var hours = Math.floor((diff / (1000 * 60 * 60)));
    var days = Math.floor((diff / (1000 * 60 * 60 * 24)));

    hours = hours % 24;
    mins = mins % 60;
    secounds = secounds % 60;

    // start html values putting code

    daysElem.textContent = days;
    hourseElem.textContent = hours;
    minsElem.textContent = mins;
    secoundsElem.textContent = secounds;

    // end html values putting code
}, 1000);

// end change pr secound code
