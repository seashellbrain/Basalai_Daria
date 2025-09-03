const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;


if (localStorage.getItem("theme") === "light") {
  html.classList.add("light");
}


themeToggle?.addEventListener("click", () => {
  html.classList.toggle("light");
  if (html.classList.contains("light")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});
