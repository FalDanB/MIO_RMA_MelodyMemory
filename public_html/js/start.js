requirejs.config({
      baseUrl: "js",
      paths: {
          Phaser: 'phaser'
      }
}); 

require(['Phaser'], function( Phaser ){  
    alert("Hallo");
    var game = new Phaser.Game(600, 400, Phaser.AUTO, 'gameSpace', '');  
   /* game.state.add('Preload', Preload); 
    game.state.add('Startscreen', Startscreen);
    game.state.add('Level1', Level1);
    game.state.add('Level2', Level2);
    game.state.add('Level3', Level3);
    game.state.add('Interlevel', Interlevel)
    //game.state.add('Gameover', gameOverState);*/
    
    //game.state.start('Preload');
});