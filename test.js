let calcButtons = ["C", "CE", "%", 7, 8, 9, "&times;", 4, 5, 6, "-", 1, 2, 3, "+", 0, ",", "="]
function createElem(){
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
    let keyboard = document.getElementById("container");
    keyboard.className = "container";

    //generate buttons from array values
    for (let i = 0; i < calcButtons.length; i++){
        let btn = document.createElement("button");
        if (i === 1 || i === calcButtons.length-1){
            btn.className = "key-wide";
        }else {
            btn.className = "key";
        }
        btn.innerHTML = calcButtons[i];
        keyboard.insertAdjacentElement("beforeend", btn);
    }
    //make button click only once
    document.getElementById("btn-ordinary").onclick = null;
}