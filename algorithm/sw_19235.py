def inputIntoGreenArea(greenMap,startRow,shape):
    print("그린 맵에 삽입")
    print("현재 그린맵의 상태 : ",greenMap)
    # 크기가 1x1 인 경우
    if shape == 1:
        print("크기는 1곱하기1")
        finalCol = 0
        for col in range(1,6):
            if greenMap[col][startRow]:
                break
            else:
                finalCol = col
        print("최종 1곱하기1의 위치의 행값 : ",finalCol)
        greenMap[finalCol][startRow] = 1
    # 크기가 1x2 인 경우
    elif shape == 2:
        print("크기는 1곱하기2")
        finalCol = 0
        for col in range(1,6):
            if greenMap[col][startRow] or greenMap[col][startRow+1]:
                break
            else:
                finalCol = col
        print("최종 1곱하기2의 위치의 행값 : ",finalCol)
        greenMap[finalCol][startRow] = 1
        greenMap[finalCol][startRow+1] = 1
    # 크기가 2x1 인 경우
    elif shape == 3:
        print("크기는 2곱하기1")
        finalCol = 0
        for col in range(1,5):
            if greenMap[col+1][startRow]:
                break
            else:
                finalCol = col
        greenMap[finalCol][startRow] = 1
        greenMap[finalCol+1][startRow] = 1
    print("삽입 후 그린 맵의 상태",greenMap)
    return True

def inputIntoBlueArea(blueMap,startCol,shape):
    print("블루 맵에 삽입")
    print("현재 블루맵의 상태 : ",blueMap)
    # 크기가 1x1 인 경우
    if shape == 1:
        print("크기는 1곱하기1")
        finalRow = 0
        for row in range(1,6):
            if blueMap[startCol][row]:
                break
            else:
                finalRow = row
        print("최종 1곱하기1의 위치의 열값 : ",finalRow)
        blueMap[startCol][finalRow] = 1
    # 크기가 1x2 인 경우
    elif shape == 2:
        print("크기는 1곱하기2")
        finalRow = 0
        for row in range(1,5):
            if blueMap[startCol][row+1]:
                break
            else:
                finalRow =row
        print("최종 1곱하기2의 위치의 열값 : ",finalRow)
        blueMap[startCol][finalRow] = 1
        blueMap[startCol][finalRow+1] = 1
    # 크기가 2x1 인 경우
    elif shape == 3:
        print("크기는 2곱하기1")
        finalRow = 1
        for row in range(2,6):
            if blueMap[startCol][row] or blueMap[startCol+1][row]:
                break
            else:
                finalRow = row
        print("최종 2곱하기1의 위치의 열값 : ",finalRow )
        blueMap[startCol][finalRow] = 1
        blueMap[startCol+1][finalRow] = 1
    return True

def findDeletedColInGreenArea(greenMap):
    result = []
    for col in range(2,6):
        isDelete = True
        for row in range(0,4):
            if not greenMap[col][row]:
                isDelete = False
                break
        if isDelete:
            result.append(col)
    print("그린 맵 사라지는 행 : ", result)
    return result

def findDeletedColInBlueArea(blueMap):
    result = []
    for row in range(2,6):
        isDelete = True
        for col in range(0,4):
            if not blueMap[col][row]:
                isDelete = False
                break
        if isDelete:
            result.append(row)
    print("블루 맵 사라지는 열 : ", result)
    return result

def changeGreenArea(greenMap,deletedCol):
    # for col in range(startCol,-1,-1):
    #     for row in range(0,4):
    #         if greenMap[col][row]:
    #             finalCol = col
    #             while 1:
    #                 tmpCol = finalCol + 1
    #                 if tmpCol == 6 or greenMap[tmpCol][row]:
    #                     break
    #                 else:
    #                     finalCol = tmpCol
    #             greenMap[finalCol][row] = 1
    #             greenMap[col][row] = 0
    for col in deletedCol:
        greenMap.pop(col)
        greenMap.insert(0,[0,0,0,0])
def changeBlueArea(blueMap,deletedRow):
    # for row in range(startRow,-1,-1):
    #     for col in range(0,4):
    #         if blueMap[col][row]:
    #             finalRow = row
    #             while 1:
    #                 tmpRow = finalRow + 1
    #                 if tmpRow == 6 or blueMap[col][tmpRow]:
    #                     break
    #                 else:
    #                     finalRow = tmpRow
    #             blueMap[col][finalRow] = 1
    #             blueMap[col][row] = 0
    for row in deletedRow:
        for col in range(0,4):
            blueMap[col].pop(row)
            blueMap[col].insert(0,0)

def checkDeleteGreenArea(greenMap):
    global score
    while 1:
        deletedCol = findDeletedColInGreenArea(greenMap)
        if not deletedCol:
            break
        else:
            score += len(deletedCol)
            for col in deletedCol:
                for row in range(0,4):
                    greenMap[col][row] = 0
            changeGreenArea(greenMap,deletedCol)
        print("바뀌고 나서 그린 맵 : ",greenMap)
def checkDeleteBlueArea(blueMap):
    global score
    while 1:
        deletedRow = findDeletedColInBlueArea(blueMap)
        if not deletedRow:
            break
        else:
            score += len(deletedRow)
            for row in deletedRow:
                for col in range(0,4):
                    blueMap[col][row] = 0
            changeBlueArea(blueMap,deletedRow[-1]-1)

def removeAreaBlueArea(blueMap):
    for row in range(0,2):
        isDelete = False
        for col in range(0,4):
            if blueMap[col][row]:
                isDelete = True
                break
        if isDelete:
            for col in range(0,4):
                blueMap[col].pop()
                blueMap[col].insert(0,0)
        
def removeAreaGreenArea(greenMap):
    for col in range(0,2):
        isDelete = False
        for row in range(0,4):
            if greenMap[col][row]:
                isDelete = True
                break
        if isDelete:
            greenMap.pop()
            greenMap.insert(0,[0,0,0,0])

            
def hmMaps(greenMap,blueMap):
    score = 0
    for col in range(2,6):
        for row in range(4):
            if greenMap[col][row]:
                score += 1
    for col in range(0,4):
        for row in range(2,6):
            if blueMap[col][row]:
                score += 1

    return score

score = 0
redArea = [[0 for _ in range(4)] for _ in range(4)]
greenArea = [[0 for _ in range(4)] for _ in range(6)]
blueArea = [[0 for _ in range(6)] for _ in range(4)]


blockNum =int(input())
for _ in range(blockNum):
    inputLine = list(map(int,input().split()))
    inputIntoBlueArea(blueArea,inputLine[1],inputLine[0])
    checkDeleteBlueArea(blueArea)
    removeAreaBlueArea(blueArea)
    print("삽입 후 블루맵 : ",blueArea)
    inputIntoGreenArea(greenArea,inputLine[2],inputLine[0])
    checkDeleteGreenArea(greenArea)
    removeAreaGreenArea(greenArea)
    print("삽입 후 그린맵 : ",greenArea)
print(score)
print(hmMaps(greenArea,blueArea))