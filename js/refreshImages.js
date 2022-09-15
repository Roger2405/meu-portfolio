import { createImg } from "./createImg.js";
import { projectsJson } from "./projectGenerator.js";

var imageElements = document.querySelectorAll('.project__image');
let generalIndex = 0;

setInterval(() => {
    generalIndex++;

    imageElements.forEach(image => {
        let keyImg = image.getAttribute('key');

        projectsJson.forEach(project => {
            let screenshotsCount = project.screenshots?.length;
            let index = generalIndex % screenshotsCount;

            if(screenshotsCount > 1 && project.id == keyImg) {
                image.src = project.screenshots[index];
                image.animate([
                    { opacity: 0},
                    { opacity: 1},
                    { opacity: 1},
                    { opacity: 0}
                  ], 
                  {
                    duration: 5000
                  })
                return;
            }
        });
    });
    
}, 5000);
