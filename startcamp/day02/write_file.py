# f=open('ssafy.txt','x') # w: write, r:read, a:append
# f.write('This is SSAFY!')
# f.close()

with open('ssafy.txt','w',encoding='utf8') as f: #최근에 많이 사용하는 문법,with = context manager, 블럭 내부에서만 동작하기 때문에 파일 관리가 용이하다(블럭이 끝나면 자동으로 close()수행).
    for i in range(5):
        f.write(f'{i} is i\n')  #\t : tab , \\ : '\' 문자 , \' & \" : 따옴표, 쌍따옴표 문자
        f.write('This is \'SSAFY!\'`,we use With context\n')

        