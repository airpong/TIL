import copy
casemap = [[0 for _ in range(4)] for _ in range(4)]
dx = [["a", "a"], [-1, 0], [-1, -1], [0, -1],[1, -1], [1, 0], [1, 1], [0, 1], [-1, 1]]
result = 0




def eat(col, row, inputMap):
    newmap = copy.deepcopy(inputMap)
    newmap[col][row] = [20, inputMap[col][row][1]]
    return newmap


def findMinFish(inputMap, minNum):
    tmpMin = 20
    resultCol = -1
    resultRow = -1
    for col in range(4):
        for row in range(4):
            if(inputMap[col][row][0] > minNum and inputMap[col][row][0] < tmpMin):
                tmpMin = inputMap[col][row][0]
                resultCol = col
                resultRow = row

    if resultCol != -1:
        return (resultCol, resultRow)
    else:
        return False

def findDirection(inputMap,col,row):
    direction = inputMap[col][row][1] - 1
    for _ in range(8):
        direction = (direction + 1)%9
        if direction == 0:
            direction = 1
        nextCol = col + dx[direction][0]
        nextRow = row + dx[direction][1]
        if nextCol >= 0 and nextCol < 4 and nextRow >= 0 and nextRow < 4 and inputMap[nextCol][nextRow][0] !=20:
            return direction
    return False

def move(inputMap):
    minNum = 0
    while 1:
        firstStart = findMinFish(inputMap, minNum)
        # print("start",firstStart)
        if not firstStart:
            return
        minNum = inputMap[firstStart[0]][firstStart[1]][0]
        direction = findDirection(inputMap,firstStart[0],firstStart[1])
        inputMap[firstStart[0]][firstStart[1]][1] = direction
        # print(minNum,firstStart,direction)
        if direction != False:
            tmp = inputMap[firstStart[0]][firstStart[1]]
            inputMap[firstStart[0]][firstStart[1]] = inputMap[firstStart[0]+dx[direction][0]][firstStart[1]+dx[direction][1]]
            inputMap[firstStart[0]+dx[direction][0]][firstStart[1]+dx[direction][1]] = tmp

def dfs(inputMap,colOfShark,rowOfShark,tmp):
    global result
    # print("움직이기전",inputMap,colOfShark,rowOfShark)
    move(inputMap)
    
    directionOfShark = inputMap[colOfShark][rowOfShark][1]
    # print("움직이고",inputMap,directionOfShark)
    isGo = False
    for i in range(1,4):
        nextCol = colOfShark + dx[directionOfShark][0] * i
        nextRow = rowOfShark + dx[directionOfShark][1] * i
        # print("colrow",nextCol,nextRow,tmp)
        if nextCol >= 0 and nextCol < 4 and nextRow >= 0 and nextRow < 4 and inputMap[nextCol][nextRow][0] >=1 and inputMap[nextCol][nextRow][0] <= 16:
            # print("here",nextCol,nextRow)
            isGo = True
            
            newmap = eat(nextCol,nextRow,inputMap)
            newmap[colOfShark][rowOfShark] = [100,100]
            dfs(newmap,nextCol,nextRow,tmp+inputMap[nextCol][nextRow][0])
    if not isGo:
        if tmp > result:
            result = tmp
        
        


for ipCol in range(4):
    inputList = list(map(int, input().split()))
    for row in range(4):
        casemap[ipCol][row] = [inputList[row*2], inputList[row*2+1]]

newmap = eat(0,0,casemap)
dfs(newmap,0,0,casemap[0][0][0])
print(result)

