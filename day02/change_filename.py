import os

os.chdir(r'C:\Users\student\hcu\day02\dummy')
#print(os.getcwd())
for filename in os.listdir(''):    #os 모듈에게 listdir(디렉토리의 리스트를 가지고 와라)/'.' 모든파일!
    os.rename(filename,filename.replace('지원자','합격자'))    #rename(바꾸고자 하는 기존 이름, 바꿀 이름) , os.rename(filename,f'지원자_{filename}')