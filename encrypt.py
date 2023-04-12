import math

input_message = 'attack postponed until two am x y z'
psswd = '4312567'

def generate_matrix(message: str, key: str) -> list[list]:
    input_message_formatted = message.replace(' ', '')
    columns: list[list] = []

    width = len(key)
    heigth = math.ceil(len(input_message_formatted)/width)

    for i in range(heigth):
        firstPosition = i*width
        lastPosition = (i+1)*width
        
        substring = input_message_formatted[firstPosition:lastPosition].ljust(width)         
           
        columns.append(list(substring))            
        
    return columns

def transpose(matrix: list[list]) -> list[list]:
    transposed_matrix = []
    for line_idx in range(len(matrix[0])):
        line_list = []
        for column_idx in range(len(matrix)):
            line_list.append(matrix[column_idx][line_idx])
        transposed_matrix.append(line_list)
    return transposed_matrix

def generate_dict_matrix_by_keys(matrix: list[list], key: str):
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

def print_matrix(matrix: list[list]):
    for c in matrix:
        print(c)
        
def execute_trail_fence(message: str, key: str, iterations = 2) -> str:
    matrix = generate_matrix(message, key)
    transposed = transpose(matrix)
    ordered_transposed = generate_dict_matrix_by_keys(transposed, key)
    criptographed_message = concate_dict_matrix_in_order(ordered_transposed)
    if (iterations > 1):
        return execute_trail_fence(criptographed_message, key, iterations-1)
    return criptographed_message

criptographed = execute_trail_fence(input_message, psswd)
print('Mensagem criptografada:', criptographed)