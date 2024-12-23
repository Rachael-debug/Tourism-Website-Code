const dot1 = document.querySelector("#dot1");
const dot2 = document.querySelector("#dot2");
const dot3 = document.querySelector("#dot3");
const dot4 = document.querySelector("#dot4");
const crewName = document.querySelector("#crewName");
const crewInfo = document.querySelector("#crewInfo");
const crewPosition = document.querySelector("#crewPosition");
const crewImage = document.querySelector("#crewImage");


dot1.addEventListener("click", () => {
    crewImage.src = "/cssFolder/assets/crew/image-douglas-hurley.png";
    crewName.textContent = "DOUGLAS HURLEY";
    crewInfo.textContent = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
    crewPosition.textContent = "COMMANDER";
});

dot2.addEventListener("click", () => {
    crewImage.src = "/cssFolder/assets/crew/image-mark-shuttleworth.png";
    crewName.textContent = "MARK SHUTTLEWORTH";
    crewInfo.textContent = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
    crewPosition.textContent = "MISSION SPECIALIST";
});

dot3.addEventListener("click", () => {
    crewImage.src = "/cssFolder/assets/crew/image-victor-glover.png";
    crewName.textContent = "VICTOR GLOVER";
    crewInfo.textContent = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ";
    crewPosition.textContent = "PILOT";
});

dot4.addEventListener("click", () => {
    crewImage.src = "/cssFolder/assets/crew/image-anousheh-ansari.png";
    crewName.textContent = "ANOUSHEH ANSARI";
    crewInfo.textContent = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ";
    crewPosition.textContent = "FLIGHT ENGINEER";
});


// crew Filter toggle


 window.addEventListener("load", function(){
     dot1.classList.add("crewActive");
 });

 dot1.addEventListener("click", function(){
    dot1.classList.add("crewActive");
    dot2.classList.remove("crewActive");
    dot3.classList.remove("crewActive");
    dot4.classList.remove("crewActive");
    
});
dot2.addEventListener("click", function(){
    dot2.classList.add("crewActive");
    dot1.classList.remove("crewActive");
    dot3.classList.remove("crewActive");
    dot4.classList.remove("crewActive");
    
});
dot3.addEventListener("click", function(){
    dot2.classList.remove("crewActive");
    dot1.classList.remove("crewActive");
    dot3.classList.add("crewActive");
    dot4.classList.remove("crewActive");
    
});
dot4.addEventListener("click", function(){
    dot2.classList.remove("crewActive");
    dot1.classList.remove("crewActive");
    dot3.classList.remove("crewActive");
    dot4.classList.add("crewActive");
    
});

 