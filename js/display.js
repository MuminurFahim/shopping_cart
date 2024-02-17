const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const csv = xhr.responseText.split("\r\n");
        for (let i = 1; i < csv.length; i++) {
            [fruit, price, available] = csv[i].split(',');
            display(fruit, price, available);
        }
    }
}
xhr.open("GET", "data/info.csv", true);
xhr.send();


function display(fruit, price, available) {
    document.body.innerHTML += `
        <div class="card mb-3 bg-light" style="max-width: 465px;">
            <div class="row g-0">
                <div class="col-md-8">
                    <img src="images/${fruit}.jpg" class="img-fluid rounded-start" alt="${fruit}">
                </div>
                <div class="col-md-4">
                    <div class="card-body">
                        <h5 class="card-title">${fruit}</h5>
                        <p class="card-text">
                            Price: $<span id="${fruit}Price">${price}</span>/Kg <br>
                            Available: <span id="${fruit}Available">${available}</span> Kg <br>
                            <button type="button" class="btn btn-primary btn-sm" onclick="increase('${fruit}', 1)">
                                +</button>
                            <button type="button" class="btn btn-primary btn-sm" onclick="increase('${fruit}', -1)">
                                -</button> <br><br>
                            <span id="${fruit}Weight">0</span> Kg - $<span id="${fruit}Total">0</span> <br>
                            <button id="${fruit}Button" type="button" class="btn btn-primary btn-sm"
                                onclick="add_to_cart('${fruit}')">
                                Add to Cart
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>`;
}
