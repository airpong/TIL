def changeBase(inputNum, base):
    tmpNum = inputNum
    result = ""
    while(1):
        # for i in range(5):
        if tmpNum < base:
            result = str(tmpNum) + result
            return result
        # if tmpNum:
        #   return
        result = str(tmpNum % base) + result
        tmpNum = tmpNum//base
        # print(result, tmpNum)


def multiEachNum(inputNum):
    strInputNum = str(inputNum)
    result = 1
    for i in strInputNum:
        if int(i) != 0:
            result = result * int(i)
    return result


caseInput = int(input())
result = [-1, -1]
for base in range(2, 10):
    changedNum = int(changeBase(caseInput, base))
    multi = multiEachNum(changedNum)
    if multi >= result[1]:
        result[1] = multi
        result[0] = base
print(result)
