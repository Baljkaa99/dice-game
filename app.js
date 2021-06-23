//  Тоглогчийн ээлжийг хадгалх хувьсагч, 1 player = 0, 2 player = 1 гэж нэрлье.
var activePlayer = 0;

//  Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

//  Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

//  Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var diceNumber = Math.floor(Math.random() * 6) + 1;

// Prepare for programm
document.getElementById("score-0").textContent = '0';
document.getElementById("score-1").textContent = '0';

document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

var diceDom = document.querySelector('.dice')
diceDom.style.display = "none";

// Shoog shideh event listener
document.querySelector('.btn-roll').addEventListener('click', function (){
    // 1 - 6 dotorh sanamsargui neg too gargaj avna
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    // Shoonii zurgiig web deer gargaj irne.
    diceDom.style.display = "block";

    // Buusan sanamsargui toond hargalzah shoonii zurgiig web deer gargaj irne.
    diceDom.src = 'dice-' + diceNumber + '.png';

    // Buusan too ni 1 ees yalgaatai bol idevhtei Toglogchiin eeljiin onoog nemegduulne.
    if (diceNumber !== 1){
        // 1 ees yalgaatai too buulaa Buusan toog toglogchid nemj ugnu.
        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    } else{
        // 1 buusan tul toglogchiin eeljiig ene hesegt solij ugnu.

        // Ene toglogchiin eeljindee tsugluulsan onoog 0 bolgono. 
        roundScore = 0;
        document.getElementById("current-" + activePlayer).textContent = 0;

        // Toglogchiin eeljiig nuguu toglogchruu shiljuulne.

        // Herev idevhitei toglogch ni 0 baival idehvhitei toglogchiig 1 bolgo
        // Ugui bol idevhitei toglogch ni 0 bolgo.
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        // Ulaan tsegiig shiljuuleh
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");

        // Shoog tur alga bolgono.
        diceDom.style.display = "none";
    }
});
