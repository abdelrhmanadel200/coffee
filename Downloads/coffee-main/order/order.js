const items = [
    {
        name: "Iced White Chocolate Mocha",
        details: "Grande, Starbucks Signature Espresso Dark Roast, Full Fat Milk, Caramel Drizzle Up, Add Espresso Shot, Spanish Sauce, Caramel Syrup",
        qty: 1,
        price: 190.00
    },
    {
        name: "Caramel Macchiato",
        details: "Tall, Espresso, Vanilla Syrup, Steamed Milk, Caramel Drizzle",
        qty: 2,
        price: 160.00
    }
];
function renderOrderItems(items) {
    const orderItemsContainer = document.getElementById('order-items');
    let subtotal = 0;
    items.forEach((item, index) => {
        subtotal += item.price * item.qty;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <strong>Item ${index + 1}:</strong> ${item.name} <br>
                <small>${item.details}</small>
            </td>
            <td>
                <strong>Qty:</strong> ${item.qty} <br>
                <strong>Price:</strong> EGP ${item.price.toFixed(2)}
            </td>
        `;
        orderItemsContainer.appendChild(row);
    });
    document.getElementById('subtotal').innerText = `EGP ${subtotal.toFixed(2)}`;
    const deliveryFee = parseFloat(document.getElementById('delivery-fee').innerText.replace('EGP ', ''));
    const serviceFee = parseFloat(document.getElementById('service-fee').innerText.replace('EGP ', ''));
    const total = subtotal + deliveryFee + serviceFee;
    document.getElementById('total-amount').innerText = `EGP ${total.toFixed(2)}`;
}
renderOrderItems(items);
const modal = document.getElementById('order-modal');
const closeButton = document.querySelector('.close-button');
const placeOrderButton = document.querySelector('.place-order');
const closeModalButton = document.getElementById('close-modal');
placeOrderButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
