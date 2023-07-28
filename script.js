const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
const resetButton = document.getElementById("resetButton");

let tickerPrice = +movieSelect.value;

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * tickerPrice;
}

movieSelect.addEventListener("change", (e) => {
  tickerPrice = +e.target.value;
  updateSelectedCount();
});

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
  }
  updateSelectedCount();
});

function resetSelection() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  selectedSeats.forEach((seat) => {
    seat.classList.remove("selected");
  });
  updateSelectedCount();
}

resetButton.addEventListener("click", resetSelection);
