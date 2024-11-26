
// [0] Contiener
let con = document.createElement("main");
con.style.cssText = "margin: 50px auto; padding: 20px 30px; width: 500px;";
// [1] The Main Box
let mainBox = document.createElement("div");
mainBox.className = "Main";
mainBox.style.cssText = "margin: 10px; height: 80px; background-color: rgb(233 223 223);  border-radius: 20px; display: flex; justify-content: space-evenly; align-items: center;";

// [2] Addition To Main Box

// Text Area
let text = document.createElement("input");
text.type = "text";
text.placeholder = "Enter your task here...";
text.style.cssText = "height: 20px; width: 360px;";
mainBox.appendChild(text);

//let add = document.createElement("div"); // Button
let Add = document.createElement("button"); // Button
Add.textContent = "Add Task";
Add.style.cssText = "height: 26px; border-radius: 5px; background-color: red; color: white; border-color: white; cursor: pointer;";
mainBox.appendChild(Add);


// [3] The List Box
let listBox = document.createElement("div");
listBox.className = "List";
listBox.style.cssText = "margin: 10px; background-color: rgb(233 223 223); border-radius: 20px; display: flex; justify-content: flex-start; align-items: center; flex-wrap: nowrap; flex-direction: column; padding: 20px;";




con.appendChild(mainBox);
con.appendChild(listBox);
document.body.appendChild(con);



// Use JSON
let ListTask = {};
let i = 0;
Add.onclick = function (e) {
    // console.log(text.value);
    if (text.value!==""){
        ListTask[`Task-${i}`] = text.value;
        window.localStorage.setItem("Task", JSON.stringify(ListTask));
    }
    createDiv(text.value);
    text.value = "";
    i++;
}

function createDiv(t) {
    let div = document.createElement("div");
    div.textContent = t;
    div.id = `Div-${i}`;
    div.className = "Class-Div";
    div.style.cssText = "width: 410px; height: 23px; background-color: white; margin: 20px 20px 20px; padding: 10px; display: flex; justify-content: space-between; align-items: center;";
    //listBox.appendChild(div);



    let minBox = document.createElement("button");
    minBox.style.cssText = "height: 30px; width: 55px; border-radius: 5px; background-color: red; color: white; border-color: white; cursor: pointer;";
    minBox.innerHTML = "Delete";

    div.appendChild(minBox);
    minBox.addEventListener("click", function (e){
        //console.log("Clickedddd");
        console.log(e);
        console.log(e.target.parentElement);
        console.log(e.target.parentElement.firstChild);
        // *********************************************************************
        /*
        let i=0;
        while(true){
            if (JSON.parse(window.localStorage.getItem("Task"))[`Task-${i}`] === e.target.parentElement.firstChild) {
                break;
            }
            i++;
        }
        console.log("Do");
        //e.target.parentElement.remove();
        */
    })
    listBox.appendChild(div);
}


// If There Are Element In Local Storage
if(window.localStorage.getItem("Task")){
    let i=0;
    while(JSON.parse(window.localStorage.getItem("Task"))[`Task-${i}`] !== undefined){
        createDiv(JSON.parse(window.localStorage.getItem("Task"))[`Task-${i}`]);
        i++;
    }
}

