const buildContact = () => {
    const contactContent = document.querySelector("#content");


    // CONTACT TAB
    const contact = document.createElement("div");
    const contactHeader = document.createElement("h1");

    contact.setAttribute("id", "contact");

    contactHeader.textContent = "Contact Us";

    contactContent.appendChild(contact);
    contact.appendChild(contactHeader);


    // INFO SECTION OF THE CONTACT TAB
    const info = document.createElement("div");
    const emailSpan = document.createElement("span");
    const telSpan = document.createElement("span");
    const fbSpan = document.createElement("span");

    info.setAttribute("id", "contact-info");

    emailSpan.textContent = "email: poutinetourtiere@quebec.qc";
    telSpan.textContent = "tel: 1-514-123-4567";
    fbSpan.textContent = "Facebook: Poutine & Tourtière";

    info.appendChild(emailSpan);
    info.appendChild(document.createElement("br"));
    info.appendChild(telSpan);
    info.appendChild(document.createElement("br"));
    info.appendChild(fbSpan);
    info.appendChild(document.createElement("br"));

    contact.appendChild(info);
};

export { buildContact };