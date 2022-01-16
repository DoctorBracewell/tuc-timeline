import { CountUp } from "countup.js";

// Landing page count-up
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let count = new CountUp("counter", 1599, {
  useEasing: true,
  duration: 4,
  separator: "",
});

count.start(async () => {
  await sleep(250);

  document.querySelector("#counter").innerHTML = "1600";
  document.querySelector("#entire-content").style.display = "block";

  await sleep(2500);

  document.querySelector(".fade-in").style.display = "none";
});
