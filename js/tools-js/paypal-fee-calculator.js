let calculator1 = document.querySelector(".calculator1");
let calculator2 = document.querySelector(".calculator2");
//paypal calculator code start
const paypalCommPct = 3.49,
 PaypalFixedFee = 0.49;
const paypalFeeInp = document.getElementById('paypalFeeInput');
const pcalculateBtn = document.getElementById('CalculateBtn');
const presult = document.getElementById("result");
let calculateAmount = (event) => {
    event.preventDefault();
    let amount = parseInt(paypalFeeInp.value);
    let ownFee = (amount * paypalCommPct / 100 + PaypalFixedFee),
      senderFee = ((100 * amount) + 49) / 96.51 - amount;
    let aPlusS = amount + senderFee;
    let amountPlusSender = aPlusS.toFixed(2);
    presult.innerHTML = `<div class='result-container'>
    <div style='min-width: 300px; border: 1px solid #CCC; border-radius: 5px; display: inline-block; margin: 5px; min-width: 260px; max-width: 400px; width: 80%;' class='result1'>
        <h2 style='padding: 10px;border-bottom: 1px solid #CCC;'>YOU PAY FEES</h2>
        <p>If you ask for <b>$${amount}</b>, you will get <br /><span style='font-size: 28px; font-weight: bold;'>$${amount - ownFee.toFixed(2)}</span></p>
        <p>PayPal Fee - $${ownFee.toFixed(2)}</p>
        
    </div>
    <div style='min-width: 300px; border: 1px solid #CCC; border-radius: 5px; display: inline-block; margin: 5px; min-width: 260px; max-width: 400px; width: 80%;' class='result1'>
        <h2 style='padding: 10px;border-bottom: 1px solid #CCC;'>SENDER PAY FEES</h2>
        <p>If you want <b>$${amount}</b>, you should ask for <br /><span style='font-size: 28px; font-weight: bold;'>$${amountPlusSender}</span></p>
        <p>PayPal Fee - $${senderFee.toFixed(2)}</p>
    </div>
    </div>`
   paypalFeeInp.value = "";
}
//paypal calculator code end