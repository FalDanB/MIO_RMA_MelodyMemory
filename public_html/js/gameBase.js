define("GameBase", ['Phaser', 'GameSetup', 'GamePlay'],  function( Phaser, GameSetup, GamePlay) { 


GameBase = function (game) {
    var levelData;  
   /* if (game.finalAudio != undefined) {
        if (game.finalAudio.isPlaying) {
        game.finalAudio.stop();
    }}*/
   // level1Setup, solved, audioPlay, solvedPairs, fieldChange, tempField;
}

GameBase.prototype =  {
    
    create: function() {
        game.sound.stopAll();
        levelData = GameSetup.setUpLevel(game.level);
        GamePlay.reset();
    },
    
    update: function() {

       var fielsCleared = GamePlay.playGameStep(levelData);

        
        if (fielsCleared == true) {
            GamePlay.doFinalStep();
        }
    }

}

});

