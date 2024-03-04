//alert("Testing!!!!");
//this function show the response from the API call and embeded on HTML 
function showPoem(response) {
  console.log(response.data.answer);
  console.log("Generating poem...");
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
  let prompt = `User instruction:Generate a french poem based on ${userInstructionInput.value}`;
  let context = "You are expert to generate romantic poem.please provide a poem in four line using in basic HTML format";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  //make a call to the API
  axios.get(apiUrl).then(showPoem);
  console.log("generating poem....");



}
//assigning variables to the form element and adding event listener
let formElement = document.querySelector("#poem-generate-form");
//console.log(formElement);
formElement.addEventListener("submit", generatePoem);
