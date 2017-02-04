
define("GameEnd", ['Phaser'],  function( Phaser ) { 
   
GameEnd = function (game) {
    
}

GameEnd.prototype =  {
    
    create: function () {
        console.log("GameEnd State: Create");
        gameEndScreen = game.add.sprite(0,0,"gameEnd");
        playagainButton = this.game.add.button(300,360,"playButton",this.restartGame,this);
        console.log("...added instructions image, back and play button");
        
    },
    
    restartGame: function () {
        console.log("GameEnd: play button button clicked");
        game.level = 1;
        console.log("...set game level to 1");
        console.log(">>> switching to Main Game State");
        this.game.state.start('GameBase');
    },
    
}


});
    


