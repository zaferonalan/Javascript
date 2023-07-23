
//!Yorum Yap uygulaması
// document.querySelector(".yorumYap").addEventListener("click",function() 
// {
//     let kadi = document.querySelector(".kadi").value
//     let mesaj = document.querySelector(".mesaj").value

//     let mesajCard = document.createElement("div")
//     mesajCard.className="mesajCard"

//     let kadiHtml = document.createElement("h3")
//     kadiHtml.innerHTML=kadi

//     let mesajHTML = document.createElement("p")
//     mesajHTML.innerHTML=mesaj
    
//     mesajCard.append(kadiHtml,mesajHTML)
//     document.querySelector(".comments").append(mesajCard)
// })


//!mapi domda kullanmak

// let kullanicilar = ["zafer","merve","meryem","zerrin","onay"]
// document.querySelector(".kullanicilar").innerHTML=kullanicilar.join(" ")


// let kullanicilar =["zafer","merve","zerrin","onay","günay","arda","hatice","meryem"]
// for (let i = 1; i < kullanicilar.length ; i++) 
// {
//     let baslik = document.createElement("h3")
//     baslik.innerHTML=kullanicilar[i]
//     document.body.appendChild(baslik)    
// }


let urunler =[
    {
        ad:"elma",
        fiyat:5
    },
    {
        ad:"armut",
        fiyat:10
    },
    {
        ad:"kavun",
        fiyat:20
    },
    {
        ad:"kivi",
        fiyat:30
    }
]

let urunlerYazdir = urunler.map(value => {
    return`
        <div class="productCard">
            <h3>Ürün adı: ${value.ad}</h3>
            <h5>Fiyat: ${value.fiyat}</h5>
        </div>
    `
})
document.querySelector(".urunler").innerHTML=urunlerYazdir.joinn("")