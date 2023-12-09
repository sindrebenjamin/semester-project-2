import { getSingleListing } from "../api/listings/getSingleListing.js";
import { MobileSlider } from "../components/MobileSlider.js";
import { DesktopSlider } from "../components/DesktopSlider.js";
import { checkMedia } from "../utils/checkMedia.js";
import { updateBids } from "../api/updateBids.js";
import { load } from "../api/storage/load.js";
import { ListedBy } from "../components/ListedBy.js";
import { checkIfAuctionEnded } from "../utils/formatDate.js";

const id = new URLSearchParams(window.location.search).get("id");
const profile = load("profile");

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

    const auctionEnded = checkIfAuctionEnded(data.endsAt);

    // Disable bidding if not logged in
    if (!profile || auctionEnded) {
      const input = document.querySelector("#bid-input");
      const button = document.querySelector("#submit");
      const loginMessage = document.querySelector("#login-before-bid");
      !profile && loginMessage.classList.remove("hidden");
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
  to place bid`;
    }

    // Hide bid form if your own listing and show FAB
    if (data.seller.name === profile.name) {
      document.querySelector("#bid-form").classList.add("hidden");
      const fabLink = document.createElement("a");
      fabLink.href = `new.html?edit=${id}`;
      fabLink.className =
        "fixed p-4 bottom-4 right-4 z-50 rounded-full bg-primary-100 active:scale-90 hover:bg-primary-200 transition-all shadow-lg hover:shadow-xl";
      fabLink.innerHTML = ` 
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28.4815 3.01801L32.9815 7.51801L29.551 10.95L25.051 6.45001L28.4815 3.01801ZM11.9995 24H16.4995L27.43 13.0695L22.93 8.5695L11.9995 19.5V24Z" fill="#001A11"/>
      <path d="M28.5 28.5H12.237C12.198 28.5 12.1575 28.515 12.1185 28.515C12.069 28.515 12.0195 28.5015 11.9685 28.5H7.5V7.5H17.7705L20.7705 4.5H7.5C5.8455 4.5 4.5 5.844 4.5 7.5V28.5C4.5 30.156 5.8455 31.5 7.5 31.5H28.5C29.2956 31.5 30.0587 31.1839 30.6213 30.6213C31.1839 30.0587 31.5 29.2956 31.5 28.5V15.498L28.5 18.498V28.5Z" fill="#001A11"/>
      </svg>
      `;
      document.querySelector("body").append(fabLink);
    }

    // Title and description
    document.querySelector("h1").innerText = data.title;
    document.querySelector("#description").innerText = data.description
      ? data.description
      : "No description.";

    // Listed by
    ListedBy(data);

    // Sliders
    const checkedPhotos = await checkAllPhotos(data);
    console.log(checkedPhotos);
    MobileSlider(checkedPhotos);
    DesktopSlider(checkedPhotos);
  } catch (error) {
    console.error(error);
  } finally {
    document.querySelector("#big-spinner").classList.add("hidden");
  }
}

getData();
