def encrypt_cipher_of_caesar(text: str, key: int) -> str: 

    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 '
    shifted_alphabet = alphabet[key:] + alphabet[:key]
    encrypted_text = ''

    for char in text:
        lower_case_char = char.upper()
        index_in_alphabet = alphabet.find(lower_case_char)

        if index_in_alphabet == -1:
            encrypted_text += char
        else:
            shifted_char = shifted_alphabet[index_in_alphabet]
            encrypted_text += shifted_char if char == lower_case_char else shifted_char.upper()

    return encrypted_text       
