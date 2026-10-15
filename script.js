
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Mobile navigation
menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuBtn.setAttribute("aria-expanded", String(isOpen));
  menuBtn.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.textContent = "☰";
  });
});

// Current copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Contact form validation
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name.length < 2) {
    formStatus.textContent =
      "Please enter a name with at least 2 characters.";
    return;
  }

  if (!emailPattern.test(email)) {
    formStatus.textContent =
      "Please enter a valid email address.";
    return;
  }

  if (message.length < 10) {
    formStatus.textContent =
      "Message must contain at least 10 characters.";
    return;
  }

  formStatus.textContent =
    "All fields are valid. This demo does not send messages.";

  contactForm.reset();
});
