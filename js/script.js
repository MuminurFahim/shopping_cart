function add_to_cart(fruit) {
    const Row = document.getElementById(fruit);
    const Weight = document.getElementById(fruit + 'Weight');
    const weight = parseInt(Weight.innerHTML);

    if (!Row && weight > 0) {
        const Weight = document.getElementById(fruit + 'Weight');
        const Total = document.getElementById(fruit + 'Total');
        const row = document.createElement('tr');
        row.setAttribute('id', fruit);
        row.innerHTML = `
            <td>${fruit}</td>
            <td class='num'>${Weight.innerHTML} Kg</td>
            <td class='num'>$${Total.innerHTML}</td>
            <td>
                <button type="button" class="btn btn-danger btn-sm" onclick='remove_from_cart(${fruit})'>
                Remove</button>
            </td>`;
        const cart = document.getElementById('cart');
        cart.appendChild(row);

        const Button = document.getElementById(fruit + 'Button');
        Button.setAttribute('class', 'btn btn-success btn-sm');
        Button.innerHTML = 'Added';

        const TotalWeights = document.getElementById('TotalWeights');
        const totalWeights = parseInt(TotalWeights.innerHTML);
        const TotalPrices = document.getElementById('TotalPrices');
        const totalPrices = parseInt(TotalPrices.innerHTML);
        document.getElementById('Totals').remove();
        const total = parseInt(Total.innerHTML);

        const Totals = document.createElement('tr');
        Totals.setAttribute('id', 'Totals');
        Totals.innerHTML = `
            <th>Total</th>
            <th class="num"><span id="TotalWeights">${totalWeights + weight}</span> Kg</th>
            <th class="num">$<span id="TotalPrices">${totalPrices + total}</span></th>
            <th>
                <button type="button" class="btn btn-danger btn-sm" onclick="remove_all()">Remove All</button>
            </th>`;
        cart.appendChild(Totals);

        const Items = document.getElementsByClassName('badge')[0];
        const items = parseInt(Items.innerHTML);
        Items.innerHTML = `${items + 1}`;
    }
}


function remove_from_cart(fruit) {
    const id = fruit.id;

    const Button = document.getElementById(id + 'Button');
    Button.setAttribute('class', 'btn btn-primary btn-sm');
    Button.innerHTML = 'Add to Cart';

    const Weight = document.getElementById(id + 'Weight');
    const weight = parseInt(Weight.innerHTML);
    const TotalWeights = document.getElementById('TotalWeights');
    const totalWeights = parseInt(TotalWeights.innerHTML);
    TotalWeights.innerHTML = `${totalWeights - weight}`;

    const Total = document.getElementById(id + 'Total');
    const total = parseInt(Total.innerHTML);
    const TotalPrices = document.getElementById('TotalPrices');
    const totalPrices = parseInt(TotalPrices.innerHTML);
    TotalPrices.innerHTML = `${totalPrices - total}`;

    const Items = document.getElementsByClassName('badge')[0];
    const items = parseInt(Items.innerHTML);
    Items.innerHTML = `${items - 1}`;

    fruit.remove();
}


function remove_all() {
    const rows = document.getElementsByTagName('tr');
    const length = rows.length - 1;
    for (let i = 1; i < length; i++) {
        remove_from_cart(rows[1]);
    }
}


function increase(fruit, i) {
    const Available = document.getElementById(fruit + 'Available');
    let available = parseInt(Available.innerHTML);
    const Weight = document.getElementById(fruit + 'Weight');
    let weight = parseInt(Weight.innerHTML);
    available -= i;
    weight += i;

    if (available >= 0 && weight >= 0) {
        Available.innerHTML = `${available}`;
        Weight.innerHTML = `${weight}`;
        const Price = document.getElementById(fruit + 'Price');
        const price = parseInt(Price.innerHTML);
        const Total = document.getElementById(fruit + 'Total');
        Total.innerHTML = `${price * weight}`;
    }
}
