import './style.css';
import { buildContact } from "./contact";
import { buildHome } from "./home";
import { buildMenu } from "./menu";

const buildTabs = () => {
    const content = document.querySelector("#content");
    const tabDiv = document.createElement("div");
    const homeBtn = document.createElement("button");
    const menuBtn = document.createElement("button");
    const contactBtn = document.createElement("button");

    tabDiv.setAttribute("id", "tabs");
    homeBtn.setAttribute("id", "homeBtn");
    menuBtn.setAttribute("id", "menuBtn");
    contactBtn.setAttribute("id", "contactBtn");
    homeBtn.classList.add("tabButton");
    menuBtn.classList.add("tabButton");
    contactBtn.classList.add("tabButton");

    homeBtn.textContent = "Home";
    menuBtn.textContent = "Menu";
    contactBtn.textContent = "Contact Us";

    tabDiv.appendChild(homeBtn);
    tabDiv.appendChild(menuBtn);
    tabDiv.appendChild(contactBtn);
    content.appendChild(tabDiv);

    homeBtn.addEventListener("click", () => {
        let currentTab = content.children;
        if (currentTab[1].id === "menu" || currentTab[1].id === "contact") {
            currentTab[1].remove();
            buildHome();
        }
        console.log("the current tab is already 'Home'");
    });
    menuBtn.addEventListener("click", () => {
        let currentTab = content.children;
        if (currentTab[1].id === "home" || currentTab[1].id === "contact") {
            currentTab[1].remove();
            buildMenu();
        }
        console.log("the current tab is already 'Menu'");
    });
    contactBtn.addEventListener("click", () => {
        let currentTab = content.children;
        if (currentTab[1].id === "home" || currentTab[1].id === "menu") {
            currentTab[1].remove();
            buildContact();
        }
        console.log("the current tab is already 'Contact'");
    });
}

buildTabs();
buildHome();