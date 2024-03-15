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

1 - '/' : Rota Raiz da Aplicação que será acessada após efetuação de login e recebimento de Token
2 - '/login': Rota que redireciona para página de Login para primeiro acesso ou caso o Token tenha expirado.

------------
#### Páginas
O Aplicativo possui as seguintes páginas:

1 - index.js: Página principal onde é possível fazer todas as ações referentes ao aplicativo. 
2 - login:js: Página onde é exibido o formulário de acesso ao aplicativo.

------------
#### Uso
1 - Logando: 
    - Para realizar o Login, use as credenciais do usuário (caso não tenha as credenciais favor entrar em contato). 
    - Caso for inválida o app sinalizará o usuário quanto a isso.
    - Após logar, ao entrar na página do aplicativo, o aplicativo exibirá todos os diretórios criados na API.

2 - Criando um diretório (Sem parente):
    - Para Criar um novo diretório, selecione o botão (Pasta (+)). 
    - Selecione o nome do diretório no Modal e Crie o diretório.

3 - Criando um diretório (Com parente):
    - Para Criar um novo diretório com parente, selecione o botão (Pasta (+)). 
    - Selecione o nome do diretório no Modal.
    - Selecione o diretório raiz no qual o diretório a ser criado pertencerá e Crie o diretório.

4 - Editando um diretório (Sem parente):
    - Para Editar um usuário, clique no ícone laranja com uma caneta
    - Selecione um novo nome caso deseja e clique em editar.

5 - Editando um diretório (Com parente):
    - Para Editar um usuário, clique no ícone laranja com uma caneta
    - Selecione um novo nome, um novo parente e caso deseja e clique em editar.

6 - Excluindo um diretório:
    - Para Excluir um usuário, clique no ícone vermelho com uma lixeira
    - O diretório será excluído.

7 - Para encerrar o aplicativo clique no botão Logout. 