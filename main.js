/* Menu Toggle */
document.querySelector(".menu-toggle").addEventListener("click", function () {
  const nav = document.querySelector(".nav");
  nav.classList.toggle("active");
});

/* Sticky Header */
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const header = document.querySelector(".home-header");
  const currentScrollY = window.scrollY;

  if (currentScrollY === 0) {
    header?.classList.remove("sticky");
  } else if (Math.abs(currentScrollY - lastScrollY) > 100) {
    if (currentScrollY < lastScrollY) {
      header?.classList.add("sticky");
    } else {
      header?.classList.remove("sticky");
    }
  }

  lastScrollY = currentScrollY;
});
