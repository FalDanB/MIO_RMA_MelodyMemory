/** Game Base State that calls  gamesetup for setting up the level and gameplay for actual playing
 * 
 * @param {Phaser} Phaser
 * @param {js} GameSetup
 * @param {js} GamePlay
 * @
 */

//Global Variables
var fieldsCleared;
var proceedLevel;



define("GameBase", ['GameSetup', 'GamePlay'],  function(GameSetup, GamePlay) { 

/** Main GameBase function for Phaser States
 * 
 * @param {Phaser Game} game
 * 
 */
GameBase = function (game) {
    var levelData;  
}

GameBase.prototype =  {
   
    /** Resets and sets up the level and sets basic variables
     * 
     */
    create: function() {
        proceedLevel = false;
        levelData = GameSetup.setUpLevel(game.level);
        GamePlay.reset();
    },
    
    /** Gets fields cleared from gameplay and starts to proceed to next level if all fields are cleared
     * 
     */
    update: function() {
        if (proceedLevel == false) {
            fieldsCleared = GamePlay.playGameStep(levelData);
        }
        
        if (fieldsCleared == true) {
            proceedLevel = true;
            GamePlay.doFinalStep();
        }
    }

}

});

