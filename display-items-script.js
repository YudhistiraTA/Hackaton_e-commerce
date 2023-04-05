const urlParams = new URLSearchParams(window.location.search);
const itemId = urlParams.get('itemId');
console.log(itemId);
function grabItemById(id) {
    if (id < 5)
        return basketball[id];
    else if (id < 10)
        return football[id - 5];
    else
        return badminton[id - 10];
}
const selectedItem = grabItemById(itemId);
console.log(selectedItem);