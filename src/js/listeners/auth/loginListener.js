import { login } from "../../api/auth/login.js";
const profile = new URLSearchParams(window.location.search).get("user");

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

const registerLink = document.querySelector("#register-link");
registerLink.href = !profile
  ? `register.html`
  : `register.html?user=${profile}`;
