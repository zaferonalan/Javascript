//!veri yazdırma yöntemleri
// console.log("1. veri yazdırma yöntemi");

// alert("veri yazdırma yöntemi")

// document.write("selam burada yazı yazıyor!")

// console.log("b")
// alert("a")
// document.write("c")

//!aritmetik opr.

// let say1 = 10
// let say2 = 5
// let sonuc = say1*say2
// console.log(sonuc)

//?mod alma
//*sayıların bölümünden kalanı bizlere verir
// console.log(10%3)


//?arttırma & eksiltme

// let sayi = 10
// sayi++
// console.log(sayi)

// let sayi2 = 10
// sayi2--
// console.log(sayi2)


// let sayi = 10
// sayi = sayi+1
// console.log(sayi)

// let sayi3 = 10
// sayi3 = sayi3-1
// console.log(sayi3)


// //?kısayol
// let sayi = 10
// sayi = sayi + 2 //sayi+=2
// console.log(sayi)


// let sayi = 10
// sayi+=2
// console.log(sayi)

//?İki adet değişken oluşturun ve bunlara bir sayı değerleri verin. 
//?Ardından bu iki değşkenin toplamının 1 fazlasını yazdıran bir alert oluşturun.

// let sayi1 = 10
// let sayi2 = 5
// let toplam = sayi1 + sayi2
// toplam++ 
// console.log(toplam)


//?bir değişken oluşturup değerinin 5 katını alert olarak alın.
// let sayi = 10
// sayi*=5
// console.log(sayi)

//?“Merhaba benim ismim … ve soyadım … Ben … yaşındayım” 
//?çıktısını elde etmek için 3 adet değişken kullanınız.

// let isim = "mehmet"
// let soyisim = "coban"
// let yas = 23
// console.log("Merhaba Benim Adım",isim,"ve soyadım",soyisim,"Ben",yas,"yaşındayım")

//!backtick
// let isim = "mehmet"
// let soyisim = "coban"
// let yas = 23
// console.log(`Selam ben ${isim} ve soyadım ${soyisim}. Yaşım :  ${yas}`)


// let sayi1 = 10;
// let sayi2 = 5;

// let toplam = sayi1 +sayi2;
// toplam++;
// alert(toplam);


// let ad = "zafer günay";
// let soyad = "Önalan";
// let yas = 25;

// console.log("Merhaba benim adım" + " " + ad + " soyadım" + " "+ soyad + " " + yas + " yaşındayım")






//!ödev
//*dışardan girilen ad soyad ve doğum tarihini print ile ekrana yazdır

//*kullanıcın girdiği sayının 3 katını yazdırın

//*kullanıcının girdiği sayının karesini alan program

//*girilen 3 sınavın ortalamasını alan uygulamayı yazını

//*kenar uzunluğu ve yüksekliği girilen üçgenin alanını hesaplayan programı yazınız ((k*h) / 2)

//*kısakenarın ve uzun kenarın girildiği dikdörtgenin çevresini hesaplayan programı yazınız ((kk+uk) * 2)

//* vizenin %40 finalin %60 alınarak ortalamayı ekrana yazdıran program

//*kullanıcıdan alınan kullanıcı adının karakter uzunluğunu bulunuz

//* kullanıcıdan alınan kilo ve boy ile vücut kitle indeksini hesaplayını/// kilo=50 boy=1.55 (kilo / (boy*boy))

//* kullanıcıdan alınan bir python kodunu çalıştırınız

//* kullanıcıdan maaşını ve zam oranını alınız. hesaplama yaparak yeni zamlı maaşı verin
//* maas * zam / 100 (zam oranı hesaplama)

//*klavyeden yarıçapı girilen dairenin alanını ve çevresini hesaplayınız.
  //*kullanıcıya alanı ve çevreyi verini 
  //* cevre = 2 * pi * yarıcap
  //* alan = pi * yaricap * yaricap





//*dışardan girilen ad soyad ve doğum tarihini print ile ekrana yazdır
// let name = prompt("Ad-Soyad giriniz :");
// let birtday = prompt("Dogum Tarihii Giriniz :");
// console.log(name + birtday);


//*kullanıcın girdiği sayının 3 katını yazdırın
// let number = prompt("Sayi giriniz :");
// let result = number*3;
// console.log(result);


//*kullanıcının girdiği sayının karesini alan program
// let number = prompt("Sayi giriniz :");
// let result = number*number;
// console.log(result);


//*girilen 3 sınavın ortalamasını alan uygulamayı yazını
// let number1 = +prompt("1.Sayi giriniz :");
// let number2 = +prompt("2.Sayi giriniz :");
// let number3 = +prompt("3.Sayi giriniz :");
// let result = (number1+number2+number3)/3
// console.log(result);



//*kenar uzunluğu ve yüksekliği girilen üçgenin alanını hesaplayan programı yazınız ((k*h) / 2)
// let number1 = +prompt("Üçgenin kenar uzunlugu :");
// let number2 = +prompt("Üçgenin yüksekliği :");
// let result = (number1*number2)/2;
// console.log(result);



//*kısakenarın ve uzun kenarın girildiği dikdörtgenin çevresini hesaplayan programı yazınız ((kk+uk) * 2)
// let shortEdge = Number(prompt("Dikdörgenin Kısa Kenarını Giriniz : "));
// let longEdge = Number(prompt("Dikdörtgenin Uzun Kenarını Giriniz : "));
// let result = (shortEdge + longEdge)*2;
// console.log(result);



//* vizenin %40 finalin %60 alınarak ortalamayı ekrana yazdıran program

// let vize= Number(prompt("Vize Notunu Giriniz: "));
// let final = Number(prompt("Final Notunu Giriniz: "));
// let result = Number( ((vize * 40)/100) + ((final*60)/100));
// console.log(result)



//*kullanıcıdan alınan kullanıcı adının karakter uzunluğunu bulunuz

// let tex = prompt("Metin Giriniz: ");
// let result = tex.length;
// console.log(result);


//* kullanıcıdan alınan kilo ve boy ile vücut kitle indeksini hesaplayını/// kilo=50 boy=1.55 (kilo / (boy*boy))

// let size = Number(prompt("Boyunuzu Giriniz: "));
// let weight = Number(prompt("Kilonuzu Giriniz: "));
// let result = (weight / (size * size))
// console.log(result);

//* kullanıcıdan alınan bir python kodunu çalıştırınız
// let vize= Number(prompt("Vize Notunu Giriniz: "));
// console.log(vize);



//* kullanıcıdan maaşını ve zam oranını alınız. hesaplama yaparak yeni zamlı maaşı verin
//* maas * zam / 100 (zam oranı hesaplama)

// let salary = +prompt("Maaşını Giriniz: ");
// let extra = +prompt("Zam Oranını Giriniz: ");
// let result = (salary * extra)/100;
// console.log(result);
