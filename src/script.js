const button = document.querySelector("button");

function updateHeader(newHeader) {
  const h1 = document.querySelector("h1");
  h1.innerHTML = newHeader;
}

function contactUs() {
  let name = prompt("What is your name?");
  let age = prompt(`Hello ${name}, how old are you?`);

  if (age <= 16) {
    alert(
      "You are currently not of age. Please come back to this page with a parent or guardian."
    );
  } else {
    let email = prompt("What is your email address?");
    updateHeader(`Thank you ${name}, we'll be in touch!`);
  }
}

button.addEventListener("click", contactUs);
