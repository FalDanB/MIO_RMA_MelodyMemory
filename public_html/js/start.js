var game = {};
requirejs.config({
      baseUrl: "js",
}); 

require(['Phaser', 'Preload', 'StartScreen', 'Instructions', 'GameBase', 'Interlevel', 'Caught', 'GameEnd'], function(Phaser){  

    game = new Phaser.Game(600, 400, Phaser.AUTO, 'gameSpace', '');  
    game.state.add('Preload', Preload);
    game.state.add('StartScreen', StartScreen);
    game.state.add('Instructions', Instructions);
    game.state.add('GameBase', GameBase);
    game.state.add('Interlevel', Interlevel);
    game.state.add('Caught', Caught);
    game.state.add('GameEnd', GameEnd);
    game.state.start('Preload');
    
    /*game.state.add('Preload', Preload); 
    game.state.add('Startscreen', Startscreen);
    game.state.add('Level1', Level1);
    game.state.add('Level2', Level2);
    game.state.add('Level3', Level3);
    game.state.add('Interlevel', Interlevel)
    //game.state.add('Gameover', gameOverState);*/
    
    //game.state.start('Preload');
});