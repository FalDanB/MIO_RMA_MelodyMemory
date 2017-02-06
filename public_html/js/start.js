/** Starting Script of the Game, sets requirejs path and adds game states
 * @author: Daniel Falkenstein - 797852
 * @type Phaser.Game
 */
var game = {};


requirejs.config({
      baseUrl: "js",
}); 

require(['Phaser', 'Preload', 'StartScreen', 'Instructions', 'GameBase', 'LevelEnd', 'Caught'], function(Phaser){  
    //Create the Game Object
    game = new Phaser.Game(600, 400, Phaser.AUTO, 'gameSpace', '');  
    
    //Add the possible game states to the game
    game.state.add('Preload', Preload);
    game.state.add('StartScreen', StartScreen);
    game.state.add('Instructions', Instructions);
    game.state.add('GameBase', GameBase);
    game.state.add('LevelEnd', LevelEnd);
    game.state.add('Caught', Caught);
    
    //Start the Preload State
    game.state.start('Preload');
    
    
});