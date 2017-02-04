define('GamePlay', ['Phaser', 'MoveController', 'EventController'], function (Phaser, MoveController, EventController) {
    var solvedPairs = 0;
    
    function reset() {
        EventController.resetLastField();
        solvedPairs = 0;
    }
    
    function playGameStep(levelData) {
        //Move Player and Opponent
        MoveController.movePlayer(levelData['player']);
        MoveController.moveOpponent(levelData['opponent'], levelData['player'], levelData['setup'].NPCspeed);
    
        //Check if opponent caught player
        if (EventController.checkOpponentCatching(levelData['player'], levelData['opponent'])) {
            game.state.start("Caught");
        }
        
        //Check For Field Activation and add to solved pairs tally if solved
        solvedPairs += EventController.checkFieldActivation(levelData['player'], levelData['opponent'], levelData['fields']); 
        
        if (solvedPairs == levelData['setup'].NoTiles/2) {
            return true;
        } else {
            return false;
        }
    }
   
    function doFinalStep() {
        EventController.playFinalAudio();
        solvedPairs = 0;
        if (game.level <=2 ) {
            game.state.start("Interlevel");
        } else if (game.level == 3) {
            game.state.start("GameEnd");
        }
    }
    
    return {
        reset: reset,
        playGameStep : playGameStep,
        doFinalStep : doFinalStep
    }
  
});

