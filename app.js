// Element seçme
var amountElement = document.querySelector("#amount");
var firstSelect = document.querySelector("#firstCurrency");
var secondSelect = document.querySelector("#secondCurrency");
var currency = new Currency("USD","TRY");
var ui = new UI(firstSelect,secondSelect);

eventListeners();

function eventListeners() {
    amountElement.addEventListener("input", exchangeCurrency);
    firstSelect.onchange = function () {
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);
        ui.changeFirst();
    };
    secondSelect.onchange = function () {
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
        ui.changeSecond();
    };
}

function exchangeCurrency() {
    currency.changeAmount(amountElement.value);
    currency.exchange()
    .then(result => {
        ui.displayResult(result);
    })
    .catch(err => console.log(err));
}