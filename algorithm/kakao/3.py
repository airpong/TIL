def inputMembers(membersList,member):
    target = [0,23]
    infos = member.split(' ')
    if infos[0] == 'cpp':
        target = [0,7]
    elif infos[0] == 'java':
        target = [8,15]
    else:
        target = [16,23]
    # print('1',target)
    if infos[1] == 'backend':
        target = [target[0],(target[1]+target[0])//2]
    else:
        target = [(target[1]+target[0])//2+1,target[1]]
    # print('2',target)
    if infos[2] == 'junior':
        target = [target[0],(target[1]+target[0])//2]
    else:
        target = [(target[1]+target[0])//2+1,target[1]]
    # print('3',target)
    if infos[3] == 'pizza':
        target = [target[0],(target[1]+target[0])//2]
    else:
        target = [(target[1]+target[0])//2+1,target[1]]
    # print('4',target)
    # if target[0]!=target[1]:
        # print("왜!!!!")
    membersList[target[0]].append(int(infos[4]))


def findMember(membersList,query):
    # print(query)
    result = 0
    infos = query.split(' and ')
    targets = [[0,23]]
    if infos[0] == 'cpp':
        targets = [[0,7]]
    elif infos[0] == 'java':
        targets = [[8,15]]
    elif infos[0] == 'python':
        targets = [[16,23]]
    else:
        targets = [[0,7],[8,15],[16,23]]
    # print(infos)
    # print("1",targets)
    for target in range(0,len(targets)):
        tmp = targets.pop(0)
        if infos[1] == 'backend':
            # print("여기")
            targets.append([tmp[0],(tmp[1]+tmp[0])//2])
        elif infos[1] == 'frontend':
            # print("저기")
            targets.append([(tmp[1]+tmp[0])//2+1,tmp[1]])
        else:
            # print("거기")
            targets.append([tmp[0],(tmp[1]+tmp[0])//2])
            targets.append([(tmp[1]+tmp[0])//2+1,tmp[1]])
    # print("2",targets)
    for target in range(0,len(targets)):
        tmp = targets.pop(0)
        # print("tmp",tmp,infos[2],target)
        if infos[2] == 'junior':
            # print("여기")
            targets.append([tmp[0],(tmp[1]+tmp[0])//2])
            # print(targets)
        elif infos[2] == 'senior':
            # print("저기")
            targets.append([(tmp[1]+tmp[0])//2+1,tmp[1]])
            # print(targets)
        else:
            # print("거기")
            targets.append([tmp[0],(tmp[1]+tmp[0])//2])
            targets.append([(tmp[1]+tmp[0])//2+1,tmp[1]])
    # print("3",target)
    lastInfo = infos[3].split(' ')
    for target in range(0,len(targets)):
        tmp = targets.pop(0)
        # print("tmp",tmp,lastInfo[0],target)
        if lastInfo[0] == 'pizza':
            # print("여기")
            targets.append([tmp[0],(tmp[1]+tmp[0])//2])
            # print(targets)
        elif lastInfo[0] == 'chicken':
            # print("저기")
            targets.append([(tmp[1]+tmp[0])//2+1,tmp[1]])
            # print(targets)
        else:
            # print("거기")
            targets.append([tmp[0],(tmp[1]+tmp[0])//2])
            targets.append([(tmp[1]+tmp[0])//2+1,tmp[1]])
    # print("4",target,lastInfo[1])
    # print(targets)
    for target in range(len(targets)):
        for i in range(targets[target][0],targets[target][1]+1):
            for member in membersList[i]:
                if member >= int(lastInfo[1]):
                    result += 1
    return result

    


members = ["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"]
query = ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]
def solve(info,query):
    membersList = [[] for _ in range(24)]
    answer = []
    for member in info:
        inputMembers(membersList,member)
    # print(membersList)
    for oneQuery in query:
        tmp = findMember(membersList,oneQuery)
        answer.append(tmp)
    return answer


print(solve(members,query))
