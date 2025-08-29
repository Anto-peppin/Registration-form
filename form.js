let form = document.querySelector("form");
let input = document.querySelectorAll("input");
let button = document.querySelector(".keycap");
let body = document.querySelector("body");
let eye = document.querySelector(".eye");
let passwordInput = document.querySelector(".pas");
let uName = null;
let mail = null;
let password = null;
function final() {
  if (uName && mail && password) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}
let eye1 = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>`;
let eye2 = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/></svg>`;
let condition = false;
eye.addEventListener("click", () => {
  condition = !condition;
  changePassword();
});
function changePassword() {
  if (condition) {
    passwordInput.type = "text";
    eye.innerHTML = eye2;
  } else {
    passwordInput.type = "password";
    eye.innerHTML = eye1;
  }
}

input.forEach((val) => {
  val.addEventListener("input", () => {
    validation(val);
  });
});

function validation(val) {
  if (val.name == "username") {
    let parent = val.parentElement.parentElement;
    let error = parent.querySelector(".error");

    if (val.value == "" || val.value.length <= 2) {
      error.innerText = "Enter the valid name";
      val.style.borderColor = "red";
      uName = false;
      final();
    } else {
      error.innerText = "";
      val.style.borderColor = "black";
      uName = true;
      final();
    }
  } else if (val.name == "mail") {
    let parent = val.parentElement.parentElement;
    let error = parent.querySelector(".error");
    if (
      val.value == "" ||
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.value) == false
    ) {
      error.innerText = "Enter the valid E-mail";
      val.style.borderColor = "red";
      mail = false;
      final();
    } else {
      error.innerText = "";
      val.style.borderColor = "black";
      mail = true;
      final();
    }
  } else if (val.name == "password") {
    let parent = val.parentElement.parentElement;
    let error = parent.querySelector(".error");
    if (val.value == "" || val.value.length < 6) {
      error.innerText = "Your password is too short";
      val.style.borderColor = "red";
      password = false;
      final();
    } else {
      error.innerText = "";
      val.style.borderColor = "black";
      password = true;
      final();
    }
  }
}

button.addEventListener("click", (e) => {
  if (button.disabled) {
    e.preventDefault();
    popup("Fill the form correctly", "red")
  }
  
  else {
    e.preventDefault();
    popup("Form fill Successfully ", "green");
    setTimeout(() => {
      form.submit();
    }, 3000);
  }
});

function popup(message, color) {
  let pop = document.createElement("div");
  pop.classList.add("popup");
  body.appendChild(pop);
  pop.style.backgroundColor = color;
  pop.innerText = message;
}
