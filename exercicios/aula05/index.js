// ========================================
// Aula 05 — Fundamentos de JavaScript
// ========================================
// Implemente cada função abaixo.
// Rode os testes com: npx vitest run exercicios/aula05
// Não mexa no arquivo index.test.js.

// Exercício 1 — classificarIdade
export function classificarIdade(idade) {
  // escreva seu código aqui
  if (idade < 12) {
    return "criança";
  } else if (idade >= 12 && idade <= 17) {
    return "adolescente";
  } else {
    return "adulto";
  }
}

// Exercício 2 — calcularDesconto
export function calcularDesconto(preco, percentual) {
  // escreva seu código aqui
  const desconto = preco * (percentual / 100);
  return preco - desconto;
}

// Exercício 3 — verificarAprovacao
export function verificarAprovacao(nota) {
  // escreva seu código aqui
  if (nota >= 60) {
    return "aprovado";
  } else if (nota >= 40 && nota < 60) {
    return "recuperação";
  } else {
    return "reprovado";
  }
}

// Exercício 4 — somarPares
export function somarPares(numeros) {
  // escreva seu código aqui
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      soma += numeros[i];
    }
  }
  return soma;
}

// Exercício 5 — contarLetra
export function contarLetra(texto, letra) {
  // escreva seu código aqui
  if (typeof texto !== "string" || typeof letra !== "string" || letra.length !== 1) {
    return 0;
  }

  let contador = 0;

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === letra) {
      contador++;
    }
  }

  return contador;
}
