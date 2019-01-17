def basic(n,flag):
    if len(str(n))<10:
        return n
    elif len(str(n))==10 :
        if flag ==0:
            tmpN = n*5
        else:
            tmpN=n
        if len(str(tmpN))==10:
            print("곱한 길이가 10인 케이스")
            return n-divided
        else :
            print("곱한 길이가 10넘어간 케이스")
            return onemoresize(tmpN)/5
    elif len(str(n))>=11:
        if flag ==0 and len(str(n))==1:
            print("abc")
            tmpN = n*5
        else:
            print("dce")
            tmpN=n
        if len(str(tmpN)) == 11:
            print("원래는 길이 11인데 곱해도 11인케이스")
            if flag ==0:
                return onemoresize(tmpN)/5
            else :
                return onemoresize(tmpN)
        else:
            print("원래는 길이 11인데 곱해서 12된케이스")
            print(tmpN//10)
            a=onemoresize(tmpN//10)
            print(a)
            print(tmpN)
            tmpN=int(str(a)+str(tmpN)[11:])
            print("newtmpN",tmpN)
            return basic(tmpN,1)/5
def onemoresize(n):
    print("하나높은거 구하는 케이스..ㅊ")
    estimateQ=(n//1000000000)//6
    rest=n-1234567891*5*estimateQ
    while(rest<0):
        print("aaa",rest)
        print("rest는",rest)
        rest+=divided*5
    print("onemore나온rest",rest)
    return rest
divided=1234567891
n=int(input())
print(basic(n,0))