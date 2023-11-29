const user = new URLSearchParams(window.location.search).get("user");

import { printProfile } from "../api/profile/printProfile.js";

printProfile(user);
