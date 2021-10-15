const bill = document.getElementById("amount");
const tipFive = document.getElementById("five");
const tipTen = document.getElementById("ten");
const tipFifteen = document.getElementById("fifteen");
const tipTwentyfive = document.getElementById("twentyfive");
const tipFifty = document.getElementById("fifty");
const tipAmount = document.getElementById("tipamount");
const total = document.getElementById("total");
const reset = document.getElementById("reset");

const calcTip = () => {
  total.textContent = '$' + bill
}

const getBillAmount = () => {
    bill = document.getElementById("amount");
    if (!bill.value || Number(bill.value) === 0) {
        billValue = 0;
        calcTip();
        return;
    }
    billValue = Number(bill.value);
    calcTip();
}

