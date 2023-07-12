//!random => rastgele 
//*random 0 ondalıklı rastgele değerler üretir => 0.7632462
//*sayıyı yuvarlamak için floor kullanılır

// let rstDeger = Math.random()
// console.log(rstDeger)


//*ondalıklı sayıyı, virgülden kurtarmak için floor kullanıldı
// let rstDeger2 = Math.floor(Math.random())
// console.log(rstDeger2)


//*0 ile bir aralık belirtmek istersem randomu istediğim aralıkla çarparım
// let rstDeger3 = Math.floor(Math.random() * 100)
// console.log(rstDeger3) 


//?dizi içerisinde random bir değer mankine nasıl seçer?

// let color = ["kırmızı","mavi","siyah","gri","sarı","yeşil","turuncu","mor"]
// console.log(color[Math.floor(Math.random() * color.length)])


//?makineye 0'dan 10 kadar bir sayı üretmesini isteyiniz
//*ve kullanıcıyada bir sayı tahmin etmesini isteyiniz
//*kullanıcı makinenin rastgele ürettiği sayıyı bulmaya çalışsın.

// let tahminSayi=+prompt("0-10 arası sayı tahmin ediniz:")

// let uretilenSayi = Math.floor(Math.random() * 11)

// if (tahminSayi == uretilenSayi) 
// {
//     console.log("Tebrikler bildiniz...")    
// }
// else if (tahminSayi>10 || tahminSayi<0) 
// {
//     console.log("0-10 arası sayı giriniz.")
// }
// else
//     console.log(`tahmininiz: ${tahminSayi}\nÜretilen Sayi:${uretilenSayi} bilemediniz tekrar deneyiniz   `)



//? *aynı uygulamayı 3 hak sunarak yapınız
//*rastgele üretilen sayı => 3
//* 1 => bilemedin!
//* 3 => "tebrikler bildin" (3. soruyu 2. defada bildiği için)



// let uretilenSayi=Math.floor(Math.random() * 11)

// for (let i = 1; i <=3 ; i++) 
// {
//     let tahmin =+prompt("0-10 arası sayı tahmini yapınız: ");

//     if (tahmin == uretilenSayi) 
//     {
//         console.log("Tebrikler bildiniz.")
//         break;
//     }
//     else if(tahmin > 10 || tahmin < 0)
//     {
//         console.log("0-10 arasında sayı giriniz.")
//     }
//     else if (i==3) 
//     {
//         console.log("Hakkınız doldu")    
//     }
//     else
//     {
//         console.log(`Tahmininiz: ${tahmin} Bilemediniz tekrar deneyiniz`);
//     }

// }



//? *bir adet kullanıcılar adında bir diziniz olsun
//* kullanıcılar = ["zafer","merve","meryem","zerrin","onay","sude","melike"]
//*uygulamanın amacı bir adet kazanan bulsun

// let kullanicilar =["zafer","merve","meryem","zerrin","onay","sude","melike"];
// let secimRandom = kullanicilar[Math.floor(Math.random() * kullanicilar.length )]
// console.log(secimRandom);



//? *çekilişe katılacak olan kullanıcıları, kullanıcı belirlesin
//* => ["zafer","merve","meryem","zerrin","onay","sude","melike"]
//*girilen kullanıcılar arasında rastgele bir kazanan seçiniz!

// let kullanicilar=[]
// let kullaniciSayisi =+prompt("Kaç adet kullanici giriceksiniz: ")
// for (let i = 1; i <= kullaniciSayisi; i++) {
//     let kullanici =prompt(`${i}.kullanıcıyı giriniz :`)
//     kullanicilar.push(kullanici);
// }

// console.log(kullanicilar);
// let kazanan=kullanicilar[ Math.floor(Math.random() * kullanicilar.length)];
// console.log(kazanan)


//?split() => stirng ifade içerisinde bizim belirlediğimiz değere göre ifadeyi parçlayalıp dizi haline getirir
// let kullanicilar = "ahmet,mehmet,meryem,rojin".split(",")
// console.log(kullanicilar)

// let kullanicilar = prompt("Kullanıcıları boşluk bırakarak giriniz!").split(" ")
// let kazanan = kullanicilar[Math.floor(Math.random() * kullanicilar.length)]
// console.log(`Kazanan Kullanıcı : ${kazanan}`)


//? *kullanıcının girdiği kullanıcılar arasında 2 kazanan 2 yedek seçip 
//*ekrana yazdırınız
//*kazananlar = a,b,d
//*yedekler = u,ı,k


// let kullanicilar = prompt("kullaniciları boşluk bırakarak giriniz: ").split(" ");

// console.log(kullanicilar)
// let kazananlar = [];
// let yedekler = [];
// for (let i = 1; i < 3; i++) 
// {
//     let girisKullanici= kullanicilar[Math.floor(Math.random() * kullanicilar.length)]
//     kazananlar.push(girisKullanici);
// }

// for (let i = 1; i < 3; i++) 
// {
//     let girisKullanici =kullanicilar[Math.floor(Math.random() * kullanicilar.length)]
//     yedekler.push(girisKullanici);    
// }

// console.log(`Kazananlar:${kazananlar}\nYedekler:${yedekler}`)


//? *aynı uygulama üzerinden kazanan ve yedek sayılarını kullanıcı kendisi belirlesin
//*=> kullanıcı giriniz; (a b d d f g h t r e f g h)
//*=> kaç kişi kazanan olsun; (2)
//*=> kaç kişi yedek olsun; (3)


// let kullanicilar =prompt("kullanıcıları boşluk bırakarak giriniz :").split(" ");
// let kazananSayisi = +prompt("Kaç adet kazanan olsun: ");
// let yedekSayidi = +prompt("Kaç adet yedek olsun: ");

// let kazananlar =[];
// let yedekler =[];

// for (let i = 1; i <= kazananSayisi; i++) 
// {
//     let kazananListesi = kullanicilar[Math.floor(Math.random() * kullanicilar.length)]
//     kazananlar.push(kazananListesi)  
// }


// for (let i = 1; i <= yedekSayidi; i++) 
// {
//     let yedekListesi =kullanicilar[Math.floor(Math.random() * kullanicilar.length)]
//     yedekler.push(yedekListesi)
// }

// console.log(`Kazananlar : ${kazananlar}`)
// console.log(`Yedekler : ${yedekler}`)



//? * bir çekiliş uygulaması yapınız
//* kullanıcıdan boşluklarla kullanıcıları alınız
//* kaç adet kazanan ve yedek olduğunu kullanıcı belirlesin
//* kazanan ve yedek toplamı toplam kullanıcı sayısını geçemez!
//* kazanan kişi veya kişiler yedek olamaz
//* yedek olan kişi veya kişiler kazanan olamaz


let kullanicilar =prompt("Kullanıcıları boşluk bırakarak giriniz : ").split(" ");
let kazananSayisi =+prompt("kaç adet kazanan olsun:");
let yedekSayisi =+prompt("kaç adet yedek olsun: ");

let kazananListesi = [];
let yedekListesi = [];

for (let i = 1; i <= kazananSayisi; i++) 
{
    let kazananlar =kullanicilar[Math.floor(Math.random() * kullanicilar.length)]
    kazananListesi.push(kazananlar);    
}

for (let i = 1; i <= yedekSayisi; i++) 
{
    let yedekler =kullanicilar[Math.floor(Math.random() * kullanicilar.length)]
    yedekListesi.push(yedekler);    
}

console.log(kullanicilar)
console.log(`Kazananlar :${kazananListesi}`)
console.log(`Yedekler :${yedekListesi}`)
