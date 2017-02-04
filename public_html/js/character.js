define('Character', ['Phaser'], function(){
    
    function PlayerChar(game, xPos, yPos, name, type) {
            this.name = name;
            this.type = type
            this.sprite = game.add.sprite(xPos, yPos, name);
            addAnimation(this.sprite);
            /*this.sprite.animations.add('wup', [5,6,7,8], 10, true);
            this.sprite.animations.add('wdown', [1,2,3,4], 10, true);
            this.sprite.animations.add('wleft', [9,10], 10, true);
            this.sprite.animations.add('wright', [11,12], 10, true);        */
            game.physics.arcade.enable(this.sprite);
    }

    function addAnimation (obj) {
        obj.animations.add('up', [5,6,7,8], 10, true);
        obj.animations.add('down', [1,2,3,4], 10, true);
        obj.animations.add('left', [9,10], 10, true);
        obj.animations.add('right', [11,12], 10, true); 
    }
    
    return PlayerChar;
    
});



