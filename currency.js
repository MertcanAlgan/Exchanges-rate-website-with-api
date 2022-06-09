// es6 promise ile

class Currency {
    constructor(firstCurrency, secondCurrency) {
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://api.exchangerate.host/latest?base=";
        this.amount = null;
    }
    exchange() {
        return new Promise((resolve,reject) => {
            fetch(this.url + this.firstCurrency)
        .then(response => response.json())
        .then(data => {
            var parity = data["rates"][this.secondCurrency];
            var amount2 = Number(this.amount);

            var total = parity * amount2;
            resolve(total);
        })
        .catch(err => console.log(err));
        });
        
    }

    changeAmount(amount) {
        this.amount = amount;
    }
    changeFirstCurrency(newFirstCurrency) {
        this.firstCurrency = newFirstCurrency;
    }
    changeSecondCurrency(newSecondCurrency) {
        this.secondCurrency = newSecondCurrency;
    }
}