//alert("Testing!!!!");
//This function generate the original poem based on the user information provided on input filed 
function generatePoem(event) {
  event.preventDefault();

  //adding typewriter plugin to animate text
  new Typewriter("#poem", {
    strings: `Demain, dès l’aube, à l’heure où blanchit la campagne, Je partirai.
  Vois - tu, je sais que tu m’attends.`,
    autoStart: true,
    delay: 1,
    cursor: ""
  })

}
//assigning variables to the form element and adding event listener
let formElement = document.querySelector("#poem-generate-form");
//console.log(formElement);
formElement.addEventListener("submit", generatePoem);
