
define("StartScreen", ['Phaser'],  function( Phaser ) { 
   
StartScreen = function (game) {
    var startScreen, playButton;
}

StartScreen.prototype =  {
    
    create: function () {
        console.log("Start Screen State: Create");
        startScreen = game.add.sprite(0,0,"startScreen");
        playButton = this.game.add.button(250,300,"playButton",this.startGame,this);
        console.log("...added start screen image and play button");
        whitey =  game.add.sprite(20,60, 'whitey');
        whitey.animations.add('right', [11,12], 10, true);
        whitey.animations.play('right');
        
        blacky =  game.add.sprite(540,200, 'blacky');
        blacky.animations.add('left', [9,10], 10, true);
        blacky.animations.play('left');
        
    },
    
    startGame: function () {
        console.log("Start Screen State: play button clicked");
        game.level = 1;
        console.log("...set game level to 1");
        playButton.destroy();
        startScreen.destroy();
        console.log("...removed start screen and play button");
        console.log(">>> switching to Main Game State");
        this.game.state.start('Level1');
    }
}



});
    


