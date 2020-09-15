from itertools import combinations

def makeList(uInput,course):
    a = {}
    result = []
    Mcombinations = []
    combiGroup = {}
    for i in range(65,91):
        a[chr(i)] = 0
    for case in uInput:
        for oneCourse in course:
            if len(case) >= oneCourse:
                for combi in combinations(''.join(sorted(case)),oneCourse):
                    if not combiGroup.get(combi):
                        combiGroup[combi] = 1
                        Mcombinations.append(combi)
    

    
    return [Mcombinations]

def checkOrderHaveCombi(order,combi):
    for letter in combi:
        if not letter in order:
            return False
    return True

def solution(orders, course):
    answer = []
    Mcombis = makeList(orders,course)[0]
    candidate = {}
    
    for oneCource in course:
        candidate[oneCource] = {"maxNum" : -1,"lst" :[]}
    
    for combi in Mcombis:
        hm = 0
        for order in orders:
            if len(order) >= len(combi):
                if checkOrderHaveCombi(order,combi):
                    hm += 1
        if hm>=2 and hm > candidate[len(combi)]['maxNum']:
            candidate[len(combi)]['lst'] = [combi]
            candidate[len(combi)]['maxNum'] = hm
        elif hm>=2 and hm == candidate[len(combi)]['maxNum']:
            candidate[len(combi)]['lst'].append(combi)
    for values in candidate.values():
        for value in values['lst']:
            answer.append(''.join(value))
    
    answer.sort()
    return answer

print(solution(	["XYZ", "XWY", "WXA"],[2,3,4]))