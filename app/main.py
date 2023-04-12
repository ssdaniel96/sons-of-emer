from fastapi import FastAPI
from app.encrypt import encrypt_trail_fence
from app.decrypt import decrypt_trail_fence

app = FastAPI()

@app.get("/encrypt/{message}/{key}/{iteration}")
def encrypt(message: str, key: str, iteration: int):
  encrypted = encrypt_trail_fence(message, key, iteration)
  return {encrypted}

@app.get("/decrypt/{message}/{key}/{iteration}")
def decrypt(message: str, key: str, iteration: int):
  decrypted = decrypt_trail_fence(message, key, iteration)
  return {decrypted}