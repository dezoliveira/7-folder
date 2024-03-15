# 7 Folder
#### Sobre o Projeto
7 Folder é um aplicativo de manipulação de diretórios feito em React utlizando o Next Js como framework. </br> 
O aplicativo possui um sistema de Login com autenticação via token e uma página principal onde é possível visualizar, criar, editar e excluir diretíorios em tempo real via requisição de API.

------------
#### Dependências:
bootstrap: ^5.3.3 </br> 
next: ^14.1.1 </br> 
react: ^18.2.0 </br> 
react-bootstrap: ^2.10.1 </br> 
react-dom": ^18.2.0 </br> 
react-fontawesome": ^1.7.1

------------
#### Como rodar o projeto:
1 - git clone https://www.github.com/dezoliveira/7folder </br> 
2 - npm install </br> 
3 - npm run dev

------------
#### CORS
Caso tenha problemas de CORS con o Next, a solução que encontrei foi utilizar a extensão CORS Unblock no Chrome </br> 
Link de para Download: https://chromewebstore.google.com/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino

------------
#### Rotas
O Aplicativo possui as seguintes rotas: </br>

1 - '/' : Rota Raiz da Aplicação que será acessada após efetuação de login e recebimento de Token </br> 
2 - '/login': Rota que redireciona para página de Login para primeiro acesso ou caso o Token tenha expirado.

------------
#### Páginas
O Aplicativo possui as seguintes páginas: </br> 

1 - index.js: Página principal onde é possível fazer todas as ações referentes ao aplicativo. </br>
2 - login:js: Página onde é exibido o formulário de acesso ao aplicativo.

------------
#### Uso
1 - Logando: </br>

- Para realizar o Login, use as credenciais do usuário (caso não tenha as credenciais favor entrar em contato). </br>
- Caso for inválida o app sinalizará o usuário quanto a isso. </br>
- Após logar, ao entrar na página do aplicativo, o aplicativo exibirá todos os diretórios criados na API.

------------
2 - Criando um diretório (Sem parente): </br>

- Para Criar um novo diretório, selecione o botão (Pasta (+)). </br>
- Selecione o nome do diretório no Modal e Crie o diretório.

------------
3 - Criando um diretório (Com parente): </br>

- Para Criar um novo diretório com parente, selecione o botão (Pasta (+)). </br>
- Selecione o nome do diretório no Modal. </br>
- Selecione o diretório raiz no qual o diretório a ser criado pertencerá e Crie o diretório.

------------
4 - Editando um diretório (Sem parente): </br>

- Para Editar um usuário, clique no ícone laranja com uma caneta </br>
- Selecione um novo nome caso deseja e clique em editar.

------------
5 - Editando um diretório (Com parente): </br>

- Para Editar um usuário, clique no ícone laranja com uma caneta </br>
- Selecione um novo nome, um novo parente e caso deseja e clique em editar.

------------
6 - Excluindo um diretório: </br>

- Para Excluir um usuário, clique no ícone vermelho com uma lixeira </br>
- O diretório será excluído.

------------
7 - Para encerrar o aplicativo clique no botão Logout. 