function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Herinnering aan Holland",
    autoStart: true,
    cursor: null,
    delay: 1,
  });
}

let poemElement = document.querySelector("#poem-generator");
poemElement.addEventListener("submit", generatePoem);
