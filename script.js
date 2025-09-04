// Combattenti
const combattenti = [
    { nome: "Draven Stormblade", potenza: 90 },
    { nome: "Kael Shadowfang", potenza: 85 },
    { nome: "Zyra Nightflame", potenza: 88 },
    { nome: "Thalor the Unbroken", potenza: 92 },
    { nome: "Emberheart", potenza: 87 },
    { nome: "Stonehammer", potenza: 94 },
    { nome: "Bladeshadow", potenza: 89 },
    { nome: "Froststrike", potenza: 86 },
    { nome: "Lionshield", potenza: 83 },
    { nome: "Ironwolf", potenza: 91 },
    { nome: "Stormrider", potenza: 88 },
    { nome: "Nightblade", potenza: 93 }
];

// Armi
const armi = [
    "Spada del Drago",
    "Lancia del Fulmine",
    "Arco delle Ombre",
    "Martello di Pietra",
    "Pugnale Velenoso",
    "Ascia da Guerra",
    "Frusta di Fuoco",
    "Katana Sacra",
    "Scudo Arcano",
    "Tridente del Mare",
    "Mazza del Tuono",
    "Falce Oscura"
];

// Combattenti con le armi
const combArmati = [];

// Fase 1 - 🔥 Scelta dell'Arma

console.log("### SCELTA ARMA ###");

for (i = 0; i < combattenti.length; i++) {

    // prendo in modo random un arma
    let arma = Math.floor(Math.random() * armi.length);

    // creo un nuovo oggetto che unisce combattente e arma
    combArmati.push({
        nome: combattenti[i].nome,
        potenza: combattenti[i].potenza,
        arma: armi[arma]
    });

    console.log(`${combattenti[i].nome} ha scelto l'arma: ${armi[arma]}`);
}
console.log("\n");

// Fase 2 - 💪 Allenamento

console.log("### ALLENAMENTO ###");

for (i = 0; i < combArmati.length; i++) {

    // allenamento conterrà un numero random tra 1 e 100
    let allenamento = Math.floor(Math.random() * 100) + 1;
    // moltiplico la potenza del combattente per l'allenamento 
    let nuovaPotenza = combArmati[i].potenza * allenamento;

    // assegno la nuova potenza al combattente
    combArmati[i].potenza = nuovaPotenza;

    console.log(`${combArmati[i].nome} si è allenato, la sua nuova potenza è: ${combArmati[i].potenza}`);

}
console.log("\n");

// Fase 3 -  🎯 Qualificazione

console.log("### QUALIFICAZIONE ###");

for (i = 0; i < combArmati.length; i++) {

    // se la potenza del combattente è minore di 2000 lo escludo dal torneo
    if (combArmati[i].potenza < 2000) {
        combArmati.splice(i, 1);
    }

    console.log(`Qualificato per il torneo: ${combArmati[i].nome} potenza: ${combArmati[i].potenza}`);

}
console.log("\n");

// Fase 4 - ⚔️ Combattimento

console.log("### COMBATTIMENTO ###");

// controllo il numero dei qualificati
if (combArmati.length % 2 != 0) {

    // se dispari aggiungo un robot come combattente
    combArmati.push({
        nome: "Robot",
        potenza: 4000,
        arma: "Laser Blaster"
    });

    // visualizzo il robot
    const ultimo = combArmati[combArmati.length - 1];
    console.log(`I partecipanti qualificati sono dispari, viene aggiunto: ${ultimo.nome} con potenza ${ultimo.potenza} e arma ${ultimo.arma}`);
    console.log("\n");

}

// se sono pari faccio partire i combattimenti

// ciclo sui combattenti selezionandoli a due a due
for (i = 0; i < combArmati.length; i += 2) {

    // salvo i due combattenti
    let primo = combArmati[i];
    let secondo = combArmati[i + 1];
    let vincitore;

    if (primo.potenza < secondo.potenza) {
        vincitore = secondo;
    } else if (primo.potenza > secondo.potenza) {
        vincitore = primo;
    } else {
        vincitore = primo;
    }

    console.log(`Incontro: ${primo.nome} VS ${secondo.nome} il vincitore è ${vincitore.nome}`);
}

