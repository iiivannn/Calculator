let expression = "";

screenDisplay("0");

function calculator() {
  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      let value = button.value;

      if (!isNaN(value) || value === "." || value === "(" || value === ")") {
        expression += value;
        screenDisplay(expression);
      } else if (button.classList.contains("arith")) {
        expression += value;
        screenDisplay(expression);
      } else if (value === "=") {
        getResult();
      } else if (value === "clear") {
        clearCalculator();
      } else if (value === "back") {
        expression = expression.slice(0, -1);
        screenDisplay(expression || "0");
      }
    });
  });
}

function getResult() {
  try {
    let result = math.evaluate(expression);
    result = parseFloat(result.toFixed(3));
    screenDisplay(result);
    expression = result.toString();
  } catch (error) {
    if (expression === null || expression === "") {
      screenDisplay("0");
      expression = "";
    } else {
      screenDisplay("Error");
      expression = "";
    }
  }
}

function screenDisplay(value) {
  document.querySelector(".show-screen").textContent = value;
}

function clearCalculator() {
  expression = "";
  screenDisplay("0");
}

calculator();
