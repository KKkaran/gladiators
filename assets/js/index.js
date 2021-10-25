let playerHealth = 0;
let playerAttack = 10;
let playerName;
let enemyHealth;
let enemyAttack = 12;
let playerMoney =0;

console.log("this change was made in mac!!!")

let fight = function(enemyName,playerName) {


    // You can also log multiple values at once like this
    //console.log(playerName, playerAttack, playerHealth);
    // if player choses to fight, then fight
        // if player choses to fight, then fight
        // if player choses to fight, then fight
    //console.log("inside the fight funvtion")
    while(enemyHealth > 0 && playerHealth > 0){
        let promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        if (promptFight === "fight" || promptFight === "FIGHT") {
            // remove enemy's health by subtracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );
        
            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                break;
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }
        
            // remove player's health by subtracting the amount set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;
            console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );
        
            // check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
            // if player choses to skip
        } else if (promptFight === "skip" || promptFight === "SKIP") {
             // confirm player wants to skip
            let confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney)
                break;
            }
        } else {
            window.alert("You need to choose a valid option. Try again!");
        }
    }
    console.log("\n");
}
//fight();

let enemyNames = ["Roborto","Amy Android","Robo Trumble"]
//console.log(enemynames[enemynames.length-1])
playerName = window.prompt("What is your robot's name?");

for(var i = 0; i < enemyNames.length; i++) {
    
    //window.alert("Welcome to Robot Gladiators:" + playerName + " VS " + pickedEnemy)
    if (playerHealth > 0) {
        // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        // pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];
        // reset enemyHealth before starting new fight
        enemyHealth = 50;
        fight(pickedEnemyName,playerName);
    }else{
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
  }