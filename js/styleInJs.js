const sections = document.querySelectorAll("section");
console.log(sections);

for(const section of sections){
    console.log(section);
    section.style.border = '3px solid steelblue';
    section.style.marginBottom = '16px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '8px';
    section.style.paddingRight = '8px';
    section.style.backgroundColor = 'lightgray';
}
const section = document.getElementsByClassName('h2');
// section.forEach();

/* const placesContainer = document.getElementById("places-container");
placesContainer.style.backgroundColor = "yellow"; */

const placesContainer = document.getElementById('places-container');

/* NOTE: The "yellow-bg" class uses from the CSS stylesheet (style.css) file.
         But "yellow-bg" class is NOT specified in the HTML file */
placesContainer.classList.add('yellowgreen-bg');

/* NOTE: The "text-center" class uses from the CSS stylesheet (style.css) file.
         But "text-center" class is NOT specified in the HTML file */
placesContainer.classList.add('text-center');

// NOTE: This code is removing the "large-text" class from the HTML file
placesContainer.classList.remove('large-text');
  