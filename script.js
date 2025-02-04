function haalBerichtenOp() {
    fetch("https://mijn-api.onrender.com")
        .then(response => response.json())
        .then(berichten => {
            const container = document.getElementById("berichtenContainer");
            container.innerHTML = ""; // Leeg de container

            berichten.forEach(bericht => {
                const p = document.createElement("p"); // Maak een <p>-element
                p.textContent = bericht.tekst; // Zet de tekst erin
                container.appendChild(p); // Voeg het toe aan de pagina
            });
        })
        .catch(error => console.error("Fout bij ophalen:", error));
}

// Haal direct berichten op bij het laden van de pagina
document.addEventListener("DOMContentLoaded", haalBerichtenOp);
