(function () {

    window.addEventListener("scroll", () => {
        let scrollY = document.documentElement.scrollTop;

        //PARALAX
        document.querySelector(".hero .titulo-centro h1").style.transform = `translateY(${scrollY * -0.2}px)`;
        document.querySelector(".hero .titulo-centro .linea").style.transform = `translateX(${scrollY * 0.2}px)`;
        document.querySelector(".hero .titulo-centro button").style.cssText = `translate:0 ${scrollY * 0.1}px;`;
        //CAMBIOS A PARTIR DE HERO
        if ((window.scrollY + 30) > document.querySelector(".fondo").scrollHeight) {
        } else {
        }

    })


    //HERO
    const menu = () => {
        let indice = 0;

        document.querySelector("nav .menu-button").addEventListener("click", () => {
            if (indice == 0) {
                document.querySelector("nav").style.cssText = "transform: translateX(calc(0% - 12px));";
                document.querySelector("nav").style.background = "var(--main-color)";
                document.querySelector("nav .menu-button").style.cssText = "transform: rotate(-180deg);";
                setTimeout(() => {
                    document.querySelectorAll(".ul1 li span").forEach(e => {
                        e.style.cssText = "width: 100%;";
                    })
                }, 300);
                indice = 1;
            }
            else if (indice == 1) {
                document.querySelector("nav").style.cssText = "transform: translateX(calc(-100% + 12px));";
                document.querySelector("nav").style.background = "var(--main-color)";
                document.querySelector("nav .menu-button").style.cssText = "transform: rotate(0deg);"
                document.querySelectorAll(".ul1 li span").forEach(e => {
                    e.style.cssText = "width: 0%;";
                })
                indice = 0;
            }
        })
    }
    menu()

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

    const variablesColores = (color) => {
        switch (color) {
            case "celeste":
                return "#5BA8FF";
            case "naranja":
                return "#FF965B";
            case "rojo":
                return "#FF5B5B";
            case "verde":
                return "#5BFFD8";
            case "rosa":
                return "#FF5BBE";
        }

    }
    const asignarPaleta = () => {
        document.querySelectorAll(".paleta .color").forEach((colorElement, i) => {
            colorElement.addEventListener("click", () => {
                document.querySelector("body").classList.remove("celeste", "naranja", "rojo", "verde", "rosa")
                document.querySelector("body").classList.add(colorElement.dataset.colorname)
            })
        })
    }
    asignarPaleta()



}())