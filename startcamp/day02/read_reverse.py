with open('ssafy.txt','r',encoding='utf8') as f:
    lines=f.readlines()
    lines.reverse()
    with open('ssafy_reverse.txt','w') as n:
        for i in lines:
            n.write(i)