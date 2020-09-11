def rotate90(origin):
    n = len(origin)
    result = [[0 for _ in range(n)] for _ in range(n)]
    for col in range(n):
        for row in range(n):
            result[col][row] = origin[n-1-row][col]
    return result

def copyIntarget(target,source,startPoint):
    n = len(source)
    for col in range(startPoint[0],startPoint[0]+n):
        for row in range(startPoint[1],startPoint[1]+n):
            printNum = 1
            if target[col][row] and source[col-startPoint[0]][row-startPoint[1]]:
                printNum = 0
            if not target[col][row] and not source[col-startPoint[0]][row-startPoint[1]]:
                printNum = 0
            target[col][row] = printNum
    return target

def check(target):
    startPoint = len(target)//3
    for col in range(startPoint,startPoint+startPoint):
        for row in range(startPoint,startPoint+startPoint):
            
            if target[col][row] == 0:
                return False
    return True

def solve(key,lock):
    nowKey = key
    for i in range(4):
        tmpKey = rotate90(nowKey)
        for col in range(1,len(lock)*2):
            for row in range(1,len(lock)*2):
                
                targetMap = [[0 for _ in range(len(lock)*3)] for _ in range(len(lock)*3)]
                targetMap = copyIntarget(targetMap,lock,[len(lock),len(lock)])
                targetMap = copyIntarget(targetMap,tmpKey,[col,row])
                if check(targetMap):
                    return True
    return False
        




