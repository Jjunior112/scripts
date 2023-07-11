var messageField = document.getElementById('message-field')
var form = document.getElementById('form').addEventListener('submit', (event) => { event.preventDefault() })


function sendForm() {

    messageField.classList.remove('message-field-none');
    setTimeout(() => {
        messageField.classList.add('message-field-none');
        location.reload();
    }, 3000)




}

//-----------------------------------------------
