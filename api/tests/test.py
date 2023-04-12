from api.domain.trail_fence.decrypt import decrypt_trail_fence
from api.domain.trail_fence.encrypt import encrypt_trail_fence

frase_inicial = 'ATTACK POSTPONED UNTIL TWO PM X Y Z'
chave = '4312567'
iteracoes = 2

print('Frase inicial:', frase_inicial)
print('Chave de criptografia:', chave)
print(f'Executando criptografia em {iteracoes} iterações...')
encrypted = encrypt_trail_fence(frase_inicial, chave, iteracoes)
print('Mensagem criptografada:', encrypted)
print()
print('Descriptografando...')
decrypted = decrypt_trail_fence(encrypted, chave, iteracoes)
print('Mensagem descritografada:', decrypted)