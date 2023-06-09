from utils.util import transpose, space_char
import math
from domain.trail_fence.common import fix_key


def generate_matrix(message: str, psswd: str):
    columns: list[list] = []
    input_message_formatted = message.replace(' ', space_char)
    heigth = len(psswd)
    width = math.ceil(len(input_message_formatted)/heigth)
    
    for i in range(heigth):
        firstPosition = i*width
        lastPosition = (i+1)*width
        
        substring = input_message_formatted[firstPosition:lastPosition].ljust(width, space_char)         
           
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
    fixed_key = fix_key(key) 
    matrix = generate_matrix(encripted_message, fixed_key)
    unsorted_matrix = unsort_matrix_by_key(matrix, fixed_key)
    transposed = transpose(unsorted_matrix)
    message = concate(transposed)
    if (iteration > 1):
        return decrypt_trail_fence(message, fixed_key, iteration-1)
    return message.replace(space_char, ' ').strip()