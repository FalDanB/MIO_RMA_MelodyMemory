/** Fields class that contains the single fields in an array
 * @author: Daniel Falkenstein -  797852
 * 
 * @returns {Fields}
 */
define('Fields', function() {
    
    /**Sets up Fields object that contains the single fields in an array
     * 
     * @param {Phaser.game} game
     * @param {JSON} setup data for level
     * @param {type} Phaser audio objects to be put as a field's attribbute
     * @returns {fieldsL#6.Fields}
     */
    function Fields (game, setup, audio) {

    console.log("...fields set-up started");
    console.log("...number of Tiles: " + setup.NoTiles);
    
        this.list = [];
        //Addes the fields according to positions in JSON level setup data
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

        //apply the pairings to the fields for memory
        getPairing(this.list);  
        console.log("...applied pairs to fields");

        //apply ID number, solved state and audio to fields
        for (var i=0; i<this.list.length; i++) {
            this.list[i].number = i;
            this.list[i].solved = false;
            this.list[i].audio = audio[i];
        }
        console.log("...added animation and audio to fields");

    }

    /** Applies parings to fields ( (1 & 1.5), (2 & 2.5)....) and shuffles them
     * 
     * @param {List[Phaser Sprite]} list of fields
     * @returns {undefined}
     */
    function getPairing(list) {
        var pairings = [];
        
        //a pair consists of two fields, first with 1 digit, second that digit + 0.5
        for (var i=0; i<list.length; i++) {
            pairings[i] = (i+2)/2;
        }
        //Shuffle pairings
        pairings = shuffle(pairings);
        
        //Apply parings to fields
        for (var i=0; i<list.length; i++) {
            list[i].pair = pairings[i];
        }
        list.sort(function(a,b) {return a.pair-b.pair});
    }

    /** shuffles an array
     * Source: http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
     * @param {type} array
     */
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

