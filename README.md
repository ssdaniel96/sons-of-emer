# sons-of-emer
Maratona de programação UNASP HT 2023

# EQUIPE
9º SEMESTRE ENGENHARIA
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
- Nikolas Sponton

1º SEMESTRE ENGENHARIA DA COMPUTAÇÃO
- Rafael Roela
- Lais Gonçalves de Melo


# COMO EXECUTAR COM DOCKER
- Na parta raiz do projeto executar o código:
``` 
docker-compose up --build
```

# PARA RODAR SEM DOCKER 

## Preparar ambientes

```
pip install fastapi
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
npm run dev
```

# DETALHES

http://localhost:3000 -> rota da aplicação WEB
http://localhost:8000 -> rota da API
