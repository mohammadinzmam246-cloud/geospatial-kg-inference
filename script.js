// ================== DOM ELEMENTS ==================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const darkToggle = document.getElementById("darkToggle");

// ================== MOBILE MENU ==================
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("show");
});

// Close menu on link click (mobile UX)
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        hamburger.classList.remove("active");
    });
});

// ================== DARK MODE ==================
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );
});

// ================== ACTIVE NAV LINK ==================
const page = document.body.getAttribute("data-page");

const pageMap = {
    home: "index.html",
    objectives: "objectives.html",
    methodology: "methodology.html",
    technology: "technology.html",
    applications: "applications.html",
    future: "future.html",
    publications: "publications.html",
    contact: "contact.html"
};

document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.getAttribute("href") === pageMap[page]) {
        link.classList.add("active");
    }
});

// ================== SCROLL ANIMATION ==================
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.15 });

sections.forEach(section => observer.observe(section));
