function makeStairs(n) {
  let str = '';
  let lastLine = '*';
  let aux = n;

  for (let i = 1; i !== n; i++) {
    while (--aux !== 0) {
      str += ' ';
    }

    while (str.length !== n) {
      str += '*';
    }

    console.log(str);

    str = '';
    aux = n - i;
    lastLine += '*';
  }

  console.log(lastLine);
}

const tests = [6, 10, 17, 31, 40];
tests.forEach(test => makeStairs(test));

/*
2 - cria a variavel que irá armazenar a string que será mostrada na tela.

3 - cria com valor inicial "*" a variavel que será a última string impressa.

4- cria uma variavel auxiliar para fazer parte da estrutura do código.

6, 20 - inicia um loop onde dentro ocorrerá todo o processo de construção das
strings que serão mostradas na tela.

7, 9 - tem a ocorrencia de um laço while onde fazendo uso da variavel auxiliar
cria a primeira parte construção da string atual.

11, 13 - executa um laço while para a construção da segunda parte da string 
atual, que consiste na adção dos "*".

15 - mostra na tela a string atual.

17 - inicia a string seguinte.

18 - atribui á variavel auxiliar um novo valor, fundamental para o funcionamento
da construção das proximas strings.

19 - acrescenta "*" a variavel que será a última string impressa.

22 - após todo o processo de impressões das strings dentro do loop for, 
mostra na tela a variavel com a última linha a ser impressa.

25, 26 - realiza os testes de código.
*/
