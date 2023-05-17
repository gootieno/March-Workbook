// Your code here
window.addEventListener('DOMContentLoaded', () => {


  // alert('DOMContent is loaded')


  const redInput = document.querySelector('#red-input');

  const changeRed = e => {
    const value = e.currentTarget.value.toLowerCase();

    if (value === 'red') {
      redInput.style.backgroundColor = 'red'
    } else {
      redInput.style.backgroundColor = 'transparent'
    }
  }

  redInput.addEventListener('input', changeRed);


  const button = document.querySelector('#add-item');
  const input = document.querySelector('#list-add');
  const ul = document.querySelector('#section-2 ul');

  const addItem = e => {
    const value = input.value;
    console.log(input.value);
    console.log(input);
    const li = document.createElement('li');
    li.innerText = value;
    ul.appendChild(li);
    input.value = '';
  }

  button.addEventListener('click', addItem);


  const color = document.querySelector('#color-select');
  const section = document.querySelector('#section-3');

  const colorChange = e => {
    section.style.backgroundColor = color.value;
  }

  color.addEventListener('input', colorChange);


  const removeButton = document.querySelector('#remove-listeners');

  removeButton.addEventListener('click', e => {
    redInput.removeEventListener('input', changeRed);
    button.removeEventListener('click', addItem);
    color.removeEventListener('input', colorChange);
  })
})
