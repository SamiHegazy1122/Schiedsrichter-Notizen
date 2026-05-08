if (document.getElementById("notizen-liste")) 
{


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