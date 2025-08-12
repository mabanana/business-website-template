import { businessData } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  function setupCopyButton(buttonId, valueId) {
    const btn = document.getElementById(buttonId);
    const val = document.getElementById(valueId);
    if (btn && val) {
      btn.addEventListener("click", () => {
        navigator.clipboard.writeText(val.textContent).then(() => {
          btn.textContent = "Copied!";
          setTimeout(() => {
            btn.textContent = "Copy";
          }, 1200);
        });
      });
    }
  }

  const servicesList = document.getElementById("services-list");
  if (servicesList) {
    servicesList.innerHTML = "";
    businessData.servicesList.forEach((service) => {
      const li = document.createElement("li");
      li.textContent = service;
      servicesList.appendChild(li);
    });
  }

  setText("site-title", businessData.siteTitle);
  setText("business-name", businessData.businessName);
  setText("business-tagline", businessData.tagline);
  setText("about-text", businessData.aboutText);
  setText("contact-address", businessData.contactInfo.address);
  setText("contact-phone", businessData.contactInfo.phone);
  setText("contact-email", businessData.contactInfo.email);
  setText("business-name-footer", businessData.businessName);
  setupCopyButton("copy-address", "contact-address");
  setupCopyButton("copy-phone", "contact-phone");
  setupCopyButton("copy-email", "contact-email");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
