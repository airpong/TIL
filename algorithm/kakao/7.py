import sys
sys.setrecursionlimit(5000)
def makeGroup(links):
    groups = {}
    involved = [[] for _ in range((len(links) + 2))]
    for link in links:
        # print(link)
        if not groups.get(link[0]):
            groups[link[0]] = [link[1]]
        else:
            groups[link[0]].append(link[1])
    result = []
    for group in groups:
        result.append([group] + groups[group])
    print(result)
    for group in range(0,len(result)):
        for member in result[group]:
            print(member)
            involved[member].append(group)
            print(involved)
    print(involved)
    return result

def dfs(cost,dep,team,heGo,costs):
    # print(cost,dep,team,heGo,costs)
    global maxCost
    global count
    # if cost >= maxCost:
    #     return
    if dep >= len(team):
        # for he in range(0,len(heGo)):
        #     if(heGo[he]):
        #         print(he,"번",end=" ")
        # print("참석")
        count+=1
        if cost <= maxCost:
            maxCost = cost
        return
        
    
    for man in team[dep]:
        if heGo[man]:
            dfs(cost,dep+1,team,heGo,costs)
        else:
            heGo[man] = 1
            dfs(cost+costs[man],dep+1,team,heGo,costs)
            heGo[man] = 0
        
    
    
def solution(sales, links):
    global maxCost
    global count
    count = 0
    maxCost = 10000
    num = len(sales)
    answer = 0
    heGo = [0] * (num+1)
    teams = makeGroup(links)
    costs = [0] * (num+1)
    # print(teams)
    for i in range(len(sales)):
        costs[i+1] = sales[i]
    
    dfs(0,0,teams,heGo,costs)
    print("abc",maxCost,count)
    return maxCost
print(solution([14, 17, 15, 18, 19, 14, 13, 16, 28, 17],[[10, 8], [1, 9], [9, 7], [5, 4], [1, 5], [5, 10], [10, 6], [1, 3], [10, 2]]))