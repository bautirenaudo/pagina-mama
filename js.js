(function () {

    //HERO
    const carrusel = () => {
        let i = 1;
        const fotos = [
            "gilmour.png",
            "cerati.png",
            "jagger.png"
        ]
        setInterval(() => {
            document.querySelector(".fondo .capa").style.cssText = "background-color: rgba(0, 0, 0, 1)";
            setTimeout(() => {
                document.querySelector(".fondo .capa").style.cssText = "background-color: rgba(0, 0, 0, .55)";
            }, 1000);
            setTimeout(() => {
                document.querySelector(".fondo").style.cssText = "background-image: url('images/obras/" + fotos[i] + "')";
                i == (fotos.length - 1) ? i = 0 : i += 1
            }, 500);
        }, 5000);
    }
    carrusel()

    const asignarPaleta = () => {
        document.querySelectorAll(".paleta .color").forEach((colorElement, i) => {
            colorElement.addEventListener("click", () => {
                document.querySelector("body").classList.remove("celeste", "naranja", "amarillo", "verde", "rosa")
                document.querySelector("body").classList.add(colorElement.dataset.colorname)
            })
        })
    }
    asignarPaleta()



}())