let contaner = document.createElement("div");
let color = ["red", "green", "yellow", "blue", "black"];

for(let i=0; i<5; i++){
    let sBox = document.createElement("div"); 
    sBox.style.cssText = "width: 20%; height: 100px;  margin: 10px; opacity: 50%;";
    sBox.style.backgroundColor = color[i];
    sBox.className = "Box";                   
    sBox.setAttribute("id", `box-${i}`);  
    contaner.appendChild(sBox);
}
contaner.style.cssText = "display: flex; background-color: #dfdfc0";

// Spical First Child
contaner.firstChild.style.opacity = "100%";
contaner.firstChild.classList.add("active");


let bBox = document.createElement("div");
bBox.style.cssText = "width: 100%; height: 300px; margin: 29px 0; background-color: red;";


document.body.appendChild(contaner);
document.body.appendChild(bBox);






// If Event Is Click Do
contaner.addEventListener("click", function (e) {
    contaner.childNodes.forEach(
        function (e) {
            e.classList.remove("active");
            e.style.opacity = "50%";
        }
    )
    e.target.classList.add("active");
    e.target.style.opacity = "100%";

    bBox.style.backgroundColor = e.target.style.backgroundColor;
    localStorage.setItem("COLOR", e.target.style.backgroundColor);
})




// If There Are Value In Local Storage
if(localStorage.getItem("COLOR")){ 
    bBox.style.backgroundColor = localStorage.getItem("COLOR");
    contaner.childNodes.forEach(
        function (e) {
            e.classList.remove("active");
            e.style.opacity = "50%";
        }
    )
    contaner.childNodes.forEach(
        function (e, ind) {
            if(contaner.childNodes[ind].attributes.style.nodeValue.includes(localStorage.getItem("COLOR"))) {
                e.classList.add("active");
                e.style.opacity = "100%";
            }
        }
    )
}
