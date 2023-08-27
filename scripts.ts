const buttons = document.getElementById('buttons')
const input_field = document.querySelector('input[type="text"]') as HTMLInputElement

buttons?.addEventListener('click', function(event) {
  const clicked_button = event.target as HTMLElement
  if (clicked_button.tagName === 'BUTTON') {
    if (clicked_button.textContent === ' C ' ) {
      input_field.value = ''
    } 
    else {
      input_field.value += clicked_button.textContent

      const answer = document.getElementById("answer") as HTMLElement
      try {
        answer.innerHTML = `Answer: ${eval(input_field.value)}`
      }
      catch (err) {
        answer.innerHTML = 'Answer: None'
      }
    }
  }
})
