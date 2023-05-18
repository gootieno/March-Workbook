import { resetScore } from "./score.js";
import { resetComments } from "./comments.js";

export const createMainContent = () => {
  // Create h1
  const h1 = document.createElement("h1");
  h1.innerText = "Catstagram";

  // Create img
  const img = document.createElement("img");
  img.style.margin = "20px";
  img.style.maxWidth = "750px";

  const newKittenBtn = createNewKittenBtn();

  const container = document.querySelector(".container");
  container.appendChild(h1);
  container.append(newKittenBtn);
  container.appendChild(img);

  // somewhere before making the fetch request
  // I want to check local storage to see if i have stored the item
  // If I stored, get it and set element text/attribute to local storage item value.

  fetchImage();
};

const fetchImage = async () => {
  // Fetch image from API and set img url
  const kittenImg = document.querySelector("img");

  let kittenImageUrl = localStorage.getItem("kittenImage");
  console.log("url before fetch ", kittenImageUrl);

  if (kittenImageUrl) {
    kittenImg.src = kittenImageUrl;
  } else {
    try {
      const kittenResponse = await fetch(
        "https://api.thecatapi.com/v1/images/search?size=small"
      );

      const kittenData = await kittenResponse.json();
      // console.log(kittenData);
      const kittenImgUrl = kittenData[0].url;
      // when I first make something or receive something I will add it to local storage
      localStorage.setItem("kittenImage", kittenImgUrl);

      kittenImg.src = kittenImgUrl;
      // Converts to JSON

      // After the image is finished loading, reset the score and comments
      kittenImg.addEventListener("load", () => {
        resetScore();
        resetComments();
      });
    } catch (e) {
      console.log("Failed to fetch image", e);
    }
  }
};

const createNewKittenBtn = () => {
  // Create "New Kitten" button
  const newKittenBtn = document.createElement("button");
  newKittenBtn.id = "new-kitten";
  newKittenBtn.innerText = "New Kitten";
  newKittenBtn.addEventListener("click", async () => {
    localStorage.removeItem('kittenImage')
    await fetchImage();
  });
  return newKittenBtn;
};
