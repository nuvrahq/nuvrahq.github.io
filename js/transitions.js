// transitions.js
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");

  links.forEach(link => {
    // Skip external links, mailto, tel, and new-tab links
    const href = link.getAttribute("href");
    const target = link.getAttribute("target");

    if (
      !href ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      target === "_blank" ||
      link.hasAttribute("data-no-transition")
    ) {
      return; // do nothing for these links
    }

    // Otherwise apply your page transition logic (if any)
    link.addEventListener("click", e => {
      e.preventDefault();

      // Example transition (replace with your own fade/animation)
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = href;
      }, 300); // matches fade duration
    });
  });
});
