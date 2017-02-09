/**Game State that is entered when player is caught by opponen
 * @author Daniel Falkenstein - 797852
 * @param {type} Phaser
 */

define("caught",  function( ) { 
   
caught = function (game) {
    
}

caught.prototype =  {
    
    /** Create the Screen shown when caught by opponent
     */
    create: function () {
        console.log("Caught State: Create");
        game.add.sprite(0,0,"caught");
        this.game.add.button(200,320,"restartLevelButton",this.restartLevel,this);
        console.log("...added caught screen and restart level button");
        
    },
    
    /** Restarts the level when button is clicked
     */
    restartLevel: function () {
        console.log("Caught screen: restart level button clicked");
        console.log(">>> switching to Game Base State");
        this.game.state.start('gamebase');
    },
    
}


});
    


