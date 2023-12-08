import { login } from "../../api/auth/login.js";
const profile = new URLSearchParams(window.location.search).get("user");
const listing = new URLSearchParams(window.location.search).get("listing");

function loginListener(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const userData = {
    email: data.get("email"),
    password: data.get("password"),
  };
  login(userData);
}

const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", loginListener);

// Direct user according to where they clicked login or register from
const registerLink = document.querySelector("#register-link");

if (profile) {
  registerLink.href = `register.html?user=${profile}`;
} else if (listing) {
  registerLink.href = `register.html?listing=${listing}`;
} else {
  registerLink.href = `register.html`;
}
