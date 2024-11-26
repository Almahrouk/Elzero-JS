// Create Element
let myMainElement = document.createElement("div");
let myParaElement = document.createElement("p");
let myHeadElement = document.createElement("h2");

// Create Text For Element
let myMainText = document.createTextNode("Product");
let myParaText = document.createTextNode("This is my Para For Product");
let myHeadText = document.createTextNode("H2 Heading");

// Create Comment For Element
let myMainCom = document.createComment("This My Main Div");
let myParaCom = document.createComment("This Is My Paragraph");
let myHeadCom = document.createComment("This Is My Heading");


// Create Att For Element
let myMainAtt = document.createAttribute("");

// Add - Append (Text) To My Element
myMainElement.appendChild(myMainText);
myParaElement.appendChild(myParaText);
myHeadElement.appendChild(myHeadText);


// Add Element To My Main Element
myMainElement.appendChild(myHeadElement);
myMainElement.appendChild(myParaElement);




// Put The Main Element To Body
document.body.appendChild(myMainElement);