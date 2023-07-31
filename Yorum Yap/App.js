document.querySelector(".yorumYap").addEventListener("click",function()
{
    let kadi = document.querySelector(".kadi").value
    let mesaj = document.querySelector(".mesaj").value

    
})

//sayfa hazı olduğunda
document.addEventListener("DOMContentLoaded",function()
{
    let yorumlar = localStorage.getItem("yorumlar") || []
    if (yorumlar.length==0) 
    {
        console.log("yorumunuz bulunmamakta");    
    }
    
})