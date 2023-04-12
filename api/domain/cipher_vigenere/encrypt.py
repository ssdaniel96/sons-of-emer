def encrypt_vigenere(plaintext: str, key: str) -> str:
    key = key.lower()
    ciphertext = ""
    i = 0
    for char in plaintext:
        if char.isalpha():
            char_idx = ord(char.lower()) - 97
            key_idx = ord(key[i % len(key)]) - 97
            new_char_idx = (char_idx + key_idx) % 26
            new_char = chr(new_char_idx + 97)
            if char.isupper():
                new_char = new_char.upper()
            ciphertext += new_char
            i += 1
        else:
            ciphertext += char
    return ciphertext
