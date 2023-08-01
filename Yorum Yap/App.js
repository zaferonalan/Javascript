document.querySelector(".yorumYap").addEventListener("click",function()
{
    let kadi = document.querySelector(".kadi").value
    let mesaj = document.querySelector(".mesaj").value

    if (kadi != "" && mesaj != "") 
    {
        document.querySelector(".alert-danger").style.display="none"
        document.querySelector(".yorumDurum").style.display="none"

        let yorumlar = JSON.parse(localStorage.getItem("yorumlar")) || [];
        let atilanYorum={
        kullaniciAdi:kadi,
        kullaniciYorum:mesaj
        }
        yorumlar.push(atilanYorum)

        localStorage.setItem("yorumlar", JSON.stringify(yorumlar))
    }
    else{
        document.querySelector(".alert-danger").style.display="block"
    }

    YorumKontrol()
})

document.addEventListener("DOMContentLoaded",function()
{
    YorumKontrol();
})

function YorumKontrol() 
{
    let yorumlar = JSON.parse(localStorage.getItem("yorumlar")) || [];
    
    if (yorumlar.length > 0) 
    {
        let yorumYazdir = yorumlar.map((value) =>{
            return`
                <div class="yorumCard mt-4">
                    <h5>${value.kullaniciAdi}</h5>
                    <p>${value.kullaniciYorum}</p>
                </div>
            `
        })
        document.querySelector(".yorumlar").innerHTML=`${yorumYazdir.join("")}`
    }
    else{
        document.querySelector(".yorumDurum").innerHTML="Henüz yorumunuz yok"
    }
    
}