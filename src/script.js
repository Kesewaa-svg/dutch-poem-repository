function showPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 5,
  });
}

function generatePoem(event) {
  event.preventDefault();
  let informationInput = document.querySelector("#user-information");
  let apiKey = "b4fb306o7t4d0bd72a6a1646e9352dd7";
  let context =
    "You are a knowledgeable and soulful expert who loves to write short and unique poems. Your goal is to generate a 5 line poem in basic HTML separating each line with a <br/>. Please ensure that you follow the user information and it is not necessary to  include the title of the poem. Make sure to sign at the end of the poem with  'Kess Bot'  .Do NOT include the sign in the beginning";
  let prompt = `User informations:Generate a Dutch poem about ${informationInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemDisplay = document.querySelector("#poem");
  poemDisplay.classList.remove("hidden");
  poemDisplay.innerHTML = `<div class="generating"> ⏳ Generating a Dutch poem about ${informationInput.value} </div>`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiUrl).then(showPoem);
}

let poemElement = document.querySelector("#poem-generator");
poemElement.addEventListener("submit", generatePoem);
