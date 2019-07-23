let g1;
let i;
let j;
let g2 = [];

let g4;
let g5;
let parryChance;
let chooseRandomEnemy;
let parryButton = document.querySelector('.parry-btn');
let attackButton = document.querySelector('.attack-btn')
const getActions = document.querySelector('.actions');
const randomGladiator = document.querySelector('.randomGladiator');
const info = document.querySelector('.info');
const nextFightBtn = document.querySelector('.nextFight-btn');
const playAgainBtn = document.querySelector('.playAgain-Btn')
const getSpinner = document.querySelector('.spinner');
const championAlert = document.querySelector('.championAlert');
const getEnemy = document.querySelector(".enemy");


let gameManager = {
  //Functia principala cu care alegi gladiatorul
  setGameStart: function (gladiatorName) {
    this.resetPlayer(gladiatorName);
    this.setPreFight();
  },

  /* TODO 
  Balance
  CSS/Bootstrap
  Pictures
  Hp nu mai scade daca moarte gladiatorul advers XX
  NextFighter function (sa nu  poata sa fie acelasi de doua ori)
  */
  resetPlayer: function (gladiatorName) {
    //Crearea obiectului gladiator
    switch (gladiatorName) {
      case "Gannicus":
        gladiator = new Gladiator(gladiatorName, 110, 4, 5, 5, 5, 4);
        g1 = 1
        break;
      case "Agron":
        gladiator = new Gladiator(gladiatorName, 120, 5, 4, 4, 4, 4);
        g1 = 2;
        break;

      case "Crixus":
        gladiator = new Gladiator(gladiatorName, 130, 5, 4, 4, 5, 4);
        g1 = 3;
        break;

      case "Spartacus":
        gladiator = new Gladiator(gladiatorName, 110, 4, 5, 5, 5, 5);
        g1 = 4;
        break;

      case "Onomaeus":
        gladiator = new Gladiator(gladiatorName, 100, 4, 5, 5, 5, 5);
        g1 = 5;
        break;

      case "Caesar":
        gladiator = new Gladiator(gladiatorName, 100, 5, 5, 4, 5, 5);
        g1 = 6;

        break;
    }
    //Creare gladiator card
    let getInterface = document.querySelector('.interface');
    getInterface.innerHTML = `<img src="/images/${gladiatorName.toLowerCase()}.jpg" class="image-avatar" style="filter: drop-shadow(0px 5px 3px black)"><div class="card" style="width: 14rem;background-color:rgba(255, 255, 255, 0.3); color:white; filter: drop-shadow(0px 5px 3px black);"><h3>${gladiatorName}</h3>
    <p class = "health-player">Health:${gladiator.health}</br>Strength:${gladiator.strength}</br>Agility:${gladiator.agility}</br>Speed:${gladiator.speed}</br>Defense:${gladiator.defense}</br>Skill:${gladiator.skill}</p></div>`;
    randomGladiator.classList.remove('is-hidden');
    info.classList.remove('is-hidden');
  },
  //Creare arena/ceea ce se intampla dupa ce alegi un gladiator
  setPreFight: function () {
    g2.push(g1);
    let getHeader = document.querySelector(".header");
    /* let getActions = document.querySelector(".actions"); */
    let getArena = document.querySelector(".arena");
    getHeader.innerHTML = '<h1>Let The Battle Begin</h1>';
    /* getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="gameManager.setFight()">Choose a random gladiator!</a>'; */
    getArena.classList.remove('is-hidden');
    getActions.classList.remove('is-hidden');
    getHeader.classList.remove('is-hidden');

  },
  //Alegerea gladiatorului inamic
  setFight: function () {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");

    randomGladiator.classList.add('is-hidden');
    info.classList.add('is-hidden');

    //Create enemy
    let Gannicus = new enemyGladiator("Gannicus", 100, 4, 5, 5, 5, 4);
    let Agron = new enemyGladiator("Agron", 120, 5, 4, 4, 4, 4);
    let Crixus = new enemyGladiator("Crixus", 120, 5, 4, 4, 5, 4);
    let Spartacus = new enemyGladiator("Spartacus", 110, 4, 5, 5, 5, 5);
    let Onomaeus = new enemyGladiator("Onomaeus", 110, 4, 5, 5, 5, 5);
    let Caesar = new enemyGladiator("Caesar", 100, 5, 4, 4, 5, 5);


    do { chooseRandomEnemy = Math.floor(Math.random() * 6) + 1; } while (chooseRandomEnemy == g1);

    for (i = 0; i < g2.length + 1; i++) {
      for (j = 0; j < g2.length + 1; j++) {
        if (g2[i] == chooseRandomEnemy) {
          do { chooseRandomEnemy = Math.floor(Math.random() * 6) + 1; } while (g2[i] == chooseRandomEnemy);
        }
        if (g2[j] == chooseRandomEnemy) {
          do { chooseRandomEnemy = Math.floor(Math.random() * 6) + 1; } while (g2[j] == chooseRandomEnemy);
        }
      }
    };



    switch (chooseRandomEnemy) {
      case 1:
        enemy = Gannicus;
        break;
      case 2:
        enemy = Agron;
        break;
      case 3:
        enemy = Crixus;
        break;
      case 4:
        enemy = Spartacus;
        break;
      case 5:
        enemy = Onomaeus;
        break;
      case 6:
        enemy = Caesar;
        break;
    }
    g2.push(chooseRandomEnemy);
    getHeader.innerHTML = '<h2>Let the enemy\'s blood stain the sand !</h2>';
    /* getActions.innerHTML = '<button class="btn btn-outline-dark attack-btn" onclick="playerMoves.calcAttack()">Attack!</button></br>'; */

    attackButton.classList.remove('is-hidden');
    nextFightBtn.classList.add('is-hidden');

    if (gladiator.speed <= enemy.speed) {
      this.srcParryChance();
    }
    getEnemy.innerHTML = `<img src="/images/${enemy.enemyGladiator.toLowerCase()}.jpg" style="filter: drop-shadow(0px 5px 3px black)" class="image-avatar"><div class="card" style="width: 14rem;background-color:#F05D5E; color:white; filter: drop-shadow(0px 5px 3px black)">
    <h3>${enemy.enemyGladiator}</h3>
    <p class="health-enemy">Health:${enemy.health}</br>Strength:${enemy.strength}</br>Agility:${enemy.agility}</br>Speed:${enemy.speed}</br>Defense:${enemy.defense}</br>Skill:${enemy.skill}</p></div>`;

  },
  //Functia de parry
  srcParryChance: function () {

    if (enemy.health >= 0) {
      parryChance = Math.floor(Math.random() * 100 + 1);

      if (gladiator.speed >= enemy.speed) {
        if (parryChance <= 30) {
          parryButton.classList.remove('is-hidden');
          setTimeout(setTimeout(function () {

            parryButton.classList.add('is-hidden');
          }, 800));

        }
      } else if (gladiator.speed < enemy.speed) {
        if (parryChance <= 30) {
          parryButton.classList.remove('is-hidden');
          setTimeout(setTimeout(function () {

            parryButton.classList.add('is-hidden');
          }, 800));
        }

      }
    }
    /* if (enemy.health <= 0 || gladiator.health <= 0) {
      attackButton.classList.add('is-hidden');
      nextFightBtn.classList.remove('is-hidden');
    } */
  },

  //New Arena Run
  newRun: function () {
    getSpinner.classList.remove('is-hidden');
    setTimeout(setTimeout(function () {
      location.reload();
    }, 1000));
  },













  nextFight: function () {

    if (enemy.health <= 0) {
      attackButton.classList.add('is-hidden');
      nextFightBtn.classList.remove('is-hidden');
    }
    if (g2.length == 6 && enemy.health <= 0) {
      nextFightBtn.classList.add('is-hidden');
      getEnemy.classList.add('is-hidden');
      championAlert.classList.remove('is-hidden');
      playAgainBtn.classList.remove('is-hidden');
    }
    if (gladiator.health <= 0) {
      parryButton.classList.add('is-hidden');
      getEnemy.classList.add('is-hidden');
      attackButton.classList.add('is-hidden');
      nextFightBtn.classList.add('is-hidden');
      playAgainBtn.classList.remove('is-hidden');
    }




    let getGladiatorHealth = document.querySelector(".health-player");
    if (enemy.health <= 0) {
      getGladiatorHealth.innerHTML = `Remaining Health:${initialHealth}`

    }

  }



}
