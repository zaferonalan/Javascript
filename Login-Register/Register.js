document.querySelector(".kayitOl").addEventListener("click",function(){
    let girilenKadi = document.querySelector(".girilenKadi").value
    let girilenSifre = document.querySelector(".girilenSifre").value
    let girilenSifreTekrar = document.querySelector(".girilenSifreTekrar").value
    let registerCheck = document.querySelector(".registerCheck")

    if (girilenSifre == girilenSifreTekrar) 
    {
        let kullanicilar = JSON.parse(localStorage.getItem("kullanicilar")) || [] //kullanicilar adında bir obje çek ya da boş bir dizi dön 
        kullanicilar.push({
        kadi: girilenKadi,
        sifre: girilenSifre,
        })

        localStorage.setItem("kullanicilar",JSON.stringify(kullanicilar)) // kullanicilar adında key oluşturup value'ye girdiğimiz değerleri atadık

        let goLogin = "login.html"
        registerCheck.innerHTML= `Kayıt İşlemi Başarılı! <a href="${goLogin}">Giriş Yap</a>`    
    }
    else
    {
        registerCheck.innerHTML="Girdiğiniz Şifreler Uyuşmadı!"
    }
})