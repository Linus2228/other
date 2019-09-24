class GuessingGame {
    constructor() {
       this.ar = [];
        this.mid = 0;
    }

    setRange(min, max) { 
        this.max = max;
        for (var i=0; i<=this.max; i++) {
             this.ar.push(i);            
        }     
    }

    guess() {
        this.mid = Math.floor(this.ar.length / 2);
        console.log(this.ar[this.mid]);
        return this.ar[this.mid];
    }

    lower() {
this.ar.splice(this.mid+1, Number.MAX_VALUE);
    }

    greater() {
    this.ar.splice(0, this.mid);
      
    }
}
module.exports = GuessingGame;