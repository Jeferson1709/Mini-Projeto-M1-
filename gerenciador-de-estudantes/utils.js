
//Função para válidade as informações.
export function validarDadosDoEstudante(nome, idade, notas) {
  if (notas.some(nota => typeof nota !== "number" || isNaN(nota))) {
    return "Todas as notas devem ser números."
  }
  if (Number(nome) || typeof nome !== "string") {
    return "Nome inválido!"
  }
  if (!Number.isInteger(idade) || idade <= 0) {
    return "Idade inválida!";
  }
  if (notas.length !== 3 ) {
    return "É necessário informar exatamente três notas.";
  }
  if (!Array.isArray(notas) || notas.some(n => n < 0 || n > 10)) {
    return "Notas inválidas! Devem estar entre 0 e 10.";
  }
  
}
