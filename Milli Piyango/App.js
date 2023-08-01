document.querySelector(".oyna").addEventListener("click",function(){

    //*rastgele değerler üretildi!
    let rstRakamlar = []
    for(let i=0;i<3;i++){
        let rndRakam = Math.floor(Math.random() * 10)
        rstRakamlar.push(rndRakam)
    }
    console.log("makinenin ürettiği değerler",rstRakamlar);

    //*kullancıın girdiği değerleri elime alıyorum
    let girilenTahminler = []
    let girilenTahminlerHTML = document.querySelectorAll(".tahmin")

    for (const i of girilenTahminlerHTML) {
        girilenTahminler.push(+i.value)
    }

    for (let i = 0; i < rstRakamlar.length; i++) {
        
        let uretilenSayi= rstRakamlar[i]
        
        for (let j = 0; j < girilenTahminler.length; j++) {
            let tahminSayisi = girilenTahminler[i]
            
            if (uretilenSayi == tahminSayisi) {
                console.log(uretilenSayi,tahminSayisi);
            }
        }
    }
    
})