let cart = [];

function add(name, price, qty){
    qty = parseInt(qty);

    cart.push({name, price, qty});
    alert("Ditambahkan!");
}

function openCart(){
    document.getElementById("cart").style.display="block";
    render();
}

function closeCart(){
    document.getElementById("cart").style.display="none";
}

function render(){
    let html = "";
    let total = 0;

    cart.forEach((c,i)=>{
        let sub = c.price*c.qty;
        total += sub;

        html += `
        <div class="card">
            ${c.name} x${c.qty} = Rp ${sub}
            <button onclick="hapus(${i})">Hapus</button>
        </div>`;
    });

    document.getElementById("list").innerHTML = html;
    document.getElementById("total").innerHTML = "<b>Total: Rp "+total+"</b>";
}

function hapus(i){
    cart.splice(i,1);
    render();
}

function checkout(){
    let msg = "Pesanan CilokKu:%0A";
    let total = 0;

    cart.forEach(c=>{
        let sub = c.price*c.qty;
        total += sub;
        msg += `- ${c.name} x${c.qty} = ${sub}%0A`;
    });

    msg += `%0ATotal: ${total}`;

    window.open("https://wa.me/628xxxxxxxxxx?text="+msg);
}

function logout(){
    localStorage.clear();
    window.location="login.html";
}