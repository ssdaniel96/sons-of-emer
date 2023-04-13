import math
from utils.util import transpose, space_char
from domain.trail_fence.common import fix_key

def generate_matrix(message: str, key: str):
    input_message_formatted = message.replace(' ', space_char)
    columns: list[list] = []
    key = [int(x) for x in key]

    width = len(key)
    heigth = math.ceil(len(input_message_formatted)/width)

    for i in range(heigth):
        firstPosition = i*width
        lastPosition = (i+1)*width
        
        substring = input_message_formatted[firstPosition:lastPosition].ljust(width, space_char)         
           
        columns.append(list(substring))            
        
    return columns

def generate_dict_matrix_by_keys(matrix, key: str):
    dict_matrix = {}
    keys = [int(x) for x in key]
    for key_idx, key in enumerate(keys):
        dict_matrix[key] = matrix[key_idx]
    return dict_matrix    

def concate_dict_matrix_in_order(dict_matrix: dict) -> str:
    cript_message = ''
    for i in range(1, len(dict_matrix)+1):
        for c in dict_matrix[i]:
            cript_message += c
    return cript_message
        
def encrypt_trail_fence(message: str, key: str, iterations = 2) -> str:
    matrix = generate_matrix(message, key)
    transposed = transpose(matrix)
    ordered_transposed = generate_dict_matrix_by_keys(transposed, key)
    criptographed_message = concate_dict_matrix_in_order(ordered_transposed)
    if (iterations > 1):
        return encrypt_trail_fence(criptographed_message, key, iterations-1)
    return criptographed_message