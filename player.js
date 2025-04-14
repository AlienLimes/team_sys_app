  class Player {
  #name;
  #playerNumber;
  #ratings = [];
  #currentSquadMember;
  
  
  constructor(name, currentSquadMember, playerNumber) {
    this.name = name;
    this.currentSquadMember = currentSquadMember;
    this.playerNumber = playerNumber;
    
  }

  get name() {
    return this.#name;
  }

  set name(name) {
     if (name.length <= 20) {
            this.#name = name;
        } else {
            this.#name = name.substring(0, 20);
        }
  }

    
    
    
    
    
    
    
  get playerNumber() {
    return this.#playerNumber;
  }

  set playerNumber(number) {
    if (number > 0 && number <= 23){
      this.#playerNumber = number;
    } else {
      console.log("Please pick a number between 1-23");
    }
    
  }

  get ratings() {
    return this.#ratings;
    
  }
  //set ratings(ratings) {
  //  if(!isNaN(ratings)){
  //    this.#ratings = (Math.round(uc * 100) / 100).toFixed(6);
  //    
  //  }
  //          else {
  //           this.#ratings = .00.toFixed(6);
  //      }
  //  
  //}
  set ratings(ratings) {
    this.#ratings = ratings;
    
  }
    addRating(index,rating) {
      
    }
  

  get currentSquadMember() {
    return this.#currentSquadMember;
  }

  set currentSquadMember(csm) {
    this.#currentSquadMember = csm;
  }

  toString() {
     var txt = this.name + " " + 
         this.playerNumber + " " + 
         this.ratings + " " +
         this.currentSquadMember;
    return txt;
  }
        //toString() {
        //return (
        //    " Name: " +
        //    this.name +
        //    ", " +
        //    "player number: " +
        //    this.playerNumber +
        //    ", " +
        //    "ratings: " +
        //    this.ratings +
        //    ", " +
        //    "currently in the Squad: " +
        //    this.currentSquadMember()
        //);
    //}
}