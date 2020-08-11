const harflerTurkce= ["A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z"];

const btnYeniOyun = document.getElementById("btnBasla");
const harfler = Array.from(document.getElementsByClassName("harfBtn"));
const soruContainer = document.getElementById("soru-container");

let soruKelimesi = "";
let soruTahmin = "";
let kullanilmisHarfler = "";
let yanlisTahminSayisi = 0;


const kelimeler = ["bardak", "çatal", "kaşık", "elma", "armut"];

harfler.forEach((harf) => {
    harf.addEventListener('click', (e) => {
        //if harf.dataset["harf"] 
        const seciliHarf = e.target;
        console.log(seciliHarf.dataset['harf']);

        if (kullanilmisHarfler.includes(seciliHarf.dataset['harf'])) return;    //Harf önceden denenmiş
        kullanilmisHarfler += seciliHarf.dataset['harf'];                       //Tahmin edilen harflere ekle
        //Harf soruda varsa
        if (soruKelimesi.includes(seciliHarf.dataset['harf'])) {
            //Bilinen harfi görünür yap
            soruTahmin = "";
            for (let i=0; i < soruKelimesi.length; i++) {
                if (kullanilmisHarfler.includes(soruKelimesi.charAt(i))) {
                    soruTahmin += soruKelimesi.charAt(i);
                } else {
                    soruTahmin += "_";
                }
            }
            soruContainer.innerHTML = soruTahmin;
            //soruTahmin de _ kalmadıysa oyunu kazandı
            return;
        } else {    //Harf soruda yoksa
            yanlisTahminSayisi++;
            console.log(yanlisTahminSayisi);
            //Grafik çiz


            //Hakları bittiyse oyunu bitir


        }

    });
});


btnYeniOyun.addEventListener("click" , function(){
    //Oyun devam ediyorsa sor

    //Yeni kelime belirle
    soruKelimesi = kelimeler[Math.floor(Math.random() * kelimeler.length)];
    soruKelimesi = soruKelimesi.toLocaleUpperCase();
    kullanilmisHarfler = "";
    yanlisTahminSayisi = 0;
    console.log(soruKelimesi);
    //Ekranı ayarla
    soruTahmin = "";
    for (let i=0; i < soruKelimesi.length; i++){
        soruTahmin += "_";
    }
    soruContainer.innerHTML = soruTahmin;
    
    //Harfleri sıfırla


})

