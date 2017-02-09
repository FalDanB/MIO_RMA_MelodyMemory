/** Starting Script of the Game, sets requirejs path and adds game states
 * @author: Daniel Falkenstein - 797852
 * @type Phaser.Game
 */
var game = {};


requirejs.config({
      baseUrl: "js",
}); 

require(['phaser', 'boot', 'preload', 'startscreen', 'instructions', 'gamebase', 'levelend', 'caught'], function(){  
    //Create the Game Object
    game = new Phaser.Game(600, 400, Phaser.AUTO, 'gameSpace', '');  
    
    //Add the possible game states to the game
    game.state.add('boot', boot);
    game.state.add('preload', preload);
    game.state.add('startscreen', startscreen);
    game.state.add('instructions', instructions);
    game.state.add('gamebase', gamebase);
    game.state.add('levelend', levelend);
    game.state.add('caught', caught);
   
    
    //Start the Preload State
    game.state.start('boot');
    
    
});