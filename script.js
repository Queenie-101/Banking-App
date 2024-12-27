let balance =0;
function updateBalance() {
    document.getElementById('balance').textContent=balance;
}
function setInitialBalance() {
    let initialBalance = parseFloat(document.getElementById('initial-balance').value);
    if(isNaN(initialBalance) || initialBalance <= 0) {
        alert("Please enter a valid, positive initial balance.");
        return;
    }
    balance =initialBalance;
    updateBalance(); //Update the balance displayed on the page
    document.getElementById('initial-balance').value= ''; //Clear the initial balance input field
    alert(initialBalance of $${balance} set successfully!);
}
function addTransaction() {
    let description = document.getElementById('description').value;
    let amount = parseFloat(document.getElementById('amount').value);
    balance += amount;
    alert(Transaction added: ${description} for $${amount});
    updateBalance()
    document.getElementById('description').value='';
    document.getElementById('amount').value='';   

}