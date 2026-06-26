if (document.getElementById("notizen-liste")) {

    function notizenAnzeigen() {
        const liste = document.getElementById("notizen-liste");
        const notizen = JSON.parse(localStorage.getItem("notizen") || "[]");

        if (notizen.length === 0) {
            liste.innerHTML = "<p>Noch keine Notizen vorhanden.</p>";
            return;
        }

        liste.innerHTML = "";
        notizen.forEach(function(notiz) {
            const karte = document.createElement("div");
            karte.className = "notiz-card";
            karte.innerHTML =
                "<a href='notiz.html?id=" + notiz.id + "'>" +
                    "Heim " + notiz.toreHeim + " : " + notiz.toreAuswaerts + " Auswärts" +
                "</a>" +
                "<button class='btn-loeschen' data-id='" + notiz.id + "'>Löschen</button>";
            liste.appendChild(karte);
        });
    }

    document.getElementById("btn-neu").addEventListener("click", function() {
        window.location.href = "notiz.html";
    });

    document.getElementById("notizen-liste").addEventListener("click", function(e) {
        if (e.target.classList.contains("btn-loeschen")) {
            const id = Number(e.target.getAttribute("data-id"));
            let notizen = JSON.parse(localStorage.getItem("notizen") || "[]");
            notizen = notizen.filter(function(n) { return n.id !== id; });
            localStorage.setItem("notizen", JSON.stringify(notizen));
            notizenAnzeigen();
        }
    });

    notizenAnzeigen();
}

if (document.getElementById("btn-speichern")) {

    document.getElementById("btn-speichern").addEventListener("click", function() {
        const notiz = {
            id:            Date.now(),
            toreHeim:      Number(document.getElementById("tore-heim").value),
            toreAuswaerts: Number(document.getElementById("tore-auswaerts").value),
            eigentore:     Number(document.getElementById("eigentore").value),
            gelbeKarten:   Number(document.getElementById("gelbe-karten").value),
            roteKarten:    Number(document.getElementById("rote-karten").value),
            geschehnisse:  document.getElementById("geschehnisse").value,
            notizText:     document.getElementById("Notiz-text").value
        };

        const notizen = JSON.parse(localStorage.getItem("notizen") || "[]");
        notizen.push(notiz);
        localStorage.setItem("notizen", JSON.stringify(notizen));
        window.location.href = "startseite.html";
    });

    document.getElementById("btn-leeren").addEventListener("click", function() {
        document.getElementById("tore-heim").value      = 0;
        document.getElementById("tore-auswaerts").value = 0;
        document.getElementById("eigentore").value      = 0;
        document.getElementById("gelbe-karten").value   = 0;
        document.getElementById("rote-karten").value    = 0;
        document.getElementById("geschehnisse").value   = "";
        document.getElementById("Notiz-text").value     = "";
    });
}