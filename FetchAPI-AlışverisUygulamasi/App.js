let url = 'https://fakestoreapi.com/products';

document.addEventListener("DOMContentLoaded",function()
{
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        // console.log(data)
        data.forEach(function(resim){
            ekranaYazdir(resim)
        });
    })
})


// ! Apiden Gelen verileri Ekrana Yazdırma

const row = document.querySelector(".row")
function ekranaYazdir(e)
{
    row.innerHTML += 
    `
        <div class="col-4">
            <div class="card">
                <img src="${e.image}" alt="" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">${e.title}</h5>
                    <h5 class="card-title">${e.price} TL</h5>
                    <a id = "addBtn" href="#" class="btn btn-success">Sepete Ekle</a>
                </div>
            </div>
        </div>
    `
}


// ! Butona tıklandığında Ürünlerin içerisinden arama yapma

const searchInput = document.querySelector("#searchInput")
const searchBtn = document.querySelector("#searchBtn")

searchBtn.addEventListener("click", searchTitle)

function searchTitle() 
{
    let searchText = searchInput.value.toLowerCase()
    searchInput.value = ""
    // console.log(searchText)

    let cards = document.querySelectorAll(".col-4")

    cards.forEach(function(card){
        let title = card.querySelector(".card-title")
        if (title.innerHTML.toLowerCase().includes(searchText))
        {
            card.style.display="block"
        }
        else{
            card.style.display="none"
        }
    })
}


// ! Sepete ekleye basıldığında sepet ikonu artıran kod.

row.addEventListener("click",ekle)

function ekle(e)
{
    // console.log(e.target.id.includes("addBtn"))
    if (e.target.id.includes("addBtn")) 
    {
        // console.log(e.target.parentElement)
        // console.log(e.target.parentElement.parentElement)
        const parentDiv = e.target.parentElement.parentElement
        console.log(parentDiv)
        const littleBox = document.querySelector(".little-box")
        littleBox.innerHTML++

        sepeteEkle(parentDiv)
    }

}

// ! Sepet içerisindeki işlemler

function sepeteEkle(parentDiv) 
{
    const li = document.querySelector(".modal-li")
    const price = parentDiv.children[1].children[1].innerHTML
    // console.log(price)
    const urunAdi = parentDiv.children[1].children[0].innerHTML
    // console.log(urunAdi)

    li.innerHTML+= 
    `
        <div class="ürün-bilgisi d-flex justify-content-around">
            <div class="fotograf">
                <img id="ürün-img" height="100px" width="150px" src="${parentDiv.children[0].src}" alt="">
            </div>
            <div class="baslik">${urunAdi}</div>
            <div class="butonlar">
                <button id="arttir" type="button">+</button>
                <span class="adet">1</span>
                <button id="azalt" type="button">-</button>
            </div>
            <div class="fiyat">${price}</div>
            <div class="toplamFiyat">${price}</div>
            <button type="button" class="btn-close"></button>
        </div>

    `
    // ! Arttırma ve Azaltma butonuna basıldığında

    const arttirButon = document.querySelector("#arttir")
    const azaltButon = document.querySelector("#azalt")
    const adet = document.querySelector(".adet")
    const toplamFiyat = document.querySelector(".toplamFiyat")

    // ! Arttırma
    arttirButon.addEventListener("click",function(){
        adet.innerHTML++
        toplamFiyat.innerHTML = Math.round(adet.innerHTML * parseFloat(price)) + "TL"

    })

    // ! Azaltma  
    azaltButon.addEventListener("click",function(){
        if (adet.innerHTML > 1) 
        {
            adet.innerHTML--
            toplamFiyat.innerHTML = Math.round(adet.innerHTML * parseFloat(price)) + "TL"    
        }
    })

}

