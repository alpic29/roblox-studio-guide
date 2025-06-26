document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");
  const header   = document.querySelector("header");

  // scroll-spy & fade-in
  function setActive(id) {
    navLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        setActive(entry.target.id);
      }
    });
  }, { threshold: 0.6 });

  sections.forEach(sec => observer.observe(sec));

  // back-to-top button
  const scrollBtn = document.createElement("button");
  scrollBtn.textContent = "↑";
  scrollBtn.className = "scroll-top";
  document.body.appendChild(scrollBtn);

  scrollBtn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );

  // shrink header & toggle scroll-btn
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    if (window.scrollY > 100) header.classList.add("shrink");
    else header.classList.remove("shrink");
  });
});
