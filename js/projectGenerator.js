

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

    if(screenshots) {
        projectsSection.appendChild(divProject);
        divProject.classList.add('project');

        divProject.innerHTML = `
        <a href="${url}" class="project__link" target="_blank">
            <img src="${screenshots[0]}" class="project__image" alt="Imagem do projeto ${name}">
            <div class="project__footer">
                <img src="${iconSrc}" class="project__footer--icon">
                <h3 class="project__footer--name">${name}</h3>
            </div>
        </a>`;
    }
    
    else {
        divProjectsNoImg.appendChild(divProject);

        divProject.innerHTML = `
        <a href="${url}" class="project__link" target="_blank">
            <div class="project__footer">
                <img src="${iconSrc}" class="project__footer--icon">
                <h3 class="project__footer--name">${name}</h3>
            </div>
        </a>`;
        
        if(divProjectsNoImg.childElementCount == 1) {
            projectsSection.appendChild(divProjectsNoImg);
        }
        if(divProjectsNoImg.childElementCount == 2) {
            divProjectsNoImg = createDivProjectsNoImg();
            
        }
        
    }
}