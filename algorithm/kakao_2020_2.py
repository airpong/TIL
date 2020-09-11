def seperate(w):
    countA = 0
    countB = 0
    seperatePoint = 1
    if w[0] == '(':
        countA += 1
    else:
        countB += 1
    while(1):
        if countA == countB:
            return [w[0:seperatePoint], w[seperatePoint:]]
        if w[seperatePoint] == '(':
            countA += 1
        else:
            countB += 1
        seperatePoint += 1


def reverse(u):
    result = ''
    for i in range(0, len(u)):
        if u[i] == '(':
            result = result + ')'
        else:
            result = result + '('
    return result


def rightStr(u):
    check = 0
    for i in range(0, len(u)):
        if u[i] == '(':
            check += 1
        else:
            check -= 1
        if check < 0:
            return False
    return True


def solve(w):
    print("w는 무엇일까", w)
    if len(w) <= 0:
        print("비어있음")
        return ""
    u, v = seperate(w)
    resultOfV = solve(v)
    print("지금 W는 ", w, "resultOfV는 ", resultOfV)
    if rightStr(u):
        print("u가 정상이라서", u + resultOfV, "리턴")
        return u + resultOfV
    else:
        print("u가 비정상이라서", '(' + resultOfV + ')' + reverse(u[1:-1]), "리턴")
        return '(' + resultOfV + ')' + reverse(u[1:-1])


solve('(()())()')
