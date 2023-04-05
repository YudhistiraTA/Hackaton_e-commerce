const urlParams = new URLSearchParams(window.location.search);
const itemId = urlParams.get('itemId');
function grabItemById(id) {
    if (id < 5)
        return basketball[id];
    else if (id < 10)
        return football[id - 5];
    else
        return badminton[id - 10];
}

const selectedItem = grabItemById(itemId);
document.getElementById("item-image").src = selectedItem.img_src;

const item_content = document.getElementById("item-content");

const item_name = document.createElement("li");
item_name.textContent = selectedItem.name;
item_name.className = "item-title";
item_content.appendChild(item_name);

let tempStr = String(selectedItem.price);
let tempArr = [];
for (let i = tempStr.length - 1, dot = 0; i >= 0; i--) {
    if (dot++ === 3) {
        tempArr.push('.');
        dot = 1;
    }
    tempArr.push(tempStr[i]);
}
let itemPrice = tempArr.reverse().join("");
const item_price = document.createElement("li");
item_price.className = "item-price";
item_price.textContent = `Rp. ${itemPrice}`;
item_content.appendChild(item_price);

const item_desc = document.createElement("li");
const hr = document.createElement("hr");
item_desc.textContent = selectedItem.description;
item_desc.className = "item-desc";
item_content.appendChild(hr);
item_content.appendChild(item_desc);