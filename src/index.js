//alert("Testing!!!!");
//this function show the response from the API call and embeded on HTML 
function showPoem(response) {
  //adding typewriter plugin to animate text
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: ""
  })
}
//This function generate the original poem based on the user information provided on input filed 
function generatePoem(event) {
  event.preventDefault();
  let userInstructionInput = document.querySelector("#user-instruction")
  let apiKey = "4c3a38t82d64bfo4330f17ff02bfbd97";
  let context = "You are a romantic poem expert and love to write short poem. Your mission is to generate a 4 lines poem in basic HTML and separate line with a <br/>.Do not include a title of the poem.Sign the poem with 'SheCodes AI' inside a <strong> element at the bottom of the poem. Make sure to follow the user instruction.";
  //generating the poem based on whatever the user typed in the input field 
  let prompt = `User instruction:Generate a french poem about ${userInstructionInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poemElement = document.querySelector("#poem")
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink">⏳Generating a poem about ${userInstructionInput.value}</div>`;
  //make a call to the API
  axios.get(apiUrl).then(showPoem);




}
//assigning variables to the form element and adding event listener
let formElement = document.querySelector("#poem-generate-form");
//console.log(formElement);
formElement.addEventListener("submit", generatePoem);
