//!EVAL
//*eval stirng ifade içerisinde derlnecek bir kod varsa derleyip bize sonucu verir
// let x = "3+5"
// console.log(x);

// let y = "4*10" 
// console.log(eval(y))

// let girilenDeger = prompt("Lütfen sayı ifadesini giriniz")
// console.log(eval(girilenDeger))


//* kullanıcıdan maaşını ve zam oranını alınız. hesaplama yaparak yeni zamlı maaşı verin
//* maas * zam / 100 (zam oranı hesaplama)

// let maas = +prompt("Lütfen maaşınızı giriniz")
// let zam = +prompt("Lütfen Zam oranını giriniz (50)")
// let zamOranı = maas*zam / 100
// let yeniMaas = maas + zamOranı
// console.log(`Eski Maaşınız : ${maas}₺\nZam Miktarınız : ${zamOranı}₺\nYeni Maaşınız : ${yeniMaas}₺`);



//*klavyeden yarıçapı girilen dairenin alanını ve çevresini hesaplayınız.
  //*kullanıcıya alanı ve çevreyi verini 
  //* cevre = 2 * pi * yarıcap
  //* alan = pi * yaricap * yaricap


// let yariCap = +prompt("Yarı Çapı Giriniz")
// let pi = 3.14

// let cevre = 2 * pi * yariCap
// let alan = pi * yariCap**2

// console.log(`Çevre : ${cevre}\nAlan : ${alan}`)

//!İF ELSE (KARAR MEKANİZMALARI) => şartlara bağlı olarak programımız yön değiştirir

// if (şart){
//     //*işlenecek kod burada barındırılır
// }

// else{
//     //*işlenecek kodlar devreye girer
// }

// let yas = 16

// if(yas>18){
//     console.log("hoşgeldin!")
// }
// else{
//     console.log("Büyüdüe Gel!!!");
// }

//?ilişki Operatörleri
// console.log(10==10)
// console.log(5<4)
// console.log(6!=5)
// console.log(5>=5)
// console.log(5<=5)


//?örnek
//*kullanıcıdan aldığımız yaşa göre ehliyet alıp alamama duruma bakınız ve mesaj veriniz!

// let girilenYas = +prompt("Yaşınızı Giriniz")

// if(girilenYas>=18){
//     console.log("Tebrikler! Ehliyet Alabilirisniz");
// }
// else{
//     console.log("maalesef yaşınız tutmadı!");
// }



//Ödevler
//*kullanıcı yaşını kendisi girdiğinde reşit olup olmadığını bulalım

//*kullanıcıdan alınan 2 sayının eşit olup olmadığı kontrol edilsin

//*ortalamasını giren öğrencinin geçip geçmediği kontrol edilsin

//*girilen iki sayının hangisinin büyük olduğunu bulunuz

//*girilen sayının tekmi çiftmi olduğunu bulun

//*kullanıcıdan yaptığı alışveriş fiyatını alınız.
//*alışveriş fiyatı 100 lira altındaysa 15 TL kargo ücreti fiyata dahil edilsin
//*100 lira üstündeyse kargo ücreti alınmasın




// let alisveris = +prompt("Alışveriş fiyatını giriniz: ")
// if (alisveris > 100 )
// {
//     console.log("Alışveriş işlemi tamamlanmıştır.")
// }
// else
// {
//     let kargoucret = alisveris + 15;
//     console.log("Kargo ücreti tahsil edilmiştir.")
// }






//*üç sınav noturunu giren öğrencinin
//*ortalaması alındıktan sonra geçme durumu kontrol edilecektir

// let sınav1 = +prompt("1. Sınav notunuzu giriniz: ");
// let sınav2 = +prompt("2. Sınav notunuzu giriniz: ");
// let sınav3 = +prompt("3. Sınav notunuzu giriniz: ");

// let ort = (sınav1 + sınav2 + sınav3) / 3;

// if (ort >= 50) 
// {
//     console.log(`Ortalamanız : ${ort}. Geçtiniz.`)
// }
// else
// {
//     console.log(`Ortalamanız : ${ort}. Kaldınız.`)
// }




//*kullanıcın girdiği vize ve final notlarının ortalamanı alınız
//*vize=40% final=60%
//*vize ve final ortalaması sonucu kalan öğrencilerden büt notunuz sorunuz
//*büt notu sonucu yeniden ortalama alıp geçip kaldığını mesaj olarak veriniz!
//* vize=40% büt=60%


// let vize = +prompt("Vize notunuzu giriniz : ");
// let final = +prompt("FinalSınav notunuzu giriniz : ");

// let ortalama = (vize*0.4 + final * 0.6)/2;

// if(ortalama >= 50)
// {
//     console.log(`Ortalamanız : ${ortalama} geçtiniz.`)
// }
// else
// {
//     console.log(`Ortalamanız : ${ortalama} Kaldınız.`)

//     let but = +prompt("Kaldınız.Büt notunuzu giriniz.")

//     let yeniort = (ortalama + but) / 2;

//     if (yeniort >= 50)
//     {
//         console.log("Geçtiniz Tebrikler")
//     }
//     else
//     {
//         console.log("Malesef kaldınız.")
//     }
// }
