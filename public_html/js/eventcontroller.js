/** Handles the events that occur during a game of Melody Memory
 * 
 * @author Daniel Falkenstein - 797852
 */

define ('EventController', function() {
    var audioPlaying = 0;
    var finalAudio = 0;
    var activeField = 0;
    var steppedFields = [];
    var counter = 0;
   
   /** Rests the lastField and activeField Objects and replaces it with 0
    *
    */
   function resetFields() {
       lastField = 0;
       activeField = 0;
       console.log("... fields set to 0");
   }
    
    /** Function to check if opponent has caught player
    * 
    * @param {PlayerChar} player
    * @param {PlayerChar} opponent
    * @returns {Boolean} true if caught
    */  
   function checkOpponentCatching (player, opponent) {
       var caught = false;
       
       //get the difference of player's and opponent's x and y coordinates
       var diffX = Math.abs(player.sprite.body.x - opponent.sprite.body.x);
       var diffY = Math.abs(player.sprite.body.y - opponent.sprite.body.y);
       
       //set caught to true if difference is below certain value
       if (diffX < 15 && diffY <15) {
           caught = true;
       }
       return caught;
   }
   
   
   /** Function to check for and handling of player or opponents stepping on fields
    * 
    * @param {Character} player
    * @param {Character} opponent
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
       
       //Always highlight last field in green
       if (lastField != undefined) {
           lastField.frame = 1;
       }
       
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
       
       //Get the field that was stepped on later by comparing steppedOn values
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
       
       //Show all non-active fields as inactive and lastField as active
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
       
       //return 1 if a pair was solved, else 0
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
    
    /** Moves to Level End State when audio of last field stopped playing
     * 
     * @param {Fields.list[x]} field
     */
    function moveToNextLevel () {
        audioPlaying.onStop.add(function() {
            if (proceedLevel == true) {
                game.state.start("LevelEnd");
            }
        }, 1);
    }
    
    //return public functions
    return {
        resetFields : resetFields,
        checkOpponentCatching: checkOpponentCatching, 
        checkFieldActivation: checkFieldActivation,
        moveToNextLevel: moveToNextLevel
    }
});