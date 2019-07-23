let gladiator;
let totalDamage;
let initialHealth;

function Gladiator(gladiatorName, health, strength, agility, speed, defense, skill) {
  this.gladiatorName = gladiatorName;
  this.health = health;
  this.strength = strength;
  this.agility = agility;
  this.speed = speed;
  this.defense = defense;
  this.skill = skill;
  //initialHealth
  initialHealth = health;
}
let playerMoves = {

  calcAttack: function () {
    //Who attacks first
    let getGladiatorSpeed = gladiator.speed;
    let getEnemyGladiatorSpeed = enemy.speed;

    //Gladiator attacks
    let gladiatorAttack = function () {

      let calcBaseDamage = Math.floor((gladiator.strength * gladiator.agility) / 10);

      let offsetDamage = Math.floor(Math.random() * 4 + 1);
      let calcOutputDamage = calcBaseDamage + offsetDamage;
      //Number of hits
      let numberOfHits = Math.floor((Math.random() * 10 + gladiator.agility) / 2)
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    }
    //Enemy Gladiator Attack
    let enemyGladiatorAttack = function () {

      calcBaseDamage = Math.floor((enemy.strength * enemy.agility) / 10);

      let offsetDamage = Math.floor(Math.random() * 4 + 1);
      let calcOutputDamage = calcBaseDamage + offsetDamage;
      //Number of hits
      let numberOfHits = Math.floor((Math.random() * 10 + enemy.agility) / 2)
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    }
    let getGladiatorHealth = document.querySelector(".health-player");
    let getEnemyGladiatorHealth = document.querySelector(".health-enemy");
    //Initiate attacks
    if (getGladiatorSpeed >= getEnemyGladiatorSpeed) {
      let playerAttackValue = gladiatorAttack();
      totalDamage = playerAttackValue[0] * playerAttackValue[1];
      enemy.health = enemy.health - totalDamage;
      alert(`${gladiator.gladiatorName} hit ${playerAttackValue[0]} damage ${playerAttackValue[1]} times`);
      if (enemy.health <= 0) {
        alert('You won!');
        getGladiatorHealth.innerHTML = `Remaining Health:${gladiator.health} `;
        getEnemyGladiatorHealth.innerHTML = 'Remaining Health:0';
        gladiator.health = initialHealth;
      } else {
        getEnemyGladiatorHealth.innerHTML = `Remaining Health:${enemy.health} `;
        //enemy attacks
        let enemyAttackValue = enemyGladiatorAttack();
        totalEnemyDamage = enemyAttackValue[0] * enemyAttackValue[1];
        gladiator.health = gladiator.health - totalEnemyDamage;
        alert(`${enemy.enemyGladiator} hit ${enemyAttackValue[0]} damage ${enemyAttackValue[1]} times`);
        if (gladiator.health <= 0) {
          alert('You lost!');
          getGladiatorHealth.innerHTML = 'Remaining Health:0';
          getEnemyGladiatorHealth.innerHTML = `Remaining Health:${enemy.health} `;
        } else {
          getGladiatorHealth.innerHTML = `Remaining Health:${gladiator.health} `;
        }
      }

    } else if (getGladiatorSpeed <= getEnemyGladiatorSpeed) {
      //enemy Attack
      let enemyAttackValue = enemyGladiatorAttack();
      totalEnemyDamage = enemyAttackValue[0] * enemyAttackValue[1];
      gladiator.health = gladiator.health - totalEnemyDamage;
      alert(`${enemy.enemyGladiator} hit ${enemyAttackValue[0]} damage ${enemyAttackValue[1]} times`);
      if (gladiator.health <= 0) {
        alert('You lost!');
        getGladiatorHealth.innerHTML = 'Remaining Health: 0';
        getEnemyGladiatorHealth.innerHTML = `Remaining Health:${enemy.health} `;
      } else {
        getGladiatorHealth.innerHTML = `Health:${gladiator.health} `;
        let playerAttackValue = gladiatorAttack();
        totalDamage = playerAttackValue[0] * playerAttackValue[1];
        enemy.health = enemy.health - totalDamage;
        alert(`${gladiator.gladiatorName} hit ${playerAttackValue[0]} damage ${playerAttackValue[1]} times`);
        if (enemy.health <= 0) {
          alert('You won!');

          gladiator.health = initialHealth;
          getGladiatorHealth.innerHTML = `Remaining Health:${gladiator.health} `;
          getEnemyGladiatorHealth.innerHTML = 'Remaining Health: 0';
        } else {
          getEnemyGladiatorHealth.innerHTML = `Remaining Health:${enemy.health}`;
        }
      }
    }
  },






  parryAttack: function () {
    let getGladiatorDefense = gladiator.defense;
    let getEnemyGladiatorDefense = enemy.defense;

    let getGladiatorSpeed = gladiator.speed;
    let getEnemyGladiatorSpeed = enemy.speed;

    //Gladiator attacks
    let gladiatorAttack = function () {
      let calcBaseDamage = Math.floor((gladiator.strength * gladiator.agility) / 10);

      let offsetDamage = Math.floor(Math.random() * 10 + 1);
      let calcOutputDamage = calcBaseDamage + offsetDamage;
      //Number of hits
      let numberOfHits = Math.floor((Math.random() * 10 + gladiator.agility) / 2)
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    }
    //Enemy Gladiator Attack
    let enemyGladiatorAttack = function () {

      calcBaseDamage = Math.floor((enemy.strength * enemy.agility) / (3 * gladiator.defense));

      let offsetDamage = Math.floor(Math.random() * 10 + 1);
      let calcOutputDamage = calcBaseDamage + offsetDamage;
      //Number of hits
      let numberOfHits = Math.floor((Math.random() * 10 + enemy.agility) / 2)
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    }
    let getGladiatorHealth = document.querySelector(".health-player");
    let getEnemyGladiatorHealth = document.querySelector(".health-enemy");
    //Initiate attacks
    if (getGladiatorSpeed >= getEnemyGladiatorSpeed) {
      //gladiator parry attack value
      let playerAttackValue = gladiatorAttack();
      totalDamage = playerAttackValue[0] * playerAttackValue[1];

      enemy.health = enemy.health - totalDamage;

      /* if (getGladiatorHealth > 0)  */
      alert(`${gladiator.gladiatorName} hit ${playerAttackValue[0]} damage ${playerAttackValue[1]} times`);
      if (enemy.health <= 0) {
        alert('You won!');
        // if (g1 == 1) {
        //   document.body.style.backgroundImage = "url('/images/gannicusWin.jpg')";
        // }
        getEnemyGladiatorHealth.innerHTML = 'Remaining Health:0';
      } else {
        getEnemyGladiatorHealth.innerHTML = `Remaining Health:${enemy.health} `;
        gladiator.health = initialHealth;
        //enemy parry attack value
        let enemyAttackValue = enemyGladiatorAttack();
        totalEnemyDamage = Math.floor(enemyAttackValue[0] / gladiator.defense) * enemyAttackValue[1];

        gladiator.health = Math.floor(gladiator.health - totalEnemyDamage);
        alert(`${enemy.enemyGladiator} hit ${Math.floor(enemyAttackValue[0] / gladiator.defense)} damage ${enemyAttackValue[1]} times`);
        if (gladiator.health <= 0) {
          alert('You lost!');
          getGladiatorHealth.innerHTML = 'Remaining Health:0';

        } else {
          getGladiatorHealth.innerHTML = `Remaining Health:${gladiator.health} `;
        }
      }


    } else if (getGladiatorSpeed <= getEnemyGladiatorSpeed) {
      //enemy parry attack value
      let enemyAttackValue = enemyGladiatorAttack();
      totalEnemyDamage = Math.floor(enemyAttackValue[0] / gladiator.defense) * enemyAttackValue[1];

      gladiator.health = Math.floor(gladiator.health - totalEnemyDamage);
      alert(`${enemy.enemyGladiator} hit ${Math.floor(enemyAttackValue[0] / gladiator.defense)} damage ${enemyAttackValue[1]} times`);
      if (gladiator.health <= 0) {
        alert('You lost!');
        getGladiatorHealth.innerHTML = 'Remaining Health: 0';

      } else {
        //Gladiator parry attack value
        getGladiatorHealth.innerHTML = `Health:${gladiator.health} `;
        let playerAttackValue = gladiatorAttack();
        totalDamage = playerAttackValue[0] * playerAttackValue[1];
        enemy.health = enemy.health - totalDamage;
        alert(`${gladiator.gladiatorName} hit ${playerAttackValue[0]} damage ${playerAttackValue[1]} times`);
        if (enemy.health <= 0) {
          setTimeout(alert('You won!'), 1000);
          gladiator.health = initialHealth;


          getEnemyGladiatorHealth.innerHTML = 'Remaining Health: 0';
        } else {
          getEnemyGladiatorHealth.innerHTML = `Remaining Health:${enemy.health}`;
        }
      }
    }
  }
}


