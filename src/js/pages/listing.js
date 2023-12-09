import { getSingleListing } from "../api/listings/getSingleListing.js";
import { MobileSlider } from "../components/MobileSlider.js";
import { DesktopSlider } from "../components/DesktopSlider.js";
import { checkMedia } from "../utils/checkMedia.js";
import { updateBids } from "../api/updateBids.js";
import { load } from "../api/storage/load.js";
import { ListedBy } from "../components/ListedBy.js";
const id = new URLSearchParams(window.location.search).get("id");
const profile = load("profile");

// Disable bidding if not logged in
if (!profile) {
  const input = document.querySelector("#bid-input");
  const button = document.querySelector("#submit");
  const loginMessage = document.querySelector("#login-before-bid");
  loginMessage.classList.remove("hidden");
  input.disabled = true;
  button.disabled = true;
  button.className =
    "flex justify-center rounded w-full text-white text-sm font-bold bg-primary-400 p-4 focus:outline-none focus:ring focus:ring-primary-700 transition-all cursor-standard opacity-50";
  loginMessage.innerHTML = `
  <a
    id="login-link"
    class="text-primary-300 hover:opacity-50 transition-all underline focus:outline-none focus:ring focus:ring-primary-700"
    href="login.html?listing=${id}"
    >Log in</a
  >
  or
  <a
    id="register-link"
    class="text-primary-300 hover:opacity-50 transition-all underline focus:outline-none focus:ring focus:ring-primary-700"
    href="register.html?listing=${id}"
    >create new user</a
  >
  to place a bid on this listing`;
}

async function getData() {
  // Check all photos before putting them in the sliders
  const checkAllPhotos = async (data) => {
    const promises = data.media.map(async (photo) => {
      return checkMedia(photo);
    });
    return Promise.all(promises);
  };

  try {
    // Fetch data
    const data = await getSingleListing(id);
    document.querySelector("title").innerText = `Bidnet | ${data.title}`;
    await updateBids();
    console.log(data);

    // Title and description
    document.querySelector("h1").innerText = data.title;
    document.querySelector("#description").innerText = data.description
      ? data.description
      : "No description.";

    // Listed by
    ListedBy(data);

    // Sliders
    const checkedPhotos = await checkAllPhotos(data);
    MobileSlider(checkedPhotos);
    DesktopSlider(checkedPhotos);
  } catch (error) {
    console.error(error);
  }
}

getData();
