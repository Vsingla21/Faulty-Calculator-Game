function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

let random

function calculate() {
    try {
        let expression = document.getElementById('display').value;
        random=Math.random()
        // Faulty operation swap 10% of the time
        if (random < 0.1) {
            expression = expression.replace(/\+/g, 'tempPlus').replace(/\*/g, '-').replace(/\//g, '+').replace(/-/g, '/').replace(/tempPlus/g, '*');
        }
        let result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
    finally{
        displayMsg(random)
    }
}

function displayMsg(valRandom){
    if(valRandom < 0.1){
        document.getElementById("Message").innerHTML= "Result: OOPS! Wrong Answer! Try Again"
    }
    else{
        document.getElementById("Message").innerHTML = "Result: You Got It Right!"
    }
}