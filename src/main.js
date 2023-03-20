import './style.css';

const dog = document.querySelector('#btn-dog');
const cat = document.querySelector('#btn-cat');
const img = document.querySelector('#cute-image');
const random = document.querySelector('#random');

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

random.addEventListener('click', () => {
    Promise.any([
        fetch('https://aws.random.cat/meow'),
        fetch('https://dog.ceo/api/breeds/image/random'),
    ])
        .then((res) => res.json())
        .then((data) => {
            const petURL = data.file || data.message;
            img.src = petURL;
        });
});
