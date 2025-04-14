let team ;

function createTeam() {
    
    var total = document.getElementById('maxPlayers').value;
    team = new Team(total);
    console.log(total);
    if (total <= 40){
            hideMenus();
            showMainMenu();
    } else {
        
        console.log("numbers woron");
    }

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
    
    player = new Player(name, number, rating, squadMember);
    team.addPlayer(player);
 
    
    /////////////////////////////// TODO REMOVE!!!!!!!!!
    //team.addPlayer(new player('laci', 22, 5, true));
    //team.addPlayer(new player('peti', 1, 2, false));
    
    ////////////////////////////////////TODO REMOVE ABOVE
    
    document.getElementById("name").value = '';
    document.getElementById("number").value = '';
    document.getElementById("rating").value = '';
    document.getElementById("yes").checked = false;
    document.getElementById("no").checked = false;
    
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

