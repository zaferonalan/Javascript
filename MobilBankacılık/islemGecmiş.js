let islemGecmisi = JSON.parse(localStorage.getItem("islemGecmisi"))

let islemYazdir = islemGecmisi.map(value =>
    {
        return `
            <div class"islemGecmis ${value.YapilanIslem =="para çek" ? "down" : "up"}">
                <h6>${value.YapilanIslem}</h6>
                <h6>İşlem Tutarı : ${value.YapilanIslemTutar}</h6>
                <h6>Kalan Bakiye : ${value.Bakiye}</h6>
            </div>
        `
    })

document.querySelector(".islemHTML").innerHTML=islemYazdir.join("<br>")
