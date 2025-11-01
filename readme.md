# Gerenciador de Estudantes 📚

Sistema simples em Node.js para gerenciar estudantes via terminal: cadastrar, listar, editar, remover e calcular notas/médias de forma interativa.

Observação: os dados são armazenados apenas em memória; ao fechar o terminal, todas as informações são perdidas.


## Squad / Autores

| Foto | Nome | Função | Git Hub |
|------|------|---------|-----------|
| <img width="80" height="80" alt="image" src="https://github.com/user-attachments/assets/8a0980b6-e489-4560-b160-725ae2472d2a" />| **Jeferson Alves** | Desenvolvedor | [🔗 Github](https://github.com/Jeferson1709) |
| <img width="80" height="80" alt="image" src="https://github.com/user-attachments/assets/f18fff55-8de4-4531-9fe8-73756659eed9" /> | **André Luiz** | Desenvolvedor | [🔗 Github](https://github.com/MyNamesLuiz) |


## Funcionalidades
- Cadastrar estudante (nome, idade e 3 notas)
- Buscar estudante por nome (parcial e sem diferenciar maiúsculas/minúsculas)
- Editar e remover estudantes
- Exibir médias individuais
- Calcular média geral da turma
- Mostrar estudante com maior média
- Relatórios (aprovados, recuperação e reprovados)
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
