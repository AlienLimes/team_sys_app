  class Player {
  #name;
  #playerNumber;
  #ratings = [];
  #currentSquadMember = false;
  
  
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

  set ratings(ratings) {
    if (
      Array.isArray(ratings) &&
      ratings.length === 6 &&
      ratings.every((i) => typeof i === 'number' && i >= 0 && i <= 5)
      // check array length , every index /typeof operator returns the type of a variable and if it equals to a number between 0-5 /
    ) {
      this.#ratings = ratings;
    } else {
      console.log("Ratings must be between 0 and 5 ");
      this.#ratings = [];
    }
  }

  addRating(rating) {
    //check if ratin is a number and check if rating between 0-5
  if (typeof rating === 'number' && rating >= 0 && rating <= 5) {
    
    this.#ratings.push(rating);
  } else {
    console.log("Rating must be a number between 0 and 5.");
  }
 }
    

  

  get currentSquadMember() {
    return this.#currentSquadMember;
  }

  set currentSquadMember(currentSquadMember) {
    if (currentSquadMember == true){
      this.#currentSquadMember = "and is a current squad member";
    }
    else {
      this.#currentSquadMember = "and is currently not a squad member";
    }
    
  }

  toString() {
     var txt = "Player details: " + "Name: " + this.name + " " + 
         "Player number: " + this.playerNumber + " " + 
         "Ratings: " + this.ratings + " " +
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










