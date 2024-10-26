// Navigation functionality
const nav = document.querySelector(".my-nav")
const navButton = document.querySelector(".nav-button")


const navToggle = () => {
    const dataVisible = nav.getAttribute("data-visible")

    if (dataVisible == "false") {
        nav.style.height="fit-content"
        nav.setAttribute("data-visible", "true")
        navButton.style.backgroundImage="url(./images/cancel.png)"
    }
    else if (dataVisible == "true") {
        navButton.style.backgroundImage="url(./images/hamburger.png)"
        nav.style.height="0px"
        nav.setAttribute("data-visible", "false")
    }
};


window.addEventListener("resize", (e) => {
    e.preventDefault()
    navButton.style.backgroundImage="url(./images/hamburger.png)"

    if (window.innerWidth >= 880) {
        nav.style.height="fit-content"
        nav.setAttribute("data-visible", "false")
        
    } else {
        nav.style.height="0px"
        nav.setAttribute("data-visible", "false")
    }
}, [window.innerWidth])


// First section paragraphs animations
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


// Store boxes Animation
const box = document.querySelector(".box")
const boxHeader = document.querySelectorAll(".store-section-header")
console.log(boxHeader)

const displayHeader = (i) => {
    boxHeader[i].style.transform="translateX(0)"
}

const removeHeader = (i) => {
    boxHeader[i].style.transform="translateX(-100%)"
}