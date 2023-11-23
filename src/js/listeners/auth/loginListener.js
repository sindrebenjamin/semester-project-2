import { login } from "../../api/auth/login.js";
import { inputEmailListener } from "../forms/inputEmail.js";

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

inputEmailListener();
