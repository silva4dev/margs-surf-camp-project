function handleScroll() {
  const $headerContent = document.querySelector(".header__content");
  if (scrollY > 0) {
    $headerContent.style.background = "transparent";
  } else {
    $headerContent.style.background = "#fff";
  }
}
