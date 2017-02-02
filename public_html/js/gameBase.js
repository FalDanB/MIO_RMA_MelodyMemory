define("GameBase", ['Phaser', 'GameSetup', 'GamePlay'],  function( Phaser, GameSetup, GamePlay) { 
   
GameBase = function (game) {
    var levelData;
    
   // level1Setup, solved, audioPlay, solvedPairs, fieldChange, tempField;
}

GameBase.prototype =  {
    
    create: function() {
        levelData = GameSetup.setUpLevel(1);
    },
    
    update: function() {
        var levelSolved = GamePlay.playGameStep(levelData);
        
        if (levelSolved == true) {
            console.log("SOLVED!!!");
        }
    }

}

});

