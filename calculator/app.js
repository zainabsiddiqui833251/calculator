function clearLastDigit() {
    var currentDisplay = calcForm.display.value;
    calcForm.display.value = currentDisplay.substring(0, currentDisplay.length - 1);
  }

  function clearDisplay() {
    calcForm.display.value = '';
  }