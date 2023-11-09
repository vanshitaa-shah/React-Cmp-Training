const accordionItems = document.querySelectorAll(".item");

accordionItems.forEach((item) => {
  console.log("hey");
  item.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});
