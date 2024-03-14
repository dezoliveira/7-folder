# 7 Folder
#### Sobre o Projeto
7 Folder é um aplicativo de manipulação de diretórios feito em React utlizando o Next Js como framework. O aplicativo possui um sistema de Login com autenticação via token e uma página principal onde é possível visualizar, criar, editar e excluir diretíorios em tempo real via requisição de API.

------------
#### Dependências:
bootstrap: ^5.3.3
next: ^14.1.1
react: ^18.2.0
react-bootstrap: ^2.10.1
react-dom": ^18.2.0
react-fontawesome": ^1.7.1

------------
#### Como rodar o projeto:
1 - git clone https://www.github.com/dezoliveira/7folder
2 - npm install
3 - npm run dev

------------
#### CORS
Caso tenha problemas de CORS con o Next, a solução que encontrei foi utilizar a extensão CORS Unblock no Chrome
Link de para Download: https://chromewebstore.google.com/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino

------------
#### Rotas
O Aplicativo possui as seguintes rotas:

'/' : Rota Raiz da Aplicação que será acessada após efetuação de login e recebimento de Token
'/login': Rota que redireciona para página de Login para primeiro acesso ou caso o Token tenha expirado.