/**Level End State (also game end after last level) for Melody Memory Game
 * 
 * @author Daniel Falkenstein - 797852
 * @param {type} Phaser
 * @returns {undefined}
 */
define("LevelEnd", ['Phaser'],  function( Phaser ) { 

var finalAudioPlay;

/** Main function for Phaser Game States
 * 
 * @param {Phaser Game} game
 */
LevelEnd = function (game) {
   
    }

LevelEnd.prototype =  {
   
    /** Sets up interlevel or game end screen and buttons
     * 
     * @returns {undefined}
     */
    create: function () {
        console.log("Level End State: Create");
        
        //If game has not ended
        if (game.level <3) {
            interlevelScreen = game.add.sprite(0,0,"interlevel");     
            nextLevelButton = this.game.add.button(40,350,"nextLevelButton",this.nextLevel,this);
            console.log("...added interlevel image and next level button");
        } 
        //if game has ended
        else if (game.level == 3) {
            gameEndScreen = game.add.sprite(0,0,"gameEnd");
            playagainButton = this.game.add.button(220,345,"playAgainButton",this.restartGame,this);
            console.log("...added game end image and replay button");
        }
        //Play the final audio piece corresponding to last pair solved
        finalAudioPlay = game.sound.play(game.finalAudio[Math.floor(lastField.number/2)]);
    },
    
    /**Function to proceed to next level (GameBase state) if button clicked
     * 
     */
    nextLevel: function () {
        console.log("LevelEnd: next level button button clicked");
        game.level++;
        console.log("...increased game level");
        finalAudioPlay.stop();
        console.log("...stopped all sound");
        console.log(">>> switching to Game Base State");
        this.game.state.start('GameBase');
    },
    
    /**Function to restart the game (GameBase state) if button clicked
     * 
     * @returns {undefined}
     */
    restartGame: function () {
        console.log("GameEnd: play button button clicked");
        game.level = 1;
        console.log("...set game level to 1");
        console.log(">>> switching to Main Game State");
        this.game.state.start('GameBase');
    },
       
}

});
    


