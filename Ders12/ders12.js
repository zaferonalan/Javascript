//?örnek
//*kullanıcı adı veya şifre adında iki değişkeni locale kaydedin
//*arından bu localdeki verileri çekin
//*kullanıcıya kullanıcı adı ve şifresini sorunuz
//*doğruysa "hoşgeldin" yanlışsın "kullanıcı adı veya şifre hatalı!"


//veriler kaydedildi
// let kullanici ={
//     kAdi : "admin",
//     sifre: "1234"
// };


//! veyriyi gönderdik.
// localStorage.setItem("kullanici",JSON.stringify(kullanici))


//! verileri çekerken
// let CekKullanici = JSON.parse(localStorage.getItem("kullanici"))
// console.log(CekKullanici.kAdi)

// let girilenKadi = prompt("Lütfen Kullanıcı Adınızı Giriniz : ")
// let girilenSifre = prompt("Lütfen Şifrenizi Giriniz : ")
// if(CekKullanici.kAdi == girilenKadi && CekKullanici.sifre == girilenSifre )
// {
//     console.log(`Hoşgeldin ${CekKullanici.kAdi}`);
// }
// else{
//     console.log("Kullanıcı Adı veya Şifre Yanlış!");
// }


//!sessionStorage
//*sessionStorage geçici bir veri depolama sistemidir
//*tarayıcı kapandığında depolama alanındaki veriler sıfırlanır
//*önemli kural tarayıcı yenilendiğinde verilerde kayıp söz konusu değildir!!!



// sessionStorage.setItem("oyunDurum",JSON.stringify(true))

// sessionStorage.setItem("gameLevel","1")


//!try catch => hata ayıkla olayıdır
//*try => eğerki programımızda bir hata oluşmadıysa devreye girecek kod bloğudur
//*catch => try'da bir hata ile karşılaşılırsa catch bloğu devreye girer ve programımın akışı bozulmaz


// let x = 10
// try{
//     console.log(`Tutalan Sayı : ${y}`) //!hata
// }
// catch{
//     console.log("Sistemde bir hata oluştu!")
// }
// console.log("program sona erdi")


//*en basit mantıkla localden gelen bir veriye sahip olamazdığımızda
//*bize null yada undf değer dönmemesi için boş veriler elimize alabiliriz

// let gelenVeri = localStorage.getItem("gelenVeri") || []
// console.log(gelenVeri)



//!function
//*tekrarlanan işler varsa biz bunları funcitons ile bir kere yazarız
//*ve istediğimiz yerde o fonksiyonu yeniden kullanırız
//*function istenilen yerde çağıdırılması gerekmektedir


// function selamla(){
//     //?foksiyonun yapacağı görev burada belirtilir
//     console.log("selam verildi!")
// }
// selamla()



// function hosgeldin(){
//     console.log("Hoşgeldiniz!");
// }

// function hata(){
//     console.log("hatalı giriş")
// }

// let girilenKadi = prompt("Kullanıcı adınızı giriniz : ")
// let girilenSifre = prompt("Şifrenizi Giriniz : ")

// if(girilenKadi=="zafer" && girilenSifre=="1234"){
//     hosgeldin()
// }
// else{
//     hata()
// }


//!parametre
//*foksiyonun değerlerinin dinamik bir şekilde ilerlemesi için oluşturulan yapılardı

// function kdvHesapla(x){
//     let sonuc = x * 0.18
//     return sonuc
// }

// let girilenDeger = +prompt("Lütfen kdvsi hesaplanacak fiyatı giriniz")
// console.log(kdvHesapla(girilenDeger))



//*örnek 
//* kullanıcıdan üç adet sınav alınız ve bu sınavın ortalamasını yazıdırınız

// function Ort(sin1,sin2,sin3) 
// {
//     let ortalama = (sin1 + sin2 + sin3) / 3
//     return ortalama   
// }

// let sinav1 =+prompt("1. Sınav notunu görünüz: ")
// let sinav2 =+prompt("2. Sınav notunu görünüz: ")
// let sinav3 =+prompt("3. Sınav notunu görünüz: ")

// let ortalama=(Ort(sinav1,sinav2,sinav3))

// if (ortalama >= 50) 
// {
//     console.log(`Tebrikler geçtiniz. ortlamanız:${ortalama.toFixed(2)}`)
// }
// else
//     console.log(`${ortalama.toFixed(2)} Kaldınız.`)



//*Ödev
//* fonksiyonun görevi => 6 haneli bir hex kodu üretmek
//*kullanıcıya prompt ile renk üretmek istermisiniz diye sorun
//*evet derse çıktı olarak ona RANDOM bir hex kodu üretin
//*hayır derse herhangi birşey üretilmeden program dursun


//*renk üretmek istermisin => evet
//*üretilen random renk => #ff067a


//*renk üretmek istermisin => evet
//*üretilen randım renk => #677af9

/************************** */

//? renk üretmek istermisin ? => "evet"
//? kaç adet renk üretmek istersn => 3

//? üretilen renkler => ["#f567a4","#dda78c","#ccf09a"]




