def saveInDpMap(honeyArea):
    # print("Hello", honeyArea)
    result = 0
    for selected in range(1, 1 << M):
        sumOfAll = 0
        sumOfSquared = 0
        # print(selected)
        for oneObj in range(0, M):
            if selected & 1 << oneObj:
                # print(honeyArea[oneObj])
                sumOfAll += honeyArea[oneObj]
                sumOfSquared += honeyArea[oneObj]**2
        if sumOfAll <= C and sumOfSquared > result:
            result = sumOfSquared
    return result


for case in range(int(input())):
    answer = 0
    N, M, C = list(map(int, input().split()))
    casemap = []
    for line in range(N):
        casemap.append(list(map(int, input().split())))
    dpMap = [[0 for _ in range(N)] for _ in range(N)]
    for col in range(N):
        for row in range(N-M+1):
            dpMap[col][row] = saveInDpMap(casemap[col][row:row+M])
    dpMapForLinear = []
    for col in range(N):
        for row in range(N):
            dpMapForLinear.append(dpMap[col][row])
    # print(dpMapForLinear)
    for first in range(0, len(dpMapForLinear)-M):
        for second in range(first+M, len(dpMapForLinear)):
            if dpMapForLinear[first] + dpMapForLinear[second] > answer:
                answer = dpMapForLinear[first] + dpMapForLinear[second]

    print(f'#{case+1} {answer}')
