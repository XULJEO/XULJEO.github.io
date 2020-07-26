let toppings = [
    "Christina Aguilera",
    "Lacoste",
    "La vie est belle"
];

let toppingSelect = document.querySelector("#toppings");

let index = 0;

 while(index<toppings.length)
{

    let option = document.createElement("option");
   
    option.value = index;
    option.innerHTML = toppings[index];
    toppingSelect.appendChild(option);


    index++;
} 