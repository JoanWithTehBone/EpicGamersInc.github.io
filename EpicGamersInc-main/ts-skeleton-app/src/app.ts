console.log("Javascript is working!");
// Add EventListener to load the game whenever the browser is ready
window.addEventListener('load', () => {console.log("Handling the Load event");
//Create a new game to start looping through
const game = new Game(document.getElementById('canvas'));});