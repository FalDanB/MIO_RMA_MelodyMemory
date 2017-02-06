/** Game End State that is reached after last level is solved
 * 
 * @author Daniel Falkenstein
 * @param {Phaser} Phaser
 * 
 */
define("GameEnd", ['Phaser'],  function( Phaser ) { 
   
/** Main GameEnd function for Phaser States
 * 
 * @param {Phaser Game} game
 * 
 */
GameEnd = function (game) { 
}

GameEnd.prototype =  {
    
    /** Sets up the GameEnd Screen and Play Again Button
     *
     */
    create: function () {
        console.log("GameEnd State: Create");
        gameEndScreen = game.add.sprite(0,0,"gameEnd");
        playagainButton = this.game.add.button(300,360,"playButton",this.restartGame,this);
        console.log("...added instructions image, back and play button");
        
    },
    
    /** Sets game level to 1 and restarts the game if button clicked
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
    


