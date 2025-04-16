let team;

function createTeam() {
    
    var total = document.getElementById('maxPlayers').value;
    team = new Team(total);
    console.log(total);
    if (total <= 40){
            hideMenus();
            showMainMenu();
    } else {       
        console.log("numbers are wrong");
    }

}

function addRating() {
    const rating = parseFloat(document.getElementById("rating").value);
    const playerNumber = parseInt(document.getElementById("playerNumber").value);
    
    
    
    const player = team.getPlayerByNumber(playerNumber);

    if (!player) {
        document.getElementById('showInfo').innerHTML = "Player not found.";
        return;
    }

    if (isNaN(rating) || rating < 0 || rating > 5) {
        document.getElementById('showInfo').innerHTML = "Rating must be a number between 0 and 5.";
        return;
    }

    player.addRating(rating);
    document.getElementById('showInfo').innerHTML = `Rating added to ${player.name}. Current ratings: [${player.ratings.join(', ')}]`;
}


function mainMenuSelection() {
    if (document.getElementById('addPlayer').checked) {
        hideMenus();
        document.getElementById('addPlayerMenu').classList.remove('hidden');
    }
    else if (document.getElementById('listPlayers').checked) {
       //ideMenus();
        document.getElementById('showInfo').innerHTML= team.listPlayers();
        document.getElementById('showInfo').classList.remove('hidden');
    }
    else if (document.getElementById("addRating").checked) {
    hideMenus();
    document.getElementById('addRatingsMenu').classList.remove('hidden');
    document.getElementById('showInfo').classList.remove('hidden');
    document.getElementById('showInfo').innerHTML = team.listPlayersNum();
}

}

function addPlayer() {
    //UI functionality
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var rating = document.getElementById("rating").value;
    var squadMember = false;

    if (document.getElementById("yes").checked) {
        squadMember = true;
    }
    console.log(squadMember);
    
    player = new Player(name, number, rating, squadMember);
    team.addPlayer(player);
    console.log(player.toString());
 
    
    /////////////////////////////// TODO REMOVE!!!!!!!!!
    team.addPlayer(new Player('laci', 22, 5, true));
    team.addPlayer(new Player('peti', 1, 2, false));
    //const player1=new Player("terike",1,2,true);
    //player1.addRating(4)
    ////////////////////////////////////TODO REMOVE ABOVE
    
    //document.getElementById("name").value = '';
    //document.getElementById("number").value = '';
    //document.getElementById("rating").value = '';
    //document.getElementById("yes").checked = true;
    //document.getElementById("no").checked = false;
    
    hideMenus();
    showMainMenu();
    
}



function hideMenus() {
    document.getElementById('promptMenu').classList.add('hidden');
    document.getElementById('mainMenu').classList.add('hidden');
    document.getElementById('addPlayerMenu').classList.add('hidden');
}

function showMainMenu() {
    document.getElementById('mainMenu').classList.remove('hidden');
}

let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent =
        "Button Clicked times: " + numButtonClicks;
}

