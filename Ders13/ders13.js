//*Ödev
//* fonksiyonun görevi => 6 haneli bir hex kodu üretmek
//*kullanıcıya prompt ile renk üretmek istermisiniz diye sorun
//*evet derse çıktı olarak ona RANDOM bir hex kodu üretin
//*hayır derse herhangi birşey üretilmeden program dursun


//*renk üretmek istermisin => evet
//*üretilen random renk => #ff067a


// function hexkodUret() 
// {
//     let degerler = ["1","2","3","4","5","6","7","8","9","0","a","b","c","d","e","f"];
//     let hexkod ="#"
    
//     for (let i = 0; i < 6; i++) 
//     {
//         let uret = degerler[Math.floor(Math.random() * degerler.length)];
//         hexkod+=uret;
//     }
    
//     return hexkod
// }

// let secim = prompt("Renk üretmek istermisiniz(e/h) ")

// if (secim == "e") 
// {
//     console.log(hexkodUret())    
// }
    



/***************************/

//? renk üretmek istermisin ? => "evet"
//? kaç adet renk üretmek istersn => 3
//? üretilen renkler => ["#f567a4","#dda78c","#ccf09a"]



// let secim = prompt("Renk üretmek istermisiniz(e/h)")


// if (secim == "e") 
// {
//     let adet =+prompt("Kaç adet renk üretmek istersiniz ")
//     console.log(hexkodUret(adet))
// }
// else
//     console.log("Üretilmedi.")

// function hexkodUret(x) 
// {   
//     let hexkodlari=[]
//     let degerler = ["1","2","3","4","5","6","7","8","9","0","a","b","c","d","e","f"]

//     for (let i = 1; i <= x; i++) 
//     {
//         let hexkodum ="#"
//         for (let j = 1; j <= 6; j++) 
//         {
//             let randomDeg = degerler[Math.floor(Math.random() * degerler.length)]
//             hexkodum+=randomDeg    
//         }
//         hexkodlari.push(hexkodum)
//     }

//     return hexkodlari
// }



//!funtion dom()

// function mesajver(){
//     alert("selam burası neos yazılım")
// }

// function basla(){
//     let say1 = +prompt("1. sayıyı giriniz :")
//     let say2 = +prompt("2. sayıyı giriniz :")
//     let sonuc = say1 + say2
//     alert(sonuc)
// }
