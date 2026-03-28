const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.style.transform = "translateY(-1px)";
  });

  link.addEventListener("mouseleave", () => {
    link.style.transform = "translateY(0)";
  });
});