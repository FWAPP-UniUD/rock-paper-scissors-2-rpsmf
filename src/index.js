class RockPaperScissors {
    constructor(container) {
        const mainElement = document.createElement("div");
            var titolo = document.createElement("h1");
            titolo.textContent = "Your Game";
        mainElement.appendChild(titolo);
        const playbutton = document.createElement("button");
        playbutton.textContent = "Play!";
    mainElement.appendChild(playbutton);
        /*provare con ciclo for e metto in un vettore con push*/
        this.labels = ["Rock", "Scissors", "Paper"]; /*così la posso usare dopo*/
        for (let i = 0; i < 3; i++) {
            const radioButton = document.createElement("input");
            radioButton.setAttribute("type", "radio");
            radioButton.setAttribute("name", "bottone");
            radioButton.setAttribute("value", "Rock");
            var label = document.createElement("label");
            label.textContent = "Rock";
        mainElement.append(radioButton);
        mainElement.appendChild(document.createElement("br"));
        }
        mainElement.append(playbutton);
        playbutton.addEventListener('click', this.buttonPressed.bind(this)); /*per gestire il this*/
           

            var br4 = document.createElement("br");
            mainElement.appendChild(br4);
            var linea = document.createElement('hr');
        mainElement.appendChild(linea);
        container.append(mainElement);
    }
    randomDraw(){
        const v = Math.floor(3 * Math.random());
        this.opponentChoiche = this.label[v];
    }
    buttonPressed(event) {
        this.randomDraw();
        this.result.textContent = this.opponentChoiche;
        /*devo decidere chi vince*/


        //window.alert(this.opponentChoiche)

    }
}