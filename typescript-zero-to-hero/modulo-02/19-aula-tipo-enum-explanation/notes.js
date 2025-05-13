/*
Enum é uma forma de enumerar valores possíveis para um tipo.
Eles são uma espécie de estrutura de dados não ordenada que vão mapear chaves para valores.
O typescriptes suporta enums com valores numéricos e baseados em strings

Sintaxe:

enum TypeName {
  [Chave] = Valor,
  [Chave] = Valor,
  [Chave] = Valor,
  [Chave] = Valor,
  [Chave] = Valor,
}

console.log(TypeName);

Por que devemos usar enums?

- Para melhorar a legibilidade do código
- Para melhorar a manutenção do código
- Facilita a mudança de valores sem ter que mudar o código
- Reduz erros causados pela digitação errada de valores
- Funciona somente em tempo de compilação, não aloca memória
- O tempo de execução (compile-time) será mais preciso e rápido.
- Permite criar constantes que podem ser usadas em outros arquivos
- Permite criar constantes personalizadas.

Enums TypeScript: Numeric Enums e String Enums

Exemplo: Numeric Enum(Enum Numérico)

enum Idioma {
  Portugues,
  Espanhol,
  Ingles,
  Frances,
}

console.log(Idioma);

Resultado:
{
  '0': 'Portugues',
  '1': 'Espanhol',
  '2': 'Ingles',
  '3': 'Frances',
  Portugues: 0,
  Espanhol: 1,
  Ingles: 2,
  Frances: 3,
}

Exemplo: String Enum

enum Dia {
  Segunda = 'SEG',
  Terca = 'TER',
  Quarta = 'QUA',
  Quinta = 'QUI',
  Sexta = 'SEX',
  Sabado = 'SAB',
  Domingo = 'DOM',
}

console.log(Dia.Quarta);

Resultado:
QUA
*/
