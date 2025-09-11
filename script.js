// Combattenti
const fighters = [
    {
        name: 'Freezer',
        power: 8000
    },
    {
        name: 'Vegeta',
        power: 8500
    },
    {
        name: 'Crilin',
        power: 500
    },
    {
        name: 'Mr Satan',
        power: 50
    },
    {
        name: 'Junior',
        power: 6000
    },
    {
        name: 'Goku',
        power: 9001
    },
    {
        name: 'Tensing',
        power: 450
    },
    {
        name: 'Videl',
        power: 300
    },
    {
        name: 'Bulma',
        power: 20
    },
    {
        name: 'C-18',
        power: 7800
    },
    {
        name: 'Gohan',
        power: 8900
    },
    {
        name: 'Trunks',
        power: 1250
    }
];

// Armi
const weapons = [
    {
        name: "Ventaglio della Musa",
        power: 15
    },
    {
        name: "Scouter",
        power: 30
    },
    {
        name: "Bastone Roshi",
        power: 60
    },
    {
        name: "Fagioli Magici",
        power: 70
    },
    {
        name: "Katana di Yajirobei",
        power: 85
    },
    {
        name: "Spada del Dragone Azzurro",
        power: 115
    },
    {
        name: "Armatura Saiyan",
        power: 145
    },
    {
        name: "Cannone da braccio",
        power: 170
    },
    {
        name: "Nuvola d'oro",
        power: 200
    },
    {
        name: "Bastone Nyoi",
        power: 220
    },
    {
        name: "Spada Z",
        power: 235
    },
    {
        name: "Orecchini Potara",
        power: 250
    }
];

// recupero il contenitore dal DOM dove mostrerò il torneo
const fightersList = document.getElementById("combattenti");

// array per il torneo
const armedFighters = [];
const matchWinners = [];

// Pulsanti interattivi

// pulsante per avanzare nel torneo
const startBtn = document.getElementById("startBtn");

// variabile per tenere traccia della fase
let fase = 1;

startBtn.addEventListener("click", function () {
    const el = document.querySelector("#combattenti h2");
    el.classList.remove("hidden");
    el.classList.add("visible");

    if (fase === 1) {
        alert("🏆 Il torneo sta iniziando!");
        alert("🔥 Scelta dell'arma");

        // Fase 1 - 🔥 Scelta dell'Arma

        console.log("### SCELTA ARMA ###");

        for (i = 0; i < fighters.length; i++) {

            // prendo in modo random un arma
            let randomIndex = Math.floor(Math.random() * weapons.length);
            let weapon = weapons[randomIndex];

            // creo un nuovo oggetto che unisce combattente e arma
            armedFighters.push({
                name: fighters[i].name,
                power: fighters[i].power,
                weapon: weapon.name,
                weaponPower: weapon.power
            });

            // aggiungo in pagina i combattenti
            let p = document.createElement("p");
            p.innerHTML = `Combattente: <strong>${armedFighters[i].name}</strong> - Potenza: <strong>${armedFighters[i].power}</strong> - Arma: <strong>${armedFighters[i].weapon}</strong> - Potenza Arma: <strong>${armedFighters[i].weaponPower}</strong>`;
            fightersList.appendChild(p);

            console.log(`${fighters[i].name} ha scelto l'arma: ${weapon.name} con potenza: ${weapon.power}`);
        }
        console.log("\n");

        // aggiorno il testo del pulsante
        startBtn.textContent = "💪 Vai all'Allenamento";
        fase = 2;
    } else if (fase === 2) {
        alert("💪 Fase di Allenamento iniziata!");

        // Fase 2 - 💪 Allenamento
        console.log("### ALLENAMENTO ###");

        // svuoto il contenitore e aggiorno il titolo UNA SOLA VOLTA
        fightersList.innerHTML = "<h2>Combattenti dopo Allenamento</h2>";

        // ciclo per allenare i combattenti
        for (let i = 0; i < armedFighters.length; i++) {
            let training = Math.floor(Math.random() * 100) + 1;
            let newPower = armedFighters[i].power * training;
            armedFighters[i].power = newPower + armedFighters[i].weaponPower;

            // creo il paragrafo per il combattente
            let p = document.createElement("p");
            p.innerHTML = `Combattente: <strong>${armedFighters[i].name}</strong> - Potenza: <strong>${armedFighters[i].power}</strong> - Arma: <strong>${armedFighters[i].weapon}</strong> - Potenza Arma: <strong>${armedFighters[i].weaponPower}</strong>`;
            fightersList.appendChild(p);

            console.log(`${armedFighters[i].name} si è allenato, la sua nuova potenza è: ${armedFighters[i].power}`);
        }

        console.log("\n");

        // aggiorno di nuovo il testo del pulsante
        startBtn.textContent = "🎯 Vai alla qualificazione";
        fase = 3;

    } else if (fase === 3) {
        alert("⚔️ Inizia la Qualificazione!");

        // Fase 3 - 🎯 Qualificazione
        console.log("### QUALIFICAZIONE ###");

        // svuoto l'array e inserisco solo i qualificati
        const qualificati = armedFighters.filter(f => f.power >= 2000);
        armedFighters.length = 0;           // svuoto l'array originale
        armedFighters.push(...qualificati); // reinserisco i qualificati

        // aggiorno il titolo della sezione
        fightersList.innerHTML = "<h2>Combattenti Qualificati</h2>";

        // ristampo solo i qualificati
        for (let i = 0; i < armedFighters.length; i++) {
            let p = document.createElement("p");
            p.innerHTML = `Qualificato: <strong>${armedFighters[i].name}</strong> - Potenza: <strong>${armedFighters[i].power}</strong> - Arma: <strong>${armedFighters[i].weapon}</strong> - Potenza Arma: <strong>${armedFighters[i].weaponPower}</strong>`;
            fightersList.appendChild(p);

            console.log(`Qualificato per il torneo: ${armedFighters[i].name} potenza: ${armedFighters[i].power}`);
        }

        console.log("\n");


        startBtn.textContent = "⚔️ Vai al Combattimento";
        fase = 4;

    } else if (fase === 4) {
        alert("⚔️ Combattimento!");
        // Fase 4 - ⚔️ Combattimento

        console.log("### COMBATTIMENTO ###");

        // controllo il numero dei qualificati
        if (armedFighters.length % 2 != 0) {

            // se dispari aggiungo un robot come combattente
            armedFighters.push({
                name: "Robot",
                power: 4000,
                weapon: "Laser Blaster"
            });

            // visualizzo il robot
            const last = armedFighters[armedFighters.length - 1];
            alert(`🤖 È stato aggiunto il Robot: ${last.name} con potenza ${last.power} e arma ${last.weapon}`);
            console.log(`I partecipanti qualificati sono dispari, viene aggiunto: ${last.name} con potenza ${last.power} e arma ${last.weapon}`);
            console.log("\n");

        }

        // se sono pari faccio partire i combattimenti

        // aggiorno il titolo della sezione
        fightersList.innerHTML = "<h2>Incontri</h2>";

        // creo un contenitore interno solo per i match
        const matchesContainer = document.createElement("div");
        matchesContainer.style.display = "flex";
        matchesContainer.style.flexWrap = "wrap";
        matchesContainer.style.gap = "16px";
        matchesContainer.style.justifyContent = "center";

        // ciclo sui combattenti selezionandoli a due a due
        for (i = 0; i < armedFighters.length; i += 2) {

            // salvo i due combattenti
            let first = armedFighters[i];
            let second = armedFighters[i + 1];
            let winner;

            if (first.power < second.power) {
                winner = second;
                matchWinners.push(second);
            } else if (first.power > second.power) {
                winner = first;
                matchWinners.push(first);
            } else {
                winner = first;
                matchWinners.push(first);
            }

            const matchDiv = document.createElement("div");
            matchDiv.className = "match";
            matchDiv.style.width = "200px";
            matchDiv.innerHTML = `
            <div class="contestants">
                <div class="player">${first.name}</div>
                <div class="player">${second.name}</div>
                </div>
                <div class="winner">${winner.name}</div>
            `;
            fightersList.appendChild(matchDiv);

            console.log(`Incontro: ${first.name} VS ${second.name} il vincitore è ${winner.name}`);

        }
        console.log("\n");

        startBtn.textContent = "🏆 Vai alla Premiazione";
        fase = 5;

    } else if (fase === 5) {
        alert("🏆 Premiazione!");
        console.log("### PREMIAZIONE ###");

        // svuoto la sezione dei combattimenti ma lascio il titolo
        fightersList.innerHTML = "<h2>Premiazione</h2>";

        // ordino i vincitori degli incontri per potenza
        const sortedWinners = [...matchWinners].sort((a, b) => b.power - a.power);

        // creo i gradini nel podio
        const podium = ["step1", "step2", "step3"];

        for (let i = 0; i < 3 && i < sortedWinners.length; i++) {
            const step = document.createElement("div");
            step.className = "step";
            step.id = podium[i];

            step.innerHTML = `
            <div class="podio-position">🥇${i + 1}° posto</div>
            <div class="podio-name">${sortedWinners[i].name}</div>
            <div class="podio-power">Potenza: ${sortedWinners[i].power}</div>
        `;

            // append al contenitore principale dei combattenti
            fightersList.appendChild(step);
            console.log(`${i + 1}° posto ${sortedWinners[i].name}`);
        }

        startBtn.textContent = "🔁 Ricomincia il Torneo";
        fase = 1; // reset fase
    }


});

// Funzione di reset del torneo
function resetTorneo() {
    // Svuoto tutti i contenitori mantenendo i titoli nascosti
    fightersList.innerHTML = "<h2 class='hidden'>Combattenti</h2>";

    // Svuoto gli array
    armedFighters.length = 0;
    matchWinners.length = 0;

    // Ripristino il pulsante di avvio torneo
    startBtn.textContent = "🔁 Ricomincia il Torneo";

    // Reimposto la fase a 1
    fase = 1;

    alert("🔄 Torneo resettato!");
}

// Event listener per il pulsante Reset
resetBtn.addEventListener("click", resetTorneo);



