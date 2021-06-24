// Togloomiin buh gazar ashiglagdah global huvisagchdiig end zarlana.
var activePlayer, scores, roundScore;
// Shoonii zurgiig uzuuleh elemtiig DOM-oos haij olood end hadgalna.
var diceDom = document.querySelector('.dice')
// Togloomiig ehluulne
initGame();
// Togloomiig shineer ehlehed ashiglah function
function initGame(){
    activePlayer =0;
//  Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
    scores = [0, 0];
//  Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
    roundScore = 0;
// Prepare for programm
document.getElementById("score-0").textContent = '0';
document.getElementById("score-1").textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
// Toglogchdiin neriig butsaaj gargah
document.getElementById("name-0").textContent = "Player 1";
document.getElementById("name-1").textContent = "Player 2";
// Winner classiig avch hayah heregtei
document.querySelector(".player-0-panel").classList.remove('winner');
document.querySelector(".player-1-panel").classList.remove('winner');
document.querySelector(".player-0-panel").classList.add('active');
document.querySelector(".player-1-panel").classList.remove('active');

diceDom.style.display = "none";
}
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

// Ene function ni togloh eeljiig daraachiin toglogchruu shiljuulne.
function switchToNextPlayer(){
    // Toglogchiin eeljiig onoog 0 bolgono.
    roundScore = 0;
     // Toglogchiin eeljiig nuguu toglogchruu shiljuulne.
    document.getElementById("current-" + activePlayer).textContent = 0;

    //  Toglogchiiin eeljiig nuguu toglogchruu shiljuulne.
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    // Ulaan tsegiig shiljuuleh
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    // document.querySelector(".player-1-panel").classList.toggle("active");
    // Shoog tur alga bolgono.
    diceDom.style.display = "none";
}

// New Game ehluuleh tovchnii even listener.
document.querySelector('.btn-new').addEventListener('click',initGame);
