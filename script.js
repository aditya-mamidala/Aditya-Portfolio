/* ================= PRELOADER ================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("preloader")
            .classList.add("hide");

    }, 1000);

});


/* ================= TYPING EFFECT ================= */

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

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1600);

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

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

typeEffect();


/* ================= NAVBAR ================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* ================= MOBILE MENU ================= */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("show");

});


document.querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("show");

        });

    });


/* ================= ACTIVE NAV ================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(
        ".section-heading, .about-grid, .skill-card, .project-card, .learning-item, .contact-box"
    );


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition =
        "opacity .7s ease, transform .7s ease";

});


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: .12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= PROJECT TILT ================= */

document.querySelectorAll(".project-card")
    .forEach(card => {

        card.addEventListener("mousemove", event => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -2;

            const rotateY =
                ((x - centerX) / centerX) * 2;

            card.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "perspective(800px) rotateX(0) rotateY(0)";

        });

    });


/* ================= MOUSE PARALLAX ================= */

const stars =
    document.querySelectorAll(".stars");


document.addEventListener("mousemove", event => {

    const x =
        (event.clientX / window.innerWidth - .5) * 15;

    const y =
        (event.clientY / window.innerHeight - .5) * 15;


    stars.forEach((star, index) => {

        const speed =
            (index + 1) * .3;

        star.style.transform =
            `translate(${x * speed}px, ${y * speed}px)`;

    });

});


/* ================= BACK TO TOP ================= */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ================= CURRENT YEAR ================= */

document.getElementById("year")
    .textContent = new Date().getFullYear();


/* ================= CONSOLE ================= */

console.log(
`
╔══════════════════════════════════╗
║       ADITYA MAMIDALA            ║
║                                  ║
║  B.Tech CSE Student              ║
║  Cybersecurity Learner            ║
║  AI Enthusiast                    ║
║                                  ║
║  Build. Learn. Secure.            ║
╚══════════════════════════════════╝
`
);
