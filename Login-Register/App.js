let girisKontrol = JSON.parse(localStorage.getItem("girisKontrol"))

if(girisKontrol!=true){
    window.location.href="login.html"
}