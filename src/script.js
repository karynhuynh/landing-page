//Button

const button = document.querySelector("button");
button.addEventListener("click", contactUs);

function contactUs() {
  let name = prompt("What is your name?");
  
  if (name.length > 0) {
    let age = prompt(`Hello ${name}, how old are you?`);
    if (age <= 16) {
      alert(
        "You are currently not of age. Please come back to this page with a parent or guardian."
      );
    } else {
      let email = prompt("What is your email address?");
      updateHeader(`Thank you ${name}, we'll be in touch!`);
    }
  } else {
    alert("Please enter a name.");
  }
}

function updateHeader(newHeader) {
  const h1 = document.querySelector("h1");
  h1.innerHTML = newHeader;
}

//Activate dark mode
const section = document.querySelector(".sec");
const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", darkMode);

function darkMode() {
  section.classList.toggle("dark");
}
