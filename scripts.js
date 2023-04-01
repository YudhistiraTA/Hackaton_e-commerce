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

function displayItems(items) {
  const itemRow = document.querySelector("#item-row");
  items.forEach((item) => {
    const card = createCard(item);
    const tableCell = document.createElement("td");
    tableCell.appendChild(card);
    itemRow.appendChild(tableCell);
  });
}

displayItems(basketball);
