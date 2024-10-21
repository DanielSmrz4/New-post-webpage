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

    if (window.innerWidth >= 600) {
        nav.style.height="fit-content"
        nav.setAttribute("data-visible", "false")
        
    } else {
        nav.style.height="0px"
        nav.setAttribute("data-visible", "false")
    }
}, [window.innerWidth])
