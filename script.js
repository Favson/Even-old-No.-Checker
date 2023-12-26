function clickMe() {
    if (oddEven.value == "") {
        hiddenAlert.style.display = "block"
    }else{
        if (oddEven.value % 2 == ""){
            hiddenAlert.style.display = "none"
            displayResult.innerHTML = "EVEN"
        }else{
            displayResult.innerHTML = "ODD"
        }
    }
    document.getElementById("oddEven").value = ""
}

function calc() {
    if (inputNumber.value == ""){
        HiddenAlert.style.display = "block"
    }else{
        HiddenAlert.style.display = "none"
        if (inputNumber.value % 3 == "" && inputNumber.value % 5 ==""){
            resultDisplay.innerHTML = "FizzBuzz"
        }else if (inputNumber.value % 3 == ""){
            resultDisplay.innerHTML = "Fizz"
        }else if (inputNumber.value % 5 == "") {
            resultDisplay.innerHTML = "Buzz"
        }else{
            resultDisplay.innerHTML ="The Input is not divisible by 3 nor 5"
        }
    }
    document.getElementById("inputNumber").value = ""
    document.getElementById("resultDisplay").value = ""
}