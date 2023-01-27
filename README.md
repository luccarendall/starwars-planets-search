## [Star Wars Planet Search](https://luccarendall.github.io/starwars-planets-search/)

O objetivo do projeto foi desenvolver uma lista com filtros de planetas do universo de Star Wars usando Context API e Hooks para controlar os estados globais. 

O desenvolvimento do projeto se deu a partir de 5 funcionalidades principais:

**#1** - Criar uma requisição para o endpoint /planets da API de Star Wars e preencher uma tabela com os dados retornados, com exceção dos da coluna residents.  

**#2** - Filtrar a tabela através de um texto, inserido num campo de texto, exibindo somente os planetas cujos nomes incluem o texto digitado.

**#3** - Criar um filtro de comparação para valores numéricos (maior que, menor que ou igual a).  

**#4** - Criar um botão X, em cada filtro gerado, que ao ser clicado apaga o filtro de valores numéricos e desfaz as filtragens dos dados da tabela.  

**#5** - Tornar possível a ordenação das colunas de forma ascendente ou descendente.


Acesse a aplicação pelo link:
> https://luccarendall.github.io/starwars-planets-search/

## Bibliotecas / API
* React
	 * React Router
	 * React Hooks
	 * React Context API
* Usei o método `fetch` para chamar a API.
* A API utilizada no projeto foi:    
[Swapi Planets API](https://swapi-trybe.herokuapp.com/api/planets/)

> ## Desmontração de Uso

## Executar localmente
1) Clonar o repositório
2) Instalar dependências com `npm install`
3) Entre na pasta do projeto e execute `npm start`
4) Pronto, projeto rodando em: `http://localhost:3000/`

## Autor
| [<img src="https://avatars.githubusercontent.com/u/92706411?v=4" width=115><br><sub>@luccarendall</sub>](https://github.com/LuccaRendall) |
| :---: |

