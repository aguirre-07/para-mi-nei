// =============================
// ESTRELLAS
// =============================

function crearEstrellas() {

    for (let i = 0; i < 55; i++) {

        const estrella =
            document.createElement("div");

        estrella.classList.add("estrella");

        estrella.style.left =
            Math.random() * 100 + "vw";

        estrella.style.top =
            Math.random() * 100 + "vh";

        estrella.style.animationDelay =
            Math.random() * 3 + "s";

        document.body.appendChild(estrella);
    }
}

crearEstrellas();


// =============================
// POEMA
// =============================

const botonPoema =
    document.getElementById("botonPoema");

const poemaFondo =
    document.getElementById("poemaFondo");

const cerrarPoema =
    document.getElementById("cerrarPoema");


botonPoema.addEventListener("click", (event) => {

    event.stopPropagation();

    poemaFondo.classList.add("mostrar");

});


cerrarPoema.addEventListener("click", (event) => {

    event.stopPropagation();

    poemaFondo.classList.remove("mostrar");

});


poemaFondo.addEventListener("click", (event) => {

    if (event.target === poemaFondo) {

        poemaFondo.classList.remove("mostrar");

    }

});


// =============================
// CORAZONES
// =============================

function crearCorazon(x, y) {

    const corazon =
        document.createElement("div");

    corazon.classList.add("corazon");

    const corazones = [
        "🤍",
        "💛",
        "🤍",
        "🤍"
    ];

    corazon.textContent =
        corazones[
            Math.floor(
                Math.random() *
                corazones.length
            )
        ];

    corazon.style.left =
        x + "px";

    corazon.style.top =
        y + "px";

    corazon.style.fontSize =
        Math.random() * 15 + 20 + "px";

    corazon.style.setProperty(
        "--movimiento",
        Math.random() * 140 - 70 + "px"
    );

    document.body.appendChild(corazon);

    setTimeout(() => {

        corazon.remove();

    }, 2500);
}


// =============================
// CORAZONES AL TOCAR
// =============================

document.addEventListener("click", (event) => {

    if (
        event.target.closest(".poema") ||
        event.target.closest("#botonPoema")
    ) {
        return;
    }

    for (let i = 0; i < 5; i++) {

        setTimeout(() => {

            crearCorazon(
                event.clientX +
                Math.random() * 30 - 15,

                event.clientY +
                Math.random() * 30 - 15
            );

        }, i * 80);
    }

});
