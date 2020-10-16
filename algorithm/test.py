cost = [0] * 10
for i in range(3):
    cost[i], *prior = list(map(int, input().split()))
    print(cost, prior)
print(cost, prior)
