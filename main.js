const time = document.querySelector("#time");
const greeting = document.querySelector("#greeting");
const name = document.querySelector("#name");
const focus = document.querySelector("#focus");

// Time function
function getTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // AM or PM
  const amPM = hour >= 12 ? "PM" : "AM";

  // 12hr Format
  hour = hour % 12 || 12;

  // Output time
  time.innerHTML = `${hour}:${addZero(min)}:${addZero(sec)}${amPM}`;

  setTimeout(getTime, 1000);
}

// Add Zero
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// Change background according to time
function setBg() {
  let today = new Date(),
    hour = today.getHours();

  if (hour >= 5 && hour <= 12) {
    document.body.style.backgroundImage = "url('morning.jpg')";
    greeting.textContent = "Good Morning";
  } else if (hour <= 18) {
    document.body.style.backgroundImage = "url('afternoon.jpg')";
    greeting.textContent = "Good Afternoon";
  } else if (hour > 18 || hour >= 0) {
    document.body.style.backgroundImage = "url('night.jpg')";
    greeting.textContent = "Good Evening";
    document.body.style.backgroundPosition = "center";
  }
  console.log("An hour has passed");
  setTimeout(setBg, 36000000);
}

// get Name
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

// set name
function setName(e) {
  if (e.type === "keypress") {
    // Make sure enter was pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerHTML);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerHTML);
  }
}

// get focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

// set focus
function setFocus(e) {
  if (e.type === "keypress") {
    // Make sure enter was pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerHTML);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerHTML);
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

setBg();
getTime();
getName();
getFocus();
