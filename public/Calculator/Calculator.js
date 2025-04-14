
// let expression = '';

// const inputValue = document.getElementById('buttons').addEventListener('click', (event) => {
//     let value = event.target.dataset.value;
//     expression += value;
//     document.getElementById('Calculator_output').innerHTML = expression;
// });

const inputValue = document.getElementById('buttons');
const buttons = document.querySelectorAll('.btn');
const outputValue = document.getElementById('Calculator_output');

let expression = '';

buttons.forEach(button => {
    button.addEventListener('click', (event) => {

        let valueCal = event.target.dataset.value;

        if (button.classList.contains('del')) {

            expression = expression.slice(0, -1);

        } else if (button.classList.contains('reset')) {

            expression = '';

        } else if (button.classList.contains('equal')) {

            try {
                expression = eval(expression.replace(/x/g, '*')).toString();
            } catch (error) {
                expression = "Error!";
            }

        } else {

            expression += valueCal;

        }

        outputValue.textContent = expression || 0;

    })
})













