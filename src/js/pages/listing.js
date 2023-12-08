import { getSingleListing } from "../api/listings/getSingleListing.js";
import { MobileSlider } from "../components/MobileSlider.js";
import { DesktopSlider } from "../components/DesktopSlider.js";
import { checkMedia } from "../utils/checkMedia.js";
import { Bids } from "../components/Bids.js";
const id = new URLSearchParams(window.location.search).get("id");

async function getData() {
  // Check media
  const checkAllPhotos = async (data) => {
    const promises = data.media.map(async (photo) => {
      return checkMedia(photo);
    });
    return Promise.all(promises);
  };

  try {
    // Fetch data
    const data = await getSingleListing(id);
    console.log(data);
    document.querySelector("title").innerText = `Bidnet | ${data.title}`;

    // Sliders
    const checkedPhotos = await checkAllPhotos(data);
    MobileSlider(checkedPhotos);
    DesktopSlider(checkedPhotos);

    // Bids
    const bids = Bids(data.bids, 0, true, false);
    document.querySelector("#bids").innerHTML = bids;
    const moreBids = Bids(data.bids, 4, false, false);
    document.querySelector("#more-bids").innerHTML = moreBids;
    console.log(moreBids);

    const viewMoreBtn = document.querySelector("#view-more-btn");
    const viewMore = document.querySelector("#view-more");
    viewMore.innerText = `View more (${data.bids.length - 4})`;
    if (data.bids.length > 4) {
      viewMoreBtn.classList.remove("hidden");
    }
  } catch (error) {
    console.error(error);
  }
}

getData();
