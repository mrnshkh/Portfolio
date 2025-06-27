console.log("🔥 Mironshoh's animated portfolio loaded!");
/* === script.js === */

document.getElementById("light").onclick = () => {
  document.body.style.setProperty('--bg-color', 'var(--bg-light)');
  document.body.style.setProperty('--text-color', 'var(--text-light)');
};

document.getElementById("dark").onclick = () => {
  document.body.style.setProperty('--bg-color', '#111');
  document.body.style.setProperty('--text-color', '#f5f5f5');
};

// GSAP Animations
gsap.from(".gsap-slide", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.2
});

gsap.from(".gsap-bounce", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  ease: "bounce",
  stagger: 0.3
});
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("show");
}

