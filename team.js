class Team {
    #players;
    #total;
    
    constructor(total, players) {
        this.total = total;
        this.#players = [];
    }
    
    get players () {
        return this.#players;
    }
    
    set players(players) {
       
            console.log(players);
        
    }
    
    //rating relies on //
    getPlayerByNumber(playerNumber) {
    return this.players.find(player => player.playerNumber == playerNumber);
}
    

    
    addPlayer(player) {
        if (this.#players.length < this.#total) {
            this.#players.push(player);
        } else {
            console.warn("Cannot add more players: team is full.");
        }
    }
    //
    //addPlayer(player) {
    //            if(!this.isFull()){
    //        this.#players.push(player);
    //    }
    //}
    //

    
        //addPlayer(player) { 
    //    
    //    this.#players.push(player);
    //}
    //addPlayer(player) {
    //    if(!this.deRegisterPlayer(indexToDeRegister)){
    //        
    //    this.#players.push(player);
    //    }
    //}
    
    get total() {
        return this.#total;
    }

    set total(total) {
         if ( total <= 40) { //team can have up to 40 players
            this.#total = total;
              console.log(total);
        }
        else {
            this.#total = 40;
            console.log("Error");
        }
    }
    
    

  
    

    
      listPlayersNum() {
    let num = '';
    for (let i = 0; i < this.players.length; i++) {
        num += `Name: ${this.players[i].name}, Number: ${this.players[i].playerNumber}<br/>`;
    }
    return num;
}

    
    listPlayers() {
        var returnString ='';
        for (var i = 0; i < this.players.length; i++) {
            // `${i}` reference to the value of i what is the index of each element
            returnString = returnString + `${i}: ` + this.players[i].toString() + '</br>';
           
        }
        return returnString;
         //console.log(returnString);
    }
    
    deRegisterPlayer(indexToDeRegister) {
        return this.players.length == this.total;
        
    }
    
    isEmpty() {
        return this.players.length == 0;
    }

listCurrentPlayers() {
  return this.players
    .filter(player => player.currentSquadMember === "Current Squad Member :YES")
    .map(player => player.toString())
    .join("<br/>");
}
    
    

}