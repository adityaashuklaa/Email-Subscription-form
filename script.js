const scriptURL = 'https://script.google.com/macros/s/AKfycbwhmCPP36Tg7pGPhuM9psbVBiJIR49eLt1ozd5JoMV3XwDJjRxSvK8HrQ5r87YqxhKnJg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thank You for Subscribing!"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000);
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })