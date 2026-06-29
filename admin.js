let products = JSON.parse(localStorage.getItem("products")) || [];

function addProduct(){
    products.push({
        nama: nama.value,
        harga: parseInt(harga.value)
    });

    save();
    render();
}

function save(){
    localStorage.setItem("products", JSON.stringify(products));
}

function render(){
    let html = "";

    products.forEach((p,i)=>{
        html += `
        <div class="card">
            ${p.nama} - Rp ${p.harga}
            <button onclick="hapus(${i})">Hapus</button>
        </div>`;
    });

    document.getElementById("list").innerHTML = html;
}

function hapus(i){
    products.splice(i,1);
    save();
    render();
}

function logout(){
    window.location="admin.html";
}

render();