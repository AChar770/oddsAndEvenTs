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

