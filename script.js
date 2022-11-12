
function elemCreator(tagName, callback) { 
    const element = document.createElement(tagName); 
    const innerText = document.createTextNode("Heeeey"); 
    element.appendChild(innerText); 
    document.body.appendChild(element); 
   
    callback(element); 
  } 
   
  elemCreator("div", function (elem) { 
    elem.style.backgroundColor = "#f28073"; 
    elem.style.padding="100px"
    elem.style.width="fit-content"
    elem.style.borderRadius="16PX"
  });