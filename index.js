let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach(button => {
    button.addEventListener('click', element => {
        const buttonText = element.target.textContent;
        if (buttonText === '=') {
            try {
                const result = eval(string);
                string = result.toString();
                document.querySelector('input').value = string;
            } catch (error) {
                // Handle error if the expression is invalid
                document.querySelector('input').value = 'Error';
            }
        } else if (buttonText === 'AC') {
            string = "";
            document.querySelector('input').value = string;
        } else {
            string += buttonText;
            document.querySelector('input').value = string;
        }
    });
});
