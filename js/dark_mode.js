const d = document,
  ls = localStorage;
export default function darkTheme(btn, classDark) {
  const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]", "[data-dark-stage]");
  let sun = "☀️",
    moon = "🌙";
  const lightMode = () => {
    $selectors.forEach((el) => el.classList.remove(classDark));
    $themeBtn.textContent = moon;
    ls.setItem("theme", "light");
    console.log(ls.getItem("theme"));
  };
  const darkMode = () => {
    $selectors.forEach((el) => el.classList.add(classDark));
    $themeBtn.textContent = sun;
    ls.setItem("theme", "dark");
    console.log(ls.getItem("theme"));
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if ($themeBtn.textContent === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });
  d.addEventListener("DOMContentLoaded", (e) => {
    console.log(ls.getItem("theme"));
    if (ls.getItem("theme") === null) ls.setItem("theme", "light");
    if (ls.getItem("theme") === "light") lightMode();
    if (ls.getItem("theme") === "dark") darkMode();
  });
}
