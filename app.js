// ---------------------------
// Navigation
// ---------------------------
const pages = document.querySelectorAll(".page");
const navBtns = document.querySelectorAll(".nav-btn");

function navigateTo(pageId) {
  pages.forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
  closeMobileNav();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Add click events for nav buttons
navBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.target;
    navigateTo(target);
  });
});

// ---------------------------
// Mobile nav toggle
// ---------------------------
function toggleMobileNav() {
  document.querySelector(".nav").classList.toggle("show");
}

function closeMobileNav() {
  document.querySelector(".nav").classList.remove("show");
}

// ---------------------------
// Service detail modal
// ---------------------------
const serviceDetail = document.getElementById("serviceDetail");

function showServiceDetail(service) {
  let content = "";
  switch (service) {
    case "incorporation":
      content = `<h3>Company Incorporation</h3>
        <p>We guide you through name search, incorporation paperwork, bank account setup, and post-registration compliance.</p>`;
      break;
    case "accounting":
      content = `<h3>Accounting & Payroll</h3>
        <p>Our accountants handle bookkeeping, monthly reports, payroll processing, and tax filing so you can focus on growth.</p>`;
      break;
    case "compliance":
      content = `<h3>Compliance & Filings</h3>
        <p>Stay compliant with ROC, tax, and industry-specific regulations. We manage annual returns, licenses, and reminders.</p>`;
      break;
    case "advisory":
      content = `<h3>Advisory</h3>
        <p>From tax efficiency to restructuring and strategy, our senior advisors provide tailored insights for your business.</p>`;
      break;
    default:
      content = <p>No details available.</p>;
  }
  serviceDetail.innerHTML = content;
  serviceDetail.classList.remove("hide");
}

// ---------------------------
// Modal handling
// ---------------------------
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");

function openContactModal() {
  modalContent.innerHTML = `
    <h3>Request a Quote</h3>
    <form onsubmit="submitContact(event)">
      <input type="text" name="name" placeholder="Your name" required />
      <input type="email" name="email" placeholder="Your email" required />
      <textarea name="message" placeholder="Tell us what you need" rows="4" required></textarea>
      <button type="submit" class="primary">Submit</button>
    </form>
  `;
  modal.classList.remove("hide");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.add("hide");
  modal.setAttribute("aria-hidden", "true");
}

// Close modal if background clicked
modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});

// ---------------------------
// Contact form
// ---------------------------
function submitContact(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const name = formData.get("name");

  // In real project -> send via backend / API
  alert(Thank you, ${name}! Your message has been sent.);

  form.reset();
  closeModal();
}

function resetForm() {
  document.getElementById("contactForm").reset();
}

// ---------------------------
// Dynamic year in footer
// ---------------------------
document.getElementById("year").textContent = new Date().getFullYear();