/** Handles the game play of a Melody Memory Game
 * 
 * @author DanieL Falkenstein
 * @param {Phaser} Phaser
 * @param {js} MoveController
 * @param {js} EventController}
 */

define('gameplay', ['movecontroller', 'eventcontroller'], function (MoveController, EventController) {
    //Holds the number of solved pairs at each level
    var solvedPairs = 0;
    
    /**Resets the Game at beginning of each level
     *  
     */
    function reset() {
        EventController.resetFields();
        solvedPairs = 0;
    }
    
    /** One Game Step as called by Game Base update function
     * 
     * @param {JSON} levelData
     * @returns {Boolean} true if all pairs are solvede
     */
    function playGameStep(levelData) {
        
        //Move Player and Opponent
        MoveController.movePlayer(levelData['player']);
        MoveController.moveCharacter(levelData['opponent'], levelData['player'], levelData['setup'].NPCspeed);
        
        //Check if opponent caught player
        if (EventController.checkOpponentCatching(levelData['player'], levelData['opponent'])) {
            game.state.start("caught");
        }
        
        //Check For Field Activation and add to solved pairs tally if solved
        solvedPairs += EventController.checkFieldActivation(levelData['player'], levelData['opponent'], levelData['fields']); 
        
        //Return true if level solved, else false
        if (solvedPairs == levelData['setup'].NoTiles/2) {
            return true;
        } else {
            return false;
        }
    }
   
   /**Stops the players and calls event controller to play final audio and move on to next level
    * 
    * @returns {undefined}
    */
    function doFinalStep() {
        MoveController.stopPlayer(levelData['player']);
        MoveController.stopPlayer(levelData['opponent']);
        EventController.moveToNextLevel();
    }
    
    //Return public functions
    return {
        reset: reset,
        playGameStep : playGameStep,
        doFinalStep : doFinalStep
    }
  
});

