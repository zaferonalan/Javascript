//!DOM
//*js ile html arasındaki bir köprü gibi düşünebiliriz
//*yani kısacası html elementlerine ulaşıp manipilasyon yapmamıza yarar

//* dom manp =>
//* elementler üzerindeki değişlikleri (silme,ekleme,güncelleme vb.) işlemlerin
//* tamamına dom manp diyebiliriz



//!eleman seçmek
//?getElementById => elementin idsine göre ulaşır

// let baslik = document.getElementById("baslik")
// console.log(baslik)

//?getElementsByClassName => elementin classına göre ulaşır
// let paragraf = document.getElementsByClassName("paragraf") //=> burada dizi döner çünkü aynı class'a sahip bir çok veri olabilir
// console.log(paragraf)

//?getElementsByTagName => elementin tagına göre ulaşır
// let span = document.getElementsByTagName("span")
// console.log(span)

//?querySelector
// let title = document.querySelector(".title") => bu ilk bulduğu classı alır.
// console.log(title)

//?querySelectorAll
// let titles = document.querySelectorAll(".title")
// console.log(titles)


//*domda bir adet paragraf bir adet butonunuz olsun
//*butona tıklandığında paragraf elementini seçip consola yazdırınız

// function paragrafSec() 
// {
//    let secim= document.querySelector(".paragraf2")
//    console.log(secim)
// }


//!element metin içeriği
//?innerHTML , innerText

// let baslik = document.querySelector(".baslik").innerHTML // => seçilen elemanın içeriğini yazıdır.
// console.log(baslik);

//?metin içeriğindeki veriyi değiştirmek

// let baslik = document.querySelector(".baslik")
// baslik.innerHTML="başlık manipüle edildi"

//*?bu işlemleri bir butona bağlayarak başlatınız!
//*promt ile kullanıcıdan 2 adet sayı alınız
//*aldığınız sayıların toplamını bir <h2></h2> elementleri arasında
//*yazdınız mesela => <h2>2 sayının toplamı = 10</h2>

// function Hesapla() {
//     let sayi1 = +prompt("Birinci sayıyı giriniz: ")
//     let sayi2 = +prompt("İkinci sayıyı giriniz: ")
//     let toplam = sayi1 + sayi2
//     document.querySelector(".yazdir").innerHTML=`Sayiların toplamı ${toplam}`

// }


//?inputdan value almak
//*inputdan gelen her değer string bir ifadederir.
//*matematiksel bir işlem yapılacaksa string ifadeyi promptaki gibi number ifadeye çevirirmemiz gerekmetedir!

// let myInput = document.querySelector(".myInput").value
// console.log(myInput);

//*?inputdan değeri almayaı bir butona bağlarayarak yazalım

// function degerAl() {
//     let myInput = document.querySelector(".myInput").value
//     console.log(myInput)
// }


//*?kullanıcıdan 2 ayrı input ile 2 sayı isteyiniz
//*girilen iki sayının toplamını <h3></h3> elementinin içerisinde yazdırınız

// function Hesapla() 
// {
//     let sayi1 = +document.querySelector(".sayi1").value
//     let sayi2 = +document.querySelector(".sayi2").value
//     let toplam = sayi1 + sayi2
//     document.querySelector(".sonuc").innerHTML=`Toplam ${toplam}`    
// }

//*?kullancııdan kullanıcı adını ve şifresini iki farklı inputlardan alınız
//*?kullancıı adı ve şifresi doğruysa h2 içerisinde "hoşgeldin ${kullanici}" yazsın
//*?kullanıcı adı veya şifresi yanlışa "kullancıı adı veya şifresi yanlış" yazsın


// function GirisYap() 
// {
//     let kadi = "admin"
//     let sifre = "1234"
    
//     let girilenKadi = document.querySelector(".kadi").value
//     let girilenSifre = document.querySelector(".sifre").value

//     if (girilenKadi == kadi && girilenSifre == sifre) 
//     {
//         document.querySelector(".yaz").innerHTML=`Hoşgeldin ${girilenKadi}`
//     }
//     else
//     {
//         document.querySelector(".yaz").innerHTML="kullanıcı adı veya şifre hatalı"
//     }
// }



//!style

// document.querySelector(".loginText").style.color="red"

// function kirmiziYap() {
//     document.querySelector(".loginText").style.color="red"
// }


//*birden fazla css özelliği bir elemente vermek için
//*o elementin içeriğine yeni bir belirlerdiğimiz class eklenebilir

// function boxVer() {
//     document.querySelector(".myBox").classList.add("box")
// }

//?kullancııdan 3 adet sınav notu alınız
//?sınav notlarının ortalasını alıp kullancıya geçip kaldığıla alakalı
//?veriyi yazdırınız
//?fakat kullanıcı kaldığında kaldığı mesajı kırmızı bir şekilde
//?geçtiğinde ise geçtiğine dair mesajı yeşil bir şekilde veriniz

// function Ortalama() 
// {
//     let sinav1 = +document.querySelector(".sinav1").value    
//     let sinav2 = +document.querySelector(".sinav2").value    
//     let sinav3 = +document.querySelector(".sinav3").value
//     let ort =  (sinav1 + sinav2 + sinav3) / 3
    
//     if (ort >= 50) 
//     {
//         document.querySelector(".sonuc").innerHTML=`geçtiniz ortalamanız: ${ort.toFixed(2)}`
//         document.querySelector(".sonuc").style.color="green" 
//     }
//     else
//     {
//         document.querySelector(".sonuc").innerHTML=`kaldınız ortalamanız: ${ort.toFixed(2)}`
//         document.querySelector(".sonuc").style.color="red"
//     }
// }


//!vanilla.js

// let myBtns = document.querySelectorAll(".myBtn")
// myBtns.forEach(element => {
//      console.log(element.innerHTML)
//  });

//!addEvent => (elemente olay eklemek)

// document.querySelector(".myBtn").addEventListener("click" , function(){
//     alert("butona tıkladı!")
// })


// urunler = [
//     {
//         id:1,
//         title:"elma",
//         price:10
//     },
//     {
//         id:2,
//         title:"armut",
//         price:10
//     },
//     {
//         id:3,
//         title:"karpuz",
//         price:20
//     },
//     {
//         id:4,
//         title:"kivi",
//         price:30
//     },
//     {
//         id:5,
//         title:"ananas",
//         price:40
//     },
// ]

// let myInp = document.querySelector(".myInp")
// myInp.addEventListener("input",function(){
//     let arananUrun =  myInp.value
//     let aramaSonucu = urunler.filter(value => arananUrun==value.title)
//     console.log(aramaSonucu);
// })


/*************************************/

// let myBtn = document.querySelector(".myBtn")
// let myParag = document.querySelector(".paragraf")

// myBtn.addEventListener("click",function()
// {
//     myParag.innerHTML="Yazı değiştirldi"
// })


//!createElemet
//*bize dom üzerinde yeni bir eleman oluşturmamaıza olan sağlar

// let myParagraf = document.createElement("p")
// myParagraf.innerHTML="selam burası neos yazılım"
// console.log(myParagraf);

// let mybox=document.createElement("div")
// mybox.className="box" //*oluşturulan elemente yeni bir class atar
// console.log(mybox)


// let baslik = document.createElement("h1")
// baslik.className="myTitle title"
// baslik.innerHTML="NEOS YAZILIM"
// document.body.appendChild(baslik) //*appendChild oluşturuan elementin nereye çocuk eleman olarak eklenecğini belirtir
// console.log(baslik)


// let myBox=document.createElement("div")
// let title = document.createElement("h3")
// myBox.className="box"
// title.innerHTML="Ben Zafer Merhaba"
// myBox.appendChild(title)
// document.body.appendChild(myBox)



// let box = document.querySelector(".box")

// let baslik = document.createElement("h4")
// baslik.innerHTML="burası başlık"

// let buton = document.createElement("button")
// buton.innerHTML="tıkla"

// box.append(baslik,buton)//*append ise parent elementin içerisinde birden fazla oluşturulan elementi eklememize yarar



//! Bomba

// document.querySelector(".oyunaBasla").addEventListener("click",function () 
// {
//     let oyunalani = document.querySelector(".oyunAlani")
//     for (let i = 1; i<=50; i++) 
//     {
//         let bomba = document.createElement("div")
//         bomba.className="bomba"
//         oyunalani.appendChild(bomba)
        
//         bomba.addEventListener("click",function(){
//             bomba.style.backgroundColor="red"
//         })
//     }
    
// })


//*?döngü ile 5 adet buton oluşturunuz => button1 button2 button3 button4 button5
//*?oluşuturulan butonlara tıklandığında  
//*?paragraf elementine tıklanılan butonun innerHTML'ini yazdırın


for (let i = 1; i <= 5; i++) 
{
    let buton2 = document.createElement("button")
    buton2.className="btn"
    buton2.innerHTML=`button${i}`    
}
document.querySelector(".btn").addEventListener("click",function () 
{
    let paragraf = document.createElement("p")
    paragraf.innerHTML=buton2    
})






