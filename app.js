const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", function() {
  const value = searchInput.value.toLowerCase();
  cards.forEach(card => {
    const country = card.querySelector("p").textContent.toLowerCase();
    if (country.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
