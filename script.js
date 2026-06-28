
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
    { name: "Vercel",        color: "limegreen" },
    { name: "Netlify",           color: "aqua" },
    { name: "SQL",              color: "rgb(154, 93, 211)" },
    { name: "NumPy",    color: "rgb(183, 130, 233)" },
    { name: "Oracle",          color: "limegreen" },
    { name: "Cisco Packet Tracer",  color: "aqua" },
    { name: "EasyEDA",            color: "rgb(154, 93, 211)" },
    { name: "NI Multisim",  color: "aqua" },
    { name: "AutoCAD",            color: "rgb(154, 93, 211)" },
    { name: "Teachable Machine",  color: "aqua" },
    { name: "Microsoft Office",            color: "rgb(154, 93, 211)" },
    { name: "Claude",    color: "rgb(183, 130, 233)" },
    { name: "MySQL",          color: "limegreen" },
  ];

  const track = document.getElementById("toolTrack");
  const doubled = [...tools, ...tools];
  doubled.forEach(t => {
    const chip = document.createElement("div");
    chip.className = "tool-chip";
    chip.innerHTML = `<span class="dot" style="background-color:${t.color}"></span>${t.name}`;
    track.appendChild(chip);
  });
});