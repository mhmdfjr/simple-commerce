document.getElementById("year").innerHTML = new Date().getFullYear();

function buy(product_name, product_price) {
    const messageBuy = `Halo CuyShop, saya mau beli ${product_name} - ${product_price}`
    const whatsapp = `https://wa.me/6285700072350?text=${messageBuy}`
    open(whatsapp, "_blank")
}

function chat() {
    const messageChat = `Halo CuyShop, saya mau tanya..`
    const whatsapp = `https://wa.me/6285700072350?text=${messageChat}`
    open(whatsapp, "_blank")
}