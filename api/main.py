from fastapi import FastAPI
from api.domain.trail_fence.encryptor import encrypt_trail_fence
from api.domain.trail_fence.decryptor import decrypt_trail_fence
from api.domain.cipher_of_caesar.encryptor import encrypt_cipher_of_caesar
from api.domain.cipher_of_caesar.decryptor import decrypt_cipher_of_caesar

app = FastAPI()

@app.get("/trail-fence/encrypt/{message}/{key}/{iteration}")
def get_encrypt_trail_fence(message: str, key: str, iteration: int):
  encrypted = encrypt_trail_fence(message, key, iteration)
  return {encrypted}

@app.get("/trail-fence/decrypt/{message}/{key}/{iteration}")
def get_decrypt_trail_fence(message: str, key: str, iteration: int):
  decrypted = decrypt_trail_fence(message, key, iteration)
  return {decrypted}

@app.get("/cipher-of-caesar/encrypt/{message}/{key}")
def get_encrypt_cipher_of_caesar(message: str, key: str):
  encrypted = encrypt_cipher_of_caesar(message, key)
  return {encrypted}

@app.get("/cipher-of-caesar/encrypt/{message}/{key}")
def get_decrypt_cipher_of_caesar(message: str, key: str):
  decrypted = decrypt_cipher_of_caesar(message, key)
  return {decrypted}