var elForm = document.querySelector('.travel__form');
var elInput = document.querySelector('.travel__form-input');
var elValidator = document.querySelector('.validator');
var elResult = document.querySelector('.travel__transport-time');
var elResultFoot = document.querySelector('.travel__transport-time.foot');
var elResultBicycle = document.querySelector('.travel__transport-time.bicycle');
var elResultCar = document.querySelector('.travel__transport-time.car');
var elResultPlane = document.querySelector('.travel__transport-time.plane');

// Transport Speeds in km/soat 
var footSpeed = 3.6, 
    bicycleSpeed = 20.1,
    bicycleSpeed = 70,
    planeSpeed = 800;

elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();

    elInputValue = Number(elInput.value.trim());

    var resultInFoot = elInputValue / footSpeed; 
    var resultInBicycle = elInputValue / bicycleSpeed;
    var resultInCar = elInputValue / bicycleSpeed;
    var resultInPlane = elInputValue / planeSpeed;

    // Early return 
    elInput.value = null;
    if (elInputValue <= 0 || isNaN(elInputValue)) {
        elValidator.style.color = 'red';
        elValidator.textContent = 'Masofani to\'g\'ri kiriting';
        return;
    }else {
        elValidator.style.color = 'transparent';
    }


    elResultFoot.textContent = resultInFoot.toFixed(2) + ' ' + 'soat';
    elResultBicycle.textContent = resultInBicycle.toFixed(2) + ' ' + 'soat';
    elResultCar.textContent = resultInCar.toFixed(2) + ' ' + 'soat';
    elResultPlane.textContent = resultInPlane.toFixed(2) + ' ' + 'soat';
})
