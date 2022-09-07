

//requisitando o arquivo JSON e armazenando-o na variável projectsJson quando receber a resposta;
var projectsJson = await fetch("../files/projects.json")
.then((response) => response.status == 200 && (projectsJson = response.json()))

const projectsSection = document.querySelector('.projects'); //elemento pai de todos os projetos
const divProjectsWithoutImg = document.createElement('div');
projectsSection.appendChild(divProjectsWithoutImg);
divProjectsWithoutImg.classList.add('projects__noImg');
divProjectsWithoutImg.classList.add('project');

//verifica se a variável está preenchida;
if(projectsJson) {
    console.log('------------------');
    //itera por todos os projetos do arquivo JSON e chama a função "montarProjeto" passando todos os dados necessários
    projectsJson.forEach(projeto => {
        createProject(projeto);
    });
}
//se a variável não estiver preenchida, é executado o else, o qual adiciona uma mensagem de erro à projectsSection;
else {
    //projectsSection.appendChild(spanMensagemDeErro());
}


function createProject({name, url, iconSrc, screenshots} = typeof projectsJson[0]) {
    
    //criando os elementos HTML e os salvando em constantes para manipulá-los;
    const divProject = document.createElement('div');//elemento pai
    
    const link = document.createElement('a');
    link.href = url;
    link.classList.add('project__link');
    link.target = '_blank';

    /*
            
            
            */
    
    
    const divFooter = document.createElement('div');
    divFooter.classList.add('project__footer');
    
    const iconElement =  document.createElement('img');
    iconElement.src = iconSrc;
    iconElement.classList.add('project__footer--icon');
    const nameElement = document.createElement('h3');
    nameElement.textContent = name;
    nameElement.classList.add('project__footer--name');
    if(screenshots) {
        const imageBg = document.createElement('img');
        imageBg.src = screenshots[0];
        imageBg.alt = "Imagem do projeto " + name;
        imageBg.classList.add('project__image');
        link.appendChild(imageBg);
        link.appendChild(divFooter);
        //divFooter.style.backgroundColor = '#00000088';
        projectsSection.appendChild(divProject);
        divProject.classList.add('project');
    }
    else {
        divProjectsWithoutImg.appendChild(divProject);
        projectsSection.appendChild(divProjectsWithoutImg);
        //divFooter.style.backgroundColor = '#444444';
        link.appendChild(divFooter)
    }
    
    divFooter.appendChild(iconElement);
    divFooter.appendChild(nameElement);
    
    
    divProject.appendChild(link);
    
}
