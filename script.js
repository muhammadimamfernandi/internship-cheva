// const card = document.querySelector('.card');
// const close = document.querySelector('.close');

// close.addEventListener('click', function (){
//     card.style.display = 'none';
// })

const close = document.querySelectorAll('.close');

for (let index = 0; index < close.length; index++) {
    close[index].addEventListener('click', function (event) {
        // close[index].parentElement.style.display = 'none';
        event.target.parentElement.style.display = 'none';
        event.preventDefault();
    })
}

// const nama = document.querySelector('.nama');

// console.log(nama.parentElement);
// console.log(nama.nextElementSibling);
// console.log(nama.previousElementSibling);