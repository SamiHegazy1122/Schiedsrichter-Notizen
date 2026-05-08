if (document.getElementById("notizen-liste")) 
{
    const notizen = JSON.parse(localStorage.getItem("notizen") || "[]");
    document.getElementById("notizen-liste").innerHTML = "";

    const div = document.createElement("div");
    div.className = "notiz-card";
    div.innerHTML = "<p>Hallo</p>";
    document.getElementById("notizen-liste").appendChild(div);

    <button data-id="12345">Löschen</button>
    div.innerHTML = "<button data-id='42'>Löschen</button>";
    const id = e.target.getAttribute("data-id");

}



if (document.getElementById("btn-speichern"))
{
    localStorage.setItem("notizen")

    document.getElementById("btn-speichern").addEventListener("click", function()
    {
        const wert = document.getElementById("Tore-heim", "Tore-gast" ).ariaValueMax;
    });

    const karte = 
    document.createElement("div");
    karte.className = "notizkarte";
    document.getElementById("notizen-liste").appendChild(karte);

    window.location.href = "startseite.html";
}