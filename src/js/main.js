const track = document.getElementById("slider-track");

const totalImages = track ? track.children.length : 0;
let currentIndex = 0;

function slideImages() {
  if (!track) return;

  currentIndex = (currentIndex + 1) % totalImages;

  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}
setInterval(slideImages, 5000);
// const menu = document.getElementById("mobile-menu");
// const toggleBtn = document.getElementById("menu-toggle");
// toggleBtn.addEventListener("click", () => {
//   menu.classList.toggle("right-0");
//   menu.classList.toggle("right-[-80%]");
// });
