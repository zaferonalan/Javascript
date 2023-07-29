let hesapMakBtn = document.querySelectorAll(".hesapMakBtn")
let cikti = document.querySelector(".cikti")

hesapMakBtn.forEach(element=>{
    element.addEventListener("click",function()
    {
        if (element.innerHTML=="clear") 
        {
            cikti.value=""
            document.querySelector(".sonuc").innerHTML="Sonuc: "
        }
        else if (element.innerHTML=="hesapla") 
        {
            let sonuc = eval(cikti.value)
            document.querySelector(".sonuc").innerHTML=`Sonuc:${sonuc}`
        }
        else{
            cikti.value+=element.innerHTML
        }
    })
})