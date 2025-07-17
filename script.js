let n1 = 0;
let n2 = 0;
const primary_display = document.getElementById("primary");
const secondary_display = document.getElementById("secondary");
let op;
let dotEntered = false;
let opEntered = false;

document.getElementById("0-button").addEventListener("click", () => {
    primary_display.textContent += "0";
});
document.getElementById("1-button").addEventListener("click", () => {
    primary_display.textContent += "1";
});
document.getElementById("2-button").addEventListener("click", () => {
    primary_display.textContent += "2";
});
document.getElementById("3-button").addEventListener("click", () => {
    primary_display.textContent += "3";
});
document.getElementById("4-button").addEventListener("click", () => {
    primary_display.textContent += "4";
});
document.getElementById("5-button").addEventListener("click", () => {
    primary_display.textContent += "5";
});
document.getElementById("6-button").addEventListener("click", () => {
    primary_display.textContent += "6";
});
document.getElementById("7-button").addEventListener("click", () => {
    primary_display.textContent += "7";
});
document.getElementById("8-button").addEventListener("click", () => {
    primary_display.textContent += "8";
});
document.getElementById("9-button").addEventListener("click", () => {
    primary_display.textContent += "9";
});
document.getElementById("dot-button").addEventListener("click", () => {
    if (!dotEntered) {
        primary_display.textContent += ".";
        dotEntered = true;
    }
});
document.getElementById("AC-button").addEventListener("click", () => {
    primary_display.textContent = "";
    secondary_display.textContent = "";
    dotEntered = false;
    opEntered = false;
});
document.getElementById("DEL-button").addEventListener("click", () => {
    primary_display.textContent = primary_display.textContent.slice(0,-1)
})
document.getElementById("div-button").addEventListener("click", () => {
    if (!opEntered) {
        secondary_display.textContent = `${primary_display.textContent} ÷`;
        primary_display.textContent = "";
        dotEntered = false;
        opEntered = true;
        op = 1;
    }
});
document.getElementById("mul-button").addEventListener("click", () => {
    if (!opEntered) {
        secondary_display.textContent = `${primary_display.textContent} ×`;
        primary_display.textContent = "";
        dotEntered = false;
        opEntered = true;
        op = 2;
    }
});
document.getElementById("add-button").addEventListener("click", () => {
    if (!opEntered) {
        secondary_display.textContent = `${primary_display.textContent} +`;
        primary_display.textContent = "";
        dotEntered = false;
        opEntered = true;
        op = 3;
    }
});
document.getElementById("min-button").addEventListener("click", () => {
    if (!opEntered) {
        secondary_display.textContent = `${primary_display.textContent} -`;
        primary_display.textContent = "";
        dotEntered = false;
        opEntered = true;
        op = 4;
    }
});
document.getElementById("eq-button").addEventListener("click", () => {
    if (op == 1) {
        operate(parseFloat(secondary_display.textContent), parseFloat(primary_display.textContent), 1);
    } else if (op == 2) {
        operate(parseFloat(secondary_display.textContent), parseFloat(primary_display.textContent), 2);
    } else if (op == 3) {
        operate(parseFloat(secondary_display.textContent), parseFloat(primary_display.textContent), 3);
    } else {
        operate(parseFloat(secondary_display.textContent), parseFloat(primary_display.textContent), 4);
    }
    opEntered = false;
});

function operate(a, b, op) {
    if (op == 1) {
        primary_display.textContent = `${a / b}`.slice(0,18);
        secondary_display.textContent = "";
    } else if (op == 2) {
        primary_display.textContent = `${a * b}`;
        secondary_display.textContent = "";
    } else if (op == 3) {
        primary_display.textContent = `${a + b}`;
        secondary_display.textContent = "";
    } else {
        primary_display.textContent = `${a - b}`;
        secondary_display.textContent = "";
    }
}
