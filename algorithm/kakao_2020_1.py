def split(n, str):
    result = []
    for i in range(0, len(str), n):
        result.append(str[i:i+n])
    return result


def solve(str):
    result = 10000000
    for i in range(1, len(str)//2+1):
        splitStr = split(i, str)
        before = "^^"
        newPair = False
        for i in range(len(splitStr)-1, -1, -1):
            if splitStr[i] == before:
                if not newPair:
                    splitStr[i] = "*"
                    newPair = True
                else:
                    splitStr.pop(i)
            else:
                before = splitStr[i]
                newPair = False
        if len("".join(splitStr)) < result:
            result = len("".join(splitStr))
    return(result)


print(solve("xababcdcdababcdcd"))
