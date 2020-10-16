n = int(input())
m = int(input())
edge = [[] for _ in range(n+1)]
dpMap = [0] * (n+1)
isVisit = [0] * (n+1)
answer = 0


def makeDpMap(start):
    maxCost = 0
    for road in edge[start]:
        if not dpMap[road[0]]:
            makeDpMap(road[0])
        if road[1] + dpMap[road[0]] > maxCost:
            maxCost = road[1] + dpMap[road[0]]
    dpMap[start] = maxCost


def countEdge(start):
    global answer
    if isVisit[start]:
        return
    isVisit[start] = True
    for road in edge[start]:
        if road[1] + dpMap[road[0]] == dpMap[start]:
            # print("쿠쿨핑퐁", start, road[0])
            answer += 1
            countEdge(road[0])


for _ in range(m):
    start, end, cost = map(int, input().split())
    edge[start].append([end, cost])
start, end = map(int, input().split())
makeDpMap(start)
countEdge(start)

print(dpMap[start], answer, sep="\n")
