//elements and id's 
var hour = 6
var day_el = [];
var schedule = []

// build day_el array using element id's
for (var i = 0; i < 24; i++) {
    day_el[i] = document.getElementById('Hour_' + i);

    // day_el[i].textContent = localStorage.getItem('schedule' + i);
    var text = localStorage.getItem('schedule_' + i);
    if (text == null) {
        text = '';
    }
    day_el[i].textContent = text;
}

// todo: put this in a function

// set "past" hours
for (var i = 0; i < hour; i++) {
    day_el[i].classList.add("past");
    day_el[i].classList.remove("present")
    day_el[i].classList.remove("future");
}

// set current hour style
day_el[hour].classList.remove("past");
day_el[hour].classList.add("present")
day_el[hour].classList.remove("future");

// set future hour styles
for (var i = hour + 1; i < 24; i++) {
    day_el[i].classList.remove("past");
    day_el[i].classList.remove("present")
    day_el[i].classList.add("future");
}


function saveSchedule() {

    // Write from local storage...
    for (var i = 0; i < 24; i++) {
        localStorage.setItem('schedule-' + i, day_el[i].textContent);
    }
}
// //onclickevent for saving text area to local storage
