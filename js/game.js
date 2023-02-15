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




let cContainer = document.querySelector("carContainer");
let resultButton = document.querySelector("carContainer + div");

let clicks = 0;
let maxClicksAllowed = 10;

function SkidMarks(name, year, bhp, acel, img) {
this.name = name;
this.year = year;
this.bhp = bhp;
this.acel = acel;
this.img = img;
this.views = 0;
this.clicks = 0;
}


const quattro = new SkidMarks ("Audi Quattro", 1985, 540,3.1, "images/quattro");
const rs2000 = new SkidMarks ("Ford RS200", 1986, 580, 3.1, "images/rs200");
const impreza = new SkidMarks ("Subaru Impreza 22B", 1997, 310, 5.0, "images/22b");
const evo = new SkidMarks ("Mitsubishi Evo IV", 1997, 280, 5.5, "images/22b");
const ffocus = new SkidMarks ("Ford Focus", 1999, 300, 4.2, "images/ffocus");
const suzuki = new SkidMarks ("Suzuki Escudo Pikes Peak", 1996, 985, 2.5, "images/escudo");
const mg = new SkidMarks ("MG Metro 6R4", 1985, 410, 3.0, "images/mg");
const nissan = new SkidMarks ("Nissan GT-R", 2023, 565, 2.9, "images/gtr");
const porsche = new SkidMarks ("Porsche 911 GT3 RS", 2022, 523, 2.7, "images/911" );
const m3 = new SkidMarks ("BMW M3 GTS", 2016, 306, 4.4, "images/m3");
const ferrari = new SkidMarks ("Ferrari F40", 1987, 471, 3.0, "images/f40");
const mustang = new SkidMarks ("Ford Mustang",2020, 460, 4.2, "images/mustang");
const lambo = new SkidMarks ("Lamborghini LP 610", 2018, 601, 3.2, "images/lambo");
const mazda = new SkidMarks ("Mazda RX7", 1992, 197, 4.1, "images/rx7");
const golf = new SkidMarks ("Volkswagen Golf R", 2020, 292, 4.9, "images/golfr" );
const renault = new SkidMarks ("Renault Meganne Trophy", 2016, 300, 5.7, "images/renault");
const honda = new SkidMarks ("Honda Civic Type R", 2021, 310, 4.8, "images/fk8");
const tesla = new SkidMarks ("Tesla Model S", 2021, 310, 3.2, "images/tesla");
const caterham = new SkidMarks ("Caterham 7", 2015, 180, 4.8, "images/caterham");
const hyundai = new SkidMarks ("Hyundai I30n", 2020, 271, 5.9, "images/i30n");


const hand1 = [ferrari, mustang, lambo, mazda, golf, renault, honda, tesla, caterham, hyundai];
const hand2 = [quattro, rs2000, impreza, evo, ffocus, suzuki, mg, nissan, porsche, m3];

// const hand1 = [ferrari, mustang, lambo, mazda, golf, renault, honda, tesla, caterham, hyundai,
// quattro, rs2000, impreza, evo, ffocus, suzuki, mg, nissan, porsche, m3]

function randomHand1Item (){
let randomNumber = Math.floor(Math.random()* hand1.length);
return randomNumber;
}
function randomHand2Item (){
    let randomNumber = Math.floor(Math.random()* hand2.length);
    return randomNumber;
    }


function renderCard () {
let index1 = randomHand1Item();
let index2 = randomHand2Item();

let hand1Card = hand1[index1];
let hand2Card = hand2[index2];

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
img1.src = `${hand1Card.img}.jpg`;
img2.src = `${hand2Card.img}.jpg`;

document.getElementById("h1name").innerHTML = `${hand1Card.name}`;
document.getElementById("h2name").innerHTML = `${hand2Card.name}`;

document.getElementById("h1year").innerHTML = `${hand1Card.year}`;
document.getElementById("h2year").innerHTML = `${hand2Card.year}`;

document.getElementById("h1bhp").innerHTML = `${hand1Card.bhp}`;
document.getElementById("h2bhp").innerHTML = `${hand2Card.bhp}`;

document.getElementById("h1acel").innerHTML = `${hand1Card.acel}`;
document.getElementById("h2acel").innerHTML = `${hand2Card.acel}`;

SkidMarks.hand1[index1].views++;
SkidMarks.hand2[index2].views++;
}


renderCard() ;
// re add if below is deleted!!!

// delete below if necessary


function handleCarClick(event) {
    if (event.target === cContainer) {
      alert("Please click one of the cars");
      }
    // above ok!
    clicks++;
    let clickCar = event.target.alt;
    for (let i = 0; i < SkidMarks.hand1.length; i++) {
      if (clickCar === SkidMarks.hand1[i].name) {
        SkidMarks.hand1[i].clicks++;
        break;
      }
    }


    if (clicks === maxClicksAllowed) {
      cContainer.removeEventListener("click", handleCarClick);
    

// works above here!!! remove above render card if continuing!!
      renderChart();
    } else {
      renderCard();
    }
  }

  function renderChart() {
    let labelArray = [];
    let clicksArray = [];
    let viewsArray = [];
  
    for (let i = 0; i < SkidMarks.hand1.length; i++) {
      let SkidMarks = SkidMarks.hand1[i];
      labelArray.push(SkidMarks.name);
      clicksArray.push(SkidMarks.clicks);
      viewsArray.push(SkidMarks.views);
    }
  
    const data = {
      labels: labelArray,
      datasets: [
        {
          label: "Views",
          data: viewsArray,
          backgroundColor: ["grey", "red"],
          borderColor: ["yellow", "green"],
          borderWidth: 2,
        },
        {
          label: "Clicks",
          data: clicksArray,
          backgroundColor: ["yellow", "green"],
          borderColor: ["red", "grey"],
          borderWidth: 2,
        },
      ],
    };
  
    const config = {
      type: "bar",
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };
  
    let canvasChart = document.getElementById("myChart");
    new Chart(canvasChart, config);
  }


cContainer.addEventListener("click", handleCarClick);

