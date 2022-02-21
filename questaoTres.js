function howManyAnagrams(str) {
  let anagramsCount = 0;

  const isAnagram = (a, b) => {
    if (a.length === 1) { console.log(a, b); return a === b ? 1 : 0; };
    const val = a.split('').reduce((acc, val) => {
      acc += b.includes(val) ? 1 : 0;
      return acc;
    }, 0);

    return val === a.length ? 1 : 0;
  };

  const arrayWithOneElement = str.split('');
  const arrayWithTwoElement = [];
  const arrayWithThreeElement = [];

  for (let i = 0; i < arrayWithOneElement.length; i++) {
    console.log(i, ' (i) ', arrayWithOneElement[i]);
    for (let j = i+1; j < arrayWithOneElement.length; j++) {
      console.log(j, ' (j) ', arrayWithOneElement[j]);
      anagramsCount += isAnagram(arrayWithOneElement[i], arrayWithOneElement[j]);
      if (j + 2 !== arrayWithOneElement.length) {
        arrayWithTwoElement.push(arrayWithOneElement[j-1] + arrayWithOneElement[j]);
      }
    }
  }

  for (let i = 0; i < arrayWithTwoElement.length; i++) {
    for (let j = i+1; j < arrayWithTwoElement.length; j++) {
      anagramsCount += isAnagram(arrayWithTwoElement[i], arrayWithTwoElement[j]);
    };
  }

  return anagramsCount;
}

const tests = ['ifailuhkqq']; // 'ovo', 
tests.forEach(test => console.log(howManyAnagrams(test)));
