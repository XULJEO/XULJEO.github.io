function calcAmount(){
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount']");
    let showSumPrice = document.querySelector("output[name='rs']");
    let result = parseInt(amountInput.value)*price;
    showSumPrice.innerHTML = result;

 //   alert("Fizetendő"+result+"Ft");
}

let helpText = document.createElement("small");
helpText.className = "form-text text-muted";
helpText.innerHTML = "Adja meg a feltéteket";
let parent = document.querySelector("div.form-group:nth-child(2)");
parent.appendChild(helpText);

// btn btn-primary
// #calcButton
// button.btn.btn-primary
// button.btn.btn-primary:nth-child(5)

let formRel = document.querySelector("form");
let sendButton = document.querySelector("button.btn.btn-primary:nth-child(5)");

sendButton.addEventListener("click",
    function()
        {
            alert("Hello JS");
        }
);

 let proba = document.querySelector("input[name='amount']");
 console.log(proba);