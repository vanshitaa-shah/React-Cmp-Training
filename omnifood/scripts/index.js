const header = document.querySelector(".header");

const menuBtn = document.querySelector(".icon-mobile-nav[name='menu-outline']");

const closeBtn = document.querySelector(
  ".icon-mobile-nav[name='close-outline']"
);

// Set valid copyright year
const yearEl = document.querySelector(".year");

const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;

// Make mobile navigation work
const openNav = () => {
  header.classList.toggle("nav-open");
  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
};

const closeNav = () => {
  header.classList.toggle("nav-open");
  menuBtn.style.display = "block";
  closeBtn.style.display = "none";
};

////////////////////////////////////////////////////
// Smooth scrolling animation
///////////////////////////////////////////////////

const allLinks = document.querySelectorAll("a:link");

console.log(allLinks);

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    //scroll back to top

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const element = document.querySelector(href);
      element.scrollIntoView({
        behavior: "smooth",
      });
    }

    if (link.classList.contains("main-nav-link"))
      header.classList.remove("nav-open");
  });
});

////////////////////////////////////////////////////
// Sticky navigation
///////////////////////////////////////////////////
const sectionHero = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    console.log(ent.isIntersecting);
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(sectionHero);
