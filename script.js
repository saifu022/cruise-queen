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
function checkIfNegative(value){
    if (value < 0){
        value = 0; 
    }
    return value;
}
function updateTotalCost() {
    const priceFirstClass = 150;
    const priceEconomyClass = 100;
    const firstClassItemValue = document.getElementById('firstClassItemNo').value;
    const firstClassItemNo = checkIfNegative(firstClassItemValue);
    document.getElementById('firstClassItemNo').value = firstClassItemNo;
    const economyClassItemValue = document.getElementById('economyClassItemNo').value;
    const economyClassItemNo = checkIfNegative(economyClassItemValue);
    document.getElementById('economyClassItemNo').value = economyClassItemNo;
    const subtotal = priceFirstClass * firstClassItemNo + priceEconomyClass * economyClassItemNo;
    const tax = subtotal * 0.10;
    const total = subtotal + tax;
    document.getElementById('subtotal').innerText = subtotal.toFixed(2);
    document.getElementById('tax').innerText = tax.toFixed(2);
    document.getElementById('total').innerText = total.toFixed(2);
}
function displayBlock(layer, displayProperty){
    const layerNumber = document.getElementsByClassName(layer);
    for (let i = 0; i < layerNumber.length; i++) {
        const layerElement = layerNumber[i];
        layerElement.style.display = displayProperty;
    }
}

//event handler for changing numbers in input groups through +/- button or manual input
var inputGroups = document.getElementsByClassName("input-number-group");
for (let inputNo = 0; inputNo < inputGroups.length; inputNo++) {
    const inputGroup = inputGroups[inputNo];
    var buttons = inputGroup.getElementsByTagName('button');
    for (let btn = 0; btn < buttons.length; btn++) {
        //event handler for button press
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
    //event handler manual input 
    inputGroup.addEventListener('change', function () {
        updateTotalCost();
    })
}

//event handler 'Book Now' button
const bookNowBtn = document.getElementById("bookNowBtn");
bookNowBtn.addEventListener('click', function(){
    displayBlock('layerOne', 'none');
    displayBlock('layerTwo', 'block');
    const priceFirstClass = 150;
    const priceEconomyClass = 100;
    const firstClassPassengers = document.getElementById('firstClassItemNo').value;
    document.getElementById('firstClassPassengers').innerText = firstClassPassengers;
    const economyClassPassengers = document.getElementById('economyClassItemNo').value;
    document.getElementById('economyClassPassengers').innerText = economyClassPassengers;
    const firstClassCost = priceFirstClass * firstClassPassengers;
    const economyClassCost = priceEconomyClass * economyClassPassengers;
    document.getElementById('firstClassCost').innerText = firstClassCost;
    document.getElementById('economyClassCost').innerText = economyClassCost;
})
//event handler 'Back' button
const backToBooking = document.getElementById("backToBooking");
backToBooking.addEventListener('click', function(){
    displayBlock('layerOne', 'block');
    displayBlock('layerTwo', 'none');
})