define ('EventController', ['Phaser'], function(Phaser) {
    var lastField;
    var audioPlaying = 0;
    var finalAudio = 0;
    var activeField = 0;
    var steppedFields = [];
    var counter = 0;
    
   function resetLastField() {
       lastField = 0;
           activeField = 0;
       console.log("lastField set to 0");
   }
    
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
       
       if (lastField!= 0) console.log(lastField.pair);
       //Always highlight last field in green
       if (lastField != undefined) {
           lastField.frame = 1;
       }
       
       // Create variable for activeField which is 0 to begin with

       //Check if stepped on field on put stepped on fields into an array (player and opponent)
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
              steppedFields.push(fields.list[i]);
              //set the stepped on counter for the field for comparison if empty
              if (fields.list[i].steppedOn == undefined) {
                  fields.list[i].steppedOn = counter;
              }
            } else {
              //clear the stepped on counter for field if not active
              if (fields.list[i].steppedOn != undefined) {
                  fields.list[i].steppedOn = undefined;
              }
            }
          }
       
       //Get the field that was stepped on later
       if (steppedFields.length == 1) {
           activeField = steppedFields[0];
       } else if (steppedFields.length == 2) {
           for (var i=0; i<steppedFields.length; i++) {
               if (steppedFields[i].steppedOn == Math.max(steppedFields[0].steppedOn, steppedFields[1].steppedOn)) {
                   activeField = steppedFields[i];
               } 
           }
       }
       
       //Switch to new audio if new field activated
       if (lastField!= undefined && lastField!=activeField && audioPlaying != 0) {
           audioPlaying.stop();
           audioPlaying = game.sound.play(activeField.audio);
       }
       //Start Audio if field activate and audio not already playing
       if (activeField.audio != undefined && !audioPlaying.isPlaying && steppedFields.length > 0) {
           audioPlaying = game.sound.play(activeField.audio);
       }    
       
       //Check if pair was solved
       solved = checkSolved(activeField);
       
       //copy activeField to lastField
       lastField = activeField;
       
       //Show all non-active fields as inactive abd lastField as active
       for (var i=0; i<fields.list.length; i++) {
            if (!fields.list[i].solved && !fields.list[i] != lastField) {
                fields.list[i].frame = 0;
            }
        }
        if (lastField!= undefined) lastField.frame = 1;
       
       //Increase game counter 
       counter++;
       
       //Empty stepped fields array
       steppedFields = [];
       
       //retun 1 if a pair was solved, else 0
       return solved;
     
    }
    
    /** Function to check if a pair of fields has been solved, destroys solved fields
     * 
     * @param {Field} field
     */
    function checkSolved (field) {
        var solved = 0;
        //Safetey check if field is not already solved
        if (field.solved === false) { 
            //only applicable if last field exists
            if (lastField != undefined) {   
                //check if current field pair value is 0.5 higher than last field pair value, also rounded down both values should be equal (e.g. 2 and 2.5)
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
    
    function playFinalAudio (field) {
         audioPlaying.onStop.add(function() {
             if (!finalAudio.isPlaying) { 
                 game.finalAudio = game.sound.play(game.finalAudio[Math.floor(activeField.number/2)]);   
             }
     }, 1);
    }
    
    //return public functions
    return {
        resetLastField : resetLastField,
        checkOpponentCatching: checkOpponentCatching, 
        checkFieldActivation: checkFieldActivation,
        playFinalAudio: playFinalAudio
    }
});