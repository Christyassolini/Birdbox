const navMenu = document.getElementById("nav-menu");
const menuToggle = document.querySelector(".menu-toggle");

function toggleMenu() {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");
}

gsap.to("body", {
    backdropFilter: "blur(5px)",
    duration: 0.5,
})

gsap.from(".container", {
    opacity: 0,
    scale: 0.95,
    duration: 0.5,
    ease: "power1.inOut",
});