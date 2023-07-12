//ÖDEVLER

//*girilen iki sayının hangisinin büyük olduğunu bulunuz, eşitse "2 sayı eşittir"

// let sayi1 = +prompt("Birinci sayıyı Giriniz: ")
// let sayi2 = +prompt("İkinci sayıyı Giriniz: ")

// if(sayi1 = sayi2)
// {
//     prompt("Sayilar birbirine eşittir")
// }
// else if(sayi1>sayi2 )
// {
//     prompt(`${sayi1} ${sayi2} den büyüktür. `)
// }
// else
// {
//     prompt(`${sayi2} ${sayi1} den büyüktür. `)
// }




//*girilen sayının kaç basamaklı olduğunu bulun

// let sayi = +prompt("Bir sayi giriniz: ")
// if (sayi < 10)
// {
//     console.log(`${sayi} tek basamaklı sayıdır.`)
// }
// else if(sayi>10 && sayi<100)
// {
//     console.log(`${sayi} iki basamaklı sayıdır.`)
// }
// else if(sayi>=100 && sayi<1000)
// {
//     console.log(`${sayi} üç basamaklı sayıdır.`)
// }
// else{
//     console.log(`${sayi} Çok büyük tanımlanmadı`)
// }



//*100lük sistemde girilen notu 5lik sisteme çevirin (87 => 5)

// let ortalama = +prompt("Ortalamanızı Giriniz: ")

// if (ortalama>=0 && ortalama <20)
// {
//     console.log("Karne notunuz : 0")    
// }
// else if(ortalama>=20 && ortalama<30)
// {
//     console.log("Karne notunuz : 1")
// }
// else if(ortalama>=30 && ortalama<45)
// {
//     console.log("Karne notunuz : 2")
// }
// else if(ortalama>=45 && ortalama<70)
// {
//     console.log("Karne notunuz : 3")
// }
// else if(ortalama>=70 && ortalama<85)
// {
//     console.log("Karne notunuz : 4")
// }
// else if(ortalama>=85 && ortalama<10)
// {
//     console.log("Karne notunuz : 5")
// }
// else{
//     console.log("0-100 arasında değer giriniz.")
// }

//*alınan iki sayının girilen harfe göre dört işlem yapan uygulamayı yazınız
//* örn =  toplama = t

// let sayi1 = +prompt("1. Sayıyı Giriniz: ")
// let sayi2 = +prompt("2. Sayıyı Giriniz: ")

// let secim = prompt("Yapmak istediğiniz işlemi seçiniz(+,-,*,/): ")

// if (secim == "+")
// {
//     console.log(`${sayi1} + ${sayi2} :`, sayi1 + sayi2)    
// }
// else if(secim == "-")
// {
//     console.log(`${sayi1} - ${sayi2} :`, sayi1 + sayi2)
// }
// else if(secim == "*")
// {
//     console.log(`${sayi1} * ${sayi2} :`, sayi1 + sayi2)
// }
// else if(secim == "/")
// {
//     console.log(`${sayi1} / ${sayi2} :`, sayi1 + sayi2)
// }
// else
//     console.log("Yanlış bir seçim yaptınız.")




//*Kullanıcıya sinema ya da tiyatro tercihi sorulsun.
//*Sinema izlemek için 50 TL,
//*tiyatro için 100 TL ödenmesi gerekmedir.
//*Öğrencilere % 50 indirim yapıldığı düşünülerek
//*öğrenci ise indirim yapılan
//*öğrenci değilse indirimsiz tutarı
//*hesaplayarak ekrana yazdıran kodu yazınız.

// let tercih =prompt("Sinema mı yoksa Tiyatroya mı gitmek istiyorsunuz (sinema/tiyatro) : ")
// let sinema = 50;
// let tiyatro = 100;
// let ogrenciDurum =prompt("Öğrencimisiniz(evet/hayır): ")

// if (tercih=="sinema" && ogrenciDurum=="evet")
// {
//     console.log("Ödenecek tutar : ", sinema/2)
// }
// else if (tercih=="sinema" && ogrenciDurum=="hayır")
// {
//     console.log("Ödenecek tutar : ", sinema)
// }
// else if (tercih=="tiyatro" && ogrenciDurum=="evet")
// {
//     console.log("Ödenecek tutar : ", tiyatro/2)
// }
// else if (tercih=="tiyatro" && ogrenciDurum=="hayır")
// {
//     console.log("Ödenecek tutar : ", tiyatro)
// }
// else
//     console.log("Secim ya yazım yanlışı yaptınız.Tekrar deneyiniz...")




//*bir sisteme girişte or kullanarak kullanıcı adı veya şifre yanlışsa
//*ekrana "kullanıcı adı veya şifre yanlış" yazdırınız


// let kAdi = "admin";
// let sifre = "1234";

// let giriskAdi = prompt("Kullanıcı adını giriniz: ");
// let girilensifre = prompt("Şire giriniz: ");

// if (kAdi == giriskAdi && sifre==girilensifre)
// {
//     console.log("Giriş başarılı.Tebrikler...")
// }
// else if (kAdi != giriskAdi || sifre1 != girilensifre) {
//     console.log("Kullanıcı adı veya şifreniz hatalı.Tekrar deneyiniz.")
// }





//*Kullanıcının girdiği 3 sayının en büyük sayısını bulun

// let sayi1 = +prompt("1. Sayıyı Giriniz: ")
// let sayi2 = +prompt("2. Sayıyı Giriniz: ")
// let sayi3 = +prompt("3. Sayıyı Giriniz: ")

// if (sayi1>sayi2 && sayi1>sayi3)
// {
//     console.log("en büyük sayi : ",sayi1)
// }
// else if(sayi2>sayi1 && sayi2>sayi3)
// {
//     console.log("En büyük sayi : ",sayi2)
// }
// else if(sayi3>sayi1 && sayi3>sayi2)
// {
//     console.log("En büyük sayi : ",sayi3)
// }
// else
//     console.log("Eşit olan sayılar var")





//*kullanıcıdan bir şifre ve kullanıcı adı oluşturmasını isteyiniz
//*eğer kullanıcı adı veya şifre en az 8 karakterden oluşuyorsa
//*"hatalı kullanım" yazdırınız değilse "kayıdınınız oluşturuldu" yazınız


// let kAdi =prompt("Kullanıcı adını giriniz: ")
// let sifre =prompt("sifre giriniz: ")

// if (kAdi.length < 8 || sifre.length < 8)
// {
//     if (kAdi.length < 8) {
//         console.log("Kullanıcı adı en az 8 karakterden oluşmalıdır")
//     }
//     else
//         console.log("Şifre en az 8 karakterden oluşmalıdır")
// }
// else
//     console.log("Tebrikler kaydınız oluşmuştur.")





//*Bir kişi mağazadan 100 TL ve üzeri alışveriş yaparsa %10 indirim, 200 TL ve üzeri alışveriş
//*yaparsa *%15 indirim, 300 TL ve üzeri alışveriş yaparsa %20
//*indirim kazandığını ve ödeyeceği miktarı ekrana yazınız



// let tutar =+prompt("Alışveriş tutarını giriniz: ")

// if (tutar>100 && tutar<200)
// {
//     tutar = tutar - (tutar*0.10)
//     console.log(`%10 indirim tanımlandı ödenecek tutar: ${tutar}`)
// }
// else if(tutar>200 && tutar<300)
// {
//     tutar = tutar - (tutar*0.15)
//     console.log(`%15 indirim tanımlandı ödenecek tutar: ${tutar}`)
// }
// else if(tutar>300)
// {
//     tutar = tutar - (tutar*0.20)
//     console.log(`%20 indirim tanımlandı ödenecek tutar: ${tutar}`)
// }
// else
//     console.log(`indirim tanımlanmadı ödenecek tutar: ${tutar}`)





//*basit bir bankamatik uygulaması oluşturunuz
//*kullanıcıdan bir şifre alınız şifre doğru olduğu taktirde işlemler alanlarına yöneltilsin
//*para çekme ve para yatırma işlemleri yapılsın


let sifre = "1234";
let bakiye = 500;

let girilenSifre=prompt("Sifre giriniz: ")

if( sifre==girilenSifre)
{
    let secim =prompt("Giriş başarılı. Yapmak istediğiniz işlemi seçiniz (para çekme:0 / para yatırma:1) : ")
    if (secim == "0") 
    {
        let cekTutar =+prompt("Çekilecek tutrarı giriniz : ")
        if (cekTutar>bakiye)
        {
            alert("F A K İ R");    
        }
        else
        {
            let kalanBakiye = bakiye - cekTutar
            console.log(`Para çekme işlemi tamamladı. Kalan bakiyeniz: ${kalanBakiye}`)
        }
    }

    else if(secim == "1")
    {
        let yatırılanTutar =+prompt("Yatırmak istediğiniz tutarı giriniz: ")
        let toplamBakiye = bakiye + yatırılanTutar;
        console.log(`Para yatırma işelminiz tamamlandı. Toplam bakiyeniz: ${toplamBakiye}`)
    }

    else
        console.log("Yapmak istediğiniz işlem yanlış tekrar deneyin.")
}
else
    console.log("Şifreniz hatalı. Tekrar deneyiniz")
