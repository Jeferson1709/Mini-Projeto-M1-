import { estudantes } from "./estudantes.js";
/** Calcular média de notas */
export function calcularMedia(notas) {
  return notas.reduce((acumulador, nota) => acumulador + nota, 0) / notas.length;
}

/** Mostrar médias individuais */
export function mediasIndividuais() {
  if (estudantes.length === 0) {
    console.log("📭 Nenhum estudante cadastrado.");
    return;
  }

  console.log("\n🧮 Médias Individuais:");
  estudantes
    .map(estudante => ({
      nome: estudante.nome,
      media: calcularMedia(estudante.notas)
    }))
    .sort((a, b) => b.media - a.media) 
    .forEach((estudante, indice) => {
      console.log(
        `🏅 ${indice + 1}º ${estudante.nome} → Média = ${estudante.media.toFixed(1)}`
      );
    });
}

/** Média geral da turma */
export function mediaGeral() {
  if (estudantes.length === 0) return 0;
  const somaTotal = estudantes.reduce((acumulador, estudante) => acumulador + calcularMedia(estudante.notas), 0);
  return somaTotal / estudantes.length;
}

/** Estudante com maior média */
export function estudanteMaiorMedia() {
  if (estudantes.length === 0) return null;
  return estudantes.reduce((maior, estudante) => {
    return calcularMedia(estudante.notas) > calcularMedia(maior.notas) ? estudante : maior;
  });
}

/** Relatórios de aprovação */
export function relatorios() {
  if (estudantes.length === 0) {
    console.log("📭 Nenhum estudante cadastrado.");
    return;
  }

  const aprovados = [];
  const recuperacao = [];
  const reprovados = [];

  // Classificação dos estudantes
  estudantes.forEach(estudante => {
    const media = calcularMedia(estudante.notas);

    if (media >= 7) {
      aprovados.push(`${estudante.nome} (Média: ${media.toFixed(1)})`);
    } else if (media >= 5) {
      recuperacao.push(`${estudante.nome} (Média: ${media.toFixed(1)})`);
    } else {
      reprovados.push(`${estudante.nome} (Média: ${media.toFixed(1)})`);
    }
  });

  // Saída formatada
  console.log("\n📊 Relatórios:");
  console.log("✅ Aprovados:", aprovados.join(", ") || "Nenhum");
  console.log("⚠️ Recuperação:", recuperacao.join(", ") || "Nenhum");
  console.log("❌ Reprovados:", reprovados.join(", ") || "Nenhum");
}

