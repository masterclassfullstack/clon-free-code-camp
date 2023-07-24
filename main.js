const inputSearch = document.querySelector(".input-search");
const headerSearch = document.querySelector(".header-search");

inputSearch.addEventListener("focus", () => {
   headerSearch.classList.add("border");
});

inputSearch.addEventListener("blur", () => {
   headerSearch.classList.remove("border");
});
