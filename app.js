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
        // Ene toglogchiin eeljindee tsugluulsan onoog 0 bolgono. 
        switchToNextPlayer();
    }    
});

// Toglogchiin tsugluulj baigaa onoog uguh
document.querySelector(".btn-hold").addEventListener('click',function(){
    // Ug toglogchiin tsugluulsan eeljni onoog global onoon deer ni nemj ugnu.
    scores[activePlayer] = scores[activePlayer] + roundScore;
    // Delgets deer onoog ni uurchilnu
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
        // Ug toglogch hojson esehiig (Onoo ni 100-s ih eseh )shalgah
        if (scores[activePlayer] >= 20){
            // Yalagch gesen textig nerniih ni orond gargana
            document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
            document.querySelector(".player-" + activePlayer + "-panel").classList.add('winner');
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove('active');
        } else{
            // Toglogchiin eeljiig solino.
            switchToNextPlayer();
        }
});

// Ene functio ni togloh eeljiig daraachiin toglogchruu shiljuulne.
function switchToNextPlayer(){
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

// New Game ehluuleh tovchnii even listener.
document.querySelector('.btn-new').addEventListener('click',function(){
    alert('clicked');
});