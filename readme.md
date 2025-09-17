# Gerenciador de Estudantes 📚

Sistema simples em Node.js para gerenciar estudantes via terminal: cadastrar, listar, editar, remover e calcular notas/médias de forma interativa.

⚠️ Observação: os dados são armazenados apenas em memória; ao fechar o terminal, todas as informações são perdidas.

## Funcionalidades
- ➕ Cadastrar estudante (nome, idade e 3 notas)
- 🔍 Buscar estudante por nome (parcial e sem diferenciar maiúsculas/minúsculas)
- ✏️ Editar e 🗑️ remover estudantes
- 🧮 Exibir médias individuais
- 📊 Calcular média geral da turma
- 🏆 Mostrar estudante com maior média
- ✅ Relatórios (aprovados, recuperação e reprovados)
    - Aprovados: média ≥ 7
    - Recuperação: 5 ≤ média < 7
    - Reprovados: média < 5

## Tecnologias
- [Node.js](https://nodejs.org/en/docs/) (versão recomendada: 12+)
- [readline (CLI)](https://nodejs.org/api/readline.html)

## Como executar
1) Certifique-se de ter o Node.js 12+ instalado.
2) No terminal, navegue até a pasta do projeto.
3) Execute: `node index.js` (ajuste o nome do arquivo principal se necessário).

Não há dependências externas além do Node.js (usa apenas o módulo nativo readline).
