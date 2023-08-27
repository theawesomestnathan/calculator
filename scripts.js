var buttons = document.getElementById('buttons');
var input_field = document.querySelector('input[type="text"]');
buttons === null || buttons === void 0 ? void 0 : buttons.addEventListener('click', function (event) {
    var clicked_button = event.target;
    if (clicked_button.tagName === 'BUTTON') {
        if (clicked_button.textContent === ' C ') {
            input_field.value = '';
        }
        else {
            input_field.value += clicked_button.textContent;
            var answer = document.getElementById("answer");
            try {
                answer.innerHTML = "Answer: ".concat(eval(input_field.value));
            }
            catch (err) {
                answer.innerHTML = 'Answer: None';
            }
        }
    }
});
