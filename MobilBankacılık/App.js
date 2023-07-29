let showPass = document.querySelector(".showPass")
let passwordText = document.querySelector(".passwordText")

showPass.addEventListener("click",function(){
    let loginPassword = document.querySelector(".loginPassword") 
    if(showPass.checked){
        loginPassword.type="input"
        passwordText.innerHTML="Şifreyi Gizle"
    }
    else{
        loginPassword.type="password"
        passwordText.innerHTML="Şifreyi Göster"
    }
})