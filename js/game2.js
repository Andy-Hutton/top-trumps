// "start game"
// "choose card"
// "you won"
// "you lost"
// "its a draw"
// "game over"
// "new game"

// let numberOfRounds = 5;
// let numberOfCategories = 3;
// let data_comparison = ["", "smaller", "larger", "smaller"];


let resultButton = document.querySelector("section + div");
let image1 = document.querySelector("section img:first-child");
let image2 = document.querySelector("section img:nth-child(2)");
// let clicks = 0;
// let maxClicksAllowed = 10;

function SkidMarks(name, year, bhp, acel, img){
this.name = name;
this.year = year;
this.bhp = bhp;
this.acel = acel;
this.img = img;
}


const quattro = new SkidMarks ("Audi Quattro", 1985, 540,3.1, "images/quattro")
const rs2000 = new SkidMarks ("Ford RS200", 1986, 580, 3.1, "images/rs200")
const impreza = new SkidMarks ("Subaru Impreza 22B", 1997, 310, 5.0, "images/22b")
const evo = new SkidMarks ("Mitsubishi Evo IV", 1997, 280, 5.5, "images/22b")
const ffocus = new SkidMarks ("Ford Focus", 1999, 300, 4.2, "images/ffocus")
const suzuki = new SkidMarks ("Suzuki Escudo Pikes Peak", 1996, 985, 2.5, "images/escudo")
const mg = new SkidMarks ("MG Metro 6R4", 1985, 410, 3.0, "images/mg")
const nissan = new SkidMarks ("Nissan GT-R", 2023, 565, 2.9, "images/gtr")
const porsche = new SkidMarks ("Porsche 911 GT3 RS", 2022, 523, 2.7, "images/911" )
const m3 = new SkidMarks ("BMW M3 GTS", 2016, 306, 4.4, "images/m3")
const ferrari = new SkidMarks ("Ferrari F40", 1987, 471, 3.0, "images/f40")
const mustang = new SkidMarks ("Ford Mustang",2020, 460, 4.2, "images/mustang")
const lambo = new SkidMarks ("Lamborghini LP 610", 2018, 601, 3.2, "images/lambo")
const mazda = new SkidMarks ("Mazda RX7", 1992, 197, 4.1, "images/rx7")
const golf = new SkidMarks ("Volkswagen Golf R", 2020, 292, 4.9, "images/golfr" )
const renault = new SkidMarks ("Renault Meganne Trophy", 2016, 300, 5.7, "images/renault" )
const honda = new SkidMarks ("Honda Civic Type R", 2021, 310, 4.8, "images/fk8" )
const tesla = new SkidMarks ("Tesla Model S", 2021, 310, 3.2, "images/tesla" )
const caterham = new SkidMarks ("Caterham 7", 2015, 180, 4.8, "images/caterham")
const hyundai = new SkidMarks ("Hyundai I30n", 2020, 271, 5.9, "images/i30n")


const cards = [ferrari, mustang, lambo, mazda, golf, renault, honda, tesla, caterham, hyundai, quattro, rs2000, impreza, evo, ffocus, suzuki, mg, nissan, porsche, m3]


function randomCardItem (){
let randomNumber = Math.floor(Math.random()* cards.length)
return randomNumber
}


// function that renders the first item of each hand array onto the page using dom manipulation
 
function renderCard () {
let index1 = randomCardItem()
let index2 = randomCardItem()

    // let hand1Card = hand1[index1]
    // let hand2Card = hand2[index2]

    while (index1 === index2) {
        index2 = getRandomNumber();
      }
let img1 = document.getElementById("img1").src;
let img2 = document.getElementById("img2").src;
let img1 = document.getElementById("img1").name;
let img2 = document.getElementById("img2").name;
SkidMarks.getElementById[img1].views++;
SkidMarks.getElementById[img2].views++;
    }

let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")


img1.src = `${hand1Card.img}.jpg`
img2.src = `${hand2Card.img}.jpg`

document.getElementById("cards").innerHTML = `${hand1Card.name}`
document.getElementById("cards").innerHTML = `${hand2Card.name}`


document.getElementById("cards").innerHTML = `${hand1Card.year}`
document.getElementById("cards").innerHTML = `${hand2Card.year}`

document.getElementById("cards").innerHTML = `${hand1Card.bhp}`
document.getElementById("cards").innerHTML = `${hand2Card.bhp}`

document.getElementById("cards").innerHTML = `${hand1Card.acel}`
document.getElementById("cards").innerHTML = `${hand2Card.acel}`
}

// Keep track of the score
let score = 0;
let maxClicks = 10;
let clicks = 0;

// Handle a click on a card
function cardClicked(cardNum){
    // Increment click counter
    clicks++;

    // Update the score
    if (cardNum == 1) {
        score++;
    } else {
        score--;
    }

    // Check if game is over
    if (clicks == maxClicks) {
        // Display the result
        alert("Game Over! Your score is: " + score);
        // Reset the click counter
        clicks = 0;
    }

renderCard()

// when the user clicks an image, get two images
// the image you click on should remain on the page
// the user should have a max number of turns, and at the end show the user their favourite car
// Stretch Goals
// keep track of the views and votes, and show 2nd and 3rd place

// carContainer.addEventListener("click", handleCarClick);


// function that takes the first item from one array, and adds it the end of the other array
// and also take the first item of the winner array and put it at the end