# debtManage


## Front-end

Stack

Linguagens e serviços utilizadas


ReactJs, javascript, Material-ui, HTML, CSS, Aws s3 para o hosting do site e gerenciadores de pacotes do Nodejs: npm.

Sobre:


Para acessar todas as funcionalidades, o usuário precisar efetuar o login.( Autenticação simples de token, armazenado no localStorage)
Após ter feito o login, o usuário tem acesso a /home, onde se encontra todas as funcionalidades.


1. Listar valor total de dividas por Cliente.
2. Detalhes das dividas de um Cliente.
3. Cadastrar uma divida.
4. Apagar uma divida.

OBS:
Não consegui implementar atualizar divida no front.


Instruções para rodar:


Por ser um projeto com ReactJS, há a necessidade do NodeJS. Com ele em sua máquina, basta abrir o terminal e navegar até o repositório clonado e rodar:

npm install para instalar todas as dependências;

npm run start para rodar localmente o projeto

npm run build para gerar uma versão estática do projeto (que ficará na pasta build)



## Back-end

Stack

Projeto Backend utilizando NodeJS, Express, Typescript e MySQL. Segue uma arquitetura em camadas:

- Presentation: responsável pela comunicação com agentes externos.
- Data: responsável pela comunicação direta com o banco de dados.
- Business: responsável pela lógica.


Sobre

1. Cadastrar divida de um cliente.
2. Atualizar divida.
3. Deletar divida.
4. Listar dividas de todos clientes.
5. Detalhes de dividas.

Parte dos usuário.
1. Logar
2. Registrar usuário


Instruções para rodar

As instruções são:

npm install para instalar todas as dependências;

npm run start para rodar localmente o projeto

npm run build para gerar uma versão possível de ser deployada com os arquivos transpilados para Javascript

Utilizar o env com os dados:

HOST=
USER=
PASSWORD=
DATABASE=
CLIENT=
SECRET=


Para acessar o projeto implementado/online:

Usuário para teste:

teste@teste.com
12345

API Postman Documentação : https://documenter.getpostman.com/view/9731865/T1LVA4SN?version=latest

API: https://code7case.herokuapp.com/

Site: http://show-me-the-case.s3-website-us-east-1.amazonaws.com/

