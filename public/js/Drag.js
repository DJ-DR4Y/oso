class Drag {
    balise = null // balise
    decalage_x = 0
    decalage_y = 0
    en_deplacement = false

    constructor(balise) {
        this.balise = balise
        // console.log(this.balise)


        // mousedown
        this.balise.addEventListener("mousedown", e => {
            e.preventDefault()
            this.debuter()
        })
        // mouseup
        document.addEventListener("mouseup", e => {
            e.preventDefault()
            this.terminer()
        })
        // mousemove
        document.addEventListener("mousemove", e => {
            // console.log(e)
            e.preventDefault()
            this.deplacer(e.movementX, e.movementY)
        })
    }
    debuter() {
        // console.log("Début du drag")
        this.en_deplacement = true

    }
    terminer() {
        // console.log("Fin du drag")
        this.en_deplacement = false
    }

    deplacer(x, y) {
        if (this.en_deplacement) {

            this.decalage_x += x
            this.decalage_y += y
            /*
            div {
                transform: translate(10px 20px)
            }
            
            */
            //    this.balise.style.transform = "translate(" + this.decalage_x + "px, "+ this.decalage_y + "px)"
            this.balise.style.transform = `translate(${this.decalage_x}px,${this.decalage_y}px)`

            // console.log(this.decalage_x, this.decalage_y)
        }
    }


}

// Pour déplacer l'image de Google sur Google images
// new Drag(document.querySelector(".nav-menu"))
