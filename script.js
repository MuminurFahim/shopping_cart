function add_to_cart (fruit, price) {
    if (!document.getElementById(fruit)) {
        const table = document.getElementById('cart');
        table.innerHTML += `
        <tr id=${fruit}>
            <td>${fruit}</td>
            <td class='price'>$${price}</td>
            <td>
                <button onclick='${fruit}.remove()'>Remove</button>
            </td>
        </tr>`;
    }
}