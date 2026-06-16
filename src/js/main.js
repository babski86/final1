const track = document.getElementById("slider-track");

const totalImages = track ? track.children.length : 0;
let currentIndex = 0;

function slideImages() {
  if (!track) return;

  currentIndex = (currentIndex + 1) % totalImages;

  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}
setInterval(slideImages, 5000);
const mobileMenu = document.getElementById("mobile-menu");
const menuToggle = document.getElementById("menu-toggle");
const overlay = document.getElementById("overlay");

const menuLinks = mobileMenu.querySelectorAll("a");

function openMenu() {
  mobileMenu.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeMenu() {
  mobileMenu.classList.add("hidden");
  overlay.classList.add("hidden");
}

menuToggle.addEventListener("click", (event) => {
  event.stopPropagation();

  if (mobileMenu.classList.contains("hidden")) {
    openMenu();
  } else {
    closeMenu();
  }
});

// overlay-ზე დაკლიკებით დახურვა
overlay.addEventListener("click", closeMenu);

// ლინკზე დაკლიკებით დახურვა
menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
const section = document.getElementById("scroll-div");
const progressBars = document.querySelectorAll("[data-progress]");
const burtula = document.querySelector("#burtula");
const sectionWidth = section.offsetWidth;
const gorgola = document.querySelectorAll("[data-gorgola]");
const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      progressBars.forEach((e, i) => {
        const progress = e.dataset.progress;
        e.style.width = `${progress}%`;

        const left = sectionWidth * (progress / 100) - 12;
        const currentGorgola = gorgola[i];

        if (currentGorgola) {
          // 1. აღარ გვჭირდება className-ის წაშლა და კლასების დამატება
          // 2. პირდაპირ ვუცვლით marginLeft-ს:
          currentGorgola.style.marginLeft = `${left}px`;
        }
      });
      console.log("სექციის 30% ჩანს");
    }
  },
  { threshold: 0.3 },
);
// gorgola.forEach((e) => {
//   e.classList.add("ml-[200px]");
// });
console.log(gorgola);
observer.observe(section);
