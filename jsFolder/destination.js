const moon = document.querySelector("#moon");
const mars = document.querySelector("#mars");
const europa = document.querySelector("#europa");
const titan = document.querySelector("#titan");
const planetName = document.querySelector("#planetName");
const planetInfo = document.querySelector("#planetInfo");
const planetDistance = document.querySelector("#planetDistance");
const planetTime = document.querySelector("#planetTime");
const planetImage = document.querySelector("#planetImage");
let mobileSlider = document.querySelector("#mobileSlider");


moon.addEventListener("click", () => {
    
    planetName.textContent = "MOON";
    planetInfo.textContent = "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
    planetDistance.textContent = "384,400 KM";
    planetTime.textContent = "3 DAYS";
    mobileSlider.scrollTop = 0;


    planetImage.classList.add("hidden");

    setTimeout(() => {
        planetImage.src = "/cssFolder/assets/destination/image-moon.png";
        planetImage.classList.remove("hidden");
    }, 500);
});

mars.addEventListener("click", () => {
    planetName.textContent = "MARS";
    planetInfo.textContent = "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!";
    planetDistance.textContent = "225 MIL. KM";
    planetTime.textContent = "9 MONTHS";
    mobileSlider.scrollTop = 0;

    planetImage.classList.add("hidden");

    setTimeout(() => {
        planetImage.src = "/cssFolder/assets/destination/image-mars.png";
        planetImage.classList.remove("hidden");
    }, 500);
});

europa.addEventListener("click", () => {
    planetName.textContent = "EUROPA";
    planetInfo.textContent = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
    planetDistance.textContent = "628 MIL. KM";
    planetTime.textContent = "3 YEARS";
    mobileSlider.scrollTop = 0;

    planetImage.classList.add("hidden");

    setTimeout(() => {
        planetImage.src = "/cssFolder/assets/destination/image-europa.png";
        planetImage.classList.remove("hidden");
    }, 500);
});

titan.addEventListener("click", () => {
    planetName.textContent = "TITAN";
    planetInfo.textContent = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
    planetDistance.textContent = "1.6 BIL. KM";
    planetTime.textContent = "7 YEARS";
    mobileSlider.scrollTop = 0;

    planetImage.classList.add("hidden");

    setTimeout(() => {
        planetImage.src = "/cssFolder/assets/destination/image-titan.png";
        planetImage.classList.remove("hidden");
    }, 500);
});


// Planet Filter toggle


 window.addEventListener("load", function(){
     moon.classList.add("planetActive");
 });

 moon.addEventListener("click", function(){
    moon.classList.add("planetActive");
    mars.classList.remove("planetActive");
    europa.classList.remove("planetActive");
    titan.classList.remove("planetActive");
    
});
mars.addEventListener("click", function(){
    mars.classList.add("planetActive");
    moon.classList.remove("planetActive");
    europa.classList.remove("planetActive");
    titan.classList.remove("planetActive");
    
});
europa.addEventListener("click", function(){
    mars.classList.remove("planetActive");
    moon.classList.remove("planetActive");
    europa.classList.add("planetActive");
    titan.classList.remove("planetActive");
    
});
titan.addEventListener("click", function(){
    mars.classList.remove("planetActive");
    moon.classList.remove("planetActive");
    europa.classList.remove("planetActive");
    titan.classList.add("planetActive");
    
});

// function topFunction() {
//     mobileSlider.scrollTop = 0; 
//   }


 
// let planet = document.querySelector('.planet');
//         let mobileSlider = document.getElementById('mobileSlider');
//         console.log(planet)
//         planet.addEventListener('click', () => {
//             // mobileSlider.body.scrollTop = 0;
//             console.log(planet[0])

//         });