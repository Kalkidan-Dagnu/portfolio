const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

function revealSections() {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 150) {
      section.classList.add('show');
    }
  });
}

function highlightNav() {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", () => {
  revealSections();
  highlightNav();
});

// Initial load
revealSections();
