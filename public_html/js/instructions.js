/** Instructions Game State for Melody Memory Game
 * 
 * @authoer Daniel Falkenstein - 797852
 * @param {Phaser} Phaser
 * 
 */
define("instructions",  function( ) { 


/** Main Instructions function for Phaser States
 * 
 * @param {Phaser Game} game
 * 
 */
instructions = function (game) {
}

instructions.prototype =  {
   
    /** Sets up the instruction screen with background, sprites and buttons
     * 
     */
    create: function () {
        console.log("Instruction State: Create");
        
        //Set background
        instructionsScreen = game.add.sprite(0,0,"instructions");
        
        
        //Set buttons
        backutton = this.game.add.button(160,360,"backButton",this.backToMainScreen,this);
        playButton = this.game.add.button(300,360,"playButton",this.startGame,this);
        console.log("...added instructions image, back and play button");
        
        //Set sprites
        whitey =  game.add.sprite(40,100, 'whitey');
        whitey.animations.add('right', [11,12], 10, true);
        whitey.animations.play('right');
        
        mrgrey =  game.add.sprite(40,160, 'mrgrey');
        mrgrey.animations.add('up', [5,6,7,8], 10, true);
        mrgrey.animations.play('up');
        
    },
    
    /** Function to start the game (GameBase state) when button is clicked
     *
     */
    startGame: function () {
        console.log("Instruction: play button button clicked");
        game.level = 1;
        console.log("...set game level to 1");
        game.sound.stopAll();
        console.log(">>> switching to Main Game State");
        this.game.state.start('gamebase');
    },
    
    
    /** Function to go back to the main screen state if button is clicked
     * 
     * @returns {undefined}
     */
    backToMainScreen: function () {
        console.log("Instructions: back button clicked");
        game.level = 1;
        console.log("...set game level to 1");
        console.log(">>> switching to Game Base State");
        this.game.state.start('startscreen');

    } 
}



});
    


