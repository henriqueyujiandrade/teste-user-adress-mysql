# Teste Técnico Úsuario e Endereço

- [Teste Técnico cadastro](#teste-técnico-cadastro)
  - [1. Sobre](#1-sobre)
  - [2. Tecnologias](#2-tecnologias)
  - [3. Instalação](#3-instalação)
    - [3.1 Requisitos](#31-requisitos)
    - [3.2 Instalação](#32-instalação)
  - [4. Nota](#4-nota)
  - [5. Desenvolvedor](#5-desenvolvedor)

<a name="sobre"></a>

## 1. Sobre

Esse Teste consiste em um projeto Back End, onde é possível cadastrar um usuário e adicionar diversos endereços para o mesmo.

<a name="links"></a>


<a name="techs"></a>

## 2. Tecnologias

- _TypeScript_
- _NodeJS_
- _Express_
- _TypeORM_
- _MySQL_

<a name="instalacao"></a>

## 3. Instalação

### 3.1 Requisitos

- Gerenciador de pacotes Yarn
- Banco de dados MySQL

### 3.2 Instalação

3.2.1 - Crie um novo banco com nome de sua preferência no MySQL

3.2.2 - Clone esse repositório, entre na pasta raiz do projeto e instale as dependências requisitadas utilizando o comando Yarn

`yarn`

3.2.3 Crie um arquivo na raiz do projeto chamado .env e altere as variáveis de ambiente conforme o .env.example do projeto

exemplo:
```
DB_HOST='localhost'
DB_PASSWORD='1234'
DB='meubanco'
DB_USER='meuuser'
```

3.2.4 Para rodar o servidor utilize o comando `yarn dev` no terminal, se tudo der certo receberá uma mensagem como essa:

      Servidor executando
      query: SELECT VERSION() AS `version`
      Data Source has been initialized!

## 4. Nota importante

- Sobre a seguinte rota:

```
1.1 Método [GET]
- URL {{url-base}}/enderecos-usuario/:id_usuario
- Função: Listar todos os endereços de acordo com o usuário especificado via
url: id_usuario
```
- Essa rota foi alterada, pois estava gerando conflito com a rota  "URL {{url-base}}/enderecos-usuario/:id_endereco_usuario", ela foi alterada para:

```
- URL {{url-base}}/enderecos-usuario/usuario/:id_usuario
```

## 5. Desenvolvedor

- <a name="henrique" href="https://www.linkedin.com/in/henriqueyujiandrade/" target="_blank">Henrique Andrade</a>

