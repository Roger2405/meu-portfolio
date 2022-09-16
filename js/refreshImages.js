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
                var parentElement = document.getElementById(`project${keyImg}`);
                
                var newImg = createImg(project.screenshots[index], keyImg)
                parentElement.append(newImg);

                removeOldImg();
                console.log(parentElement.childNodes.length)
                function removeOldImg() {
                    let imgChild = parentElement.childNodes.item(2);
                    imgChild.remove();
                }
            }
        });
    });
    
}, 5000);
