/* =========================================================
   ADITYA MAMIDALA — PREMIUM PORTFOLIO
   MAIN JAVASCRIPT
   ========================================================= */


/* =========================================================
   PRELOADER
   ========================================================= */

function hidePreloader() {
    const preloader = document.getElementById("preloader");

    if (!preloader) return;

    preloader.classList.add("hide");

    // Safety fallback
    setTimeout(() => {
        preloader.style.display = "none";
        preloader.style.visibility = "hidden";
        preloader.style.opacity = "0";
        preloader.style.pointerEvents = "none";
    }, 800);
}


// Normal loading
window.addEventListener("load", () => {
    setTimeout(hidePreloader, 700);
});


// Emergency fallback
// Prevents the website from being stuck forever
setTimeout(hidePreloader, 3000);


/* =========================================================
   TYPING EFFECT
   ========================================================= */

const typingText = document.getElementById("typingText");

const roles = [
    "Cybersecurity Learner",
    "B.Tech CSE Student",
    "Python Developer",
    "AI Enthusiast",
    "Web Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    if (!typingText) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex >= currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1600);

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex <= 0) {

            charIndex = 0;
            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 45 : 85
    );
}


if (typingText) {
    typeEffect();
}


/* =========================================================
   NAVBAR SCROLL EFFECT
   ========================================================= */

const navbar = document.getElementById("navbar");


if (navbar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });

}


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("
