// Array of survival items, each with a name and a rating
const survivalItems = [
    { id: 1, name: 'First Aid Kit', rating: 9 },
    { id: 2, name: 'Water Filter', rating: 8 },
    { id: 3, name: 'Fire Starter', rating: 7 },
    { id: 4, name: 'Tactical Knife', rating: 7 },
    { id: 5, name: 'Flashlight or Headlamp', rating: 6 },
    { id: 6, name: 'Multi-tool', rating: 8 },
    { id: 7, name: 'Survival Blanket', rating: 6 },
    { id: 8, name: 'Compass and Map', rating: 4 },
    { id: 9, name: 'Water', rating: 10 },
    { id: 10, name: 'Food', rating: 10 },
    { id: 11, name: 'Shelter', rating: 10 },
    { id: 12, name: 'Flares', rating: 3 },
    { id: 13, name: 'Fishing Kit', rating: 7 },
    { id: 14, name: 'Duct Tape', rating: 5 },
    { id: 15, name: 'Tools', rating: 9 },
    { id: 16, name: 'Weapon', rating: 8 },
    { id: 17, name: 'Paracord', rating: 6 },
    { id: 18, name: 'Portable Battery Charger', rating: 7 },
    { id: 19, name: 'Below Zero Sleeping Bag', rating: 8 },
    { id: 20, name: 'Thermal Blanket', rating: 8 },
    { id: 21, name: 'Spare Clothing', rating: 5 },
    { id: 22, name: 'Survival Guides', rating: 7 },
    { id: 23, name: 'Luck', rating: 1 },
    { id: 24, name: 'Personal Items', rating: 1 },
    { id: 25, name: 'Sunglasses', rating:  4}
];

// Function to create the list and display items
function displayItems(items) {
    const itemsList = document.getElementById('itemsList');
    itemsList.innerHTML = ''; // Clear previous items

    items.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `ID: ${item.id} -- ${item.name} - <span class="rating">Rating: ${item.rating}</span>`;
        itemsList.appendChild(li);
    });
}

// Function to filter items based on search query
function filterItems() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredItems = survivalItems.filter(item =>
        item.name.toLowerCase().includes(searchInput)
    );
    displayItems(filteredItems);
}

// Event listener for the search input
document.getElementById('searchInput').addEventListener('input', filterItems);

// Initially display all items
displayItems(survivalItems);