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

// Fase 1 - 🔥 Scelta dell'Arma
for (i = 0; i < combattenti.length; i++) {

    let arma = Math.floor(Math.random() * armi.length);
    const combArmati = [];

    // Creo un nuovo oggetto che unisce combattente e arma
    combArmati.push({
        nome: combattenti[i].nome,
        potenza: combattenti[i].potenza,
        arma: armi[arma]
    });

    console.log(`${combattenti[i].nome} ha scelto l'arma: ${armi[arma]}`);

}

// Fase 2 - 💪 Allenamento