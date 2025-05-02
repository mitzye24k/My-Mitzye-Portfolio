// Mobile Navigation
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  // Toggle Nav
  navLinks.classList.toggle("active");

  // Animate Links
  links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.3
      }s`;
    }
  });

  // Hamburger Animation
  hamburger.classList.toggle("toggle");
});

// Close mobile menu when clicking on a link
links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("toggle");
    links.forEach((item) => {
      item.style.animation = "";
    });
  });
});

// Sticky Header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Smooth Scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Form Submission
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const subject = this.querySelector(
      'input[type="text"]:nth-of-type(2)'
    ).value;
    const message = this.querySelector("textarea").value;

    // Here you would typically send the data to a server
    console.log({ name, email, subject, message });

    // Show success message
    alert("Thank you for your message! I will get back to you soon.");
    this.reset();
  });
}

// Animate skills on scroll
const skillItems = document.querySelectorAll(".skill-item");
const skillsSection = document.querySelector(".skills");

function animateSkills() {
  const sectionTop = skillsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight - 100) {
    skillItems.forEach((item) => {
      const progressBar = item.querySelector(".progress");
      const width = progressBar.style.width;
      progressBar.style.width = "0";

      setTimeout(() => {
        progressBar.style.width = width;
      }, 100);
    });

    // Remove event listener after animation
    window.removeEventListener("scroll", animateSkills);
  }
}

window.addEventListener("scroll", animateSkills);
