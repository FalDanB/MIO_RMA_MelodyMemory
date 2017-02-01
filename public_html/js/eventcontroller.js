define ('EventController', ['Phaser'], function(Phaser) {
   
    var lastField;
    var audioPlaying = 0;
   
   /** Function to check if opponent has caught player
    * 
    * @param {PlayerChar} player
    * @param {PlayerChar} opponent
    * @returns {Boolean} true if caught
    */  
   function checkOpponentCatching (player, opponent) {
       var caught = false;
       
       var diffX = Math.abs(player.sprite.body.x - opponent.sprite.body.x);
       var diffY = Math.abs(player.sprite.body.y - opponent.sprite.body.y);
       
       if (diffX < 15 && diffY <15) {
           caught = true;
       }
       return caught;
   }
   
   
   /** Function to check for and handling of player or opponents stepping on fields
    * 
    * @param {PlayerChar} player
    * @param {PlayerChar} opponent
    * @param {Fields} fields
    * @returns 1 if fields solved
    */
    function checkFieldActivation (player, opponent, fields) {
       //Variable to be returned with 1 if a pair has been solved
       var solved = 0
       
       //Set Player's and Opponent's X and Y Coordinates (not whole image should be used)
       var playerX = player.sprite.body.x + 0.5* player.sprite.body.width;
       var playerY = player.sprite.body.y + player.sprite.body.height;
       var opponentX = opponent.sprite.body.x + 0.5* opponent.sprite.body.width;
       var opponentY = opponent.sprite.body.y + opponent.sprite.body.height;
       
       //active field can be last field if exists, else new 
       if (lastField != undefined) {
            var activeField = lastField;}
       else {
           var activeField = 0;
       }
       
       //check if player or opponent steps on unsolved field, if yes set to active field
        for (var i = 0; i<fields.list.length; i++) {
          if (
              playerX > fields.list[i].x &&
              playerX < (fields.list[i].x + fields.list[i].width) &&
              playerY > fields.list[i].y &&
              playerY < (fields.list[i].y + fields.list[i].height) &&
              fields.list[i].solved == false
              || 
              opponentX > fields.list[i].x &&
              opponentX < (fields.list[i].x + fields.list[i].width) &&
              opponentY > fields.list[i].y &&
              opponentY < (fields.list[i].y + fields.list[i].height) &&
              fields.list[i].solved == false
            ) {
              activeField = fields.list[i]; 
              
              if (activeField.audio != undefined && !audioPlaying.isPlaying) {
                audioPlaying = game.sound.play(activeField.audio);
              }            
            solved = checkSolved(activeField);
            lastField = activeField;
          }
       }
       
       //Set all inactive Fields to frame 0 and last field to frame 1
       for (var j=0; j<fields.list.length; j++) {
            if (!fields.list[j].solved && !fields.list[j] != lastField) {
                fields.list[j].frame = 0;
            }
        }
        if (lastField!= undefined) lastField.frame = 1;
        
        return solved;
    }
    
    /** Function to check if a pair of fields has been solved, destroys solved fields
     * 
     * @param {Field} field
     */
    checkSolved = function (field) {
        var solved = 0;
        if (field.solved === false) { 
            if (lastField != undefined) {   
                if (field.pair === lastField.pair+0.5 && Math.floor(field.pair) === Math.floor(lastField.pair)) {
                    solved = 1;
                    lastField.solved = true;
                    field.solved = true;
                lastField.destroy();
                field.destroy();
                }
            }                 
        }
        return solved;
    }
    
    
    return {
        checkOpponentCatching: checkOpponentCatching, 
        checkFieldActivation: checkFieldActivation
    }
});