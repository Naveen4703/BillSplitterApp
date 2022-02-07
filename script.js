let amount = 0;
let friends = 0;
let tip = 0;
function bill(){
 amount = Number(document.getElementById('amount').value);
 friends = Number(document.getElementById('friends').value);
 tip = Number( document.getElementById('tip').value);
 splitAmount = (amount+tip)/friends + " is the bill";
 document.getElementById('splitAmount').innerHTML = splitAmount;
}
