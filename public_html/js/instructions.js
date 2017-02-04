
define("Instructions", ['Phaser'],  function( Phaser ) { 
   
Instructions = function (game) {
    
}

Instructions.prototype =  {
    
    create: function () {
        console.log("Instruction State: Create");
        instructionsScreen = game.add.sprite(0,0,"instructions");
        backutton = this.game.add.button(160,360,"backButton",this.backToMainScreen,this);
        playButton = this.game.add.button(300,360,"playButton",this.startGame,this);
        console.log("...added instructions image, back and play button");
        whitey =  game.add.sprite(40,100, 'whitey');
        whitey.animations.add('right', [11,12], 10, true);
        whitey.animations.play('right');
        
        mrgrey =  game.add.sprite(40,160, 'mrgrey');
        mrgrey.animations.add('up', [5,6,7,8], 10, true);
        mrgrey.animations.play('up');
        
    },
    
    startGame: function () {
        console.log("Instruction: play button button clicked");
        game.level = 1;
        console.log("...set game level to 1");
        playButton.destroy();
        startScreen.destroy();
        console.log("...removed start screen and play button");
        console.log(">>> switching to Main Game State");
        this.game.state.start('GameBase');
    },
    
    backToMainScreen: function () {
        console.log("Instructions: back button clicked");
        game.level = 1;
        console.log("...set game level to 1");
        console.log(">>> switching to Game Base State");
        this.game.state.start('StartScreen');

    } 
}



});
    


