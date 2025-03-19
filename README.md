# Sorteio de Amigo Secreto

## Descrição
Este é um projeto simples em JavaScript que permite adicionar nomes de amigos a uma lista e sortear um nome aleatoriamente. À medida que os amigos são sorteados, eles são removidos da lista original para evitar repetições.

## Funcionalidades
- Adicionar amigos a uma lista
- Atualizar a lista de amigos em tempo real
- Sortear um amigo aleatoriamente
- Remover amigos sorteados da lista principal
- Impedir sorteios quando não houver mais amigos na lista

## Tecnologias Utilizadas
- HTML
- CSS
- JavaScript

## Como Usar
1. Digite o nome de um amigo no campo de entrada.
2. Clique no botão "Adicionar" para inserir o amigo na lista.
3. Repita o processo para adicionar mais amigos.
4. Clique no botão "Sortear" para selecionar aleatoriamente um amigo.
5. O nome do amigo sorteado será exibido na tela e removido da lista de participantes.
6. Continue sorteando até que todos os amigos tenham sido escolhidos.

## Estrutura do Código
O código é composto pelas seguintes funções principais:
- `adicionarAmigo()`: Adiciona um amigo à lista e atualiza a interface.
- `atualizarListaAmigos()`: Atualiza dinamicamente a lista exibida na tela.
- `sortearAmigo()`: Seleciona um amigo aleatoriamente, remove da lista e exibe o resultado.
- `atualizarBotaoAdicionar()`: Habilita ou desabilita o botão de adição conforme o input do usuário.

## Exemplo de Uso
Ao adicionar os seguintes nomes:
```
Maria
João
Carlos
Ana
```
E executar o sorteio, a saída pode ser algo como:
```
O amigo sorteado é: Ana
```
E a lista será atualizada removendo Ana dos participantes.

## Melhorias Futuras
- Implementar um sistema de reset para reiniciar o sorteio sem recarregar a página.
- Adicionar animação ao sorteio para maior interatividade.
- Criar uma opção para exibir a lista de amigos já sorteados.

## Contribuição
Sinta-se à vontade para contribuir com melhorias e novas funcionalidades!

## Licença
Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.