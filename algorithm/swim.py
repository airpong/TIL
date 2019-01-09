casesize = int(input())
lst = []
for j in range(casesize):
    price = list(map(int,input().split(" ")))
    days = list(map(int,input().split(" ")))
    i=0
    result = 0
    while(i<12) :
        # i = 0 ~ 12
        if days[i] == 0:
            i+=1
            continue
        else :
            m1=0
            m2=0
            m3=0
            if (days[i]*price[0])>price[1] :
                m1=price[1]
            else :
                m1=days[i]*price[0]
            if i<11:
                if (days[i+1]*price[0])>price[1] :
                    m2=price[1]
                else :
                    m2=days[i+1]*price[0]
                if i<10:
                    if (days[i+2]*price[0])>price[1] :
                        m3=price[1]
                    else :
                        m3=days[i+2]*price[0]
            if m1+m2+m3>price[2]:
                result+=price[2]
                i+=2
            else :
                result+=m1
        if result > price[3]:
            result = price[3]
        i+=1
    lst.append(result)
count = 1
for ans in lst:
    print("#",count," ",ans,sep="")
    count+=1