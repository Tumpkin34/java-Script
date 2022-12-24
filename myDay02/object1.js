var account = {
    owner: "황지수",
    code: "1234",
    balance : 15000,
    deposit: function(money){this.balance += money},
    withdraw: function(money){this.balance -= money},
    showBalance: function(){return this.balance}
};

account.number = "110-111-111111";

with(console){
    log(account);
    log(account.owner);
    log(account["owner"]);
    log(account.balance)
}

account.deposit(50000);
console.log(account.showBalance());