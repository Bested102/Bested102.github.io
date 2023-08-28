// Animate on scroll

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

setTimeout(() => {
  const hiddenElements = document.querySelectorAll(
    ".hidden-left, .hidden-right , .hidden-up "
  );

  hiddenElements.forEach((el) => observer.observe(el));
}, 75);

// Dynamic copright

let year = document.querySelector("footer .year");

year.innerHTML = new Date().getFullYear();

// Theme switch

const storageKey = "theme-preference";

const onClick = () => {
  theme.value = theme.value === "light" ? "dark" : "light";

  setPreference();
};

const getColorPreference = () => {
  if (localStorage.getItem(storageKey)) {
    return localStorage.getItem(storageKey);
  } else
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
};

const setPreference = () => {
  localStorage.setItem(storageKey, theme.value);
  reflectPreference();
};

const reflectPreference = () => {
  document.firstElementChild.setAttribute("data-theme", theme.value);

  document
    .querySelector("#theme-toggle")
    ?.setAttribute("aria-label", theme.value);

  changeColors(theme.value);
};

const theme = {
  value: getColorPreference(),
};

reflectPreference();

window.onload = () => {
  reflectPreference();

  document.querySelector("#theme-toggle").addEventListener("click", onClick);
};

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    theme.value = isDark ? "dark" : "light";
    setPreference();
  });

function changeColors(theme) {
  let doc = document.documentElement;
  if (theme == "light") {
    doc.style.setProperty("--MainBackground", "#fafafa");
    doc.style.setProperty("--SecondaryColor", "#e9e2e4");
    doc.style.setProperty("--SecondaryBackground", "#f5f5f5");
    doc.style.setProperty("--AccentColor", "#574246");
    doc.style.setProperty("--Text-Color", "#050505");
  } else {
    doc.style.setProperty("--MainBackground", "#050505");
    doc.style.setProperty("--SecondaryColor", "#1d1618");
    doc.style.setProperty("--SecondaryBackground", "#0b0b0b");
    doc.style.setProperty("--AccentColor", "#bda8ac");
    doc.style.setProperty("--Text-Color", "#fafafa");
  }
}

// Media query

let nav = document.querySelector("header .nav");
let menuIcon = document.querySelector("header svg");
let closeMenu = document.querySelector(".nav svg");
let menuItem = document.querySelectorAll(".nav li")

function myFunction(x) {
  if (x.matches) {
    document.body.prepend(nav);
    nav.classList.add("hide-mobile");
    menuIcon.onclick = () => {
      nav.classList.remove("hide-mobile");
      nav.classList.add("show-mobile");
    };
    closeMenu.onclick = () => {
      nav.classList.remove("show-mobile");
      nav.classList.add("hide-mobile")
    };
    menuItem.forEach(e => e.onclick = ()=>{
      nav.classList.remove("show-mobile");
      nav.classList.add("hide-mobile");
    })
  } else {
    document.querySelector("#theme-toggle").before(nav);
      nav.classList.remove("show-mobile");
      nav.classList.remove("hide-mobile");

    menuItem.forEach(e => e.onclick = ()=>{})
  }
}
let x = window.matchMedia("(max-width: 767px)");
myFunction(x);
x.addEventListener("change", myFunction);

// Copy Into Clipboard

const copyContent = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};