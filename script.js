document.addEventListener("DOMContentLoaded", () => {
  const billInput = document.getElementById("billAmount");
  const tipInput = document.getElementById("tipPercentage");
  const calculateBtn = document.getElementById("calculateBtn");
  const totalTipSpan = document.getElementById("totalTip");

tipInput.addEventListener("change", () => {
    console.log("Tip percentage changed to:", tipInput.value);
  });

billInput.addEventListener("input", () => {
    billInput.style.backgroundColor = "#e0f7fa"; // simple visual feedback
  });

calculateBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const bill = parseFloat(billInput.value);
    const tipPercent = parseFloat(tipInput.value);

    if (!isNaN(bill) && !isNaN(tipPercent)) {
      const tip = (bill * tipPercent / 100).toFixed(2);
      totalTipSpan.textContent = tip;
    } else {
      totalTipSpan.textContent = "0.00";
    }
  });
});
