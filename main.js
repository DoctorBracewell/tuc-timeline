import "./style.css";
import timelineData from "./timeline-content.json";
import { CountUp } from "countup.js";

// Custom web element as a replacement to createElement() and appendChild()
class TimelineNode extends HTMLElement {
  constructor({ content, date }, side) {
    super();

    this.classList.add("info-container");
    this.innerHTML = `
        <div class="line-circle ${side}">
          <div>
            <span class="center-text date">${date}</span>
            <p class="info-text ${side}">${content}</p>
          </div>
        </div>
    `;
  }
}

// Register custom element
customElements.define("timeline-node", TimelineNode);

// Now we can attach the timeline nodes to the DOM
for (let timelineSection of timelineData) {
  const parent = document.querySelector(`#${timelineSection.id}`);

  for (let [index, timelineNode] of timelineSection.nodes.entries()) {
    // Create node
    const node = new TimelineNode(timelineNode, index % 2 ? "right" : "left");

    // Gap
    const gap = document.createElement("div");
    gap.classList.add("custom-gap");
    gap.setAttribute("data-gap-size", timelineNode.gap);

    parent.appendChild(node);
    parent.appendChild(gap);
  }
}
// Set up dynamic gaps
const gaps = document.querySelectorAll(".custom-gap");

for (let element of gaps) {
  const gapSize = element.dataset.gapSize;
  element.style.paddingBottom = `${gapSize}vh`;
}

// Scrolling Functions

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

// Footer date
document.querySelector("#footerDate").textContent = new Date().getFullYear();
