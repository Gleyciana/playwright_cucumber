Feature: Login

  Scenario: Login Sucesso
    Given que estou na página de login
    When insiro um "standard_user" e "secret_sauce" 
    Then devo ser redirecionado para a página inicial do sistema

  Scenario: Login com user inválido
    Given que estou na página de login
    When insiro um "teste" e "secret_sauce"
    Then será apresentada mensagem de erro
  
  Scenario: Login com senha inválida
    Given que estou na página de login
    When insiro um "standard_user" e "senhainvalida" 
    Then será apresentada mensagem de erro

  Scenario: Login com campos vazios
    Given que estou na página de login
    When insiro um " " e " " 
    Then será apresentada mensagem de erro