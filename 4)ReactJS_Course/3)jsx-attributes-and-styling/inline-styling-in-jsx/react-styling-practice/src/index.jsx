//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import react from "react";
import ReactDOM from "react-dom";

const morningTime = new Date().getHours();
const customColor = {
    color:"red",
}
console.log(morningTime);

let customMessage;

if (morningTime < 12 ) {
    customColor.color = "red";
    customMessage = "Good Morning";
} else if ( morningTime < 18) {
    customColor.color = "green";
    customMessage = "Good Afternoon";
} else {
    customColor.color = "blue";
    customMessage = "Good Evening";
}

ReactDOM.render(<h1 style={customColor}>{customMessage}</h1>,document.getElementById("root"));



// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
