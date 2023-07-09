//*kullancıya döngü kullanarak 3 kere hangi rengi sevdiğini sorunuz
//*sevdiği renkleri bir dizide toplayınız ve sonra renkleri ekrana yazdırınız

// let renkler=[];

// for (let i = 1; i < 4; i++) 
// {
//     let sevilenRenk=prompt(`${i}. Sevdiğiniz rengi yazınız: `)
//     renkler.push(sevilenRenk);
// }

// for (let x = 0; x < renkler.length; x++) 
// {    
//     console.log(renkler[x])   
// }


//*1den 100e kadar olan tek ve çift sayıları ayrı
//*arraylere ekleyiniz daha sonra bu iki arrayi
//*ekrana yazıdırınız


// let tek=[];
// let cift=[];

// for (let i = 0; i < 100; i++) 
// {
//     if (i%2==0) 
//     {
//         cift.push(i);    
//     }
//     else
//         tek.push(i)
// }

// console.log(`Tek sayılar : ${tek} \nÇift sayılar : ${cift}`)




//?break,countiune

// for(let i=0;i<10;i++){
//     console.log(i)
//     if(i==3){
//         break
//     }
// }


// for(let i=0;i<10;i++){
//     if(i==3){
//         break
//     }
//     console.log(i)
// }



//  for(let i=0;i<10;i++){
//      if(i==3 || i==5){
//          if(i==4){
//             break
//          }
//      }
//      console.log(i)
//  }



//*countiune (görülen yerlerde kendisinden sonra gelen kod satırlarını atlar)

//  for(let i=0;i<=5;i++)
// {
//      if(i==3){
//          continue
//      }
//      console.log(i)
// } 


// for(let i=0;i<10;i++){
//     if(i==3){
//         console.log(i)
//         continue
//         if(i==3){
//             break
//         }
//     }
// }


// for(let i=0;i<=5;i++){
//     if(i==3 || i==5){
//         console.log(i)
//         continue
//     }
//     console.log(i)
//     break
// }




// for(let i=0;i<=6;i++){
//     if(i==3 && i==5){
//         console.log(i)
//         break
//     }
//     if(i==3){
//         console.log(i)
//     }
//     console.log(i)
// }


// for(let i=3;i<=8;i++){
//     if(i==0){
//         console.log(i)
//         break
//     }
//     if(i==3 || i==5){
//         if(i==3){
//             continue
//             console.log(i)
//         }
//     }
//     console.log(i)
// }




//*renkler listesinden yeşil olaan değerlere kadar değerleri yazdırınız
// let renkler = ["kırmızı","mavi","turuncu","yeşil","gri","siyah"]


// let renkler = ["kırmızı","mavi","turuncu","yeşil","gri","siyah"];

// for (let i = 0; i < renkler.length; i++) {
//     if (renkler[i] == "yeşil") 
//     {
//         break;   
//     }
//     console.log(renkler[i])
// }



//*renkler listesinde mavi hariç bütün elemanları yazdırınız
// let renkler = ["kırmızı","mavi","turuncu","yeşil","gri","siyah"]


// let renkler = ["kırmızı","mavi","turuncu","yeşil","gri","siyah"]

// for (let i = 0; i < renkler.length; i++) 
// {    
//     if (renkler[i] == "mavi")
//     {
//         continue;    
//     }

//     console.log(renkler[i])   
// }




//?forEach,forof,forin,while

//*forEach

//  let renkler = ["kırmızı","mavi","turuncu","yeşil","gri","siyah","mavi"]
//  renkler.forEach(element => {
//      console.log(element)
//  });



// renkler.forEach(element => {
//     if(element=="mavi"){
//         console.log("mavi rengi bulundu!")
//     }
// });


//*forOf
//?doğrudan verilere ulaşıp verilerin değerleri yazar

//  let renkler = ["kırmızı","mavi","turuncu","yeşil","gri","siyah","mavi"]
//  for (const element of renkler) 
// {
//     console.log(element)
// }




//*forin
//?verilere ulaşıp verilerin index numaralarını yazdırır


// let renkler = ["kırmızı","mavi","turuncu","yeşil","gri","siyah","mavi"]
// for (const element in renkler) {
//     console.log(renkler[element])
// }




//*while => bir döngü çeşitiridir (for ile aynı işleme denk gelmektedir)
//*while döngüsü genellikle sonsuz döngüler için kullanılır


//  let i=0
//  while(i<10){
//      console.log(i)
//      i++
//  }



//?while ile sonsuz bir döngü yaratmak için true boolean değeri kullanılır

// while(true){
//     console.log("sonsuz döngü")
// } //!sonsuz döngüdür!



//*sonsuz döngüde kullanıcıya şifresini sorunuz

// while(true){
//     let girilenSifre = prompt("Lütfen Şifrenizi Giriniz")
//     if(girilenSifre=="neos"){
//         console.log("Hoşgeldin Neos");
//         break //sonsuz döngüyü break ile kırabiliriz
//     }
// }
// console.log("döngü kırıldı ama ben hala devam ediyorum");



//ÖDEV

//? kullancııcıdan şifresini isteyiniz. bir şifre tanımlanıyız sifre="123"
//? 3 kere giriş hakkı veriniz
//? 3 kere arka arkaya yanlış şifre girerese ekrana "hesabınız bloke oldu yazdırınız"
//? doğru girdiğinde ise "hoşgeldin kullanıcı yazdırın"


//? bir sayı belirtiniz ve kullanıcın bu sayıyı bilmesi için ona 5 kere sayıyı tahmin ediniz diye sorunuz => sayi=5
//? mesela kullanıcı ikinci tahmininde sayıyı bilirse ekrana "tebrikler 2. defada bildiniz yazdırınız"
//? 5 hakkı dolan kullanıcı sayıyı tahmin edemez ise ekrana "5 hakkınız doldu sayıyı bilemediniz! sayınız : 5"