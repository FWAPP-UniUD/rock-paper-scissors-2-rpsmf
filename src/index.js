class RockPaperScissors {
    constructor(container) {
        const mainElement = document.createElement("div");
            var titolo = document.createElement("h1");
            title.textContent = "Your Game";
        mainElement.appendChild(titolo);
            var radio1 = document.createElement("input");
            radio1.setAttribute("type", "radio");
            radio1.setAttribute("name", "bottone");
        mainElement.appendChild(radio1);
            var radio2 = document.createElement("input");
            radio2.setAttribute("type", "radio");
            radio2.setAttribute("name", "bottone");
        mainElement.appendChild(radio2);
            var radio3 = document.createElement("input");
            radio3.setAttribute("type", "radio");
            radio3.setAttribute("name", "bottone");
        mainElement.appendChild(radio3);
            var playbutton = document.createElement("button");
            button.textContent = "Play!";
        mainElement.appendChild(playbutton);
            var linea = document.createElement('hr');
        mainElement.appendChild(linea);
        container.append(mainElement);

    }
}