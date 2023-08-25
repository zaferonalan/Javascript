const apiKey = "2e14d9a37a744faa77f7d49e092a7524";
const url = "https://api.openweathermap.org/data/2.5/weather";

const body = document.querySelector("body");
const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");


// ! Enter'a basıldığında yapılacak olan işlem
searchInput.addEventListener("keypress", setQuery);

function setQuery(e){
    // console.log(e.key)
    if (e.key == "Enter") 
    {
        let searchText = searchInput.value;
        // console.log(searchText)
        searchInput.value=""
        sendRequest(searchText)
    }
}

// ! Butona basıldığında yapılacak olan işlem

searchBtn.addEventListener("click", function () {
    
    let searchText = searchInput.value;
    // console.log(searchText)
    searchInput.value=""
    sendRequest(searchText)
})


function sendRequest(newCity) {
    let query = `${url}?q=${newCity}&appid=${apiKey}&units=metric&lang=tr`
    fetch(query)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)

        let city = document.querySelector("#city")
        city.innerHTML=data.name

        let temp = document.querySelector("#temp")
        temp.innerHTML = `${Math.floor(data.main.temp)}°C`

        let desc = document.querySelector("#desc")
        desc.innerHTML = data.weather[0].description

        let minmax = document.querySelector("#minmax")
        minmax.innerHTML = `${Math.floor(data.main.temp_min)}°C / ${Math.floor(data.main.temp_max)}°C`
    })
}