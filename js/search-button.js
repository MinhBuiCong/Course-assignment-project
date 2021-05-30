function searchBar() {
  const input = document.querySelector(".nav-search");
  if (input.style.display === "none") {
    input.style.display = "block";
    input.style.transition = "all 1s ease-in-out";
  } else {
    input.style.display = "none";
  }
}
