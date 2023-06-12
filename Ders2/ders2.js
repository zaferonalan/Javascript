//!değişken veri türleri
//*stirng (metinsel veri türleri)
//?metinsel veri türleri tırnak içerisinde yazılır

// let isim = "zafer"
// console.log(isim)

// let yas = "24"
// console.log(yas);

//?string ifadede toplama

// let isim = "zafer";
// let soyİsim = "Önalan";
// console.log(isim + " " + soyİsim);

// let isim = "Zafer"
// let yas = "25"
// console.log(isim,yas)


//*number (sayılsal veri türleri)

// let yas = 25;
// let sayString = "26"
// console.log(yas,sayString);


// let sayi1 = 20;
// let sayi2 = 40;
// console.log(sayi1 + sayi2);


// let sayi1 = "10";
// let sayi2 = 20;
// console.log(sayi1+sayi2)

//*float (sayısal ifadeler fakat ondalıklı yani virgüllü)

// let kdv = 2.8;
// console.log(kdv) 


//*boolean (true/false)
// let sepetteEklemi = true //false
// console.log(sepetteEklemi)


//*array (dizi - toplu veri anlamına gelir)
// let kullanicilar = "ahmet","mehmet","meryem","semra" //!HATA

// let meyveler = ["elma" , "armut" , "kavun" , "kivi" , "kiraz" , "elma"];

//?index numarasına göre veri ayıklama

// let arabalar = ["mercedes" , "bmw", "ferari","fiat","renault"];
// let renkler = ["kırmızı", "sarı" , "gri", "turuncu", "siyah"];

// console.log(arabalar[2])
// console.log(renkler[1])


//*object (veri tutan bir yapıya sahiptir,key ve valuelardan oluşur)

// let kullanici = {
//     ad:"zafer günay",
//     soyad:"Önalan",
//     yas:25,
//     askerlik:false
// }

// console.log(kullanici);

//*objeden veri çekmek

// let kullanici = {
//     ad:"Merve",
//     soyad:"Önalan",
//     yas:22,
//     askerlik:false
// };
// console.log(kullanici.ad,kullanici.soyad);

//?birden fazla kullanıcı veri tutulması
//?birden fazla kullunaıcı verisi bu şekilde tutulamaz! bunun için bir diziye ihtiyaç vardır

// let kullanicilar = {
//     ad:"mehmet",
//     soyad:"coban",
//     ad:"burak",
//     soyad:"yalcin",
//     ad:"bayram",
//     soyad:"ünlü"
// }
// console.log(kullanicilar)

// let kullanicilar = [{ad:"Zafer" ,soyad:"Önalan"},{ad:"merve", soyad:"Önalan"}];
// console.log(kullanicilar)

// let kullanicilar = [
//     {
//         ad:"Zafer Günay",
//         soyad:"Önalan",
//         cinsiyet:"E"
//     },

//     {
//         ad:"Merve",
//         soyad:"Önalan",
//         cinsiyet:"K"
//     },

//     {
//         ad:"Zerrin",
//         soyad:"Önalan",
//         cinsiyet:"K"
//     }
// ]
// console.log(kullanicilar[0].ad,kullanicilar[0].soyad);


//!VERİ YAZDIRMA YÖNTEMLERİ
//?console.log()
// let isim = "zafer"
// console.log(isim)

//?document()
// document.write("selam sayfama hoşgeldin!")

//?alert()
// alert("burası bir mesaj kutusu!")

// let isim = "zafer önalan"
// alert("hoşgeldin!"+isim)