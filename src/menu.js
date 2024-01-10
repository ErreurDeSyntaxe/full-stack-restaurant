console.log("menu.js");

const menuContent = document.querySelector("#content");


// MENU TAB
const menu = document.createElement("div");
const menuHeader = document.createElement("h1");

menuHeader.textContent = "Menu";

menuContent.appendChild(menu);
menu.appendChild(menuHeader);


// DISHES SECTION OF THE MENU TAB
const dishesDiv = document.createElement("div");
const dishesHeader = document.createElement("h2");
const imgPoutine = document.createElement("img");
const smallPoutine = document.createElement("div");
const largePoutine = document.createElement("div");
const imgTourtiere = document.createElement("img");
const smallTourtiere = document.createElement("div");
const largeTourtiere = document.createElement("div");

dishesDiv.setAttribute("id", "dishes");
imgPoutine.classList.add("wide-img");
// imgPoutine.setAttribute("src", "/home/repos/top-full-stack/restaurant/src/img/poutine.png");
imgPoutine.setAttribute("alt", "An authentic Quebec poutine");
smallPoutine.classList.add("menu-item");
largePoutine.classList.add("menu-item");
imgTourtiere.classList.add("wide-img");
// imgTourtiere.setAttribute("src", "./src/img/tourtiere.png");
imgTourtiere.setAttribute("alt", "An authentic Quebec meat pie");
smallTourtiere.classList.add("menu-item");
largeTourtiere.classList.add("menu-item");

dishesHeader.textContent = "Dishes";
smallPoutine.textContent = "Small Poutine: $10";
largePoutine.textContent = "Large Poutine: $15";
smallTourtiere.textContent = "Small Tourtiere: $13";
largeTourtiere.textContent = "Large Tourtiere: $18";

dishesDiv.appendChild(dishesHeader);
dishesDiv.appendChild(imgPoutine);
dishesDiv.appendChild(smallPoutine);
dishesDiv.appendChild(largePoutine);
dishesDiv.appendChild(document.createElement("br"));
dishesDiv.appendChild(imgTourtiere);
dishesDiv.appendChild(smallTourtiere);
dishesDiv.appendChild(largeTourtiere);
dishesDiv.appendChild(document.createElement("br"));

menu.appendChild(dishesDiv);


// BEVERAGE SECTION OF THE MENU TAB
const beverageDiv = document.createElement("div");
const beverageHeader = document.createElement("h2");
const imgRoomWater = document.createElement("img");
const roomWater = document.createElement("div");
const imgColdWater = document.createElement("img");
const coldWater = document.createElement("div");
const imgWarmWater = document.createElement("img");
const warmWater = document.createElement("div");

imgRoomWater.classList.add("tall-img");
// imgRoomWater.setAttribute("src", "");
imgRoomWater.setAttribute("alt", "A glass of room-temperature water");
roomWater.classList.add("menu-item");

imgColdWater.classList.add("tall-img");
// imgColdWater.setAttribute("src", "");
imgColdWater.setAttribute("alt", "A glass of ice water");
coldWater.classList.add("menu-item");

imgWarmWater.classList.add("tall-img");
// imgWarmWater.setAttribute("src", "");
imgWarmWater.setAttribute("alt", "A cup of warm water");
warmWater.classList.add("menu-item");

beverageHeader.textContent = "Beverages";
roomWater.textContent = "Water: free";
coldWater.textContent = "Cold Water: free";
warmWater.textContent = "Warm Water: free";

beverageDiv.appendChild(beverageHeader);
beverageDiv.appendChild(imgRoomWater);
beverageDiv.appendChild(roomWater);
beverageDiv.appendChild(document.createElement("br"));
beverageDiv.appendChild(imgColdWater);
beverageDiv.appendChild(coldWater);
beverageDiv.appendChild(document.createElement("br"));
beverageDiv.appendChild(imgWarmWater);
beverageDiv.appendChild(warmWater);
beverageDiv.appendChild(document.createElement("br"));

menu.appendChild(beverageDiv);


// EXTRAS SECTION OF THE MENU TAB
const extrasDiv = document.createElement("div");
const extrasHeader = document.createElement("h2");
const imgCheese = document.createElement("img");
const cheese = document.createElement("div");
const imgGravy = document.createElement("img");
const gravy = document.createElement("div");

// imgCheese.setAttribute("src", "");
imgCheese.setAttribute("alt", "A bowl of extra cheese curds");
imgCheese.classList.add("square-img");
cheese.classList.add("menu-item");

// imgGravy.setAttribute("src", "");
imgGravy.setAttribute("alt", "A bowl of extra cheese curds");
imgGravy.classList.add("square-img");
gravy.classList.add("menu-item");

extrasHeader.textContent = "Extras";
cheese.textContent = "Extra Cheese: $4";
gravy.textContent = "Extra Cheese: $4";

extrasDiv.appendChild(extrasHeader);
extrasDiv.appendChild(imgCheese);
extrasDiv.appendChild(cheese);
extrasDiv.appendChild(imgGravy);
extrasDiv.appendChild(gravy);

menu.appendChild(extrasDiv);