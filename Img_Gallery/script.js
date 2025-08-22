let scrollContainer = document.querySelector(".gallery");

let backBtn = document.getElementById("back-btn");

let nextBtn = document.getElementById("next-btn");


scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});


nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";

    let maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    if (scrollContainer.scrollLeft >= maxScroll) {
    scrollContainer.scrollLeft = 0;
  } else {
    scrollContainer.scrollLeft += 900;
  }
});


backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";

    if (scrollContainer.scrollLeft <= 0) {
    scrollContainer.scrollLeft = scrollContainer.scrollWidth;
  } else {
    scrollContainer.scrollLeft -= 900;
  }
});


let autoPlay = setInterval(() => {
  nextBtn.click();
}, 3000);


scrollContainer.addEventListener("mouseover", () => clearInterval(autoPlay));
scrollContainer.addEventListener("mouseleave", () => {
  autoPlay = setInterval(() => nextBtn.click(), 3000);
});
