# sons-of-emer
Maratona de programação UNASP HT 2023

# HOW TO INSTALL
```
pip install fastapi
pip install uvicorn
```

# RUN API WITHOUT DOCKER

```
pip install fastapi
pip install uvicorn
uvicorn api.main:app
uvicorn api.main:app --proxy-headers --host  0.0.0.0  --port 80
http://localhost:8000/trail-fence/decrypt/nscyauopttwltmdnaoiepaxttokz/4312567/2
http://localhost:8000/trail-fence/encrypt/attack%20postponed%20until%20two%20am%20x%20y%20z/4312567/2
```