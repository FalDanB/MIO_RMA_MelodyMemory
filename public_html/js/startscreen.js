/**StartScreen State for Melody Memory Game
 * 
 * @author: Daniel Falkenstein - 797852
 * @param {type} Phaser
 */
define("StartScreen", ['Phaser'],  function( Phaser ) { 
   
/** Main function for Phaser Game States
 * 
 * @param {Phaser Game} game
 */
StartScreen = function (game) {
    var startScreen, playButton;
}

StartScreen.prototype =  {
    
    /**Sets upt the background image, buttons and animated characters
     * 
     */
    create: function () {
        console.log("Start Screen State: Create");
        
        //Set Background Screen
        startScreen = game.add.sprite(0,0,"startScreen");
        
        //Set Buttons
        instructionsButton = this.game.add.button(100,300,"instructionsButton",this.showInstructions,this);
        playButton = this.game.add.button(100,340,"playButton",this.startGame,this);
        level1Button = this.game.add.button(200,349,"level1Button",this.startGame,this);
        level2Button = this.game.add.button(300,349,"level2Button",this.startLevel2,this);
        level3Button = this.game.add.button(400,349,"level3Button",this.startLevel3,this);
        console.log("...added start screen image play and level button");
        
        //Set animated characters
        whitey = game.add.sprite(20,60, 'whitey');
        whitey.animations.add('right', [11,12], 10, true);
        whitey.animations.play('right');
        mrgrey = game.add.sprite(540,200, 'mrgrey');
        mrgrey.animations.add('left', [9,10], 10, true);
        mrgrey.animations.play('left');
        
    },
    
    /** Function to start the game if nbutton clicked
     *
     */
    startGame: function () {
        console.log("Start Screen State: play button or level 1 button clicked");
        game.level = 1;
        console.log("...set game level to 1");
        console.log(">>> switching to Game Base State");
        this.game.state.start('GameBase');
    },
    
    /** Function to start level 2 if button clicked
     *
     */
    startLevel2: function () {
        console.log("Start Screen State: level 2 button clicked");
        game.level = 2;
        console.log("...set game level to 2");
        console.log(">>> switching to Game Base State");
        this.game.state.start('GameBase');
    },
    
    
    /** Function to start level 3 if button clicked
     *
     */
    startLevel3: function () {
        console.log("Start Screen State: level 3 button clicked");
        game.level = 3;
        console.log("...set game level to 3");
        console.log(">>> switching to Game Base State");
        this.game.state.start('GameBase');
    },
    
    
    /** Function to show instructions if button clicked
     *
     */
    showInstructions: function () {
        console.log("Start Screen State: instructions button clicked");
        this.game.state.start('Instructions');

    } 
}



});
    


