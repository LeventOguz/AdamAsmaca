const harflerTurkce= ["A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z"];

const btnYeniOyun = document.getElementById("btnBasla");
const grafik = document.getElementById("grafik");
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
            grafikCiz();
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
    grafikCiz();
    //Harfleri sıfırla
})


function grafikCiz(){
    let grafikTag ='<svg width="200" height="250">';
    grafikTag += '<line x1="10" y1="10" x2="10" y2="190" style="stroke:black;stroke-width:2" />';                              //taban direk uzatma
    grafikTag += '<line x1="10" y1="10" x2="80" y2="10" style="stroke:black;stroke-width:2" />';
    grafikTag += '<line x1="10" y1="190" x2="150" y2="190" style="stroke:black;stroke-width:2" />';
    grafikTag += '<line x1="80" y1="10" x2="80" y2="40" style="stroke:black;stroke-width:2" />';
    if (yanlisTahminSayisi > 0) { //kafa
        grafikTag += '<circle cx="80" cy="50" r="10" stroke="red" stroke-width="3" fill="red" />';
    };                
    if (yanlisTahminSayisi > 1) { //gövde
        grafikTag += '<line x1="80" y1="60" x2="80" y2="120" style="stroke:rgb(255,0,0);stroke-width:2" />';
    };                
    if (yanlisTahminSayisi > 2) { //kol1
        grafikTag += '<line x1="80" y1="70" x2="60" y2="90" style="stroke:rgb(255,0,0);stroke-width:2" />';
    };                
    if (yanlisTahminSayisi > 3) { //kol2
        grafikTag += '<line x1="80" y1="70" x2="100" y2="90" style="stroke:rgb(255,0,0);stroke-width:2" />';
    };                
    if (yanlisTahminSayisi > 4) { //ayak1
        grafikTag += '<line x1="80" y1="120" x2="60" y2="140" style="stroke:rgb(255,0,0);stroke-width:2" />';
    };                
    if (yanlisTahminSayisi > 5) { //ayak2
        grafikTag += '<line x1="80" y1="120" x2="100" y2="140" style="stroke:rgb(255,0,0);stroke-width:2" />';
        grafikTag += '<text x="20" y="220" fill="red">KAYBETTİNİZ!!!</text>';
    };                

    grafikTag += "</svg>";
    grafik.innerHTML = grafikTag;
    return;
}