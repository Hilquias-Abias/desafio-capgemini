function minimumOfCharacters(str) {
  const specialCharacters = ['!','@','#','$','%','^','&','*','(',')','-','+'];
  const chars = str.split('');
  let specialCharFlag = false;
  let upperCaseFlag = false;
  let lowerCaseFlag = false;
  let numberFlag = false;
  let minimum = 0; // 6 e vai diminuido quando algum if for true

  chars.forEach(char => {
    if (specialCharacters.includes(char)) specialCharFlag = true;
    if (/^\d+$/.test(char)) numberFlag = true;
    if (/^[A-Z]*$/.test(char)) upperCaseFlag = true;
    if (/^[a-z]*$/.test(char)) lowerCaseFlag = true;
  });

  if (!specialCharFlag) minimum++;
  if (!numberFlag) minimum++;
  if (!upperCaseFlag) minimum++;
  if (!lowerCaseFlag) minimum++;
  if (str.length + minimum < 6) return 6 - (str.length + minimum) + minimum;

  return minimum;
}

const tests = ['Ya3', 'eP@1fe', 'eRuPtm', '8R-e', 'ui'];
tests.forEach(test => {
  console.log(minimumOfCharacters(test));
})

/*
2 - armazena os caracteres especiais.

3 - gera um array com os caracteres da string passada.

4, 7 - cria as variaveis que servirão para verificar se a senha atende aos critérios.

10, 15 - itera sobre o array e verificar se os caracteres atendem aos critérios de caractere
especial, número, letra maiuscula e minuscula.

17, 20 - verifica se os critérios não foram atendidos e caso não, acrescenta ao número minimo
que será retornado.

21 - confere se o tamanho da string e o número minimo atende ao critério de tamanho da senha,
caso não acrescenta ao número minimo a diferença para enfim atender.

23 - retorna o número minimo.

26, 29 - realiza os testes de código.
*/
