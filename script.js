class Person {

    constructor(id, firstName , lastName ,image, description){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.image = image;
        this.description = description;

    }

    getFullName (){
        return`${this.firstName} ${this.lastName}`
    }

}

// laryBird
let laryBird = new Person( "laryBird","Lary", "Bird" , "personBird.jpg" , '');
laryBird.description = "(born December 7, 1956) is an American former professional basketball <br><br>player, coach and executive in the National Basketball Association (NBA). Bird is widelyregarded as one of the greatest basketball players of all time."


/// kobeBryant
let kobeBryant = new Person( "kobeBryant", 'kobe', 'Bryant' , 'personkobi.jpg' , '')
kobeBryant.description = "Kobe Bean Bryant August 23, 1978 January 26, 2020) was<br><br> an American professional basketball player. A shooting guard, he spent his entire 20-year career with the Los Angeles Lakers in the National Basketball Association (NBA)."

/// michaelJordan
let michaelJordan = new Person( "michaelJordan", 'Michael ',' Jordan' , 'personJordan.jpg' , ' ')
michaelJordan.description = "Michael Jeffrey Jordan (born February 17, 1963), also known by his initials MJ,<br><br> is an American former professional basketball player and businessman. His biography on the official National Basketball Association (NBA) website states"

// lebronJames
let lebronJames = new Person( "lebronJames", 'Lebron ',' James' , 'personLebron.jpg' , ' ')
lebronJames.description = "LeBron Raymone James Sr. (lebrɒn born December 30, 1984) is an American professional basketball<br><br> player for the Los Angeles Lakers of the National Basketball Association (NBA). Nicknamed 'King James', he is widely considered one of the greatest players in NBA history"


function data(){

    let laryBirdCardElement = document.getElementById('lary-card');
    laryBirdCardElement.querySelector('.title-lary').innerHTML = laryBird.getFullName();
    laryBirdCardElement.querySelector('.img-lary').src = `./images/${laryBird.image}`;
    laryBirdCardElement.querySelector('.description-lary').innerHTML = laryBird.description;


    let kobeBryantCardElement = document.getElementById('kobe-card');
    kobeBryantCardElement.querySelector('.title-kobe').innerHTML = kobeBryant.getFullName();
    kobeBryantCardElement.querySelector('.img-kobe').src = `./images/${kobeBryant.image}`;
    kobeBryantCardElement.querySelector('.description-kobe').innerHTML = kobeBryant.description;


    let michaelJordanCardElement = document.getElementById('michael-card');
    michaelJordanCardElement.querySelector('.title-michael').innerHTML = michaelJordan.getFullName();
    michaelJordanCardElement.querySelector('.img-michael').src = `./images/${michaelJordan.image}`;
    michaelJordanCardElement.querySelector('.description-michael').innerHTML = michaelJordan.description;

 
    let lebronJamesCardElement = document.getElementById('lebron-card');
    lebronJamesCardElement.querySelector('.title-lebron').innerHTML = lebronJames.getFullName();
    lebronJamesCardElement.querySelector('.img-lebron').src = `./images/${lebronJames.image}`;
    lebronJamesCardElement.querySelector('.description-lebron').innerHTML = lebronJames.description;

}


function routeToPlayerPage(id){
    // 127.0.0.1:5500/HTML/player.html?lebronJames
    // https://top-player-js.netlify.app/HTML/player.html?lebronJames

    window.location.href = `${window.location.origin}/HTML/player.html?${id}`
}


function initPlayerData() {
    var query = window.location.search; // ?kobeBrayent
    var id = query.substring(1); // kobeBrayent

    var player;
    switch (id) {
        case laryBird.id:
            player = laryBird;
            break;
        
        case kobeBryant.id:
            player = kobeBryant;
            break;
            
        case michaelJordan.id:
            player = michaelJordan;
            break;
            
        case lebronJames.id:
            player = lebronJames;
            break;
    }

    let playerCardElement = document.getElementById('player');
    playerCardElement.querySelector('.card-title').innerHTML = player.getFullName();
    playerCardElement.querySelector('.card-img').src =  `../images/${player.image}`;
    playerCardElement.querySelector('.card-description').innerHTML = player.description;
}

function routeBackHome() {
     window.location.href = window.location.origin;
}

