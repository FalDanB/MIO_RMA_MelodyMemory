define('GameSetup', ['Phaser', 'Fields', 'PlayerChar'], function(Phaser, Fields, PlayerChar) {
   
   function setUpLevel(level) {
        console.log("...entering GameSetup!")
        var levelData = [];
                        
        background = game.add.sprite(0,0,"background");    
        console.log("...set background image");

        levelJSON = game.cache.getJSON('levels');
        if (level == 1) setupData = levelJSON.level1;
        else if (level == 2) setupData = levelJSON.level2;
        else if (level == 3) setupData = levelJSON.level3;
        else console.log("ERROR: Can't read level data for level " + level);
        levelData['setup'] = setupData;
        console.log("...got Level Setup from JSON for level " + level);
        
        fields = new Fields(game, setupData, game.fieldsAudio);
        levelData['fields'] = fields;
        console.log("...field set-up complete, set solved pairs to 0")
        
        whitey = new PlayerChar(game, 280,30,'whitey', 'player');
        blacky = new PlayerChar (game, 280, 350, 'blacky', 'opponent');   
        levelData['player'] = whitey;
        levelData['opponent'] = blacky;
        console.log("...set player and NPC sprites and added them to gameData"); 
        
        return levelData;
    }
    
    return {
        setUpLevel : setUpLevel
    }
});

