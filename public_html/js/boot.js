/**Preload state for Melody Memory Game, presloads the assts
 * 
 * @author Daniel Falkenstein - 797852
 * @param {Phaser} Phaser
 * @returns {undefined}
 */
define("boot",  function( ) { 
    
/** Main function for Phaser game state
 * 
 * @param {Phaser Game} game
 */
boot = function (game) {
}

boot.prototype =  {
    
    /** Prelaods the images, sprites and audio
     * 
     */
    preload: function() {
        game.load.image('loadingBar', './resources/img/loadingbar.jpg'); 
    },
    
    /** Starts the game physics and moves on to startscreen
     * 
     * @returns {undefined}
     */
    create: function() {
         game.state.start('preload');
    }
}
        
});