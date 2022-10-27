function getDogURL() {
  const apiURL = "https://dog.ceo/api/breeds/image/random";
  return fetch(apiURL)
    .then((response) => response.json())
    .then((jsonResponse) => {
      if (jsonResponse.code === 404) return Promise.reject("No dog found!");
      else return jsonResponse.message;
    });
}

function addNewDog(url) {
  const list = document.querySelector("ul");
  const listEl = document.createElement("li");
  const image = document.createElement("img");
  image.src = url;
  listEl.appendChild(image);
  list.appendChild(listEl);
}

const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  getDogURL()
    .then((url) => addNewDog(url))
    .catch((err) => {
      const dog404Placeholder = "./dog-placeholder.jpg";
      addNewDog(dog404Placeholder);
    });
});