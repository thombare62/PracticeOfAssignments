const response = {
  maran: {
    count: 1,
  },
  gas: {
    count: 2,
  },
  prelude: {
    count: 5,
  },
  keys: ['maran', 'gas', 'prelude'],
};
sum= response.maran.count + response.gas.count + response.prelude.count
console.log(sum);