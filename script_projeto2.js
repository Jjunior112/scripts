var form = document.getElementById('form');
var messageSuccess = document.getElementById('messageSuccess');

form.addEventListener('submit',(event)=>{event.preventDefault()})

function sendData(){
    messageSuccess.classList.remove('showMessage')

    setTimeout(()=>{
        messageSuccess.classList.add('showMessage')
        location.reload()
    },3000)
}
