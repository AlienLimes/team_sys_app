let team;

function createTeam() {
    var total = document.getElementById("maxPlayers").value;
    team = new Team(total);
    console.log(total);
    if (total <= 40) {
        hideMenus();
        showMainMenu();
    } else {
        console.log("numbers are wrong");
    }
}

function mainMenuSelection() {
    if (document.getElementById("addPlayer").checked) {
        hideMenus();
        document.getElementById("addPlayerMenu").classList.remove("hidden");
    } 
    
    else if (document.getElementById("addSquad").checked){
        document.getElementById("showInfo").innerHTML = team.listPlayers();
        document.getElementById("showInfo").classList.remove("hidden");
        
    }
    
    
    
    
    else if (document.getElementById("listPlayers").checked) {
        document.getElementById("showInfo").innerHTML = team.listPlayers();
        document.getElementById("showInfo").classList.remove("hidden");
        
        
    } else if (document.getElementById("addRating").checked) {
        hideMenus();
        document.getElementById("addRatingsMenu").classList.remove("hidden");
        document.getElementById("showInfo").classList.remove("hidden");
        document.getElementById("showInfo").innerHTML = team.listPlayersNum();
        
        
    } else if (document.getElementById("listCurrentPlayers").checked) {
        document.getElementById("showInfo").innerHTML = team.listCurrentPlayers();
        document.getElementById("showInfo").classList.remove("hidden");
    }
}

function addPlayer() {
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var rating = document.getElementById("rating").value;
    var squadMember = false;
    //
    if (document.getElementById("yes").checked) {
        squadMember = true;
    }
    //console.log(squadMember);
    let player = new Player(name, squadMember, parseInt(number));
    //player = new Player(name, number, rating, squadMember);  !!!!!!!!
    //if (number < 1 || number > 23) {
    //    alert("Please enter a number between 1 and 23.");
    //    return;
    //}
    team.addPlayer(player);
    //console.log(player.toString());

    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("rating").value = "";
    document.getElementById("yes").checked = true;
    document.getElementById("no").checked = false;

    hideMenus();
    showMainMenu();
}
function addRating() {
    const rating = parseFloat(document.getElementById("rating").value);
    const playerNumber = parseInt(document.getElementById("playerNumber").value);

    const player = team.getPlayerByNumber(playerNumber);

    if (!player) {
        document.getElementById("showInfo").innerHTML = "Player not found.";
        return;
    }

    if (isNaN(rating) || rating < 0 || rating > 5) {
        document.getElementById("showInfo").innerHTML = "Rating must be a number between 0 and 5.";
        return;
    }

    player.addRating(rating);
    document.getElementById("showInfo").innerHTML =
        `Rating added to ${player.name}. Current ratings: [${player.ratings.join(", ")}]`;
    
    document.getElementById("rating").value = "";
    document.getElementById("playerNumber").value = "";
    
      hideMenus();
     showMainMenu();
}





function hideMenus() {
    document.getElementById("promptMenu").classList.add("hidden");
    document.getElementById("mainMenu").classList.add("hidden");
    document.getElementById("addPlayerMenu").classList.add("hidden");
    document.getElementById("addRatingsMenu").classList.add("hidden"); //hide menu when clicked
}

function showMainMenu() {
    document.getElementById("mainMenu").classList.remove("hidden");
}




let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent = "Button Clicked times: " + numButtonClicks;
}
