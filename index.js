const harflerTurkce= ["A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z"];

const btnYeniOyun = document.getElementById("btnBasla");
const harfler = Array.from(document.getElementsByClassName("harfBtn"));
const harfA = document.getElementById("A");


let soruKelimesi = "";

const kelimeler = ["bardak", "çatal", "kaşık", "elma", "armut"];

harfler.forEach((harf) => {
    harf.addEventListener('click', (e) => {
        //if harf.dataset["harf"] 
        const seciliHarf = e.target;
        console.log(seciliHarf.dataset['harf']);
        //Harf soruda varsa
        if (soruKelimesi.includes(seciliHarf.dataset['harf'])) {


            return;
        } 
        //Harf soruda yoksa
        

    });
});


btnYeniOyun.addEventListener("click" , function(){
    //Oyun devam ediyorsa sor

    //Yeni kelime belirle
    soruKelimesi = kelimeler[Math.floor(Math.random() * kelimeler.length)];
    soruKelimesi = soruKelimesi.toLocaleUpperCase();
    console.log(soruKelimesi);
    //Ekranı ayarla
    
    //Harfleri sıfırla


})

