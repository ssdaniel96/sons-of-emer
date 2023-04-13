def decrypt_vigenere(ciphertext: str, key: str) -> str:
    key = key.lower()
    plaintext = ""
    i = 0

    if len(key) >= len(ciphertext): 
        raise Exception("Erro! A Chave é maior que o texto a ser descriptografado.")

    for char in ciphertext:
        if char.isalpha():
            char_idx = ord(char.lower()) - 97
            key_idx = ord(key[i % len(key)]) - 97
            new_char_idx = (char_idx - key_idx) % 26
            new_char = chr(new_char_idx + 97)
            if char.isupper():
                new_char = new_char.upper()
            plaintext += new_char
            i += 1
        else:
            plaintext += char
    return plaintext
