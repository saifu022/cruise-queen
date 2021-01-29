function changeInputInfo(inputNo, pressedButtonId) {
    let inputData = parseInt(document.getElementsByClassName("inputData")[inputNo].value);
    if (pressedButtonId == "plusButton") {
        inputData++;
    }
    else if (pressedButtonId == "minusButton") {
        if (inputData > 0) {
            inputData--;
        }
    }
    document.getElementsByClassName("inputData")[inputNo].value = inputData;
}

function updateTotalCost() {
    const priceFirstClass = 150;
    const priceEconomyClass = 100;
    const firstClassItemNo = document.getElementById('firstClassItemNo').value;
    const economyClassItemNo = document.getElementById('economyClassItemNo').value;
    const subtotal = priceFirstClass * firstClassItemNo + priceEconomyClass * economyClassItemNo;
    const tax = subtotal * 0.10;
    const total = subtotal + tax;
    document.getElementById('subtotal').innerText = subtotal.toFixed(2);
    document.getElementById('tax').innerText = tax.toFixed(2);
    document.getElementById('total').innerText = total.toFixed(2);
}

//event handler for changing numbers in input groups through +/- button or manual input
var inputGroups = document.getElementsByClassName("input-number-group");
for (let inputNo = 0; inputNo < inputGroups.length; inputNo++) {
    const inputGroup = inputGroups[inputNo];

    var buttons = inputGroup.getElementsByTagName('span');
    for (let btn = 0; btn < buttons.length; btn++) {
        //event listener for button press
        const btnItem = buttons[btn];
        btnItem.addEventListener('click', function () {
            if (btnItem.id == "plusButton") {
                changeInputInfo(inputNo, "plusButton");
                updateTotalCost();
            }
            else if (btnItem.id == "minusButton") {
                changeInputInfo(inputNo, "minusButton");
                updateTotalCost();
            }
        })
    }
    //manual input listener
    inputGroup.addEventListener('change', function () {
        updateTotalCost();
    })

}
