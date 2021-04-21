import { registerImage } from "./lazy.js";
    
export const app = document.getElementById('images')
const addButton = document.querySelector('button')
const removeElement = document.querySelector('a')
const minimum = 1
const maximum = 122
let addImagenCount = 0
let onloadImage = 0
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum

const createImgNode = () => {
    const figure = document.createElement('figure')
    const img = document.createElement('img')
    img.width = '320'
    img.dataset.src = `https://randomfox.ca/images/${random()}.jpg`
    figure.appendChild(img)
    figure.className = "container-image"
    return figure
}
const addImage = () => {
    const newImage = createImgNode()
    app.append(newImage)
    registerImage(newImage)
}
const clearAlert = () => {
    const modalClear = document.createElement('section')
    modalClear.className = 'modal-alert'
    modalClear.addEventListener("click", () => {
        modalClear.remove()
    })

    const alert = document.createElement('article')
    alert.className = 'alert'

    const containerButton = document.createElement('div')
    containerButton.className = 'container-button'

    const closeAlert = document.createElement('button')
    closeAlert.className = 'close-alert'
    closeAlert.textContent = 'x'
    closeAlert.addEventListener("click", () => {
        modalClear.remove()
    })

    const iconAlert = document.createElement('img')
    iconAlert.src = 'https://i.makeagif.com/media/12-15-2016/dJJGaw.gif'
    iconAlert.alt = 'Sin elementos'

    const legent = document.createElement('h3')
    legent.textContent = 'Sin elementos por eliminar'

    modalClear.appendChild(alert)
    containerButton.appendChild(closeAlert)
    alert.append(containerButton, iconAlert, legent)

    return app.appendChild(modalClear)
}
const removeImage = () => {
    if(app.childElementCount > 0) {
        const nodeChild = app.lastElementChild
        nodeChild.remove()
    } else {
        clearAlert()
    }
}


addButton.addEventListener("click", addImage)
removeElement.addEventListener("click", removeImage)