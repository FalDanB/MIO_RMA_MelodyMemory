
define("Interlevel", ['Phaser'],  function( Phaser ) { 
   
Interlevel = function (game) {
    
}

Interlevel.prototype =  {
    
    create: function () {
        console.log("Interlevel State: Create");
        interlevelScreen = game.add.sprite(0,0,"interlevel");
        nextLevelButton = this.game.add.button(40,350,"nextLevelButton",this.nextLevel,this);
        console.log("...added interlevel image and next level button");
    },
    
    nextLevel: function () {
        console.log("Interlevel: next level button button clicked");
        game.level++;
        console.log("...increased game level");
        
        console.log("...stopped all sound");
        console.log(">>> switching to Game Base State");
        this.game.state.start('GameBase');
    },
    
    
}



});
    


