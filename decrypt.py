from encrypt import transpose
import math

encript_message = 'nscyauopttwltmdnaoiepaxttokz'
psswd = '4312567'

def generate_matrix(message: str, psswd: str) -> list[list]:
    columns: list[list] = []
    input_message_formatted = message.replace(' ', '')
    heigth = len(psswd)
    width = math.ceil(len(input_message_formatted)/heigth)
    
    for i in range(heigth):
        firstPosition = i*width
        lastPosition = (i+1)*width
        
        substring = input_message_formatted[firstPosition:lastPosition].ljust(width)         
           
        columns.append(list(substring))
    return columns

def unsort_matrix_by_key(matrix: list[list], key: str) -> list[list]:
    keys = [int(x) for x in key]
    new_matrix = []
    for key in keys:
        new_matrix.append(matrix[key-1])
    return new_matrix

def concate(matrix: list[list]) -> str:
    message = ''
    for line in matrix:
        for c in line:
            message += c
    return message
    
def decrypt(encripted_message: str, key: str, iteration = 2) -> str: 
    matrix = generate_matrix(encripted_message, key)
    unsorted_matrix = unsort_matrix_by_key(matrix, key)
    transposed = transpose(unsorted_matrix)
    message = concate(transposed)
    if (iteration > 1):
        return decrypt(message, key, iteration-1)
    return message
        
decrypted = decrypt(encript_message, psswd)
print('Mensagem descriptografada:', decrypted)