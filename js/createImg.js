export function createImg(src, id) {
    const imgElement = document.createElement('img');
    imgElement.src = src;
    imgElement.classList.add('project__image');
    imgElement.classList.add('fadeIn');
    imgElement.alt ='Captura de tela do projeto';
    imgElement.setAttribute('key', id);
    return imgElement;
}