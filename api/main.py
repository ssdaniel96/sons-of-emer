from fastapi import FastAPI
from domain.trail_fence.encryptor import encrypt_trail_fence
from domain.trail_fence.decryptor import decrypt_trail_fence
from domain.cipher_of_caesar.encryptor import encrypt_cipher_of_caesar
from domain.cipher_of_caesar.decryptor import decrypt_cipher_of_caesar
from domain.cipher_vigenere.encryptor import encrypt_vigenere
from domain.cipher_vigenere.decryptor import decrypt_vigenere
from domain.trail_fence.common import fix_key
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:80",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/trail-fence/encrypt/{message}/{key}/{iteration}")
def get_encrypt_trail_fence(message: str, key: str, iteration: int):
  key = fix_key(key[:len(key)])
  encrypted = encrypt_trail_fence(message, key, iteration)
  return {'value': encrypted}

@app.get("/trail-fence/decrypt/{message}/{key}/{iteration}")
def get_decrypt_trail_fence(message: str, key: str, iteration: int):
  key = fix_key(key[:len(key)])
  decrypted = decrypt_trail_fence(message, key, iteration)
  return {'value': decrypted}

@app.get("/cipher-of-caesar/encrypt/{message}/{key}")
def get_encrypt_cipher_of_caesar(message: str, key: int):
  encrypted = encrypt_cipher_of_caesar(message, key)
  return {'value': encrypted}

@app.get("/cipher-of-caesar/decrypt/{message}/{key}")
def get_decrypt_cipher_of_caesar(message: str, key: int):
  decrypted = decrypt_cipher_of_caesar(message, key)
  return {'value': decrypted}

@app.get("/cipher-vigenere/encrypt/{message}/{key}")
def encrypt(message: str, key: str):
  encrypted = encrypt_vigenere(message, key)
  return {'value': encrypted}

@app.get("/cipher-vigenere/decrypt/{message}/{key}")
def decrypt(message: str, key: str):
  decrypted = decrypt_vigenere(message, key)
  return {'value': decrypted}