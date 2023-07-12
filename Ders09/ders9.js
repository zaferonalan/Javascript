//? Ödev
//? kullancııcıdan şifresini isteyiniz. bir şifre tanımlanıyız sifre="123"
//? 3 kere giriş hakkı veriniz
//? 3 kere arka arkaya yanlış şifre girerese ekrana "hesabınız bloke oldu yazdırınız"
//? doğru girdiğinde ise "hoşgeldin kullanıcı yazdırın"


// let sifre = 1234;
// for (let i = 1; i <= 3; i++) 
// {
//     let girilenSifre =+prompt("Şifrenizi giriniz: ")
//     if (girilenSifre == sifre) 
//     {
//         console.log("Hoşgeldin kullanıcı")
//         break;
//     }
//     else if (i==3) 
//     {
//         console.log("hesabınız bloke oldu")
//     }
//     else
//         alert(`${i}.hakkınız tekrar deneyin`);
// }


//? bir sayı belirtiniz ve kullanıcın bu sayıyı bilmesi için ona 5 kere sayıyı tahmin ediniz diye sorunuz => sayi=5
//? mesela kullanıcı ikinci tahmininde sayıyı bilirse ekrana "tebrikler 2. defada bildiniz yazdırınız"
//? 5 hakkı dolan kullanıcı sayıyı tahmin edemez ise ekrana "5 hakkınız doldu sayıyı bilemediniz! sayınız : 5"


// let sayi = 11;
// for (let i = 1; i <= 5; i++) 
// {
//     let tahminSayi=+prompt("1-20 kadar Sayıyı tahmin ediniz: ")
//     if (tahminSayi==sayi) 
//     {
//         console.log(`Tebrikler ${i}. defada bildiniz.`)
//         break
//     }
//     else if(i==5)
//     {
//         console.log(`5 hakkınız doldu sayıyı bilemediniz! sayınız:${sayi}`)
//     }
//     else
//     {
//         console.log(`${i}. Hakkınız Tekrar deneyin.`)
//     }
            
// }


//?iç içe for
//*bir işlemi birden fazla kez tekrar ettirmek için kullanılır

// for(let i=0;i<5;i++){
//     for(let j=0;j<2;j++){
//         console.log(j)
//     }
// }


//?map,filter,find

//*kullanıcının sepetindeki ürünlerin fiyatı bir dizide olsun
//*dizinin içerisindeki her bir fiyata 50% indirim yapılmasını sağlayıp 
//*yeni bir dizi oluşturunuz
//indirimliSepet = [50,100,75,25,35] => böyle olacak


// let sepet = [100, 200, 150, 50, 70]

// let indirimSepet =[];

// for (let i = 0; i < sepet.length; i++) 
// {
//     let indirimliFiyat = sepet[i] * 0.50;
//     indirimSepet.push(indirimliFiyat);    
// }

// console.log(indirimSepet)


//!map() => dizideki her elemanı gezer ve istenilen özelliği elemana ekleyip yeni bir dizi yaratır

// let sepet = [100, 200, 150, 50, 70];
// let indirimSepet = sepet.map(element => element * 0.50 )
// console.log(indirimSepet)


//* ["zafer","meryem","merve","onay","zerrin"] dizisindeki elemanların karakter uzunluğunu bulup
//* bir dizide toplayın! => [5,6,6,5]

// let eleman=["zafer","meryem","merve","onay","zerrin"];
// let elemanUzn=eleman.map(value => value.length)
// console.log(elemanUzn);


//* ["kırmıızı","turuncu","gri","mavi"] => bu dizideki bütün elemanları yeşile çeviriniz
//* ["yeşil","yeşil","yeşil","yeşil"]

// let color=["kırmızı","turuncu","gri","mavi"]
// let newColor=color.map(value => value="yeşil")
// console.log(newColor);


//?fiter() => fitrleme yapar (dizi,obje)

//* let fiyatlar = [120,45,25,65,70,250,345] 
//*=> 100liranın üzerinde olan fiyarları bir dizide toplayınız
//* [120,250,354]


// let fiyatlar = [120, 45, 25, 65, 70, 250, 345];
// let yeniFiyat =[];
// for (let i = 0; i < fiyatlar.length; i++) 
// {
//     if (fiyatlar[i]>100) 
//     {
//         yeniFiyat.push(fiyatlar[i])
//     }    
// }
// console.log(yeniFiyat);



//?filter kullanarak yapalım!

// let fiyatlar =[120, 45, 25, 65, 70, 250, 345];
// let yeniFiyatlar=fiyatlar.filter(value => value>=100)
// console.log(yeniFiyatlar);


//*çalışanların olduğu bir obje oluşturunuz! ad,soyad,yas
//*yas 18'den büyük olanları filtreleyiniz

// let calisanlar = 
// [
//     {
//         ad: "zafer günay",
//         soyad: "önalan",
//         yas:25
//     },

//     {
//         ad: "merve",
//         soyad: "önalan",
//         yas: 23
//     },

//     {
//         ad: "arda",
//         soyad: "Önalan",
//         yas: 17
//     },

//     {
//         ad: "arya",
//         soyad: "önalan",
//         yas: 16
//     },

//     {
//         ad: "zerrin",
//         soyad: "önalan",
//         yas: 31
//     }
// ]

// let yetiskin = calisanlar.filter(value => value.yas>=18)
// console.log(yetiskin);



// let urunler = [
//     {
//         urunAdi:"elma",
//         urunFiyati:2,
//         urunKategori:"meyve"
//     },
//     {
//         urunAdi:"armut",
//         urunFiyati:5,
//         urunKategori:"meyve"
//     },
//     {
//         urunAdi:"cips",
//         urunFiyati:4,
//         urunKategori:"atıştırmalık"
//     },
//     {
//         urunAdi:"fasulye",
//         urunFiyati:8,
//         urunKategori:"bakliyat"
//     },
// ]

// let meyveler = urunler.filter(value => value.urunKategori=="meyve")
// console.log(meyveler)


//?find() => yapısı aynı filter gibi çalışır, fakat en büyük farkı ürünleri tek tek gezerken değeri bulurbulmaz artık aramayı sonlandırır!

// let urunler = 
// [
//     {
//         urunAdi:"elma",
//         urunFiyati:2,
//         urunKategori:"meyve",
//         barkotNo:123
//     },
//     {
//         urunAdi:"armut",
//         urunFiyati:5,
//         urunKategori:"meyve",
//         barkotNo:345,
//     },
//     {
//         urunAdi:"cips",
//         urunFiyati:4,
//         urunKategori:"atıştırmalık",
//         barkotNo:678,
//     },
//     {
//         urunAdi:"fasulye",
//         urunFiyati:8,
//         urunKategori:"bakliyat",
//         barkotNo:910,
//     },
// ]

// let istenenBarkod = urunler.find(x=> x.barkotNo == 345)
// console.log(istenenBarkod);
