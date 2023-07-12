//!loops (döngüler)
//*bir işlem birden fazla kez yapılacaksa tekrar tekrar yazılmasını engeller.
//*fonksiyonel yapılan işi tekrara almak diyebiliriz

//?for döngüsü
// for(baslangicDeger;sart;arttirmaDegeri){
//     //=> işlenecek kodlar devreye girer
// }



// for (let i = 0; i < 10; i++)
// {
//     console.log("zafer günay önalan")    
// }


//*0-50 arasındaki çift sayıları bulunuz!

// for (let i = 0; i < 50; i++) 
// {
//   if (i%2 == 0) 
//   {
//       console.log(i)
//   }  
// }


//*0-100 arasında ekrana sadece 50 ve 75 sayılarını yazdırınız

// for (let i = 0; i < 100; i++) {
    
//     if (i == 50 || i == 75) 
//     {
//         console.log(i)    
//     }
// }


//*0-100 arasında 5 ve 15 e bölünen sayıları yazdıırınız!

// for (let i = 0; i < 100; i++)
// {
//     if (i%5==0 && i%15==0) 
//     {
//         console.log(i)    
//     }
    
// }


//?diziye for döngüsü ile ulaşmak

// let renkler=["kırmızı","yeşil","mavi","turuncu","siyah"]
// console.log(renkler[0]);
// console.log(renkler[1]);
// console.log(renkler[2]);
// console.log(renkler[3]);
// console.log(renkler[4]);


// let renkler = ["kırmızı","yeşil","mavi","turuncu","siyah","gri"];
// for (let i = 0; i < renkler.length; i++) 
// {
//     console.log(renkler[i])
// }


//*yandaki verilen dizinin elemanlarını for ile ekrana yazınız => [1,2,3,"a","b","c"]

// let elemanlar = [1,2,3,"a","b","c"]
// for (let i = 0; i < elemanlar.length; i++) 
// {
//     console.log(elemanlar[i])    
// }



//*=> ["ahmet","merve","meryem","zafer"]  dizisindeki son elemanı nasıl bulabiliriz

// let isimler = ["ahmet","merve","meryem","zafer"]
// console.log(isimler[isimler.length - 1])



//?objeye for döngüsü ile ulaşmak


//  let kullanicilar = 
//  [
//     {
//         isim:"mehmet",
//          sifre:123
//     },
//     {
//          isim:"burak",
//          sifre:456
//     },
//     {
//         isim:"bayram",
//         sifre:789
//     },
//  ]

//  for(let i=0;i<kullanicilar.length;i++){
//      console.log(kullanicilar[i].isim)
// }


//?diziye eleman atamak (push) => dizinin sonuna elemanı atar


// let arabalar = ["a","b","c","d"]
// arabalar.push("yeni araba") //=> diziye yeni bir eleman atar
// console.log(arabalar)



//*var olan renkler diziniz olsun => ["kırmızı","sarı","beyaz","yeşil"]
//*kullanıcıya en sevdiği rengi sorunuz => "turuncu"
//*kullanıcıdan aldığınız değeri renkler dizisi atınız.
//*son olarak bütün oluşan diziyi for ile ekrana yazdırın!


// let renkler =["kırmızı","yeşil","sarı","beyaz"]
// let sevrenk=prompt("Sevdiğiniz rengi yazınız: ");
// renkler.push(sevrenk);

// for (let i = 0; i < renkler.length; i++) 
// {
//     console.log(renkler[i])
// }