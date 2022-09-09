import { projectsJson } from "./projectGenerator.js";

var imageElements =document.querySelectorAll('.project__image');

setInterval(() => {
    imageElements.forEach(img => {
        projectsJson.forEach(project => {
            if(img.getAttribute('id') == project.id) {
                let currentIndex;
                let quantScreenShots = project.screenshots.length;
                project.screenshots.forEach(screenshot => {
                    
                    if(img.src == screenshot) {
                        currentIndex = project.screenshots.indexOf(img.src);
                        return;
                    }
                });
                let newIndex = currentIndex + 1;
                if(quantScreenShots > 1 && newIndex == quantScreenShots) {
                    newIndex = 0;
                }
                if(quantScreenShots > newIndex) {
                    img.src = project.screenshots[newIndex];
                    img.animate([
                        { transform: 'rotateX(90deg)',
                    opacity: 0},
                        { transform: 'rotateX(0deg)',
                    opacity: 1},
                        {},{},{},{},{},{},{},{},{},{},{},{},
                        { transform: 'rotateX(0deg)',
                    opacity: 1},
                        { transform: 'rotateX(-90deg)',
                    opacity: 0}
                      ], 
                      {
                        duration: 5000
                      })
                }
            }
        })
    })
}, 5000);