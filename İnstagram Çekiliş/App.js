document.querySelector(".cekilisBasla").addEventListener("click",function(){
    //*kazanan ve yedek sayılarını aldım
    let kazananSayisi = +document.querySelector(".kazananSayisi").value
    let yedekSayisi = +document.querySelector(".yedekSayisi").value

    //*kulllacıdan aldığım kullanıcıları diziye split ile dönüştürdüm
    let kullanicilar = document.querySelector(".kullanicilar").value
    kullanicilar = kullanicilar.split("\n")
    console.log(kullanicilar);

    //*kazananları belirledik
    let kazananlar = []
    for(let i=0;i<kazananSayisi;i++){
        let kazananIndex = Math.floor(Math.random() * kullanicilar.length)
        let kazanan = kullanicilar[kazananIndex]
        kazananlar.push(kazanan)
        kullanicilar.splice(kazananIndex,1)        
    }

    //*yedekleri belirdekik
    let yedekler = []
    for(let i=0;i<yedekSayisi;i++){
        let yedekIndex = Math.floor(Math.random() * kullanicilar.length)
        let yedek = kullanicilar[yedekIndex]
        yedekler.push(yedek)
        kullanicilar.splice(yedekIndex,1)
    }

    //*kazananları ve yedekleri yazdır
    console.log(kazananlar);
    console.log(yedekler);
    console.log("sona kalan elemanlar",kullanicilar);
})

let kazanan = document.querySelector(".kazananSayisi")
let resutl = kazananSayisi + yedekSayisi
if (kullanicilar.length < toplam) 
{
    console.log(`kazanan ve yedek sayisi ${toplam} liste sayısını geçemez ${kullanicilar.length} `);
}


//*kullanıcın klavyede boşluğa basmamasını sağladım
document.addEventListener("keydown",function(e){
    if(e.keyCode==32){
        e.preventDefault()
    }
})