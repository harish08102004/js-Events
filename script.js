var button = document.getElementById('btn-click');
button.onclick = () => {
  button.style.backgroundColor = 'red';
};

var user = document.getElementById('user');
document.querySelector('body').onload = () => {
  user.innerText = 'Harish';
};

document.getElementById('child').addEventListener('click', function () {
  console.log('Child clicked');
});
document.getElementById('parent').addEventListener('click', function () {
  console.log('Parent clicked');
});
document.getElementById('grandparent').addEventListener('click', function () {
  console.log('Grandparent clicked');
});

const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

grandparent.addEventListener(
  'click',
  (event) => {
    console.log('Grandparent clicked');
  },
  true
);
parent.addEventListener(
  'click',
  (event) => {
    console.log('Parent clicked');
  },
  true
);
child.addEventListener(
  'click',
  (event) => {
    console.log('Child clicked');
  },
  true
);

const categoryList = document.getElementById('category');

categoryList.addEventListener('click', (event) => {
  console.log('Blazers');
});

var buildit = document.getElementById('build-button');
var noun = document.getElementById('noun');
var adverb = document.getElementById('adverb');
var verb = document.getElementById('verb');
buildit.addEventListener('click', makeSentence);

function makeSentence() {
  document.getElementById('statement').innerText =
    noun.value + ' ' + verb.value + ' ' + adverb.value;
}
