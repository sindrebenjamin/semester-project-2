import { register } from "../../api/auth/register.js";
import { inputEmailListener } from "../forms/inputEmail.js";
import { inputNameListener } from "../forms/inputName.js";
import { inputPasswordListener } from "../forms/inputPassword.js";
import { inputAvatarListener } from "../forms/inputAvatar.js";

function registerListener(event) {
  event.preventDefault();
  const emailCheck = inputEmailListener();

  const form = event.target;
  const data = new FormData(form);
  const userData = {
    name: data.get("username"),
    email: data.get("email"),
    password: data.get("password"),
    avatar: data.get("avatar"),
  };

  emailCheck && register(userData);
}

const registerForm = document.querySelector("#register-form");
registerForm.addEventListener("submit", registerListener);

inputEmailListener();
inputNameListener();
inputPasswordListener("Password must be at least 8 characters");
inputAvatarListener();
