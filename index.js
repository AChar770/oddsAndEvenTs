//state in object to hold the data
const state ={
  bank: [],
  odds: [],
  evens: []
};

function addNumber(num) {
    state.bank.push(num);
    render();
}
function sortOne() {
  if (state.bank.length === 0) return;
  const number = state.bank.shift();
  if (number % 2 === 0) {
    state.evens.push(number);
  } else {
    state.odds.push(number);
  }
  
  render();
}

function sortAll() {
  while (state.bank.length > 0) {
    const number = state.bank.shift();
    if (number % 2 === 0) {
      state.evens.push(number);
    } else {
      state.odds.push(number);
    }
  }
  
  render();
}

function FormComponent() {
    const form = document.createElement('form');

  const label = document.createElement('label');
  label.textContent = 'Add a number to the bank ';
  
  const input = document.createElement('input');
  input.type = 'number';
  input.id = 'number-input';
  
  const addButton = document.createElement('button');
  addButton.type = 'submit';
  addButton.textContent = 'Add number';
  
  const sortOneButton = document.createElement('button');
  sortOneButton.type = 'button';
  sortOneButton.textContent = 'Sort 1';
  
  const sortAllButton = document.createElement('button');
  sortAllButton.type = 'button';
  sortAllButton.textContent = 'Sort All';
}