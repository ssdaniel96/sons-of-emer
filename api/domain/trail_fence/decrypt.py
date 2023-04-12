from api.utils.util import transpose
import math

def generate_matrix(message: str, psswd: str):
    columns: list[list] = []
    input_message_formatted = message.replace(' ', '¶')
    heigth = len(psswd)
    width = math.ceil(len(input_message_formatted)/heigth)
    
    for i in range(heigth):
        firstPosition = i*width
        lastPosition = (i+1)*width
        
        substring = input_message_formatted[firstPosition:lastPosition].ljust(width, '¶')         
           
        columns.append(list(substring))
    return columns

def unsort_matrix_by_key(matrix, key: str):
    keys = [int(x) for x in key]
    new_matrix = []
    for key in keys:
        new_matrix.append(matrix[key-1])
    return new_matrix

def concate(matrix) -> str:
    message = ''
    for line in matrix:
        for c in line:
            message += c
    return message
    
def decrypt_trail_fence(encripted_message: str, key: str, iteration = 2) -> str: 
    matrix = generate_matrix(encripted_message, key)
    unsorted_matrix = unsort_matrix_by_key(matrix, key)
    transposed = transpose(unsorted_matrix)
    message = concate(transposed)
    if (iteration > 1):
        return decrypt_trail_fence(message, key, iteration-1)
    return message.replace('¶', ' ')