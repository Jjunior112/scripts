const text = document.getElementById('floatingTextarea2');

const result = document.getElementById('result');

const up = document.getElementById('upper');


const upper = () => {
    const upperText = text.value.toUpperCase();
    result.value = upperText
}

const lower = () => {
    const lowerText = text.value.toLowerCase();
    result.value = upperText= lowerText;
}
const reverse = () => {
    const reverseText = text.value.split('').reverse().join('');
    result.value = reverseText;
}
