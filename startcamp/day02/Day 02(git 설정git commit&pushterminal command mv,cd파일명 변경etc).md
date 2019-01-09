# Day 02(git 설정/git commit&push/terminal command mv,cd/파일명 변경/etc)

### GIT 설정

* `git config --global user.name 'Changun Ha'`
* `git config --global user.email 'giponge@gmail.com'`
* `git init`:git초기화,git으로 관리하겠다
* `git remote add orgin 주소`:원격 저장소 등록
  * `git remote set -url origin 주소`:원격 저장소 수정
* `git credential reject \n protocol = https \n host=github.com
### git Commit & push

* `git push origin master` :git 사이트에 업로드
* `git push -u origin master` :현재 컴퓨터와 git 의 branch 이름이 동일하면 뒤의 커맨드 생략
  * 이후에는 `git push`만 사용해도 동작
* `git status`:내 git의 commit 완료 등의 상태
* `git add .`:현재 폴더의 변경사항들을 commit하기 위해서 준비
* `git commit (-m 'day 02입니다.')'`:commit, 변경 사항 저장, 메세지는 자유롭게 작성					

### terminal(bash) 커맨드 mv,cd 

* mv = 이동 커맨드 ex ) mv *.txt day02/dummy/

* cd = 파일 디렉토리 변경


### 파일명 변경

1. `os.chdir(r'폴더 주소')`
2. `os.listdir('.')`:  현재 working directory의 파일 목록 리스트로
3. `os.rename('바꾸고자 하는 기존 이름','바꿀 이름')`

### 파일 생성 및 쓰기

1. open 함수를 이용해서 객체에 저장

   1. 생성된 객체를 이용해서 객체.write와 같은 함수사용
   2. 객체.close() 를 통해 객체 소멸

2. with~as 를 이용해서 블록 안에서 객체 사용

   1. 블록안에서 객체를 사용한 후 자동 소멸 되기에 관리가 용이

   2. 블록 안에서 위와 같이 객체.함수() 의 형태로 사용

   3. ```python
      with open('ssafy.txt','w',encoding='utf8') as f: 
          for i in range(5):
              f.write(f'{i} is i\n') 
              f.write('This is \'SSAFY!\'`,we use With context\n')
      ```

3. open 의 모드에 관한 것

   1. 'w' :  새로운 파일을 만들어 저장한다. 기존에 있다면 위에 덮어쓴다.
   2. 'a' : 만들어진 파일을 가져와 뒤에 붙여쓴다
   3. 'r' : 작성된 파일을 불러와 읽는 작업 수행

4. **etc**

   1. f.write("abc") = abc 문자열을 작성한다
   2. f.writelines(['a','b','c']) = list를 찍는다

### CSV(comma separated value) 파일 형식 사용

* csv란 보편적으로 사용하는 자료 저장 형식으로 보통 ','를 사용해 문자를 구분한다.

* ###### csv 형식 write(dict 기준)

  1. csv 모듈을 사용하지 않는 방법
     1. csv의 확장자를 가지는 파일을 open(생성)후 객체(f)에 저장.
     2. dict.items() 를 통해 list 생성후 객체(item)에 저장
     3. 반복문을 통해 f.write('f'{item[o]},{item[1]}') 으로 작성
  2. csv 모듈을 사용하는 방법
     1. csv 모듈 import
     2. csv의 확장자를 가지는 파일을 open(생성)후 객체(f)에 저장.
     3. csv_writer=csv.writer(f) 으로 csv 쓰기 객체 생성
     4. dict.items() 를 통해 list 생성후 객체(item)에 저장
     5. 반복문을 통해 csv_writer.writerow(item)으로 작성
  3. read 는 open에서 모드를 r 로 선택


### 크롤링

* 셀렉터

  * .class : 태그에 클래스를 참조할때

  * '>' : 바로 안쪽 태그로 경로 지정 여러개의 태그가 있을 경우 선택가능

  * ':' : active link 선택

  * ##### 내가 크롤링 하고 싶은 부분의 셀럭터 확인 방법

    * 단일일 경우 크롬에서 copy -> selector 선택
    * 여러개일 경우 찾아야 하는데 위의 형식을 이용해 디렉토리를 찾아간다. 

* select_one 은 해당 셀렉터 값 하나를 가져오는 것

* select 는 해당 셀렉터에 해당하는 모든 값의 list를 반환해줌

* ### selenium 확인하자


### etc

`https://education.github.com/pack`:git student pack 다운로드 가능