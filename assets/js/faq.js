const arrows = document.querySelectorAll(".arrow");

arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    arrow.classList.toggle("rotate");

    const answer = arrow.parentElement.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});
