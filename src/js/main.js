// ვპოულობთ სურათების "მატარებელ" ზოლს
const track = document.getElementById("slider-track");

// სულ რამდენი სურათი გვაქვს შიგნით
const totalImages = track ? track.children.length : 0;
let currentIndex = 0;

function slideImages() {
  if (!track) return;

  // გადავდივართ შემდეგ სურათზე
  currentIndex = (currentIndex + 1) % totalImages;

  // ვამოძრავებთ ლენტას მარცხნივ: 0%, -100%, -200%
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// 5 წამში ერთხელ გადააჩოჩოს
setInterval(slideImages, 5000);
