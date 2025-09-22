// ===== Mobile Menu Toggle =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// ===== Helper Functions for Validation =====
function showError(input, message) {
  clearError(input); // remove old error first
  input.classList.add("error");

  const small = document.createElement("small");
  small.className = "error-text";
  small.innerText = message;

  // place error directly after the input/textarea
  input.insertAdjacentElement("afterend", small);
}

function clearError(input) {
  input.classList.remove("error");
  const next = input.nextElementSibling;
  if (next && next.classList.contains("error-text")) {
    next.remove();
  }
}

// ===== Newsletter Form =====
const newsletterForm = document.getElementById('newsletterForm');
const newsletterEmail = document.getElementById('newsletterEmail');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailValue = newsletterEmail.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValue) {
      showError(newsletterEmail, "Email is required.");
    } else if (!emailPattern.test(emailValue)) {
      showError(newsletterEmail, "Please enter a valid email.");
    } else {
      clearError(newsletterEmail);
      newsletterForm.reset();
      alert("✅ Thank you for subscribing!");
    }
  });
}

// ===== Contact Form =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    let valid = true;

    if (!nameInput.value.trim()) {
      showError(nameInput, "Name is required.");
      valid = false;
    } else {
      clearError(nameInput);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
      showError(emailInput, "Enter a valid email.");
      valid = false;
    } else {
      clearError(emailInput);
    }

    if (messageInput.value.trim().length < 10) {
      showError(messageInput, "Message should be at least 10 characters.");
      valid = false;
    } else {
      clearError(messageInput);
    }

    if (valid) {
      contactForm.reset();
      alert("✅ Message sent successfully!");
    }
  });
}

// ===== Scroll Down Arrow =====
const scrollDown = document.querySelector('.scroll-down');
if (scrollDown) {
  scrollDown.addEventListener('click', () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  });
}

// ===== Smooth Page Transitions =====
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-loaded");

  const links = document.querySelectorAll("a");
  links.forEach(link => {
    if (link.hostname === window.location.hostname && link.pathname !== window.location.pathname) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetUrl = link.href;
        document.body.classList.remove("page-loaded");
        setTimeout(() => {
          window.location.href = targetUrl;
        }, 300);
      });
    }
  });
});
