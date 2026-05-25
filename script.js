function joinNow() {

    alert("Thank You For Joining Green Civic Mission!");

}function joinNow() {

    alert("Thank You For Joining Green Civic Mission!");

}function joinNow() {

    alert("Thank You For Joining Green Civic Mission!");

}function joinNow(){

    alert("Thank You For Joining Green Civic Mission!");

}function darkMode(){

    document.body.classList.toggle("dark");

}



/* VOLUNTEER COUNTER */

let count = 0;

let counter = document.getElementById("counter");

let interval = setInterval(function(){

    count++;

    counter.innerHTML = count;

    if(count == 02){

        clearInterval(interval);

    }

}, 20);
/* LOADER */

window.addEventListener("load", function(){

    document.getElementById("loader").style.display = "none";

});
/* =========================
   DARK MODE
========================= */

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.onclick = function(){

    document.body.classList.toggle("dark-mode");

}
