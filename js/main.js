let piece = document.querySelector("#amount").value;
let button = document.querySelector("#calcButton");

let calcAmount = function (param){

 
    let out = document.querySelector("#result").value;
    out = parseInt(param)*1000;

}

button.addEventListener("click",calcAmount(piece));