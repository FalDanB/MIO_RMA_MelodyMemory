define("Preload", ['Phaser'],  function( Phaser ) { 
    
Preload = function (game) {

}

Preload.prototype =  {
    
    preload: function() {
        console.log("### PRELOAD STATE ###");
        console.log("Preload State: Preload");
        
        //Preload Images
        game.load.image('startScreen', './resources/startscreen.jpg'); 
        game.load.image('instructions', './resources/instructions.jpg');
        game.load.image('background', './resources/lawn.jpg');
        game.load.image('playButton', './resources/playbutton.png');
        game.load.image('instructionsButton', './resources/instructionsbutton.png');
        game.load.image('level1Button', './resources/level1button.png');
        game.load.image('level2Button', './resources/level2button.png');
        game.load.image('level3Button', './resources/level3button.png');
        game.load.image('backButton', './resources/backbutton.png');
        console.log("...images preloaded");
       
        //Preload Sprite Sheets
        game.load.spritesheet('whitey', './resources/whitey.png', 42, 31);
        game.load.spritesheet('blacky', './resources/blacky.png', 42, 31);
        game.load.spritesheet('field', './resources/field.png', 60, 60);
        console.log("...spritesheets preloaded");

        //Preload Audio
        game.fieldsAudio = [];
        game.finalAudio = [];
        game.load.audio('gong', './resources/gong.mp3');
        
        game.fieldsAudio[0] = 'beethoven1';
        game.load.audio('beethoven1', './resources/beethoven1.mp3');
        game.fieldsAudio[1] = 'beethoven2';
        game.load.audio('beethoven2', './resources/beethoven2.mp3');
        game.fieldsAudio[2] = 'handel1';
        game.load.audio('handel1', './resources/handel1.mp3');
        game.fieldsAudio[3] = 'handel2';
        game.load.audio('handel2', './resources/handel2.mp3');
        game.fieldsAudio[4] = 'vivaldi1';
        game.load.audio('vivaldi1', './resources/vivaldi1.mp3');
        game.fieldsAudio[5] = 'vivaldi2';
        game.load.audio('vivaldi2', './resources/vivaldi2.mp3');
        game.fieldsAudio[6] = 'rossini1';
        game.load.audio('rossini1', './resources/rossini1.mp3');
        game.fieldsAudio[7] = 'rossini2';
        game.load.audio('rossini2', './resources/rossini2.mp3');
        game.finalAudio[0] = 'beethoven3';
        game.load.audio('beethoven3', './resources/beethoven3.mp3'); 
        game.finalAudio[1] = 'handel3';
        game.load.audio('handel3', './resources/handel3.mp3'); 
        game.finalAudio[2] = 'vivaldi3';
        game.load.audio('vivaldi3', './resources/vivaldi3.mp3'); 
        game.finalAudio[3] = 'rossini3';
        game.load.audio('rossini3', './resources/rossini3.mp3');
        console.log("...audio preloaded");
        
        //Preload JSON
        game.load.json('levels', './js/levels.json');
        console.log("...levels set-up (JSON) preloaded");
    },
    
    create: function() {
        console.log("Preload State: Create");
        game.physics.startSystem(Phaser.Physics.ARCADE); 
        console.log("...physics enabled");
        console.log(">>> switching to Start Screen State");
        this.game.state.start('StartScreen');
    }
}
        
});