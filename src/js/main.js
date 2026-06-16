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

overlay.addEventListener("click", closeMenu);

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
          currentGorgola.style.marginLeft = `${left}px`;
        }
      });
      console.log("სექციის 30% ჩანს");
    }
  },
  { threshold: 0.3 },
);

console.log(gorgola);
observer.observe(section);

const buttons = document.querySelectorAll(".filter-button");
const projects = document.querySelectorAll(".project");

buttons.forEach((e) => {
  e.addEventListener("click", () => {
    buttons.forEach((e) => {
      e.style.backgroundColor = "";

      e.classList.remove("bg-[#FF8233]");
    });

    e.style.backgroundColor = "#FF8233";

    const filter = e.getAttribute("data-filter");

    // 3. შენი ფილტრაციის ლოგიკა
    projects.forEach((project) => {
      const category = project.getAttribute("data-category");
      if (filter === "all" || category === filter || (filter === "html/css" && category === "html/css/js")) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    website: formData.get("website"),
    message: formData.get("message"),
  };

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Thank you for getting in touch! We appreciate you contacting us.");
      contactForm.reset();
    }
  } catch (error) {
    console.error("შეცდომა:", error);
  }
});
