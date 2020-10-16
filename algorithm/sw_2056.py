

# n = int(input())
# connectedGraph = [[] for _ in range(n+1)]
# remainTime = [0 for _ in range(n+1)]
# for node in range(n):
#     inputLine = list(map(int, input().split()))
#     remainTime[node+1] = inputLine[0]
#     for connect in range(inputLine[1]):
#         connectedGraph[node+1].append(inputLine[connect+2])
# time = 0
# while(1):
#     # print("현재 시간은 : ", time)
#     newRemainTime = [0 for _ in range(n+1)]
#     for node in range(1, n+1):
#         # print("현재 노드는 : ", node)
#         if not remainTime[node]:
#             continue
#         canReduce = True
#         for otherNode in connectedGraph[node]:
#             if remainTime[otherNode]:
#                 # print(otherNode, "가 아직 끝나지 않음")
#                 canReduce = False
#                 break
#             # else:
#                 # print(otherNode, "가 작업 끝남")
#         if canReduce:
#             newRemainTime[node] = remainTime[node] - 1
#         else:
#             newRemainTime[node] = remainTime[node]
#     # print("현재 노드들의 작업 상태 : ", newRemainTime)
#     remainTime = newRemainTime
#     isFinish = True
#     for node in range(1, len(newRemainTime)):
#         if newRemainTime[node]:
#             isFinish = False
#     if isFinish:
#         break
#     time += 1
# print(time+1)


n = int(input())
finishTime = [0 for _ in range(n+1)]
for myNode in range(n):
    inputLine = list(map(int, input().split()))
    maxTime = 0
    for otherNode in range(inputLine[1]):
        if finishTime[inputLine[otherNode+2]] > maxTime:
            maxTime = finishTime[inputLine[otherNode+2]]
    # print(myNode+1, "번 노드의 맥스 값", maxTime)
    finishTime[myNode+1] = maxTime + inputLine[0]

print(max(finishTime))
