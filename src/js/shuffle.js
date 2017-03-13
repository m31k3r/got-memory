export default arr => {
  let currentIndex = arr.length;
  let temporaryValue, randomIndex;

  arr.map((currentValue, index, array) => {
    randomIndex = Math.floor(Math.random() * index);

    temporaryValue = currentValue;
    arr[index] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  });

  return arr;
}
