//* Şifreyi Göster-Gizle yapıldı
let showPass = document.querySelector(".showPass")
let passwordText = document.querySelector(".passwordText")

showPass.addEventListener("click",function(){
    let loginPassword = document.querySelector(".loginPassword")
    if (showPass.checked) 
    {
        loginPassword.type="input"
        passwordText.innerHTML="Şifreyi Gizle"
    }
    else{
        loginPassword.type="password"
        passwordText.innerHTML="Şifreyi Göster"
    }
})


// localStorage.setItem("sifre","1234")

let girisHakki = 3
document.querySelector(".girisBtn").addEventListener("click",function(){
    
    let loginPassword = document.querySelector(".loginPassword").value
    let dbPassword = localStorage.getItem("sifre")
    let alertMessage = document.querySelector(".alert-danger")

    if (loginPassword ==dbPassword) 
    {
        window.location.href="islemler.html"    
    }
    else
    {
        girisHakki--
        if (girisHakki <= 0) 
        {
            document.querySelector(".girisBtn").disabled = true
            document.querySelector(".girisBtn").style.opacity =".5"
            document.querySelector(".loginPassword").value="" 
            alertMessage.innerHTML="Hakkınız Doldu"
            return;  
        }

        document.querySelector(".loginPassword").value=""
        alertMessage.style.display="block"
        alertMessage.innerHTML=`Şifreniz Hatalı Kalan Hakkınız ${girisHakki}`
    }
})