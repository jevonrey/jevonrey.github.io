const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  nav.classList.toggle("active");
};
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !nav.contains(e.target)) {
    menu.classList.remove("bx-x");
    nav.classList.remove("active");
  }
});

/* Percentage Countdown */
const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  let initial_count = 0;
  const final_count = counter.dataset.count;
  //console.log(final_count);

  const counting = setInterval(updateCounting, 1);

  function updateCounting() {
    initial_count = initial_count + 1;
    counter.innerText = initial_count;

    if (initial_count >= final_count) {
      clearInterval(counting);
    }
  }
});

/* Scroll Reveal */
const sr = ScrollReveal ({
  distance: '65px',
  duration: 2600,
  delay: 450,
  reset: true
});
/* HOME Section */
sr.reveal('.profpic',{delay:200, origin:'top'});
sr.reveal(".info-box", { delay: 200, origin: "left" });
sr.reveal(".icons", { delay: 200, origin: "right" });
sr.reveal(".btn-box", { delay: 200, origin: "bottom" });

/* About Me section */
sr.reveal(".about-box", { delay: 200, origin: "left" });
sr.reveal(".cover-photo", { delay: 200, origin: "right" });

/* Tools Sections */
sr.reveal(".header", { delay: 200, origin: "top" });
sr.reveal(".tools-container", { delay: 200, origin: "bottom" });

/* Skills Section */
sr.reveal(".container2", { delay: 200, origin: "left" });
sr.reveal(".skill-description", { delay: 200, origin: "right" });