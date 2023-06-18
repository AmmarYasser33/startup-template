const themeBtn = document.querySelector(".theme-icon");
const lightIcon = document.querySelector(".theme-icon__light");
const darkIcon = document.querySelector(".theme-icon__dark");

themeBtn.style.boxShadow = "rgba(0, 0, 0, 0.5) 0px 0px 10px";
let cnt = 1;

themeBtn.addEventListener("click", () => {
  lightIcon.classList.toggle("hide-icon");
  darkIcon.classList.toggle("hide-icon");

  // read the current theme from the body data-bs-theme attribute
  const currentTheme = document.body.getAttribute("data-bs-theme");

  if (cnt % 2 == 1) {
    themeBtn.style.boxShadow = "rgba(241, 241, 241, 0.5) 0px 0px 10px";
  } else {
    themeBtn.style.boxShadow = "rgba(0, 0, 0, 0.5) 0px 0px 10px";
  }
  cnt++;

  // toggle the data-bs-theme attribute value
  document.body.setAttribute(
    "data-bs-theme",
    currentTheme === "dark" ? "light" : "dark"
  );
});
