n = int(input())
m = int(input())
edge = [[] for _ in range(1000000)]
dpMap = [0] * (1000000)
isVisit = [0] * (1000000)
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
    isVisit[start] = 1
    for road in edge[start]:
        if road[1] + dpMap[road[0]] == dpMap[start]:
            answer += 1
            countEdge(road[0])


for _ in range(m):
    start, end, cost = map(int, input().split())
    edge[start].append([end, cost])
start, end = map(int, input().split())
makeDpMap(start)
countEdge(start)

print(dpMap[start])
print(answer)
