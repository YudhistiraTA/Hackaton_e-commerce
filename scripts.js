function createCard(item) {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = item.img_src;

    const cardTitle = document.createElement("div");
    cardTitle.className = "card-title";
    cardTitle.textContent = item.name;

    const cardPrice = document.createElement("div");
    let tempStr = String(item.price);
    let tempArr = [];
    for (let i = tempStr.length - 1, dot = 0; i >= 0; i--) {
        if (dot++ === 3) {
            tempArr.push('.');
            dot = 1;
        }
        tempArr.push(tempStr[i]);
    }
    itemPrice = tempArr.reverse().join("");
    cardPrice.className = "card-price";
    cardPrice.textContent = `Rp. ${itemPrice}`;

    card.appendChild(img);
    card.appendChild(cardTitle);
    card.appendChild(cardPrice);

    return card;
}

const itemRow = document.querySelector("#item-table");

function displayItems(items) {
    while (itemRow.firstChild)
        itemRow.removeChild(itemRow.firstChild);
    items.forEach((item) => {
        const card = createCard(item);
        const tableCell = document.createElement("div");
        tableCell.appendChild(card);
        itemRow.appendChild(tableCell);
    });
}

let current_selected = document.getElementById("basketball-category")
function selection_toggler(selected_category) {
    selected_category.classList.toggle("selected-category");
    current_selected.classList.toggle("selected-category");
    current_selected = selected_category;
}

displayItems(basketball);
document.getElementById("basketball-category").addEventListener("click", function () {
    displayItems(basketball);
})

document.getElementById("football-category").addEventListener("click", function () {
    displayItems(football);
})

document.getElementById("badminton-category").addEventListener("click", function () {
    displayItems(badminton);
})