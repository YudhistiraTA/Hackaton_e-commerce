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

function num_to_str (num) {
    let temp_str = String(num);
    let temp_arr = [];
    for (let i = temp_str.length - 1, dot = 0; i >= 0; i--) {
        if (dot++ === 3) {
            temp_arr.push('.');
            dot = 1;
        }
        temp_arr.push(temp_str[i]);
    }
    return temp_arr.reverse().join("");
}

const selected_item = grabItemById(itemId);
document.getElementById("item-image").src = selected_item.img_src;

const item_content = document.getElementById("item-content");

document.title = selected_item.name;

const item_name = document.createElement("li");
item_name.textContent = selected_item.name;
item_name.className = "item-title";
item_content.appendChild(item_name);


const item_price = document.createElement("li");
item_price.className = "item-price";
item_price.textContent = `Rp. ${num_to_str(selected_item.price)}`;
item_content.appendChild(item_price);

const item_desc = document.createElement("li");
const hr = document.createElement("hr");
item_desc.textContent = selected_item.description;
item_desc.className = "item-desc";
item_content.appendChild(hr);
item_content.appendChild(item_desc);

function updateCounter() {
    const counter_value = document.getElementById('counter-value');
    const decrement_btn = document.getElementById('decrement-btn');
    const currentValue = parseInt(counter_value.textContent);
    if (currentValue === 1) {
        decrement_btn.classList.add('disabled');
    } else {
        decrement_btn.classList.remove('disabled');
    }
    item_price.textContent = `Rp. ${num_to_str(selected_item.price * currentValue)}`;
}

function increment() {
    const counter_value = document.getElementById('counter-value');
    counter_value.textContent = parseInt(counter_value.textContent) + 1;
    updateCounter();
}

function decrement() {
    const counter_value = document.getElementById('counter-value');
    const current_value = parseInt(counter_value.textContent);
    if (current_value > 1) {
        counter_value.textContent = current_value - 1;
        updateCounter();
    }
}