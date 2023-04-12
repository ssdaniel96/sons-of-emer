def decrypt_cipher_of_caesar(text: str, key: int) -> str:

    if key < 1 or key > 26:
        raise Exception('A chave tem que estar entre 1 e 26')

    alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789 '
    shifted_alphabet = alphabet[key:] + alphabet[:key]
    decrypted_text = ''

    for char in text:
        lower_case_char = char.lower()
        index_in_shifted_alphabet = shifted_alphabet.find(lower_case_char)

        if index_in_shifted_alphabet == -1:
            decrypted_text += char
        else:
            original_char = alphabet[index_in_shifted_alphabet]
            decrypted_text += original_char if char == lower_case_char else original_char.lower()
        
    return decrypted_text
