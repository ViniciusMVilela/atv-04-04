const divImg = document.getElementById("div-img");
const h1 = document.getElementById("header-h1");
const infoName = document.getElementById("info-squirtle-label");

const urlName = location.href.split("=")[1];
h1.innerHTML = `${urlName}`;
infoName.innerHTML = `Informações sobre ${urlName}`;

const nameFetchUrl = urlName.toLocaleLowerCase();

fetch(`https://pokeapi.co/api/v2/pokemon/${nameFetchUrl}`)
  .then((response) => response.json())
  .then((data) => {
    const spriteUrl = data.sprites.front_default;
    const imgElement = document.createElement("img");
    imgElement.src = spriteUrl;

    divImg.appendChild(imgElement);
  })
  .catch((error) => console.log(error));
