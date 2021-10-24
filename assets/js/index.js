let playerName = "sodhi"//window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

let enemyName = "Roborto";
let enemyHealth = 50;
let enemyAttack = 12;
//var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

let fights = false;
let skip = false;
let fight = function() {


    // if player choses to fight, then fight
    if (fights == true) {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
    
        // check enemy's health
        if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
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
        } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        // if player choses to skip
    } else if (skip == true) {
        window.alert(playerName + " has chosen to skip the fight!");
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
}
document.getElementById("play").addEventListener("click", function(){
    fights = true;
    skip = false;
    fight();
})
document.getElementById("skip").addEventListener("click",function(){
    fights = false;
    skip = true;
    fight();
})
window.confirm("yougay?")