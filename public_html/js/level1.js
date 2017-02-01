define("Level1", ['Phaser', 'GameSetup', 'GamePlay'],  function( Phaser, GameSetup, GamePlay) { 
   
Level1 = function (game) {
    var levelData;
    
   // level1Setup, solved, audioPlay, solvedPairs, fieldChange, tempField;
}

Level1.prototype =  {
    
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

