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
