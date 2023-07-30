document.querySelector(".girisYap").addEventListener("click",function(){
    let girilenKadi = document.querySelector(".girilenKadi").value
    let girilenSifre = document.querySelector(".girilenSifre").value
    let kullanicilar = JSON.parse(localStorage.getItem("kullanicilar"))

    let girisKontrol = false
    for (const element of kullanicilar) {
        if(girilenKadi==element.kadi && girilenSifre==element.sifre){
            girisKontrol = true
            break;
        }
    }  

    if (girisKontrol == true) 
    {
        window.location.href="index.html"
        localStorage.setItem("giriskontrol",true)
    }
    else
    {
        document.querySelector(".errorAut").innerHTML="Kullanıcı Adı veya Şifre Hatalı!"
        localStorage.setItem("girisKontrol",false)
    }
})
