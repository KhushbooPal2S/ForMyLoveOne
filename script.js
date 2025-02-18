// Optional: Add interactive effects or additional functionality
document.addEventListener("DOMContentLoaded", () => {
    const heart = document.querySelector(".heart");
  
    heart.addEventListener("click", () => {
      heart.style.transform = "scale(1.2) rotate(-45deg)";
      setTimeout(() => {
        heart.style.transform = "scale(1) rotate(-45deg)";
      }, 300);
    });
  });