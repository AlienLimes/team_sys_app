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
///////NAME////
  get name() {
    return this.#name;
  }
//name max length 20, truncate if longer//
  set name(name) {
     if (name.length <= 20) {
            this.#name = name;
        } else {
            this.#name = name.substring(0, 20);
        }
  }

 ///////////////////////////   
    
    
    
  ///////////NUMBER///////////////
    
  get playerNumber() {
    return this.#playerNumber;
  }
//player number 1-23, 23 defult
  set playerNumber(number) {
    if (number >= 1 && number <= 23){
      this.#playerNumber = number;
    } else {
      this.#playerNumber = 23;
      alert("Please pick a number between 1-23");
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
    if (currentSquadMember === true){
      this.#currentSquadMember = "Current Squad Member :YES";
    }
    else {
      this.#currentSquadMember = "Current Squad Member :NO";
    }
    
  }

    

    

  toString() {
     var txt = "Player details: " + "Name: " + this.name + " " + 
         "Player number: " + this.playerNumber + " " + 
         "Ratings: " + this.ratings + " " +
         this.currentSquadMember;
    return txt;
  }

}










