// const dot1 = document.querySelector("#dot1");
// const dot2 = document.querySelector("#dot2");
// const dot3 = document.querySelector("#dot3");
// const dot4 = document.querySelector("#dot4");

// const totalCrewContent = document.querySelector(".totalCrewContent");



// window.addEventListener("load", function(){
//     dot1.classList.add("crewActive");
// });

// totalCrewContent.addEventListener("scrollsnapchange", (event) => {
//     //   event.snapTargetBlock.classList.add("snapActive")
//     if (event.snapTargetInline === totalCrewContent.children[0]){
//         dot1.classList.add("crewActive");
//         dot2.classList.remove("crewActive");
//         dot3.classList.remove("crewActive");
//         dot4.classList.remove("crewActive");
//         // console.log(totalCrewContent.children[0])
//     } 
//     if (event.snapTargetInline === totalCrewContent.children[1]){
//         dot2.classList.add("crewActive");
//         dot1.classList.remove("crewActive");
//         dot3.classList.remove("crewActive");
//         dot4.classList.remove("crewActive");
//         // console.log(totalCrewContent.children[1])
//     }
//     if (event.snapTargetInline === totalCrewContent.children[2]){
//         dot3.classList.add("crewActive");
//         dot1.classList.remove("crewActive");
//         dot2.classList.remove("crewActive");
//         dot4.classList.remove("crewActive");
//     }
//     if (event.snapTargetInline === totalCrewContent.children[3]){
//         dot4.classList.add("crewActive");
//         dot1.classList.remove("crewActive");
//         dot3.classList.remove("crewActive");
//         dot2.classList.remove("crewActive");
//     }
// });

const dot1 = document.querySelector("#dot1");
const dot2 = document.querySelector("#dot2");
const dot3 = document.querySelector("#dot3");
const dot4 = document.querySelector("#dot4");

const totalCrewContent = document.querySelector(".totalCrewContent");

// Helper function to determine the active slide based on the scroll position
function updateActiveDot() {
    const scrollLeft = totalCrewContent.scrollLeft; // Horizontal scroll position
    const slideWidth = totalCrewContent.offsetWidth; // Width of a single slide

    const activeIndex = Math.round(scrollLeft / slideWidth); // Determine which slide is active

    // Update dot indicators
    dot1.classList.toggle("crewActive", activeIndex === 0);
    dot2.classList.toggle("crewActive", activeIndex === 1);
    dot3.classList.toggle("crewActive", activeIndex === 2);
    dot4.classList.toggle("crewActive", activeIndex === 3);
}

window.addEventListener("load", function() {
    dot1.classList.add("crewActive"); // Set initial active dot
});

totalCrewContent.addEventListener("scroll", () => {
    updateActiveDot();
});
