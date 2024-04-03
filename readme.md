# Feature: Login

Este repositório contém testes automatizados para o recurso de login do sistema [Sauce Demo](https://www.saucedemo.com/).

## Site Utilizado

O teste foi realizado no site [Sauce Demo](https://www.saucedemo.com/).

## Recursos Utilizados

- As aulas do canal [Many | Testes e Qualidade de Software](https://www.youtube.com/watch?v=5bWhwTPqZQ4&t=2053s) foram utilizadas como referência para a criação deste teste.

## Cenários de Teste

### Scenario: Login Sucesso ✅
- **Given** que estou na página de login
- **When** insiro um "standard_user" e "secret_sauce"
- **Then** devo ser redirecionado para a página inicial do sistema

### Scenario: Login com user inválido ❌
- **Given** que estou na página de login
- **When** insiro um "teste" e "secret_sauce"
- **Then** será apresentada mensagem de erro indicando usuário inválido

### Scenario: Login com senha inválida ❌
- **Given** que estou na página de login
- **When** insiro um "standard_user" e "senhainvalida"
- **Then** será apresentada mensagem de erro indicando senha inválida

### Scenario: Login com campos vazios ❌
- **Given** que estou na página de login
- **When** insiro um " " e " "
- **Then** será apresentada mensagem de erro indicando campos vazios

## Pré-requisitos

Antes de executar o teste, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/): Ambiente de execução JavaScript.
- [Visual Studio Code](https://code.visualstudio.com/): Editor de código-fonte.
- [Playwright](https://playwright.dev/): Biblioteca para automação de testes.
- [Cucumber](https://cucumber.io/): Framework para escrita de testes BDD.

## Elaborado por

Este projeto foi desenvolvido 💜 por Gleyciana Campelo 👋 &nbsp;[Meu LinkedIn](https://www.linkedin.com/in/gleyciana-campelo/)


