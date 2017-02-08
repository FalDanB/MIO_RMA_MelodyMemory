/**Handles the movements of the charachters
 * 
 * @author Daniel Falkenstein - 797852
 */
define('MoveController', function() {
   
   /** Function to the move the main player
    *     * 
    * @param {Character} player
    * @returns {undefined}
    */
   function movePlayer (player) {
 
        //on mouse down
        if (game.input.mousePointer.isDown) {
            moveCharacter(player, null, null);
             
        //  if it's overlapping the mouse, don't move any more
            if (Phaser.Rectangle.contains(player.sprite.body, game.input.x, game.input.y)) {
                 player.sprite.body.velocity.setTo(0, 0);
            }
        } else {
            stopPlayer(player, 'stop');
        }
   };
   
   /** Function to move a characters towards an adverse character at a certain speed
    * @param {Character} character to be moved
    * @param {Character} character to be moved towards to
    * @param {int} speed
    * @returns {undefined}
    */
   function moveCharacter (char, advChar, speed) {
        var charSprite = char.sprite;
      
        //If it's the player move towards pointer
        if(char.type == 'player') {
           game.physics.arcade.moveToPointer(charSprite, 100);
        //If it's the opponent move towards the player 
        } else if (char.type == 'opponent') {
           game.physics.arcade.moveToObject(charSprite, advChar.sprite, speed*20);
        }
        
        //Play sprite animation according to dominant direction
        if (Math.abs(charSprite.body.velocity.y) > Math.abs(charSprite.body.velocity.x)) {
            if (charSprite.body.velocity.y > 0) {
                charSprite.animations.play('down');
            } else if (charSprite.body.velocity.y < 0) {
                charSprite.animations.play('up');
            }
        } else {    
            if (charSprite.body.velocity.x < 0) {
                charSprite.animations.play('left');
            } else if (charSprite.body.velocity.x > 0) {
                charSprite.animations.play('right');
            }
        }
        if (charSprite.body.velocity == 0) {
            charSprite.animations.stop();
            charSprite.frame = 0;
        }
    };
    
    /**Function to stop a player's movement
     *
     * @param {Character} character to be stopped
     * 
     */
    function stopPlayer (char) {
        charSprite = char.sprite;
        charSprite.body.velocity.setTo(0,0);
        charSprite.animations.stop();
        charSprite.frame = 0;
    }
    
    //Return public functions
    return {
        movePlayer : movePlayer,
        moveCharacter : moveCharacter,
        stopPlayer, stopPlayer
    }
});