const isIntersecting = (entry) => {
    return entry.isIntersecting // true dentro de la pantalla
}
const loadImage = (entry) => {

    const figure = entry.target //
    const image = figure.firstChild
    const url = image.dataset.src
    //Cargue la imagen
    image.src = url
    
    //quitar el observer una vez aplicado
    observer.unobserve(figure)
}
const observer = new IntersectionObserver((entries) => {
    entries
    .filter(isIntersecting)
    .forEach(loadImage)
})


//
export const registerImage = (image) => {
    //intersectionObservador -> observer(imagen)
    observer.observe(image)
}