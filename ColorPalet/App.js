document.querySelector(".hexOlustur").addEventListener("click",function()
{
    function HexCreate() 
    {
        let hexSayi =("0123456789abcdef")
        let hexKodlari =("#")
        
        for (let i = 0; i < 6; i++) 
        {
            let hexKodu = hexSayi[Math.floor(Math.random() * hexSayi.length )]
            hexKodlari+=hexKodu
            
        }
        return hexKodlari
    }
    
    let box = document.querySelectorAll(".box")
    let title = document.querySelectorAll(".boxHex")

    for (let i = 0; i < 3; i++) 
    {
        let hexColor = HexCreate()
        box[i].style.background = hexColor
        title[i].innerHTML=hexColor  
    }
})