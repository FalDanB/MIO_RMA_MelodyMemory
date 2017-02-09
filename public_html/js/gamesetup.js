/** Handles the game play of a Melody Memory Game
 * 
 * @author Daniel Falkenstein
 * @param {Phaser} Phaser
 * @param {Fields} Fields
 * @param {Character} Character
 */
define('gamesetup', ['fields', 'character'], function(Fields, Character) {
   
   /** Funtion to set up the level with background, characters and fields
    * Returns an array of JSON level setup data, player, opponent and fields
    * 
    * @param {int} level
    * @returns 
    */
   function setUpLevel(level) {
        console.log("...entering GameSetup!")
        var levelData = [];
        
        //Add Backgroud image
        background = game.add.sprite(0,0,"background");    
        console.log("...set background image");

        //Get Level setup Data
        levelJSON = game.cache.getJSON('levels');
        if (level == 1) setupData = levelJSON.level1;
        else if (level == 2) setupData = levelJSON.level2;
        else if (level == 3) setupData = levelJSON.level3;
        else console.log("ERROR: Can't read level data for level " + level);
        levelData['setup'] = setupData;
        console.log("...got Level Setup from JSON for level " + level);
        
        //Set up fields
        fields = new Fields(game, setupData, game.fieldsAudio);
        levelData['fields'] = fields;
        console.log("...field set-up complete, set solved pairs to 0")
        
        //Set up characters
        whitey = new Character(game, 280,30,'whitey', 'player');
        mrgrey = new Character(game, 280, 350, 'mrgrey', 'opponent');   
        levelData['player'] = whitey;
        levelData['opponent'] = mrgrey;
        console.log("...set player and NPC sprites and added them to gameData"); 
        
        return levelData;
    }
    
    return {
        setUpLevel : setUpLevel
    }
});

