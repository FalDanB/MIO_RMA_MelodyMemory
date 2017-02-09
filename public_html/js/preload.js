/**Preload state for Melody Memory Game, presloads the assts
 * 
 * @author Daniel Falkenstein - 797852
 * @param {Phaser} Phaser
 * @returns {undefined}
 */
define("preload",  function( ) { 
    
/** Main function for Phaser game state
 * 
 * @param {Phaser Game} game
 */
preload = function (game) {
}

preload.prototype =  {
    
    /** Prelaods the images, sprites and audio
     * 
     */
    preload: function() {
        console.log("### PRELOAD STATE ###");
        console.log("Preload State: Preload");
        
        game.preloadBar = game.add.sprite(100, 150, 'loadingBar');
        game.load.setPreloadSprite(game.preloadBar);
        
        
        //Preload Images
        game.load.image('startScreen', './resources/img/startscreen.jpg'); 
        game.load.image('instructions', './resources/img/instructions.jpg');
        game.load.image('background', './resources/img/lawn.jpg');
        game.load.image('interlevel', './resources/img/interlevel.jpg');
        game.load.image('caught', './resources/img/caught.jpg');
        game.load.image('gameEnd', './resources/img/congratulations.jpg');
        game.load.image('playButton', './resources/img/playbutton.png');
        game.load.image('instructionsButton', './resources/img/instructionsbutton.png');
        game.load.image('level1Button', './resources/img/level1button.png');
        game.load.image('level2Button', './resources/img/level2button.png');
        game.load.image('level3Button', './resources/img/level3button.png');
        game.load.image('backButton', './resources/img/backbutton.png');
        game.load.image('nextLevelButton', './resources/img/nextLevelButton.png');
        game.load.image('restartLevelButton', './resources/img/restartLevelButton.png');
        game.load.image('playAgainButton', './resources/img/playAgainButton.png');
        console.log("...images preloaded");
       
        //Preload Sprite Sheets
        game.load.spritesheet('whitey', './resources/img/whitey.png', 42, 31);
        game.load.spritesheet('mrgrey', './resources/img/mrgrey.png', 42, 31);
        game.load.spritesheet('field', './resources/img/field.png', 60, 60);

        //Preload Audio
        game.fieldsAudio = [];
        game.finalAudio = [];
 
        game.fieldsAudio[0] = 'beethoven1';
        game.load.audio('beethoven1', ['./resources/audio/beethoven1.mp3','/resources/audio/beethoven1.ogg']); 
        game.fieldsAudio[1] = 'beethoven2';
        game.load.audio('beethoven2', ['./resources/audio/beethoven2.mp3', './resources/audio/beethoven2.ogg']);
        game.fieldsAudio[2] = 'grieg1';
        game.load.audio('grieg1', ['./resources/audio/grieg1.mp3', './resources/audio/grieg1.ogg']);
        game.fieldsAudio[3] = 'grieg2';
        game.load.audio('grieg2', ['./resources/audio/grieg2.mp3', './resources/audio/grieg2.ogg']);        
        game.fieldsAudio[4] = 'handel1';
        game.load.audio('handel1', ['./resources/audio/handel1.mp3', './resources/audio/handel1.ogg']);
        game.fieldsAudio[5] = 'handel2';
        game.load.audio('handel2', ['./resources/audio/handel2.mp3', './resources/audio/handel2.ogg']);
        game.fieldsAudio[6] = 'tchaikovsky';
        game.load.audio('tchaikovsky', ['./resources/audio/tchaikovsky.mp3', './resources/audio/tchaikovsky.ogg']);
        game.fieldsAudio[6] = 'tchaikovsky1';
        game.load.audio('tchaikovsky1', ['./resources/audio/tchaikovsky1.mp3', './resources/audio/tchaikovsky1.ogg']);
        game.fieldsAudio[7] = 'tchaikovsky2';
        game.load.audio('tchaikovsky2', ['./resources/audio/tchaikovsky2.mp3', './resources/audio/tchaikovsky2.ogg']);
        game.fieldsAudio[8] = 'vivaldi1';
        game.load.audio('vivaldi1', ['./resources/audio/vivaldi1.mp3', './resources/audio/vivaldi1.ogg']);
        game.fieldsAudio[9] = 'vivaldi2';
        game.load.audio('vivaldi2', ['./resources/audio/vivaldi2.mp3', './resources/audio/vivaldi2.ogg']);
        game.fieldsAudio[10] = 'rossini1';
        game.load.audio('rossini1', ['./resources/audio/rossini1.mp3', './resources/audio/rossini1.ogg']);
        game.fieldsAudio[11] = 'rossini2';
        game.load.audio('rossini2', ['./resources/audio/rossini2.mp3', './resources/audio/rossini2.ogg']);
        game.finalAudio[0] = 'beethoven3';
        game.load.audio('beethoven3', ['./resources/audio/beethoven3.mp3', './resources/audio/beethoven3.ogg']); 
        game.finalAudio[1] = 'grieg3';
        game.load.audio('grieg3', ['./resources/audio/grieg3.mp3', './resources/audio/grieg3.ogg']);       
        game.finalAudio[2] = 'handel3';
        game.load.audio('handel3', ['./resources/audio/handel3.mp3', './resources/audio/handel3.ogg']); 
        game.finalAudio[3] = 'tchaikovsky3';
        game.load.audio('tchaikovsky3', ['./resources/audio/tchaikovsky3.mp3', './resources/audio/tchaikovsky3.ogg']); 
        game.finalAudio[4] = 'vivaldi3';
        game.load.audio('vivaldi3', ['./resources/audio/vivaldi3.mp3', './resources/audio/vivaldi3.ogg']); 
        game.finalAudio[5] = 'rossini3';
        game.load.audio('rossini3', ['./resources/audio/rossini3.mp3', './resources/audio/rossini3.ogg']);
        console.log("...audio preloaded");
        
        //Preload JSON
        game.load.json('levels', './js/levels.json');
        console.log("...levels set-up (JSON) preloaded");
    },
    
    /** Starts the game physics and moves on to startscreen
     * 
     * @returns {undefined}
     */
    create: function() {
        console.log("Preload State: Create");
        game.physics.startSystem(Phaser.Physics.ARCADE); 
        console.log("...physics enabled");
        console.log(">>> switching to Start Screen State");
        this.game.state.start('startscreen');
    }
}
        
});