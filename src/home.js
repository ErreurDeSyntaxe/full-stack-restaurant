const homeContent = document.querySelector("#content");


// INTRO SECTION OF HOME TAB
const homeDiv = document.createElement("div");
const homeHeader = document.createElement("h1");
const homeIntro = document.createElement("div");
const homeIntroP = document.createElement("p");

homeDiv.setAttribute("id", "home");
homeHeader.setAttribute("lang", "fr-CA");
homeIntro.setAttribute("id", "intro");

homeHeader.textContent = "Bienvenu chez Poutine & Tourtière";
homeIntroP.textContent = "Poutine & Tourtière has the best poutine and the best tourtière in the world. These dishes, long derided, have begun to pop up on menus around the world. But don't be fooled; it will be a while before anyone outside Québec makes an authentic poutine."

homeIntro.appendChild(homeIntroP);
homeDiv.appendChild(homeHeader);
homeDiv.appendChild(homeIntro);
homeContent.appendChild(homeDiv);


// HOURS SECTION OF HOME TAB
const homeHours = document.createElement("div");
const homeHoursHeader = document.createElement("h2");

homeHours.setAttribute("id", "hours");

homeHoursHeader.textContent = "Hours";
const workHours = [
    "Monday: closed",
    "Tuesday: closed",
    "Wednesday: 1pm - 9pm",
    "Thursday: 1pm - 9pm",
    "Friday: 1pm - 9pm",
    "Saturday: 1pm - 10pm",
    "Sunday: 1pm - 10pm"
];

homeHours.appendChild(homeHoursHeader);
for (let i = 0; i < workHours.length; i++) {
    let thatDay = document.createElement("span");
    thatDay.textContent = workHours[i];
    homeHours.appendChild(thatDay); //each day on its own line
    homeHours.appendChild(document.createElement("br"));
}
homeDiv.appendChild(homeHours);


// LOCATION SECTION OF THE HOME TAB
const homeLocation = document.createElement("div");
const locationHeader = document.createElement("h2");
const address = document.createElement("span");

homeLocation.setAttribute("id", "location");
address.setAttribute("lang", "fr-CA");

locationHeader.textContent = "Location";
address.textContent = "123, Boulevard René-Lévesque, Montréal, Québec, Canada";

homeLocation.appendChild(locationHeader);
homeLocation.appendChild(address);
homeDiv.appendChild(homeLocation);