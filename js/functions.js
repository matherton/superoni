/**
 * Toggles the active class on the navToggle element.
 */
function toggleMenu() {
  const navToggle = document.querySelector(".navToggle");
  navToggle.classList.toggle("active");
  /**
   * Changes the source of an image element with ID "menuIcon"
   * based on the current source file.
   * If the current source file is "./img/menu.svg", it changes it to "./img/close.svg".
   * If the current source file is "./img/close.svg", it changes it to "./img/menu.svg".
   */
  const menuIcon = document.getElementById("menuIcon");
  const currentSrc = menuIcon.src;

  if (currentSrc.endsWith("menu.svg")) {
    menuIcon.src = "./img/close.svg";
  } else if (currentSrc.endsWith("close.svg")) {
    menuIcon.src = "./img/menu.svg";
  }
}
