const p1 = document.querySelector('.p1');

function ubahWarnaP1(){
    p1.style.backgroundColor = 'lightblue';
}

const p3 = document.querySelector('.p3');
function ubahWarnaP2() {
    p3.style.backgroundColor = 'lightgreen';
}
p3.onclick = ubahWarnaP2;

const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function () {
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('li baru');

    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru);
})

const p2 = document.querySelector('.p2');
p2.addEventListener('mouseenter', function () {
    p2.style.backgroundColor = 'pink';
})
p2.addEventListener('mouseleave', function (){
    p2.style.backgroundColor = 'white';
})