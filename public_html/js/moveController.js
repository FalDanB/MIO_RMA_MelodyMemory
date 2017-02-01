define('MoveController', ['Phaser'], function() {
   
   function movePlayer (player) {
 
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
   
   function moveOpponent (opponent, player, speed) {
       moveCharacter(opponent, player, speed);
   }
   
   function moveCharacter (char, advChar, speed) {
        var charSprite = char.sprite;
        
        if(char.type == 'player') {
           game.physics.arcade.moveToPointer(charSprite, 100);
        } else if (char.type == 'opponent') {
           game.physics.arcade.moveToObject(charSprite, advChar.sprite, speed*20);
        }
        
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
    
    function stopPlayer (char) {
        charSprite = char.sprite;
        charSprite.body.velocity.setTo(0,0);
        charSprite.animations.stop();
        charSprite.frame = 0;
    }
    
    return {
        movePlayer : movePlayer,
        moveOpponent : moveOpponent
    }
});