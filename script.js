const toggle = document.getElementById("themeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
  toggle.textContent = "☾";
}

toggle.addEventListener("click", () => {
  body.classList.toggle("light");
  const light = body.classList.contains("light");
  localStorage.setItem("theme", light ? "light" : "dark");
  toggle.textContent = light ? "☾" : "☼";
});

document.getElementById("year").textContent = new Date().getFullYear();
