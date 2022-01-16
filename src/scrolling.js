// Begin animation
document.querySelector(".begin").addEventListener("click", () => {
  document.querySelector("#scroll-to").scrollIntoView({ block: "start" });
});

// Progress bar
window.addEventListener("scroll", () => {
  const windowScroll =
    document.body.scrollTop || document.documentElement.scrollTop;

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollPercentage = (windowScroll / height) * 100;

  document.querySelector("#scrollBar").style.width = scrollPercentage + "%";
});
