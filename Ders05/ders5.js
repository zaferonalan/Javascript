//*kullanıcı yaşını kendisi girdiğinde reşit olup olmadığını bulalım
// let girilenYas= +prompt("Lütfen Yaşınızı Giriniz")
// if(girilenYas>=18){
//     console.log("Reşitsiniz")
// }
// else{
//     console.log("Reşit Değilsiniz!");
// }

//*kullanıcıdan alınan 2 sayının eşit olup olmadığı kontrol edilsin

// let girilenSay1 = +prompt("1. Sayıyı Giriniz")
// let girilenSay2 = +prompt("2. Sayıyı Giriniz")
// if(girilenSay1==girilenSay2){
//     console.log(`${girilenSay1} sayısı ile ${girilenSay2} sayısı eşittir`);
// }
// else{
//     console.log(`${girilenSay1} sayısı ile ${girilenSay2} sayısı eşit değildir`);
// }

//?örnek
// let girilenSayi = +prompt("sayi giriniz")
// console.log(girilenSayi) //NaN => number değil 

//*ortalamasını giren öğrencinin geçip geçmediği kontrol edilsin
// let ortalama = +prompt("Ortalamanızı Giriniz")
// if(ortalama>=50){
//     console.log(`Tebrikler Geçtiniz!`);
// }
// else{
//     console.log("Maalesef Kaldınız!");
// }

//*girilen iki sayının hangisinin büyük olduğunu bulunuz
// let girilenSay1 = +prompt("1. Sayıyı Giriniz")
// let girilenSay2 = +prompt("2. Sayıyı Giriniz")

// if(girilenSay1>girilenSay2){
//     console.log(`${girilenSay1} sayısı ${girilenSay2} sayısından büyüktür!`);
// }
// else{
//     console.log(`${girilenSay1} sayısı ${girilenSay2} sayısından küçüktür!`)
// }

//*girilen sayının tekmi çiftmi olduğunu bulun
// let girilenSayi = +prompt("Lütfen Bir Sayı Giriniiz")

// if(girilenSayi%2==0){
//     console.log(`${girilenSayi} sayısı Çifttir`);
// }
// else{
//     console.log(`${girilenSayi} sayısı Tektir`);
// }


//*kullanıcıdan yaptığı alışveriş fiyatını alınız.
//*alışveriş fiyatı 100 lira altındaysa 15 TL kargo ücreti fiyata dahil edilsin
//*100 lira üstündeyse kargo ücreti alınmasın
// let alisverisFiyat = +prompt("Lütfen Alışveriş Fiyatınızı Giriniz")

// if(alisverisFiyat<100){
//     console.log(`Kargo Bedeli Tanımlandı! Toplam Ödenecek Tutar : ${alisverisFiyat+15}₺! ${100-alisverisFiyat}₺'lik Alışveriş fiyatında kargo bedava!`)
// }
// else{
//     console.log(`Kargo Ücretsiz! Toplam Ödenecek Tutar : ${alisverisFiyat}`)
// }

//*üç sınav noturunu giren öğrencinin
//*ortalaması alındıktan sonra geçme durumu kontrol edilecektir

// let girilenSin1 = +prompt("1. sınavi giriniz")
// let girilenSin2 = +prompt("2. sınavi giriniz")
// let girilenSin3 = +prompt("3. sınavi giriniz")

// let ortalama = (girilenSin1+girilenSin2+girilenSin3) / 3
// if(ortalama>=50){
//     console.log(`Ortalamanız : ${ortalama.toFixed(2)}! Tebrikler geçtiniz`); //toFixed(2) => virgülden sonra kaç basamak almak isterseniz parantez içerisine rakamı yazmalısın
// }
// else{
//     console.log(`Ortalamanız : ${ortalama.toFixed(2)}! Maalesef kaldınız`);
// }


//*kullanıcın girdiği vize ve final notlarının ortalamanı alınız
//*vize=40% final=60%
//*vize ve final ortalaması sonucu kalan öğrencilerden büt notunuz sorunuz
//*büt notu sonucu yeniden ortalama alıp geçip kaldığını mesaj olarak veriniz!
//* vize=40% büt=60%

// let vize = +prompt("vize notunuzu giriniz : ")
// let final = +prompt("final notunuzu giriniz : ")

// let ortalama = vize*0.4 + final*0.6

// if(ortalama<50){
//     let but = +prompt(`Vize ve final Ortalaman : ${ortalama.toFixed(2)}, maalsef Kaldın! Büt Notunuzu Giriniz!`)
//     ortalama = vize*0.4 + but*0.6
//     if(ortalama>50){
//         console.log(`Büt İle Geçtiniz! Ortalamanız : ${ortalama}`)
//     }
//     else{
//         console.log(`Kaldın! Ortalamanız : ${ortalama}`)
//     }
// }
// else{
//     console.log(`Büte Gerek Kalmadı! Geçtiniz, Ortalamnız : ${ortalama}`);
// }



//!ELSE İF
// let ay = "ocak"

// if(ay=="haziran"){
//     console.log("yaz mevsimindesiniz");
// }
// else if(ay=="ocak"){
//     console.log("Kış Mevsimindesiniz");
// }
// else if(ay=="eylül"){
//     console.log("Sonbahar Mevsimdesiniz");
// }
// else{
//     console.log("hatalı giriş!");
// }






//!ÖDEVLER
//*girilen iki sayının hangisinin büyük olduğunu bulunuz, eşitse "2 sayı eşittir"

//*girilen sayının kaç basamaklı olduğunu bulun

//*100lük sistemde girilen notu 5lik sisteme çevirin (87 => 5)

//*alınan iki sayının girilen harfe göre dört işlem yapan uygulamayı yazınız
//* örn =  toplama = t

//*Kullanıcıya sinema ya da tiyatro tercihi sorulsun.
//*Sinema izlemek için 50 TL,
//*tiyatro için 100 TL ödenmesi gerekmedir.
//*Öğrencilere % 50 indirim yapıldığı düşünülerek
//*öğrenci ise indirim yapılan
//*öğrenci değilse indirimsiz tutarı
//*hesaplayarak ekrana yazdıran kodu yazınız.

//*bir sisteme girişte or kullanarak kullanıcı adı veya şifre yanlışsa
//*ekrana "kullanıcı adı veya şifre yanlış" yazdırınız

//*Kullanıcının girdiği 3 sayının en büyük sayısını bulun

//*kullanıcıdan bir şifre ve kullanıcı adı oluşturmasını isteyiniz
//*eğer kullanıcı adı veya şifre en az 8 karakterden oluşuyorsa
//*"hatalı kullanım" yazdırınız değilse "kayıdınınız oluşturuldu" yazınız

//*Bir kişi mağazadan 100 TL ve üzeri alışveriş yaparsa %10 indirim, 200 TL ve üzeri alışveriş
//*yaparsa *%15 indirim, 300 TL ve üzeri alışveriş yaparsa %20
//*indirim kazandığını ve ödeyeceği miktarı ekrana yazınız

//*basit bir bankamatik uygulaması oluşturunuz
//*kullanıcıdan bir şifre alınız şifre doğru olduğu taktirde işlemler alanlarına yöneltilsin
//*para çekme ve para yatırma işlemleri yapılsın