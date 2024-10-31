const tempInput = document.getElementById("tempInput");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const convertBtn = document.getElementById("convertBtn");
const resultDiv = document.getElementById("result");

// Enable convert button only when all fields are filled
function checkFields() {
    convertBtn.disabled = !(tempInput.value && fromUnit.value && toUnit.value);
}

tempInput.addEventListener("input", checkFields);
fromUnit.addEventListener("change", checkFields);
toUnit.addEventListener("change", checkFields);

convertBtn.addEventListener("click", () => {
    const tempValue = parseFloat(tempInput.value);
    const from = fromUnit.value;
    const to = toUnit.value;

    let result;

    // Conversion logic
    if (from === "Celsius" && to === "Fahrenheit") {
        result = (tempValue * 9 / 5) + 32;
    } else if (from === "Celsius" && to === "Kelvin") {
        result = tempValue + 273.15;
    } else if (from === "Fahrenheit" && to === "Celsius") {
        result = (tempValue - 32) * 5 / 9;
    } else if (from === "Fahrenheit" && to === "Kelvin") {
        result = (tempValue - 32) * 5 / 9 + 273.15;
    } else if (from === "Kelvin" && to === "Celsius") {
        result = tempValue - 273.15;
    } else if (from === "Kelvin" && to === "Fahrenheit") {
        result = (tempValue - 273.15) * 9 / 5 + 32;
    } else if (from === to) {
        result = tempValue; // Same unit, no conversion needed
    }

    // Display the result
    resultDiv.textContent = `${result.toFixed(2)}° ${to}`;
});
