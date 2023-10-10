const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("mobile-menu");
const counters = document.querySelectorAll(".counter");
/* Scroll */
let scrollStarted = false;

btn.addEventListener("click", navToggle);
document.addEventListener("scroll", scrollPage);

function navToggle() {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
  menu.classList.toggle("show-menu");
}

/* Use a Better Method If There's Time */
function scrollPage() {
  const scrollPos = window.scrollY;

  if (scrollPos > 100 && !scrollStarted) {
    countUP();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

function countUP() {
  counters.forEach((counter) => {
    counter.innerText = "0";

    const updateCounter = () => {
      /* Get Count Target */
      const target = +counter.getAttribute("data-target");
      /* Get current counter value */
      const c = +counter.innerText;

      /* Create Increment */
      const increment = target / 100;

      /* If counter is less than target, add increment */
      if (c < target) {
        /* Round up and set counter value */
        counter.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter, 75);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

countUP();

/* Scroll Function */
function reset() {
  counters.forEach((counter) => (counter.innerHTML = "0"));
}
