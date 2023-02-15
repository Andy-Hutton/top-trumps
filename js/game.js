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

const cContainer1 = document.getElementById("cContainer1");
const cContainer2 = document.getElementById("cContainer2");
// let resultButton = document.querySelector("carContainer + div");

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

const quattro = new SkidMarks("Audi Quattro", 1985, 540, 3.1, "images/quattro");
const rs2000 = new SkidMarks("Ford RS200", 1986, 580, 3.1, "images/rs200");
const impreza = new SkidMarks(
  "Subaru Impreza 22B",
  1997,
  310,
  5.0,
  "images/22b"
);
const evo = new SkidMarks("Mitsubishi Evo IV", 1997, 280, 5.5, "images/evo");
const ffocus = new SkidMarks("Ford Focus", 1999, 300, 4.2, "images/ffocus");
const suzuki = new SkidMarks(
  "Suzuki Escudo Pikes Peak",
  1996,
  985,
  2.5,
  "images/escudo"
);
const mg = new SkidMarks("MG Metro 6R4", 1985, 410, 3.0, "images/mg");
const nissan = new SkidMarks("Nissan GT-R", 2023, 565, 2.9, "images/gtr");
const porsche = new SkidMarks(
  "Porsche 911 GT3 RS",
  2022,
  523,
  2.7,
  "images/911"
);
const m3 = new SkidMarks("BMW M3 GTS", 2016, 306, 4.4, "images/m3");
const ferrari = new SkidMarks("Ferrari F40", 1987, 471, 3.0, "images/f40");
const mustang = new SkidMarks("Ford Mustang", 2020, 460, 4.2, "images/mustang");
const lambo = new SkidMarks(
  "Lamborghini LP 610",
  2018,
  601,
  3.2,
  "images/lambo"
);
const mazda = new SkidMarks("Mazda RX7", 1992, 197, 4.1, "images/rx7");
const golf = new SkidMarks("Volkswagen Golf R", 2020, 292, 4.9, "images/golfr");
const renault = new SkidMarks(
  "Renault Meganne Trophy",
  2016,
  300,
  5.7,
  "images/renault"
);
const honda = new SkidMarks(
  "Honda Civic Type R",
  2021,
  310,
  4.8,
  "images/civic"
);
const tesla = new SkidMarks("Tesla Model S", 2021, 310, 3.2, "images/tesla");
const caterham = new SkidMarks("Caterham 7", 2015, 180, 4.8, "images/caterham");
const hyundai = new SkidMarks("Hyundai I30n", 2020, 271, 5.9, "images/i30n");

const hand1 = [
  ferrari,
  mustang,
  lambo,
  mazda,
  golf,
  renault,
  honda,
  tesla,
  caterham,
  hyundai,
  quattro,
  rs2000,
  impreza,
  evo,
  ffocus,
  suzuki,
  mg,
  nissan,
  porsche,
  m3,
];

function renderCards() {
  let card1 = hand1[0];
  let card2 = hand1[1];

  let img1 = document.getElementById("img1");
  let img2 = document.getElementById("img2");
  img1.src = `${card1.img}.jpg`;
  img2.src = `${card2.img}.jpg`;

  document.getElementById("h1name").innerHTML = `${card1.name}`;
  document.getElementById("h2name").innerHTML = `${card2.name}`;

  document.getElementById("h1year").innerHTML = `${card1.year}`;
  document.getElementById("h2year").innerHTML = `${card2.year}`;

  document.getElementById("h1bhp").innerHTML = `${card1.bhp}`;
  document.getElementById("h2bhp").innerHTML = `${card2.bhp}`;

  document.getElementById("h1acel").innerHTML = `${card1.acel}`;
  document.getElementById("h2acel").innerHTML = `${card2.acel}`;

  card1.views++;
  card2.views++;
}

renderCards();

cContainer1.addEventListener("click", handleCarClick1);
cContainer2.addEventListener("click", handleCarClick2);

function handleCarClick1(event) {
  clicks++;
  console.log(event.target);
  console.log(hand1[0]);
  hand1[0].clicks++;
  var first = hand1.splice(0, 1);
  hand1.push(first[0]);
  // move the second item in the [ ] to the end
  if (clicks === maxClicksAllowed) {
    alert("Thanks for voting! Click View Results to see which car won!");
    cContainer1.removeEventListener("click", handleCarClick1);
    cContainer2.removeEventListener("click", handleCarClick2);
    resultButton.addEventListener("click", renderResults);
  } else {
    renderCards();
  }
}

function handleCarClick2(event) {
  clicks++;
  console.log(event.target);
  console.log(hand1[0]);
  hand1[0].clicks++;
  var first = hand1.splice(0, 1);
  hand1.push(first[0]);
  // move the second item in the [ ] to the end
  if (clicks === maxClicksAllowed) {
    alert("Thanks for voting! Click View Results to see which car won!");
    cContainer2.removeEventListener("click", handleCarClick2);
    cContainer1.removeEventListener("click", handleCarClick1);
    resultButton.addEventListener("click", renderResults);
  } else {
    renderCards();
  }
}

const resultButton = document.getElementById("ViewResults");

function renderResults() {
  let ul = document.getElementById("ViewResults");
  for (let i = 0; i < hand1.length; i++) {
    let li = document.createElement("li");
    li.textContent = `${hand1[i].name} had ${hand1[i].views} view and was clicked ${hand1[i].clicks} times.`;
    ul.appendChild(li);
  }
}

// MVP ALL ABOVE

function renderChart() {
  const myChart = document.getElementById("chart");
  let labels = [];
  let viewsData = [];
  let clicksData = [];

  for (let i = 0; i < SkidMarks.hand1.length; i++) {
    labels.push(SkidMarks.hand1[i].name);
    viewsData.push(SkidMarks.hand1[i].views);
    clicksData.push(SkidMarks.hand1[i].clicks);
  }

  const data = {
    labels: labels,
    datasets: [
      {
        label: "# of Views",
        data: viewsData,
        borderWidth: 1,
      },
      {
        label: "# of Votes",
        data: clicksData,
        borderWidth: 1,
      },
    ],
  };
  const config = {
    type: "bar",
    data: data,
  };
  new Chart(myChart, config);
}
renderImages();
