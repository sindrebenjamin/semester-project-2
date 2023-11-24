import { remove } from "../storage/remove.js";

export const logout = () => {
  remove("token");
  remove("profile");
  window.location.href = "index.html";
};
