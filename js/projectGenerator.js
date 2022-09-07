

//requisitando o arquivo JSON e armazenando-o na variável projectsJson quando receber a resposta;
var projectsJson = await fetch("../files/projects.json")
.then((response) => response.status == 200 && (projectsJson = response.json()))

const projectsSection = document.querySelector('.projects'); //elemento pai de todos os projetos
var divProjectsNoImg = createDivProjectsNoImg();
var arrayDivProjectsNoImg = [];

function createDivProjectsNoImg() {
    const div = document.createElement('div');
    div.classList.add('projects__noImg');
    div.classList.add('project');
    
    return div;
}

//verifica se a variável está preenchida;
if(projectsJson) {
    projectsJson.forEach(projeto => {
        createProject(projeto);
    });
}

function createProject({name, url, iconSrc, screenshots} = typeof projectsJson[0]) {
    
    //criando os elementos HTML e os salvando em constantes para manipulá-los;
    const divProject = document.createElement('div');//elemento pai
    
    const link = createLink(url);
    const projectFooter = createFooter();
    const icon = createIcon(iconSrc);
    
    
    
    const nameElement = document.createElement('h3');
    nameElement.textContent = name;
    nameElement.classList.add('project__footer--name');
    if(screenshots) {
        const imageScreenShots = createImg(screenshots);
        imageScreenShots.alt = "Imagem do projeto " + name;
        
        divProject.classList.add('project');
        link.appendChild(imageScreenShots);
        projectsSection.appendChild(divProject);
    }
    else {
        divProjectsNoImg.appendChild(divProject);
        if(divProjectsNoImg.childElementCount == 1) {
            projectsSection.appendChild(divProjectsNoImg);
        }
        if(divProjectsNoImg.childElementCount == 2) {
            divProjectsNoImg = createDivProjectsNoImg();
            
        }
        
    }
    projectFooter.appendChild(icon);
    projectFooter.appendChild(nameElement);
    link.appendChild(projectFooter);
    
    
    divProject.appendChild(link);
    
}
function createLink(url) {
    const link = document.createElement('a');
    link.href = url;
    link.classList.add('project__link');
    link.target = '_blank';
    
    return link;
}
function createFooter() {
    const divFooter = document.createElement('div');
    divFooter.classList.add('project__footer');

    return divFooter;
}
function createIcon(iconSrc) {
    const iconElement =  document.createElement('img');
    iconElement.src = iconSrc;
    iconElement.classList.add('project__footer--icon');

    return iconElement;
}
function createImg(images) {
    const imageBg = document.createElement('img');
    imageBg.src = images[0];
    imageBg.classList.add('project__image');

    return imageBg;
}
