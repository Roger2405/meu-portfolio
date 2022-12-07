

var skillsJson = await fetch("../files/skills.json")
    .then((resposta) => resposta.ok && (skillsJson = resposta.json()));

const sectionSkills = document.querySelector('.skills');

if (skillsJson) {
    skillsJson.forEach(skill => {
        createSkill(skill);
    });
}

function createSkill({ name, imgSrc, bgColor, expTime } = typeof skillsJson[0]) {
    const divParent = document.createElement('div');
    divParent.classList.add('skill');
    divParent.style.backgroundColor = bgColor;

    const imgSkill = document.createElement('img');
    imgSkill.src = imgSrc;
    imgSkill.classList.add('skill__image');

    const nameSkill = document.createElement('h3');
    nameSkill.textContent = name;
    nameSkill.classList.add('skill__description--name');

    const expTimeSkill = document.createElement('p');
    expTimeSkill.classList.add('skill__description--exp');
    expTimeSkill.textContent = `Tempo de experiência: ${convertedTime(expTime)}`;

    const divDescriptionSkill = document.createElement('div');
    divDescriptionSkill.classList.add('skill__description');
    divDescriptionSkill.appendChild(nameSkill);
    divDescriptionSkill.appendChild(expTimeSkill);

    divParent.appendChild(imgSkill);
    divParent.appendChild(divDescriptionSkill);
    sectionSkills.appendChild(divParent);

}
function convertedTime(months) {
    var intYears;
    var intMonths = (months % 12);;
    var text = "";

    if (months >= 12) {
        intYears = Math.floor(months / 12);
    }

    if (intYears) {
        text = `${intYears.toString()} ${intYears > 1 ? "anos" : "ano"}`;
    }
    if (intMonths) {
        if (text != "") {
            text += " e ";
        }
        text += `${intMonths.toString()} ${intMonths > 1 ? "meses" : "mês"}`;
    }
    return text;
}