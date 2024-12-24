const dot1 = document.querySelector("#dot1");
const dot2 = document.querySelector("#dot2");
const dot3 = document.querySelector("#dot3");
const dot4 = document.querySelector("#dot4");

const totalCrewContent = document.querySelector(".totalCrewContent");



window.addEventListener("load", function(){
    dot1.classList.add("crewActive");
});

totalCrewContent.addEventListener("scrollsnapchange", (event) => {
    //   event.snapTargetBlock.classList.add("snapActive")
    if (event.snapTargetInline === totalCrewContent.children[0]){
        dot1.classList.add("crewActive");
        dot2.classList.remove("crewActive");
        dot3.classList.remove("crewActive");
        dot4.classList.remove("crewActive");
        // console.log(totalCrewContent.children[0])
    } 
    if (event.snapTargetInline === totalCrewContent.children[1]){
        dot2.classList.add("crewActive");
        dot1.classList.remove("crewActive");
        dot3.classList.remove("crewActive");
        dot4.classList.remove("crewActive");
        // console.log(totalCrewContent.children[1])
    }
    if (event.snapTargetInline === totalCrewContent.children[2]){
        dot3.classList.add("crewActive");
        dot1.classList.remove("crewActive");
        dot2.classList.remove("crewActive");
        dot4.classList.remove("crewActive");
    }
    if (event.snapTargetInline === totalCrewContent.children[3]){
        dot4.classList.add("crewActive");
        dot1.classList.remove("crewActive");
        dot3.classList.remove("crewActive");
        dot2.classList.remove("crewActive");
    }
});

