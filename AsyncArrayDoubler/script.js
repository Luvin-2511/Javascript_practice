function asyncDoubleArray(numbers) {
  return numbers.map(num => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(num * 2);
      }, 500);
    });
  });
}
const numbers = [1, 2, 3, 4];
const promises = asyncDoubleArray(numbers);
Promise.all(promises).then(results => console.log(results));
