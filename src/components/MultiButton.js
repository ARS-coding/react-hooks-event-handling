import React from "react";

function MultiButton() { // remember that you cannot attach events on components with just giving a value to for an example "onClick", in order to make that work you would need to pass that onClick as a prop to the components and use it in the component but you don't need to do that. Just take the function that you want to attach in that components and return the element that you are returning attachted to that element inside the component. 
  function handleClick(number) {
    console.log(`Button ${number} was clicked`);
  }

  return (
    <div>
      <button onClick={() => handleClick(1)}>Button 1</button>
      <button onClick={() => handleClick(2)}>Button 2</button>
      <button onClick={() => handleClick(3)}>Button 3</button>
    </div>
  );
}

export default MultiButton;
