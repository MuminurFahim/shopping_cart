function add_to_cart (fruit, price) {
    let pre_row = document.getElementById(fruit)
    if (!pre_row) {
        let table = document.getElementById('cart')

        let row = document.createElement('tr')
        let col1 = document.createElement('td')
        let col2 = document.createElement('td')
        let col3 = document.createElement('td')
        let btn = document.createElement('button')
    
        btn.addEventListener('click', ()=>{
            row.remove()
        })
        
        row.setAttribute('id', fruit)
        col2.setAttribute('class', 'price')
    
        col1.textContent = fruit
        col2.textContent = '$' + price
        btn.textContent = 'Remove'
    
        row.appendChild(col1)
        row.appendChild(col2)
        col3.appendChild(btn)
        row.appendChild(col3)
        table.appendChild(row)    
    }
}
