# SONS OF EMER

Maratona de programação UNASP HT 2023


Solução vencedora 🏆🏆🏆
---

Apresentação: Quinta-feira, 13 de Abril de 2023

Data de criação: Terça-feira, 11 de Abril de 2023

Data de finalização: Quinta-feira, 13 de Abril de 2023

# PROPOSTA

Realizar a implementação de três algoritmos de criptografia

- Cifra de Cesar
- Cifra de Venegere
- Cerca da Trilha

# TECNOLOGIAS UTILIZADAS
- back-end: python com biblioteca do fastapi para criação da minimal api
- front-end: nextjs para as telas e interação com usuários
-- Devido a falta de conhecimento que o grupo tinha com o nextjs, acabamos utilizando a biblioteca a `axios` para a integração com a api
- infra: 
  - docker
    - criação de containers para rodar a aplicação
  - docker-compose
    - para orquestração dos containers
- versionamento: git, mas sem controle de versão, apenas repositório que pode acompanhar a criação através do histórico de commits.

# EQUIPE 03

9º SEMESTRE ENGENHARIA DA COMPUTAÇÃO

- Daniel da Silva Soares
- Daniel Feitosa
- Emerson Monteiro
- Richard A. R. Baldin

7º SEMESTRE SISTEMAS INFORMAÇÃO

- Erick Furtado

5º SEMESTRE SISTEMAS INFORMAÇÃO

- Eric Azevedo de Oliveira

3º SEMESTRE ENGENHARIA DA COMPUTAÇÃO

- Breno Roela
- Nickolas Sponton

1º SEMESTRE ENGENHARIA DA COMPUTAÇÃO

- Rafael Roela
- Lais Gonçalves de Melo

# PARA EXECUTAR COM DOCKER

- Necessário ter o docker instalado em sua máquina c/ WSL habilitado

- Na parta raiz do projeto executar o código:

```
docker-compose up --build
```

# PARA EXECUTAR SEM DOCKER

- Necessário ter node instalado na máquina (recomendado v. 16+)
- Necessário ter python 3.x instalado na máquina.

## Preparar ambientes

Executar no terminal 

```
pip install fastapi
```
```
pip install uvicorn
```

## Executar API

Ir a pasta do projeto API e rodar

```
uvicorn api.main:app  --port 8000
```

## Executar WEB APP

Ir a pasta do projeto criptografia e rodar
```
npm install
```
```
npm run dev
```


# DETALHES
Após inicializado c/ qualquer dos métodos acima, acessar a url `http://localhost:3000/`


http://localhost:3000 -> rota da aplicação WEB

http://localhost:8000 -> rota da API
