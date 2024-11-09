// Navigation functionality
const nav = document.querySelector(".my-nav")
const navButton = document.querySelector(".nav-button")


const navToggle = () => {
    const dataVisible = nav.getAttribute("data-visible")

    if (dataVisible == "false") {
        nav.style.height="fit-content"
        nav.setAttribute("data-visible", "true")
        navButton.style.backgroundImage="url(./images/togglenav/cancel.png)"
    }
    else if (dataVisible == "true") {
        navButton.style.backgroundImage="url(./images/togglenav/hamburger.png)"
        nav.style.height="0px"
        nav.setAttribute("data-visible", "false")
    }
};


window.addEventListener("resize", (e) => {
    e.preventDefault()
    navButton.style.backgroundImage="url(./images/togglenav/hamburger.png)"

    if (window.innerWidth >= 880) {
        nav.style.height="fit-content"
        nav.setAttribute("data-visible", "false")
        
    } else {
        nav.style.height="0px"
        nav.setAttribute("data-visible", "false")
    }
}, [window.innerWidth])


// Paragraphs animations
const myParagraphs = document.querySelectorAll(".one-paragraph");

const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      const intersecting = entry.isIntersecting;
        if (intersecting) {
            entry.target.classList.remove("one-paragraph")
            entry.target.classList.add("fade-in")
        }
       else {
        
       }
    }
}, {
    delay: 300
});

myParagraphs.forEach(paragraph => {
    observer.observe(paragraph)
});


// Reset inner text of form inputs
const inputs = document.querySelectorAll(".form-input")
const submitInput = document.querySelector(".submit-input")


submitInput.addEventListener("click", (e) => {
    e.preventDefault()

    inputs.forEach((input) => {
        input.value = ""
    })
});


// Scroll to Top button functionality and appearing
const myScrollTopButton = document.querySelector("#scroll-to-top")


const scrollTopButton = () => {
    window.scrollTo(top)
};


window.addEventListener("scroll", (e) => {
    e.preventDefault()

    let scrolled = window.scrollY

    if (Math.ceil(scrolled) > 350) {
        myScrollTopButton.style.display="block"
    }
    else {
         myScrollTopButton.style.display="none"
    }
});