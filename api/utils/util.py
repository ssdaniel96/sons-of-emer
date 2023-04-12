space_char = 'Ÿ'

def transpose(matrix):
    transposed_matrix = []
    for line_idx in range(len(matrix[0])):
        line_list = []
        for column_idx in range(len(matrix)):
            line_list.append(matrix[column_idx][line_idx])
        transposed_matrix.append(line_list)
    return transposed_matrix

def print_matrix(matrix):
    for c in matrix:
        print(c)