const array = [2, 4, 5, 6, 10];
const sum = array.reduce((acc, current) => acc + current, 0);
console.log(sum);

const array1 = [3, 4, 4, 10, 12];
const average = array1.reduce(
  (acc, currentValue) => acc + currentValue / array1.length,
  0
);
console.log(average);

const array2 = [2, 4, 6, 3, 10, 15];
const maximumValue = array2.reduce((acc, current) => {
  if (current > acc) {
    return current;
  } else {
    return acc;
  }
}, array2[0]);

console.log(maximumValue);

const ageJonas = 2037 - 1991;
console.log(ageJonas);
const ageSarah = 2037 - ageJonas;
console.log(ageSarah);
