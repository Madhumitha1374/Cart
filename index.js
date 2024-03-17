let mainContainer = document.getElementById('mainContainer');

let divEl = document.createElement('div');
mainContainer.appendChild(divEl);

let heading = document.createElement('h1');
heading.textContent = "Add to cart";
divEl.appendChild(heading);

let input = document.createElement('input');
input.type = "text";
input.id = "inputId";
input.placeholder = "Enter here..."
divEl.appendChild(input);

let button = document.createElement('button')
button.classList.add('btn', 'btn-primary');
button.textContent = "Add";
button.style.marginLeft = "10px";
button.onclick = function() {
    addItemToCart("inputId", "listId");
}
divEl.appendChild(button);

let heading2 = document.createElement('h2');
heading2.textContent = "My Cart item";
divEl.appendChild(heading2);

let divEl2 = document.createElement('div');
mainContainer.appendChild(divEl2);

let listContainer = document.createElement('ul');
listContainer.style.listStyleType = 'none';
listContainer.id = "listId";
divEl2.appendChild(listContainer);



function addItemToCart(inputId, listId) {
    let inputText = document.getElementById(inputId);
    let listCon = document.getElementById(listId);
    let value = inputText.value;
    let listItem = document.createElement('li');
    listCon.appendChild(listItem);
    listItem.textContent = value;

    inputText.value = " ";

}