// 🔹 COMBATTENTI
const fighters = [
    { name: 'Freezer', power: 8000, img: "./img/Freezer.png" },
    { name: 'Vegeta', power: 8500, img: "./img/Vegeta.webp" },
    { name: 'Crilin', power: 500, img: "./img/Crilin.png" },
    { name: 'Mr Satan', power: 50, img: "./img/MrSatan.png" },
    { name: 'Junior', power: 6000, img: "./img/Junior.png" },
    { name: 'Goku', power: 9001, img: "./img/Goku.png" },
    { name: 'Tensing', power: 450, img: "./img/Tenshinhan.png" },
    { name: 'Videl', power: 300, img: "./img/Videl.png" },
    { name: 'Bulma', power: 20, img: "./img/Bulma.png" },
    { name: 'C-18', power: 7800, img: "./img/C-18.webp" },
    { name: 'Gohan', power: 8900, img: "./img/Gohan.webp" },
    { name: 'Trunks', power: 12500, img: "./img/Trunks.webp" }
];

// 🔹 ARMI
const weapons = [
    { name: "Ventaglio della Musa", power: 15 },
    { name: "Scouter", power: 30 },
    { name: "Bastone Roshi", power: 60 },
    { name: "Fagioli Magici", power: 70 },
    { name: "Katana di Yajirobei", power: 85 },
    { name: "Spada del Dragone Azzurro", power: 115 },
    { name: "Armatura Saiyan", power: 145 },
    { name: "Cannone da braccio", power: 170 },
    { name: "Nuvola d'oro", power: 200 },
    { name: "Bastone Nyoi", power: 220 },
    { name: "Spada Z", power: 235 },
    { name: "Orecchini Potara", power: 250 }
];

// 🔹 ELEMENTI DOM
const fightersList = document.getElementById("combattenti");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

// 🔹 VARIABILI TORNEO
const armedFighters = [];
const matchWinners = [];
let fase = 1;

// 🔹 FUNZIONE DI RESET
function resetTorneo() {
    fightersList.innerHTML = "";
    const h2 = document.createElement("h2");
    h2.textContent = "Combattenti";
    h2.classList.add("hidden");
    fightersList.appendChild(h2);

    armedFighters.length = 0;
    matchWinners.length = 0;

    startBtn.textContent = "🏆 Avvia Torneo";
    fase = 1;

    Swal.fire({
        title: '🔄 Torneo Resettato!',
        text: 'Tutti i combattenti sono stati azzerati. Preparati a ricominciare!',
        icon: 'info',
        confirmButtonText: '🔥 Ok',
        backdrop: `rgba(0,0,0,0.7)`
    });
}

// 🔹 EVENT LISTENER PULSANTI
resetBtn.addEventListener("click", resetTorneo);

startBtn.addEventListener("click", function () {
    const el = document.querySelector("#combattenti h2");
    el.classList.remove("hidden");
    el.classList.add("visible");

    if (fase === 1) {
        // 🔹 FASE 1 - SCELTA ARMA
        Swal.fire({ title: '🏆 Il torneo sta iniziando!', text: '🔥 Scelta dell\'arma', icon: 'info', confirmButtonText: 'Avanti' });
        fightersList.innerHTML = "<h2>Scelta Arma</h2>";
        const container = document.createElement("div");
        container.className = "matches-container";
        fightersList.appendChild(container);

        fighters.forEach(f => {
            const weapon = weapons[Math.floor(Math.random() * weapons.length)];
            const fighter = {
                name: f.name,
                power: f.power,
                weapon: weapon.name,
                weaponPower: weapon.power,
                img: f.img
            };
            armedFighters.push(fighter);

            const card = document.createElement("div");
            card.className = "match";
            card.innerHTML = `
                <img src="${fighter.img}" alt="${fighter.name}" class="fighter-img">
                <div>${fighter.name}</div>
                <div>Potenza: ${fighter.power}</div>
                <div>Arma: ${fighter.weapon} (+${fighter.weaponPower})</div>
            `;
            container.appendChild(card);

            console.log(`${fighter.name} ha scelto l'arma: ${fighter.weapon} (+${fighter.weaponPower})`);
        });

        startBtn.textContent = "💪 Vai all'Allenamento";
        fase = 2;

    } else if (fase === 2) {
        // 🔹 FASE 2 - ALLENAMENTO
        Swal.fire({ title: '💪 Allenamento iniziato!', text: 'I combattenti si stanno potenziando...', icon: 'success', confirmButtonText: 'Avanti' });
        fightersList.innerHTML = "<h2>Combattenti dopo Allenamento</h2>";
        const container = document.createElement("div");
        container.className = "matches-container";
        fightersList.appendChild(container);

        armedFighters.forEach(f => {
            const training = Math.floor(Math.random() * 100) + 1;
            f.power = f.power * training + f.weaponPower;

            const card = document.createElement("div");
            card.className = "match";
            card.innerHTML = `
                <img src="${f.img}" alt="${f.name}" class="fighter-img">
                <div>${f.name}</div>
                <div>Potenza: ${f.power}</div>
                <div>Arma: ${f.weapon} (+${f.weaponPower})</div>
            `;
            container.appendChild(card);

            console.log(`${f.name} si è allenato → Potenza: ${f.power}`);
        });

        startBtn.textContent = "🎯 Vai alla qualificazione";
        fase = 3;

    } else if (fase === 3) {
        // 🔹 FASE 3 - QUALIFICAZIONE
        Swal.fire({ title: '🎯 Qualificazione!', text: 'Solo i più forti supereranno questa fase!', icon: 'warning', confirmButtonText: 'Vai' });
        const qualificati = armedFighters.filter(f => f.power >= 2000);
        armedFighters.length = 0;
        armedFighters.push(...qualificati);

        fightersList.innerHTML = "<h2>Combattenti Qualificati</h2>";
        const container = document.createElement("div");
        container.className = "matches-container";
        fightersList.appendChild(container);

        armedFighters.forEach(f => {
            const card = document.createElement("div");
            card.className = "match";
            card.innerHTML = `
                <img src="${f.img}" alt="${f.name}" class="fighter-img">
                <div>${f.name}</div>
                <div>Potenza: ${f.power}</div>
                <div>Arma: ${f.weapon} (+${f.weaponPower})</div>
            `;
            container.appendChild(card);
            console.log(`Qualificato: ${f.name} → Potenza: ${f.power}`);
        });

        startBtn.textContent = "⚔️ Vai al Combattimento";
        fase = 4;

    } else if (fase === 4) {
        // 🔹 FASE 4 - COMBATTIMENTO
        Swal.fire({ title: '⚔️ Combattimento!', text: 'Che vinca il migliore!', icon: 'error', confirmButtonText: 'Inizia' });
        console.log("### COMBATTIMENTO ###");

        if (armedFighters.length % 2 !== 0) {
            const robot = { name: "Robot", power: 4000, weapon: "Laser Blaster", img: "./img/robot.png" };
            armedFighters.push(robot);
            Swal.fire({ title: '🤖 Robot aggiunto!', text: `${robot.name} entra con potenza ${robot.power}`, icon: 'info', confirmButtonText: 'Ok' });
        }

        fightersList.innerHTML = "<h2>Incontri</h2>";
        const matchesContainer = document.createElement("div");
        matchesContainer.className = "matches-container";
        fightersList.appendChild(matchesContainer);

        for (let i = 0; i < armedFighters.length; i += 2) {
            const first = armedFighters[i];
            const second = armedFighters[i + 1];
            const winner = (first.power >= second.power) ? first : second;
            matchWinners.push(winner);

            const matchDiv = document.createElement("div");
            matchDiv.className = "match";
            matchDiv.innerHTML = `
                <div class="contestants">
                    <div class="player">
                        <img src="${first.img}" alt="${first.name}" class="fighter-img">
                        <div>${first.name}</div>
                        <div>Potenza: ${first.power}</div>
                    </div>
                    <div class="player">
                        <img src="${second.img}" alt="${second.name}" class="fighter-img">
                        <div>${second.name}</div>
                        <div>Potenza: ${second.power}</div>
                    </div>
                </div>
                <div class="winner">
                    Vincitore: ${winner.name} <br>
                    <img src="${winner.img}" alt="${winner.name}" class="fighter-img">
                </div>
            `;
            matchesContainer.appendChild(matchDiv);
            console.log(`Incontro: ${first.name} VS ${second.name} → Vincitore: ${winner.name}`);
        }

        startBtn.textContent = "🏆 Vai alla Premiazione";
        fase = 5;

    } else if (fase === 5) {
        // 🔹 FASE 5 - PREMIAZIONE
        Swal.fire({ title: '🏆 Premiazione!', text: 'Ecco i vincitori!', icon: 'success', confirmButtonText: 'Grande!' });

        fightersList.innerHTML = "<h2>Premiazione</h2>";
        const podiumContainer = document.createElement("div");
        podiumContainer.className = "matches-container";
        fightersList.appendChild(podiumContainer);

        const sortedWinners = [...matchWinners].sort((a, b) => b.power - a.power);
        const podium = ["step1", "step2", "step3"];

        for (let i = 0; i < 3 && i < sortedWinners.length; i++) {
            const step = document.createElement("div");
            step.className = "step";
            step.id = podium[i];
            step.innerHTML = `
                <div class="podio-position">🥇${i + 1}° posto</div>
                <img src="${sortedWinners[i].img}" alt="${sortedWinners[i].name}" class="fighter-img">
                <div class="podio-name">${sortedWinners[i].name}</div>
                <div class="podio-power">Potenza: ${sortedWinners[i].power}</div>
            `;
            podiumContainer.appendChild(step);
            console.log(`${i + 1}° posto → ${sortedWinners[i].name}`);
        }

        startBtn.textContent = "🔁 Ricomincia il Torneo";
        fase = 1;
    }
});
