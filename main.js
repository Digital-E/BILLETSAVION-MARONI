const menuOne = document.querySelector(".history-one");
const menuTwo = document.querySelector(".history-two");

const toggleMenuOne = e => {
  menuOne.style.display = "flex";
};

const toggleMenuTwo = e => {
  menuTwo.style.display = "flex";
  menuOne.style.display = "none";
};

document
  .querySelector("#event-one")
  .addEventListener("click", () => toggleMenuOne());

document
  .querySelector("#event-two")
  .addEventListener("click", () => toggleMenuTwo());
