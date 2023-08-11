//localStorage.setItem("bakiye","500")    
let bakiye = JSON.parse(localStorage.getItem("bakiye"))
function getBakiye()
{
    document.querySelector(".bakiye").innerHTML=
    `
        <b>Bakiyeniz: ${bakiye} ₺</b>
    `
}
document.addEventListener("DOMContentLoaded",getBakiye())

// let islemGecmisi = []
// localStorage.setItem("islemGecmisi",JSON.stringify(islemGecmisi))
let islemGecmisi = JSON.parse(localStorage.getItem("islemGecmisi"))
document.querySelector(".islemYapbtn").addEventListener("click",function(){

    let islemler = document.querySelector(".islemler").value
    let islemTutar = +document.querySelector(".islemTutar").value // Number veri türünde çektik

    if (islemler == "Para Çek") 
    {
        if (islemTutar <= bakiye) 
        {
            bakiye -= islemTutar
            localStorage.setItem("bakiye",bakiye)
            islemGecmisi.push({
                YapilanIslemTutar:islemTutar,
                YapilanIslem:"para çek",
                Bakiye:bakiye
            })

            localStorage.setItem("islemGecmisi",JSON.stringify(islemGecmisi))
            getBakiye()
        }
        else
        {
            let message = document.querySelector(".alert-danger")
            message.style.display="block"
            message.innerHTML=`Hesabınızda ${bakiye} ₺ bulunmaktadır. `
        }
    }

    else if (islemler == "Para Yatır") 
    {
        bakiye+=islemTutar
        localStorage.setItem("bakiye",bakiye)
        islemGecmisi.push({
            YapilanIslemTutar:islemTutar,
            YapilanIslem:"Para Yatır",
            Bakiye:bakiye
        })

        localStorage.setItem("islemGecmisi",JSON.stringify(islemGecmisi))
        getBakiye()
    }

    else{
        let message = document.querySelector(".alert-danger")
        message.style.display="block"
        message.innerHTML=`Lütfen Seçim Yapınız`
    }
    
})