define('GamePlay', ['Phaser', 'MoveController', 'EventController'], function (Phaser, MoveController, EventController) {
    var solvedPairs = 0;
    
    function reset() {
        EventController.resetLastField();
    }
    
    function playGameStep(levelData) {
        //Move Player and Opponent
        MoveController.movePlayer(levelData['player']);
        MoveController.moveOpponent(levelData['opponent'], levelData['player'], levelData['setup'].NPCspeed);
    
        //Check if opponent caught player
        if (EventController.checkOpponentCatching(levelData['player'], levelData['opponent'])) {
            console.log("caught!")
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
        game.state.start("Interlevel");
    }
    
    return {
        reset: reset,
        playGameStep : playGameStep,
        doFinalStep : doFinalStep
    }
  
});

