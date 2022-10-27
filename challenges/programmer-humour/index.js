function getJokeURL() {
  const apiURL = "https://xkcd.now.sh/?comic=latest";
  return fetch(apiURL).then((response) => response.json());
}

function updateJokeImage({ img: src, alt }) {
  const image = document.querySelector("img");
  image.src = src;
  image.alt = alt;
}

getJokeURL()
  .then((jokeData) => {
    console.log("jokeData: ", jokeData);
    updateJokeImage(jokeData);
  })
  .catch(() => {
    const errorEl = document.createElement("p");
    const errorMessage = "Oop, Sorry there is no dog found!";
    errorEl.innerText = errorMessage;
    document.body.appendChild(errorEl);
  });
