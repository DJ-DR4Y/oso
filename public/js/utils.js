
/**
 * Retourne un élément au hasard dans le array
 * @param {Array} items 
 */
// function array_random(items) {
//     return items[Math.floor(Math.random() * items.length)];
// }

// export function aleatoire(min, max) {
//     let difference = max - min // 5
//     let aleatoire = Math.random() * difference
//     return min + aleatoire
// }

// export function aleatoire_entier(min, max) {
//     return Math.floor(aleatoire(min, max + 1))
// }

// export function array_rand(tableau) {
//     let index = Math.floor(Math.random() * tableau.length)
//     return tableau[index]
// }

/**
 * Force le navigateur à mettre à jour la balise passée en paramètre
 * @param {HTMLElement} element 
 */
function reflow(element) {
    if (element === undefined) {
        element = document.documentElement
    }
    void (element.offsetHeight)
}