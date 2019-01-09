casesize = int(input())
for i in range(casesize):
    dic = {"ZRO":0,"ONE":0,"TWO":0,"THR":0,"FOR":0,"FIV":0,"SIX":0,"SVN":0,"EGT":0,"NIN":0}
    line = input().split()
    size = int(line[1])
    count = 0
    while True:
        if count==size:
            break
        userinput = input().split()
        for word in userinput:
            dic[word]+=1
            count+=1
    print(f'#{i+1}')
    for keys in dic:
        for i in range(dic[keys]):
            print(keys,end=" ")
            