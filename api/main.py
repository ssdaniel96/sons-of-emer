from fastapi import FastAPI
from api.domain.trail_fence.encrypt import encrypt_trail_fence
from api.domain.trail_fence.decrypt import decrypt_trail_fence

app = FastAPI()

@app.get("/trail-fence/encrypt/{message}/{key}/{iteration}")
def encrypt(message: str, key: str, iteration: int):
  encrypted = encrypt_trail_fence(message, key, iteration)
  return {encrypted}

@app.get("/trail-fence/decrypt/{message}/{key}/{iteration}")
def decrypt(message: str, key: str, iteration: int):
  decrypted = decrypt_trail_fence(message, key, iteration)
  return {decrypted}