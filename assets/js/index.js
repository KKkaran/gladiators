let playerName;
let enemyHealth;
let enemyAttack = 12;
let playerHealth;
let playerAttack;
console.log("this change was made in mac!!!");

let fight = function(enemyName,playerName) {


    // You can also log multiple values at once like this
    //console.log(playerName, playerAttack, playerHealth);
    // if player choses to fight, then fight
        // if player choses to fight, then fight
        // if player choses to fight, then fightssss
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
;

let enemyNames = ["Roborto","Amy Android","Robo Trumble"]

playerName = window.prompt("What is your robot's name?");

function startGame(){
    
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

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
    endGame();

}
function endGame(){
      //this function is called when the player dies or 
      //there are no more enemies left to fight
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
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

startGame();//game starts as the browser loads!!!

