import { register } from "../../api/auth/register.js";
import { inputEmailListener } from "../forms/inputEmail.js";
import { inputNameListener } from "../forms/inputName.js";
import { inputPasswordListener } from "../forms/inputPassword.js";
import { inputAvatarListener } from "../forms/inputAvatar.js";
import { setError } from "../forms/setError.js";
const profile = new URLSearchParams(window.location.search).get("user");

function registerListener(event) {
  event.preventDefault();

  const usernameTest = testUsername();
  const emailTest = testEmail();
  const passwordTest = testPassword();

  const form = event.target;
  const data = new FormData(form);
  const userData = {
    name: data.get("username"),
    email: data.get("email"),
    password: data.get("password"),
    avatar: data.get("avatar"),
  };

  if (usernameTest && emailTest && passwordTest) {
    register(userData);
  }
}

const registerForm = document.querySelector("#register-form");
registerForm.addEventListener("submit", registerListener);

inputEmailListener();
inputNameListener();
inputPasswordListener("Password must be at least 8 characters");
inputAvatarListener();

const loginLink = document.querySelector("#login-link");
loginLink.href = !profile ? `login.html` : `login.html?user=${profile}`;

// Check if required information is missing
const testUsername = () => {
  const input = document.querySelector("#username");
  const label = document.querySelector("#username-label");
  const hint = document.querySelector("#username-hint");
  const test = !input.value ? false : true;
  setError(test, input, hint, label, "Please enter a username");
  return test;
};

const testEmail = () => {
  const input = document.querySelector("#email");
  const label = document.querySelector("#email-label");
  const hint = document.querySelector("#email-hint");
  const test = !input.value ? false : true;
  setError(test, input, hint, label, "Please enter your email address");
  return test;
};

const testPassword = () => {
  const input = document.querySelector("#password");
  const label = document.querySelector("#password-label");
  const hint = document.querySelector("#password-hint");
  const test = !input.value ? false : true;
  setError(test, input, hint, label, "Please enter a password");
  return test;
};
