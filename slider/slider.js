var currentSlide = 1; // holds the current slide number to view
var allSlides = document.querySelectorAll(".slide"); // holds all the slides
var totalSlides = allSlides.length; // the number of slides in total

// Start the slideshow
showSlide(currentSlide);

// add click event to "next" button
document.querySelector(".display-right").addEventListener("click", nextSlide);

// add click event to "previous" button
document.querySelector(".display-left").addEventListener("click", previousSlide);

function nextSlide() {
    // increase slide number if there are still any left, else go to the first slide
    if(currentSlide < totalSlides) {
        currentSlide++;
    } else {
        currentSlide = 1;
    }
    console.log("NextSlide: " + currentSlide);
    showSlide();
}

function previousSlide() {
    // decrease slide number if above 0, else go to the last slide
    if(currentSlide > 1) {
        currentSlide--;
    } else {
        currentSlide = totalSlides; 
    }
    console.log("PreviousSlide: " + currentSlide);
    showSlide();
}


function showSlide() {
    console.log("Showing slide number: " + currentSlide);

    // firstly remove the active class from all slides
    for (let i = 0; i<totalSlides; i++) {
        allSlides[i].classList.remove("active");
    }

    // add active class to the slide to be shown
    allSlides[currentSlide - 1].classList.add("active"); // minus one so that it becomes an index
}