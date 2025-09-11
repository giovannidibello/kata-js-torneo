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

// recupero il contenitore dal DOM dove mostrerò i combattenti e gli incontri e il podio
const fightersList = document.getElementById("combattenti");
const matchList = document.getElementById("incontri");
const winnersList = document.getElementById("premiazione");

// Combattenti con le armi
const armedFighters = [];

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

// Fase 2 - 💪 Allenamento

console.log("### ALLENAMENTO ###");

for (i = 0; i < armedFighters.length; i++) {

    // allenamento conterrà un numero random tra 1 e 100
    let training = Math.floor(Math.random() * 100) + 1;
    // moltiplico la potenza del combattente per l'allenamento 
    let newPower = armedFighters[i].power * training;

    // assegno la nuova potenza al combattente
    armedFighters[i].power = newPower + armedFighters[i].weaponPower;

    console.log(`${armedFighters[i].name} si è allenato, la sua nuova potenza è: ${armedFighters[i].power}`);

}
console.log("\n");

// Fase 3 -  🎯 Qualificazione

console.log("### QUALIFICAZIONE ###");

for (i = 0; i < armedFighters.length; i++) {

    // se la potenza del combattente è minore di 2000 lo escludo dal torneo
    if (armedFighters[i].power < 2000) {
        armedFighters.splice(i, 1);
    }

    console.log(`Qualificato per il torneo: ${armedFighters[i].name} potenza: ${armedFighters[i].power}`);

}
console.log("\n");

// Fase 4 - ⚔️ Combattimento

console.log("### COMBATTIMENTO ###");

const matchWinners = [];

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
    console.log(`I partecipanti qualificati sono dispari, viene aggiunto: ${last.name} con potenza ${last.power} e arma ${last.weapon}`);
    console.log("\n");

}

// se sono pari faccio partire i combattimenti

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

    // aggiungo in pagina gli incontri
    const matchDiv = document.createElement("div");
    matchDiv.className = "match";

    matchDiv.innerHTML = `
    <div class="contestants">
      <div class="player">${first.name}</div>
      <div class="player">${second.name}</div>
    </div>
    <div class="winner">${winner.name}</div>
     `;

    matchList.appendChild(matchDiv);

    console.log(`Incontro: ${first.name} VS ${second.name} il vincitore è ${winner.name}`);


}
console.log("\n");

// Fase 5 - 🏆 Premiazione

console.log("### PREMIAZIONE ###");

// ordino i vincitori degli incontri per potenza
matchWinners.sort((a, b) => b.power - a.power);

// creo i gradini
const podium = ["step1", "step2", "step3"];

// stampo solo i primi tre nomi
for (let i = 0; i < 3 && i < matchWinners.length; i++) {

    // creo il div del gradino
    const step = document.createElement("div");
    step.className = "step";
    step.id = podium[i];

    // aggiungo il contenuto del vincitore
    step.innerHTML = `
        <div class="podio-position">🥇${i + 1}° posto</div>
        <div class="podio-name">${matchWinners[i].name}</div>
        <div class="podio-power">Potenza: ${matchWinners[i].power}</div>
    `;

    // append al contenitore principale
    winnersList.appendChild(step);

    console.log(`${i + 1}° posto ${matchWinners[i].name}`);
}


