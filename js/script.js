let calcOrdinaryButtons = ["C", "CE", "÷", 7, 8, 9, "×", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", "="];
// let calcProgrammingButtons = [];
// let calcEngineeringButtons = [];

function createOrdinary(){
    document.getElementById("btn-ordinary").style.backgroundColor = "lightgrey";
    //give styles for each div
    let container = document.getElementById("container");
    container.className = "container";
    let result = document.getElementById("result");
    result.className = "result";
    let history = document.getElementById("history");
    history.className = "history";
    let output = document.getElementById("output");
    output.className = "output";
    let keyboard = document.getElementById("keyboard");


    //generate buttons from array values
    for (let i = 0; i < calcOrdinaryButtons.length; i++){
        let btn = document.createElement("button");
        if (i === 1 || i === calcOrdinaryButtons.length-1){
            btn.className = "key-wide";
        }else {
            btn.className = "key";
        }
        btn.setAttribute("id", calcOrdinaryButtons[i]);
        btn.setAttribute("value", calcOrdinaryButtons[i]);
        btn.innerHTML = calcOrdinaryButtons[i];
        if (btn.value === "÷"){
            btn.value = "/";
        }else if (btn.value === "×"){
            btn.value = "*";
        }
        //insert buttons
        keyboard.insertAdjacentElement("beforeend", btn);

        //onclick functions for generated buttons
        btn.onclick = function (){
            let output = document.getElementById("output");
            //clean 1 symbol
            if (btn.value === "C"){
                output.innerText = output.innerText.slice(0, -1);
            }
            //clean everything
            else if (btn.value === "CE"){
                output.innerText = "";
                history.innerText = "";
            }
            //convert output to JavaScript code
            else if (btn.value === "="){
                history.insertAdjacentHTML("beforeend", output.innerText);
                let result = eval(output.innerText);
                result = parseFloat(result);
                result = Number(result.toFixed(10))
                output.innerText = result;
            }else {
                output.innerText += btn.value;
            }
        }
    }
}



