class Start {
    constructor() {
        this.playerName = "PLAYER 1"
        this.comName = "COM"
        this.playerOption;
        this.comOption;
        this.winner = ""
    }

    get getComOption() {
        return this.comOption;
    }

    set setComOption(option) {
        this.comOption = option;
    }

    get getPlayerOption() {
        return this.playerOption;
    }

    set setPlayerOption(option) {
        this.playerOption=option;
    }

    comBrain() {
        const option = ["✊", "✋", "✌"];
        const com = option[Math.floor(Math.random()* option.length)];
        return com;
    }

    wincalculation() {
        if (this.comOption == "✋" && this.playerOption == "✌") { 
            return this.winner = this.playerName;
            
        } else if (this.comOption == "✋" && this.playerOption == "✊"){ 
            return this.winner = this.comName;
            
        } else if (this.comOption == "✌" && this.playerOption == "✋"){ 
            return this.winner = this.comName;

        }else if (this.comOption == "✌" && this.playerOption == "✊"){ 
            return this.winner = this.playerName;
        }else if (this.comOption == "✊" && this.playerOption == "✌"){ 
            return this.winner = this.comName;
        }else if (this.comOption == "✊" && this.playerOption == "✋"){ 
            return this.winner = this.playerName;
        }else {
            return this.winner = "DRAW";
        }
    }

    matchResult () {
        if (this.winner != "DRAW"){
            return `${this.winner} WIN`;
        } else {
            return "DRAW";
        }
    }

}
function pickOption (params) {
    const start = new Start();
    start.setPlayerOption = params;
    start.setComOption = start.comBrain();
    start.wincalculation();
    console.log(`Player 1 : ${start.getPlayerOption} vs Com : ${start.getComOption}`);
    console.log(start.matchResult())

}