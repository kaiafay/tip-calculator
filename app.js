const bill = document.getElementById("amount"); // bill amount
const tipAmount = document.getElementsById("tipamount"); // total tip amount
const total = document.getElementsById("total"); // total bill amount 
const reset = document.getElementById("reset"); // reset button
const buttons = document.querySelectorAll(".tipButton"); // tip buttons

// function that presents total bill amount
// const calcTip = () => {
//   total.textContent = '$' + bill
// }

// // function that calculates tip
// const getBillAmount = () => {
//     bill = document.getElementById("amount");
//     if (!bill.value || Number(bill.value) === 0) {
//         billValue = 0;
//         calcTip();
//         return;
//     }
//     billValue = Number(bill.value);
//     calcTip();
// }

// tipFive.onclick = function() {
//   alert("I AM CLICKED!");
// }

function calcTip(bill, tipAmount) {
  let tipAmount = bill * (tipAmount / 100);
  let tip = Math.floor(tipAmount * 100) / 100;
  tip = tip.toFixed(2);

let totalAmount = tipAmount + bill; 
totalAmount = totalAmount.toFixed(2);

tipAmount.innerHTML = `$${tip}`;
total.innerHTML = `$${totalAmount}`;
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let tipValue = e.target.innerText;
    tipValue = tipValue.substr(0, tipValue.length - 1);

    if(bill.value === "") return;

    calcTip(
      parseFloat(bill.value),
      parseInt(tipValue)
    )
  })
})

