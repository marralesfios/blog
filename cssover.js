const cssblock = document.createElement("style");
document.head.append(cssblock);

const cssover = document.createElement("textarea");
cssover.id = "css-override";
cssover.addEventListener("input",() => {
    cssblock.textContent = cssover.value;
});
cssover.autocapitalize = "off";
cssover.autocorrect = false;

const cssoverouter = document.createElement("footer");
cssoverouter.classList.add("css-over-outer");
const cssoverlabel = document.createElement("label");
cssoverlabel.textContent = "CSS override:";
cssoverlabel.htmlFor = "css-override";
cssoverouter.append(cssoverlabel,cssover);
document.body.append(cssoverouter);
