var account = {
    // 자바에서의 변수 선언
    owner: "황지수",
    code: "1234",
    balance: 15000,
    // 자바에서의 메소드 선언
    deposit: function(money){this.balance += money;},
    withdraw: function(money){this.balance -= money;},
    showBalance: function(){return this.balance;}
};

// 이렇게 account에 변수 하나 더 선언할 수 있음
account.number = "110-111-111111";

// console.log()일일이 쓰기 귀찮아서 쓰는 with
with(console){
    log(account);
    log(account.owner);
    log(account["owner"]);
    log(account.balance);
}

// account.메소드 실행 매개변수 넘겨주면 money에 더한다.
account.deposit(50000);

// 가진돈 확인하기
console.log(account.showBalance());