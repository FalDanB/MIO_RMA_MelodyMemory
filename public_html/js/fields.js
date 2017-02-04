define('Fields', ['Phaser'], function() {
    
    function Fields (game, setup, audio) {

    console.log("...fields set-up started");
    console.log("...number of Tiles: " + setup.NoTiles);
    
        this.list = [];
        for (var i=0; i<setup.NoTiles; i++) {
            if (i<4) {
                this.list[i] = game.add.sprite(setup.TilesPos.x[i+1], setup.TilesPos.y[1], 'field'); 
            } else if (i>=4 && i <8) {
                this.list[i] = game.add.sprite(setup.TilesPos.x[i-3], setup.TilesPos.y[2], 'field');
            } else if (i>=8) {
                this.list[i] = game.add.sprite(setup.TilesPos.x[i-7], setup.TilesPos.y[3], 'field');
            }
        }
        console.log("...fields created");

        getPairing(this.list);  
        console.log("...applied pairs to fields");

        for (var i=0; i<this.list.length; i++) {
            this.list[i].number = i;
            this.list[i].solved = false;
            this.list[i].animations.add('solve', [2,3,4,5], 10, false);
            this.list[i].audio = audio[i];
        }
        console.log("...added animation and audio to fields");

    }


    function getPairing(list) {
        var pairings = [];
        for (var i=0; i<list.length; i++) {
            pairings[i] = (i+2)/2;
        }
        pairings = shuffle(pairings);

        for (var i=0; i<list.length; i++) {
            list[i].pair = pairings[i];
        }
        list.sort(function(a,b) {return a.pair-b.pair});
    }

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }

        return array;
    }
    
    return Fields;
    
});

