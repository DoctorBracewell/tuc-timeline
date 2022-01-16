// Styles
import "../style/index.css";

// Various site functions
import "./generateNodes.js";
import "./scrolling.js";
import "./countup.js";

// Favicon emoji
import setFavicon from "@drbracewell/favicon-emoji";
setFavicon("🪳");

// Footer date
document.querySelector("#footerDate").textContent = new Date().getFullYear();
