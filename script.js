// DOM Manipulation
// buat elemen
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('paragraf baru');

//simpan tulisan ke tag paragraf
pBaru.appendChild(teksPBaru);

//simpan ke section a
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

//buat elemen
const liBaru = document.createElement('li');
const textLiBaru = document.createTextNode('li baru')
liBaru.appendChild(textLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

//menghapus child
// section a sudah diambil di atas
const a = sectionA.querySelector('a');
sectionA.removeChild(a);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const textH2Baru = document.createTextNode('h2 Baru');
h2Baru.appendChild(textH2Baru);

sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';