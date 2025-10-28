document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");
  const header = document.querySelector("header");
  let scrollTimeout;
  let lastScroll = window.scrollY;

  // ===== MENU TOGGLE =====
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent accidental click bubbling
      menuToggle.classList.toggle("open");
      nav.classList.toggle("active");
    });

    // Close menu when a nav link is clicked (for mobile)
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", (e) => {
        menuToggle.classList.remove("open");
        nav.classList.remove("active");
      });
    });
  }

  // ===== HEADER HIDE/SHOW ON SCROLL =====
  if (header) {
    window.addEventListener("scroll", () => {
      clearTimeout(scrollTimeout);

      if (window.scrollY > lastScroll && window.scrollY > 50) {
        header.classList.remove("show");
        header.classList.add("hide");
      } else {
        header.classList.remove("hide");
        header.classList.add("show");
      }

      lastScroll = window.scrollY;

      // Reappear after 2s of no scroll
      scrollTimeout = setTimeout(() => {
        header.classList.remove("hide");
        header.classList.add("show");
      }, 2000);
    });
  }

  // ===== FIX: Force external buttons to open normally =====
  document.querySelectorAll("a[target='_blank']").forEach(link => {
    link.addEventListener("click", (e) => {
      e.stopPropagation(); // avoid interference from menu toggles or overlays
      window.open(link.href, "_blank"); // manually open in new tab
    });
  });
});
