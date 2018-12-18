# Day 02(git 설정/git commit&push/terminal command mv,cd/파일명 변경/etc)

### GIT 설정

* `git config --global user.name 'Changun Ha'`
* `git config --global user.email 'giponge@gmail.com'`
* `git init`:git초기화,git으로 관리하겠다
* `git remote add orgin 주소`:원격 저장소 등록
  * `git remote set -url origin 주소`:원격 저장소 수정

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

### etc

`https://education.github.com/pack`:git student pack 다운로드 가능