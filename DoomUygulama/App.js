document.querySelector(".yorumYap").addEventListener("click",function() 
{
    let kadi = document.querySelector(".kadi").value
    let mesaj = document.querySelector(".mesaj").value

    let mesajCard = document.createElement("div")
    mesajCard.className="mesajCard"

    let kadiHtml = document.createElement("h3")
    kadiHtml.innerHTML=kadi

    let mesajHTML = document.createElement("p")
    mesajHTML.innerHTML=mesaj
    
    mesajCard.append(kadiHtml,mesajHTML)
    document.querySelector(".comments").append(mesajCard)
})