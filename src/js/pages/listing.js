import { getSingleListing } from "../api/listings/getSingleListing.js";
import { MobileSlider } from "../components/MobileSlider.js";
import { DesktopSlider } from "../components/DesktopSlider.js";
import { checkMedia } from "../utils/checkMedia.js";
import { updateBids } from "../api/updateBids.js";
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

    updateBids();

    // Sliders
    const checkedPhotos = await checkAllPhotos(data);
    MobileSlider(checkedPhotos);
    DesktopSlider(checkedPhotos);
  } catch (error) {
    console.error(error);
  }
}

getData();
