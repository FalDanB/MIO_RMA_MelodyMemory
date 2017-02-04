
define("Caught", ['Phaser'],  function( Phaser ) { 
   
Caught = function (game) {
    
}

Caught.prototype =  {
    
    create: function () {
        console.log("Caught State: Create");
        game.add.sprite(0,0,"caught");
        this.game.add.button(300,360,"restartLevelButton",this.restartLevel,this);
        console.log("...added caught screen and restart level button");
        
    },
    
    restartLevel: function () {
        console.log("GameEnd: restart level button clicked");
        console.log(">>> switching to Game Base State");
        this.game.state.start('GameBase');
    },
    
}


});
    


