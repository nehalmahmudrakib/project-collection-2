const sections = document.querySelectorAll ('section');
// console.log (sections)
for (const section of sections){
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '25px';
    section.style.borderRadius = '10px';
    section.style.backgroundColor = 'lightgray'
    section.style.padding = '20px'
}

const placesContainer = document.getElementById ('places-container');
// placesContainer.style.backgroundColor = 'yellow';

placesContainer.classList.remove('large-text')