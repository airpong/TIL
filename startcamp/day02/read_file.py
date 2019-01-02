with open('ssafy.txt','r',encoding='utf8') as f:
    lines = f.readlines()
    for line in lines:
        print(line.strip(),"abc".strip(),sep='~~~')     #strip() : 해당 문자열의 마지막에 무엇을 찍을것인지 사용자가 선택하는 것