/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*='" + sectionId + "']"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      if (sectionsClass) {
        sectionsClass.classList.add("active-link");
      }
    } else {
      if (sectionsClass) {
        sectionsClass.classList.remove("active-link");
      }
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/

/*=============== PRODUCTS ACTIVE ===============*/

document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.querySelector(".products__button");
  const targetElement = document.getElementById("scrollToElement");

  if (scrollButton && targetElement) {
    // Periksa apakah elemen ditemukan
    scrollButton.addEventListener("click", function () {
      if (targetElement.style.display === "none") {
        targetElement.style.display = "grid"; // Tampilkan elemen
        targetElement.classList.add("visible"); // Tambahkan kelas "visible" untuk menerapkan animasi
      } else {
        targetElement.style.display = "none"; // Sembunyikan elemen
        targetElement.classList.remove("visible"); // Hapus kelas "visible"
      }
    });
  }
});
