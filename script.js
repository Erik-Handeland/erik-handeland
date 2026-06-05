const themeToggle = document.querySelector("#theme-toggle");
const year = document.querySelector("#year");
const filterButtons = Array.from(document.querySelectorAll(".filter-button"));
const appCards = Array.from(document.querySelectorAll(".app-card"));

if (year) {
  year.textContent = String(new Date().getFullYear());
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.dataset.theme || "light";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("erik-site-theme", next);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter || "all";

    filterButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-selected", String(selected));
    });

    appCards.forEach((card) => {
      const tags = (card.dataset.tags || "").split(" ");
      card.hidden = filter !== "all" && !tags.includes(filter);
    });
  });
});
