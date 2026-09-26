document.addEventListener("DOMContentLoaded", () => {

// Buttons
  document.querySelector(".pbutton").addEventListener("click", () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  });

  document.querySelector(".cbutton").addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  });

// Tools
  const tools = [
    { name: "Python",          color: "rgb(154, 93, 211)" },
    { name: "JavaScript",      color: "aqua" },
    { name: "HTML & CSS",      color: "rgb(183, 130, 233)" },
    { name: "Flask",           color: "limegreen" },
    { name: "TensorFlow Lite", color: "aqua" },
    { name: "ESP32",           color: "limegreen" },
    { name: "MicroPython",     color: "rgb(154, 93, 211)" },
    { name: "Docker",          color: "aqua" },
    { name: "Git & GitHub",    color: "rgb(183, 130, 233)" },
    { name: "MikroTik",        color: "limegreen" },
    { name: "Wokwi",           color: "aqua" },
    { name: "C#",              color: "rgb(154, 93, 211)" },
    { name: "Raspberry Pi",    color: "rgb(183, 130, 233)" },
    { name: "Render",          color: "limegreen" },
    { name: "Flask-SocketIO",  color: "aqua" },
    { name: "Pint",            color: "rgb(154, 93, 211)" },
    { name: "Vercel",          color: "limegreen" },
    { name: "Netlify",         color: "aqua" },
    { name: "SQL",             color: "rgb(154, 93, 211)" },
    { name: "NumPy",           color: "rgb(183, 130, 233)" },
    { name: "Oracle",          color: "limegreen" },
    { name: "Cisco Packet Tracer",  color: "aqua" },
    { name: "EasyEDA",              color: "rgb(154, 93, 211)" },
    { name: "NI Multisim",          color: "aqua" },
    { name: "AutoCAD",              color: "rgb(154, 93, 211)" },
    { name: "Teachable Machine",    color: "aqua" },
    { name: "Microsoft Office",     color: "rgb(154, 93, 211)" },
    { name: "Claude",               color: "rgb(183, 130, 233)" },
    { name: "MySQL",                color: "limegreen" },
    { name: "Tavily",               color: "rgb(154, 93, 211)" },
    { name: "Groq",                 color: "aqua" },
    { name: "LLM",                  color: "rgb(183, 130, 233)" },
    { name: "Google Stitch",        color: "limegreen" },
    
  ];

  const track = document.getElementById("toolTrack");
  const doubled = [...tools, ...tools];
  doubled.forEach(t => {
    const chip = document.createElement("div");
    chip.className = "tool-chip";
    chip.innerHTML = `<span class="dot" style="background-color:${t.color}"></span>${t.name}`;
    track.appendChild(chip);
  });

// Welcome popup (shows on every page load/refresh)
  const welcomeModal = document.getElementById("welcomeModal");
  const modalClose = document.getElementById("modalClose");
  const modalCta = document.getElementById("modalCta");

  function closeWelcomeModal() {
    if (welcomeModal) welcomeModal.classList.remove("show");
  }

  if (welcomeModal) {
    setTimeout(() => {
      welcomeModal.classList.add("show");
    }, 600);
  }

  if (modalClose) modalClose.addEventListener("click", closeWelcomeModal);
  if (modalCta) modalCta.addEventListener("click", closeWelcomeModal);

  if (welcomeModal) {
    welcomeModal.addEventListener("click", (e) => {
      if (e.target === welcomeModal) closeWelcomeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeWelcomeModal();
  });

// Hero pin + fade-on-scroll effect
  const header = document.querySelector("header");
  const hero = document.querySelector(".s1");

  function setHeroStickyOffset() {
    if (!header || !hero) return;
    // Pin the hero right below the sticky header instead of behind it
    hero.style.top = header.offsetHeight + "px";
  }

  function updateHeroFade() {
    if (!hero) return;
    const heroHeight = hero.offsetHeight || 1;
    const scrollY = window.scrollY || window.pageYOffset;
    const progress = Math.min(Math.max(scrollY / heroHeight, 0), 1);
    hero.style.opacity = 1 - progress;
  }

  setHeroStickyOffset();
  updateHeroFade();

  window.addEventListener("scroll", updateHeroFade, { passive: true });
  window.addEventListener("resize", () => {
    setHeroStickyOffset();
    updateHeroFade();
  });

// Hamburger navigation (mobile + tablet)
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navMenu = document.getElementById("navMenu");
  const navBackdrop = document.getElementById("navBackdrop");
  const navLinks = navMenu ? navMenu.querySelectorAll("a") : [];

  function openNav() {
    navMenu.classList.add("nav-open");
    hamburgerBtn.classList.add("active");
    navBackdrop.classList.add("show");
    hamburgerBtn.setAttribute("aria-expanded", "true");
  }

  function closeNav() {
    navMenu.classList.remove("nav-open");
    hamburgerBtn.classList.remove("active");
    navBackdrop.classList.remove("show");
    hamburgerBtn.setAttribute("aria-expanded", "false");
  }

  if (hamburgerBtn && navMenu && navBackdrop) {
    hamburgerBtn.addEventListener("click", () => {
      const isOpen = navMenu.classList.contains("nav-open");
      isOpen ? closeNav() : openNav();
    });

    navBackdrop.addEventListener("click", closeNav);

    navLinks.forEach(link => {
      link.addEventListener("click", closeNav);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) closeNav();
    });
  }
});

