//? * bir çekiliş uygulaması yapınız
//* kullanıcıdan boşluklarla kullanıcıları alınız
//* kaç adet kazanan ve yedek olduğunu kullanıcı belirlesin
//* kazanan ve yedek toplamı toplam kullanıcı sayısını geçemez!
//* kazanan kişi veya kişiler yedek olamaz
//* yedek olan kişi veya kişiler kazanan olamaz


// let kullanicilar = prompt("kullanıcıları boşluk kullanarak yazınız").split(" ");
// let kazananSayisi =+prompt("Kaç adet kazanan olacağını belirtiniz: ");
// let yedekSayisi =+prompt("Kaç adet yedek olacağını belirtiniz: ");

// let kazananList =[];
// let yedekList =[];

// if (kullanicilar.length >= (kazananSayisi + yedekSayisi)) 
// {
//     for (let i = 1; i <= kazananSayisi ; i++) 
//     {
//         let kazananIndex = Math.floor(Math.random() * kullanicilar.length) //rasgele ındex no belirledik
//         let kazanan =kullanicilar[kazananIndex] // belirlediğimiz ındexin kullanıcılar'da karşılığı hangi değre geldiğini bulduk
//         kazananList.push(kazanan) // değeri kazananlist e gönderdik
//         kullanicilar.splice(kazananIndex,1) // kazananIndexten başlayıp 1 tane silicek yani kendisini listeden çıkartmış olucak. // kazananIndex'i kullanicilardan sildik
//     }

//     for (let i = 1; i <= yedekSayisi; i++) 
//     {
//         let yedekIndex = Math.floor(Math.random() * kullanicilar.length);
//         let yedek = kullanicilar[yedekIndex];
//         yedekList.push(yedek)
//         kullanicilar.splice(yedekIndex,1);
//     }

//     console.log(`Kalan kullanıcılar: ${kullanicilar}`)
//     console.log(`Kazananlar: ${kazananList}`)
//     console.log(`Yedekler: ${yedekList}`)


    
// }
// else
//     console.log("kazanan sayisi + yedek sayısı kullanıcı sayısını geçemez.")


//!localstorage => tarayıcının ön belleği olarak geçer  (veritabanı mantığında çalışır)
//! 3-5 mb bir alan kaplar

//?veri yüklemek

// localStorage.setItem("isim","zafer")
// localStorage.setItem("sehir","izmir")

//?veri çekmek

// let isim = localStorage.getItem("isim") 
// let sehir = localStorage.getItem("sehir")
// console.log(isim,sehir)



//?storagede obje işlemleri

// let urunler = [
//     {
//         adi:"elma",
//         fiyat:5
//     },
//     {
//         adi:"elma",
//         fiyat:5
//     },
//     {
//         adi:"elma",
//         fiyat:5
//     }
// ] 

// localStorage.setItem("urunler",JSON.stringify(urunler))


//?get()
// let gelenUrunler = JSON.parse(localStorage.getItem("urunler"))
// console.log(gelenUrunler)



//?örnek
//*kullanıcı adı veya şifre adında iki değişkeni locale kaydedin
//*arından bu localdeki verileri çekin
//*kullanıcıya kullanıcı adı ve şifresini sorunuz
//*doğruysa "hoşgeldin" yanlışsın "kullanıcı adı veya şifre hatalı!"

//?obje olarak yapılsın!
// let kullanici = {
//     kadi:"mehmetcoban.js",
//     sifre:"123"
// }


//?sessionStorge
//?try-cath , 
//?function (parametre) arrow func() ,  
//?dom  , 
//?setTime setInterval, asenkron yapı
//?feth,json,api