function calcTip() {
  const billAmt = document.getElementById("billAmt").value;
  const serviceQual = document.getElementById("serviceQual").value;
  let peopleNum = document.getElementById("peopleNum").value;

  //Hide the tip amount on load
  document.getElementById("totalTip").style.display = "none";

  // Validate input
  if (billAmt === "" || serviceQual == 0) {
    alert("Please enter values");
    return;
  }

  //Number of people less or equal to 1
  if (peopleNum === "" || peopleNum === "1") {
    peopleNum = 1;
    document.getElementById("each").style.display = "none";
  }

  // Calculate tip
  let tip = Math.round((billAmt * serviceQual * 100) / peopleNum) / 100;
  tip = tip.toFixed(2);

  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = tip;
}
const calculateBtn = document.getElementById("calculate-btn");
calculateBtn.addEventListener("click", function () {
  calcTip();
});
