function howManyAnagrams(str) {
  let anagramsCount = 0;

  const isAnagram = (a, b) => {
    if (a.length === 1) {
      if (a === b) return 1;
    };
    if (a.split('').sort().join('') === b.split('').sort().join('')) return 1;
    return 0;
  };

  const arrayWithOneElement = str.split('');
  const arrayWithTwoElement = [];

  for (let i = 0; i < arrayWithOneElement.length; i++) {
    console.log(arrayWithOneElement[i]);
    for (let j = i+1; j < arrayWithOneElement.length; j++) {
      anagramsCount += isAnagram(arrayWithOneElement[i], arrayWithOneElement[j]);
      console.log(isAnagram(arrayWithOneElement[i], arrayWithOneElement[j]));
      arrayWithTwoElement.push(arrayWithOneElement[i] + arrayWithOneElement[j]);
      console.log(arrayWithTwoElement[i]);
    }
  }

  for (let i = 0; i < arrayWithTwoElement.length; i++) {
    for (let j = i+1; j < arrayWithTwoElement.length; j++) {
      anagramsCount += isAnagram(arrayWithTwoElement[i], arrayWithTwoElement[j]);
      console.log(anagramsCount);
    };
  }

  return anagramsCount;
}

const test = howManyAnagrams('ovo');
console.log(test);

// const isAnagram = (a, b) => {
//   if (a.length !== b.length) return 0;
//   if (a.split('').sort().join('') === b.split('').sort().join('')) return 1;
// };

// console.log(isAnagram('ov', 'vo'));
