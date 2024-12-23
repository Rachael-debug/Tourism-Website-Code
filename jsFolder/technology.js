const launchVehicle = document.querySelector("#launchVehicle");
const spaceCapsule = document.querySelector("#spaceCapsule");
const spaceport = document.querySelector("#spaceport");

const techName = document.querySelector("#techName");
const techInfo = document.querySelector("#techInfo");
const techImage = document.querySelector("#techImage");
const techImageTab1 = document.querySelector("#techImagetab1");


launchVehicle.addEventListener("click", () => {
    techImage.src = "/cssFolder/assets/technology/image-launch-vehicle-portrait.jpg";
    techImageTab1.srcset = "/cssFolder/assets/technology/image-launch-vehicle-landscape.jpg"
    techName.textContent = "LAUNCH VEHICLE";
    techInfo.textContent = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
});

spaceport.addEventListener("click", () => {
    techImage.src = "/cssFolder/assets/technology/image-spaceport-portrait.jpg";
    techImageTab1.srcset = "/cssFolder/assets/technology/image-spaceport-landscape.jpg"
    techName.textContent = "SPACEPORT";
    techInfo.textContent = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.";
});

spaceCapsule.addEventListener("click", () => {
    techImage.src = "/cssFolder/assets/technology/image-space-capsule-portrait.jpg";
    techImageTab1.srcset = "/cssFolder/assets/technology/image-space-capsule-landscape.jpg"
    techName.textContent = "SPACE CAPSULE";
    techInfo.textContent = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
});






// Planet Filter toggle


 window.addEventListener("load", function(){
    launchVehicle.classList.add("planetActive");
 });

 launchVehicle.addEventListener("click", function(){
    launchVehicle.classList.add("planetActive");
    spaceport.classList.remove("planetActive");
    spaceCapsule.classList.remove("planetActive");
    
});
spaceport.addEventListener("click", function(){
    spaceport.classList.add("planetActive");
    launchVehicle.classList.remove("planetActive");
    spaceCapsule.classList.remove("planetActive");
    
});
spaceCapsule.addEventListener("click", function(){
    spaceport.classList.remove("planetActive");
    launchVehicle.classList.remove("planetActive");
    spaceCapsule.classList.add("planetActive");
    
    
});


 