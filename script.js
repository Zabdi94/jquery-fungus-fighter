$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

let myHP = 100;
let fungusHP = 100;

function onReady() {
    console.log ('ready to fight!')
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    $('attack-btn').click ('click', entangle) // lets you click it/ see this in the html
    
   


    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}
