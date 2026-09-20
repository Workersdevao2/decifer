/* Decifer Sport Resort — Main JS */

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const hamburger = document.querySelector(".hamburger");
  const navMobile = document.querySelector(".nav-mobile");
  const navOverlay = document.querySelector(".nav-overlay");
  const body = document.body;

  // Header scroll effect
  const onScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle
  const toggleMenu = () => {
    const isOpen = navMobile.classList.contains("open");
    hamburger.classList.toggle("active", !isOpen);
    navMobile.classList.toggle("open", !isOpen);
    navOverlay.classList.toggle("visible", !isOpen);
    body.classList.toggle("menu-open", !isOpen);
  };

  if (hamburger) {
    hamburger.addEventListener("click", toggleMenu);
  }

  if (navOverlay) {
    navOverlay.addEventListener("click", toggleMenu);
  }

  // Close menu on link click
  const mobileLinks = document.querySelectorAll(".nav-mobile a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMobile.classList.contains("open")) {
        toggleMenu();
      }
    });
  });

  // WhatsApp form handler
  // Forms with class "form-whatsapp" open wa.me with a structured message
  const WA_DEFAULT = "244936724676";
  const WA_PADEL = "244929797204";

  function buildMessage(form) {
    const type = form.dataset.formType || "Pedido";
    const lines = [`*Decifer Sport Resort — ${type}*`, ""];
    const fields = form.querySelectorAll("[name]");
    fields.forEach((el) => {
      if (!el.name || el.type === "submit") return;
      let label = el.dataset.label || el.name;
      let value = "";
      if (el.tagName === "SELECT") {
        value = el.options[el.selectedIndex] ? el.options[el.selectedIndex].text : el.value;
      } else {
        value = (el.value || "").trim();
      }
      if (!value) return;
      lines.push(`${label}: ${value}`);
    });
    lines.push("", "Enviado pelo site.");
    return lines.join("\n");
  }

  function pickWhatsAppNumber(form) {
    const forced = form.dataset.waNumber;
    if (forced) return forced.replace(/\D/g, "");

    const modalidade = form.querySelector('[name="modalidade"]');
    const tipo = form.querySelector('[name="tipo"]');
    const val = ((modalidade && modalidade.value) || (tipo && tipo.value) || "").toLowerCase();
    if (val.includes("padel")) return WA_PADEL;
    return WA_DEFAULT;
  }

  document.querySelectorAll("form.form-whatsapp").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const number = pickWhatsAppNumber(form);
      const text = buildMessage(form);
      const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank", "noopener");
    });
  });


  // Lazy-load CSS background images via data-bg
  const lazyBgs = document.querySelectorAll("[data-bg]");
  if ("IntersectionObserver" in window) {
    const bgObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const url = el.getAttribute("data-bg");
          if (url) {
            el.style.backgroundImage = `url("${url}")`;
            el.removeAttribute("data-bg");
          }
          obs.unobserve(el);
        });
      },
      { rootMargin: "200px 0px", threshold: 0.01 }
    );
    lazyBgs.forEach((el) => bgObserver.observe(el));
  } else {
    lazyBgs.forEach((el) => {
      const url = el.getAttribute("data-bg");
      if (url) el.style.backgroundImage = `url("${url}")`;
    });
  }

});
