# Git & Github

## Git에 내 정보 설정

- `git config --global use.name 'Changun Ha' `: 이름 설정
- `git config -- global email ' giponge@gmail.com' `:  이메일 설정
- `git config --global --list`: 정보 설정 확인

## Git repo를 처음 생성한 경우

- `git init` : git 초기화. 지금 폴더를 git으로 관리하겠다!(관리하려는 폴더 안에서 입력)
- `git remote add origin 주소` : 원격 저장소(remote repository) 주소 등록
  - `git remote set - url origin 주소 ` : 원격 저장소 수정

## Git repo clone한 경우

- `git clone 주소 [폴더 이름]`: 이 주소로 부터 내용 [폴더 이름에] 내려받기
  - 이 경우에는 `git init`,`git remote add origin 주소`를 하지 않아도 이미 다 되어있다.



