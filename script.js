function add_to_cart(fruit, price) {
    if (!document.getElementById(fruit)) {
        const row = document.createElement('tr');
        row.setAttribute('id', fruit);
        row.innerHTML = `
            <td>${fruit}</td>
            <td class='price'>$${price}</td>
            <td>
                <button onclick='${fruit}.remove()'>Remove</button>
            </td>`;
        document.getElementById('cart').appendChild(row);
    }
}
