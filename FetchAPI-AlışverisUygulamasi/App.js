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
                    <a href="#" class="btn btn-success">Sepete Ekle</a>
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

// ! Enter'a basıldığında ürünlerin arama yapmas



