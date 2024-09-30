const itemsArray = [];
const nail = document.querySelector(".nail");

document.addEventListener("mousemove", (e) => {
    gsap.to(nail, {
        x: e.clientX - nail.offsetWidth / 2,
        y: e.clientY - nail.ofsetHeight / 2,
        duration: 0.5,
        ease: "power2.out",
    });
});
 