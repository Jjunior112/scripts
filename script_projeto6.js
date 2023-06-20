window.addEventListener('scroll', () => {
    var navBar = document.getElementById('nav');
    var section = document.getElementById('empresa');

    if (window.scrollY >= section.offsetTop) {
        navBar.classList.add('fixed')
    }
    else {
        navBar.classList.remove('fixed')
    }
})

//-----------------------------------------------

let count = 1;
document.getElementById('radio1').checked = true

setInterval(() => {
    nextImage()
}, 5000)

function nextImage() {
    count++
    if (count > 4) {
        count = 1
    }
    document.getElementById('radio' + count).checked = true
}

//-----------------------------------------------

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