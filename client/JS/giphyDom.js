const container = document.querySelector(".main");
const createCards = (data) => {
  container.textContent = "";
  data.data.forEach((element) => {
    let card = document.createElement("div");
    card.classList.add("giphy");

    let img = document.createElement("img");
    img.classList.add("img-giphy");
    img.setAttribute("src", `${element.images.downsized.url}`);
    card.appendChild(img);

    container.appendChild(card);
  });
};
console.log(window.location);
const searchParams = new URLSearchParams(window.location.search);
const anime = searchParams.get("anime");

fetch(`/giphy/${anime}`)
  .then((response) => response.json())
  .then((response) => createCards(response))
  .catch((err) => console.log(err));
