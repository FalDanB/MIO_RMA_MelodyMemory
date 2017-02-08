/** Character Class for Melody Memory Game (for Player and Opponent)
 * @author Daniel Falkenstein - 797852
 * @param {Phaser} Phaser
 */

define('Character', function(){
    
    /** Creates a Character with name (internal use), type (player or opponent) and Phaser game sprite
     * @param {type} Phaser Game
     * @param {type} xPos where character will be put
     * @param {type} yPos where character will be put
     * @param {type} name name of character (for internal use)
     * @param {type} type of character (player or opponent)
     * @returns {Character}
     */
    function Character (game, xPos, yPos, name, type) {
            this.name = name;
            this.type = type
            this.sprite = game.add.sprite(xPos, yPos, name);
            addAnimation(this.sprite);
            game.physics.arcade.enable(this.sprite);
    }

    /** Adds Phaser animation to a character
     * 
     * @param {Character.sprite} obj
     */
    function addAnimation (obj) {
        obj.animations.add('up', [5,6,7,8], 10, true);
        obj.animations.add('down', [1,2,3,4], 10, true);
        obj.animations.add('left', [9,10], 10, true);
        obj.animations.add('right', [11,12], 10, true); 
    }
    
    return Character;
    
});



