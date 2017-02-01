define('GamePlay', ['Phaser', 'MoveController', 'EventController'], function (Phaser, MoveController, EventController) {
    var solvedPairs = 0;
    
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
   
    return {
        playGameStep : playGameStep
    }
  
   /*
        
        activeField = controller.checkFieldActivation(game, whitey, blacky, fields); 
        
           view.showActiveField(fields, activeField);
           
           var caught = controller.checkOpponentCatching(whitey, blacky);
           
           if (caught == true) {
               game.state.start("Level1");
           }
           */
          /*
           fieldchange = controller.checkNewField(activeField);
           
           if (fieldchange == true && audioPlay.isPlaying) {
               controller.stopAudio(audioPlay);
           }
           
           if (activeField.audio != undefined && !audioPlay.isPlaying && fieldchange == true) {
                console.log("PLAY!")
                audioPlay = controller.playAudio(activeField);
           }
           

           if (fieldchange == true) {
              var solved = controller.checkSolved (activeField);
              console.log(solved);
              if (solved != 0) {
                  solvedPairs++;
                  console.log("..pair solved. Solved pairs: " + solvedPairs)
              }
           }
           *//*
           if(solvedPairs == level1Setup.NoTiles/2) {
               console.log("... LEVEL SOLVED. Increasing game level and switchting to Inter Level state");
               audioPlay.onStop.add(function() {controller.playFinal()}, 1);
               game.level++;
               game.state.start("Interlevel");
           }
    
        */
});

