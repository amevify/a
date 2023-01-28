//stripe calculator code start
const stripeCommPct = 2.9,
    stripeFixedFee = 0.30;
const stripeFeeInp = document.getElementById('stripeFeeInput');
const scalculateBtn = document.getElementById('CalculateBtn');
const sresult = document.getElementById("result");
let calculateAmount = (event) => {
    event.preventDefault();
    let amount2 = parseInt(stripeFeeInp.value);
    let ownFee2 = amount2 * stripeCommPct / 100 + stripeFixedFee,
      senderFee2 = ((100 * amount2) + 30) / 97.1 - amount2;
      let aPlusS = amount2 + senderFee2;
      let amountPlusSender = aPlusS.toFixed(2);
   sresult.innerHTML = `<div class='result-container'>
    <div style='min-width: 400px; border: 1px solid #CCC; border-radius: 5px; display: inline-block; margin: 5px; min-width: 260px; max-width: 400px; width: 80%;' class='result1'>
        <h2 style='padding: 10px;border-bottom: 1px solid #CCC; font-weight: 500;'>YOU PAY FEES</h2>
        <p>If you ask for <b>$${amount2}</b>, you will get <br /><span style='font-size: 28px; font-weight: 600;'>$${amount2-ownFee2.toFixed(2)}</span></p>
        <p>Stripe Fee - $${ownFee2.toFixed(2)}</p>
    </div>
    <div style='min-width: 400px; border: 1px solid #CCC; border-radius: 5px; display: inline-block; margin: 5px; min-width: 260px; max-width: 400px; width: 80%;' class='result1'>
        <h2 style='padding: 10px;border-bottom: 1px solid #CCC; font-weight: 500;'>SENDER PAY FEES</h2>
        <p>If you want <b>$${amount2}</b>, you should ask for <br /><span style='font-size: 28px; font-weight: 600;'>$${amountPlusSender}</span></p>
        <p>Stripe Fee - $${senderFee2.toFixed(2)}</p>
        
    </div>
    </div>`
    stripeFeeInp.value = "";
    return false;
}
// stripe code end