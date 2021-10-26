//creating player object
var playerInfo = {
  name : window.prompt("What's your Robot's name?"),
  health: 100,
  attack:10,
  money:10,
  reset: function(){
    this.health = 100;
    this.attack = 10;
    this.money = 10;
  },
  refillHealth: function() {
    this.health += 20;
    this.money -= 7;
  },
  upgradeAttack: function() {
    this.attack += 6;
    this.money -= 7;
  }
}
//creating objects of enemies in a list
var enemyNames = [
  {
    name: "Roborto",
    attack: 12
  },
  {
    name: "Amy Android",
    attack: 13
  },
  {
    name: "Robo Trumble",
    attack: 14
  }
]

function fight(enemy) {


    // You can also log multiple values at once like this
    //console.log(playerInfo.name, playerInfo.attack, playerInfo.health);
    // if player choses to fight, then fight
        // if player choses to fight, then fight
        // if player choses to fight, then fightssss
    //console.log("inside the fight funvtion")
    while(enemy.health > 0 && playerInfo.health > 0){
        let promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        if (promptFight === "fight" || promptFight === "FIGHT") {
            // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
            var damage = randomNumber(playerInfo.attack-3, playerInfo.attack)
            console.log("damage is:" + damage);
            enemy.health = Math.max(0,(enemy.health - damage));
            console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
            );
        
            // check enemy's health
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died!");

                break;
            } else {
                window.alert(enemy.name + " still has " + enemy.health + " health left.");
            }
        
            // remove player's health by subtracting the amount set in the enemy.attack variable
            var damage = randomNumber(enemy.attack-3, enemy.attack)
            //enemy.health = Math.max(0,(enemy.health - damage));
            playerInfo.health = Math.max(0,(playerInfo.health - damage));
            console.log(
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
            );
        
            // check player's health
            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died!");
                break;
            } else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
            }
            // if player choses to skip
        } else if (promptFight === "skip" || promptFight === "SKIP") {
             // confirm player wants to skip
            let confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                // subtract money from playerInfo.money for skipping
                playerInfo.money = Math.max(0,(playerInfo.money - 10));
                console.log("playerInfo.money", playerInfo.money)

                break;
            }
        } else {
            window.alert("You need to choose a valid option. Try again!");
        }
    }
    console.log("\n");
}
function startGame(){
    
   
    playerInfo.reset();

    for(var i = 0; i < enemyNames.length; i++) {
    //window.alert("Welcome to Robot Gladiators:" + playerInfo.name + " VS " + pickedEnemy)
        if (playerInfo.health > 0) {
            
            // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            // pick new enemy to fight based on the index of the enemy.names array
            var pickedEnemyObject = enemyNames[i];
            // reset enemy.health before starting new fight
            pickedEnemyObject.health = Math.floor(randomNumber(40,60));
            console.log("enemy Health is : " + pickedEnemyObject.health)
            fight(pickedEnemyObject);

            if (playerInfo.health > 0 && (i < enemyNames.length - 1)) {
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                // if yes, take them to the store() function
                if (storeConfirm) {
                    shop();
                }
            }
        }else{
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    endGame();

}
function endGame(){
      //this function is called when the player dies or 
      //there are no more enemies left to fight
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    } 
    else {
        window.alert("You've lost your robot in battle.");
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart the game
        startGame();
    } 
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}
function shop(){
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
      );
      switch (shopOptionPrompt) {
        case "REFILL": // new case
        case "refill":
          if (playerInfo.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
      
            playerInfo.health = playerInfo.health + 20;
            playerInfo.money = playerInfo.money - 7;
          }
          else {
            window.alert("You don't have enough money!");
          }
      
          break;
        case "UPGRADE": // new case
        case "upgrade":
          if (playerInfo.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
      
            playerInfo.attack = playerInfo.attack + 6;
            playerInfo.money = playerInfo.money - 7;
          }
          else {
            window.alert("You don't have enough money!");
          }
      
          break;
        case "LEAVE": // new case
        case "leave":
          window.alert("Leaving the store.");
          break;
        default:
          window.alert("You did not pick a valid option. Try again.");
          shop();
          break;
      }
}
function randomNumber(min,max) { //[min,max] i.e--->vales b/w [10,20]
  var value = Math.floor(Math.random() * (max-min+1) + min);

  return value;
};

startGame();//game starts as the browser loads!!!

























// let car = {
//   make: "Audi",
//   model: "A4",
//   mileage: 20000,
//   trip : 20,
//   drive: function(){
//     this.trip = Math.floor(Math.random() * 5 + 21)
//     this.mileage += this.trip;
    
//   }
// }

// car.drive()
// console.log(car)
// console.log("\n")

// car.drive()
// console.log(car)
// console.log("\n")

// car.drive()
// console.log(car)