import './style.css';

const dog = document.querySelector('#btn-dog');
const cat = document.querySelector('#btn-cat');
const img = document.querySelector('#cute-image');

dog.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then((data) => {
            img.src = data.message;
        });
});

cat.addEventListener('click', () => {
    fetch('https://aws.random.cat/meow')
        .then((response) => response.json())
        .then((data) => {
            img.src = data.file;
        });
});
