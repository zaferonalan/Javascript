let apiKey = "zlxAOLz8sshhgoMfUfPlMxhgv1dLHcWlWxf2VOdrKvo";
let url = "https://api.unsplash.com/search/photos?page=1";

const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");


// ! Arama Butonuna Basıldığında Yapılacak İşlem;

searchBtn.addEventListener("click", function()
{
    const searchText = searchInput.value
    const query = `${url}&query=${searchText}&client_id=${apiKey}`;
    sendRequest(query)
})


// ! Enter'a Basıldığında Yapılacak Olan İşlem;

searchInput.addEventListener("keypress" , setQuery);

function setQuery(e){
    if (e.key == "Enter") {
        const searchText = searchInput.value
        const query = `${url}&query=${searchText}&client_id=${apiKey}`;
        sendRequest(query)
    }
}


function sendRequest(url)
{
    fetch(url)
    .then(function(response)
    {
        return response.json();
    })
    .then(function (data)
    {
        // console.log(data.results)
        let images = data.results
        images.forEach(function(image) 
        {
            writeDom(image)
        });
    })
}

// ! İstek Sonrası Gelen Verileri Ekrana Basmak

const content = document.querySelector(".content")

function writeDom(e) 
{
    const body = document.querySelector("body")

    const div = document.createElement("div")
    div.style.border = "2px solid orange"
    div.style.width = "300px"
    div.style.height = "300px"

    const imgs = document.createElement("img")
    imgs.style.width = "100%"
    imgs.style.height = "100%"
    imgs.src = e.urls.small

    const deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "SİL"
    deleteBtn.id = "deleteBtn"

    body.appendChild(content)
    content.appendChild(div)
    div.appendChild(imgs)
    div.appendChild(deleteBtn)
}


// ! Sil Butonuna Tıklanan Elemanı Silme

content.addEventListener("click", function(e)
{
    // console.log(e.target.id.includes("deleteBtn"))
    if (e.target.id.includes("deleteBtn")) 
    {
        const parentDiv = e.target.parentElement;
        // console.log(parentDiv)
        parentDiv.style.display = "none"
    }
})

// ! Temizle Butonuna Tıklandığında Tüm Sayfa Temizlensin
const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click",function(){
    content.innerHTML=""
    searchInput.value=""
})