import React from "react";
import { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function handleChange(event){
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClick() {
    setHeading(name);
    
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form>
        <input 
          onChange={handleChange} 
          type="text" 
          placeholder="What's your name?"
          value={name} 
        />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;
