# Star Wars - The Game
![alt text](https://image.winudf.com/v2/image/Y29tLmNvbGluZWFycHJvZHVjdGlvbnMueW9kYXRoaXNfaWNvbl8wX2VkYWJhYzNk/icon.png?w=170&fakeurl=1&type=.png "Yoda")

## Sumário
---
+ Sobre o Projeto
    + Descrição do Game
    + Como Instalar
    + Como Jogar
    + Tecnologias utilizadas
        + Vue.js
        + SCSS
        + Testes Unitários
        + Teste e2e
+ Sobre o Desenvolvedor
+ Outras Informações

### Sobre o Projeto
---
##### Descrição do Game
Este game tem como objetivo servir de cola para a prática de um jogo bem divertido para os fans de **Star Wars**.

##### Como instalar
Antes de muita diversão, é preciso instalar o game. Para isso, pequeno padawan, é necessário que você tenha instalado na sua máquina o node.js. Caso nao tenha, você pode efetuar o download [clicando aqui](https://nodejs.org/en/download/).
Feito isso, é necessário que você clone o projeto para a sua máquina. Rodando o seguinte codigo no seu terminal:
```shell
$ git clone <url-do-projeto-git>
```
Feito isso, é hora de instalar os pacotes que são necessários para que nosso game possa rodar:
```shell
$ cd <pasta-que-instalou-o-projeto>
$ npm install
```
Após este passo, finalmente podemos começar a diversão rondando o seguinte código:
```shell
$ npm run dev
```
##### Como Jogar
Este mesmo, mostra algumas informações de um planeta aleatório contido na série. O jogador responsável por perguntar, irá iniciar o game e, receberá informações sobre um planeta. Se, por acaso, a pessoa que está sendo desafiada acertar, o jogador deverá clicar no botao para que seja sorteado outro planeta.

##### Tecnologias Utilizadas
###### Vuejs
Vuejs é uma biblioteca de componentes web criada em javascript. Foi utilizada para a criação dos componentes, criação das rotas e requisições http (utililizando o pacote vue-router).

###### SCSS
Neste projeto, foi utilizado o SASS como pré-processador. O que me forneceu mais poder sobre a linguágem (CSS) e mais reutilização de codigo

###### Testes Unitários
Foram feitos alguns testes unitários dos componentes criados. Para visualizar estes testes, basta rodar o comando abaixo no bash:
```shell
$ npm run unit
```

###### Teste e2e
Foi feito um teste end-to-end (e2e) para verificar o fluxo do app. Neste teste, o Selenium utiliza o driver do google chrome para simular interações do usuário.
Para visualizar estes testes, basta rodar o comando abaixo no bash:
```shell
$ npm run e2e
```

###### OBS
Para rodar os dois testes em sequência, basta utilizar o comando abaixo:
```shell
$ npm run test
```

### Sobre o Desenvolvedor
---
Para saber mais sobre a minha carreira, acesse o meu [linkedin](https://www.linkedin.com/in/igorfelipee1/)

### Outras Informações
---
Este projeto é resultado de um teste para a empresa b2w.