const sections = document.querySelectorAll("section");
// console.log(sections);

for(const section of sections){
    console.log(section);
    section.style.border = "3px solid steelblue";
    section.style.marginBottom = "16px";
    section.style.borderRadius = "15px";
    section.style.paddingLeft = "8px";
    section.style.paddingRight = "8px";
    section.style.backgroundColor = "lightgray";
}
const section = document.getElementsByClassName("h2")
section.forEach();

/* const placesContainer = document.getElementById("places-container");
placesContainer.style.backgroundColor = "pink"; */

const placesContainer = document.getElementById("places-container");
placesContainer.classList.add("text-center");
placesContainer.classList.remove("large-text");