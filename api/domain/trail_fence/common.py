def fix_key(key: str):
    for i in range(len(key)):
        if str(i+1) in key:
            continue
        e = i+2
    while str(i+1) not in key:
        if str(e) in key:
            key = key.replace(str(e),str(i+1))
        e=e+1
    return key