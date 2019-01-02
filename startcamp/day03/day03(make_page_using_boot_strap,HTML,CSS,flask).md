### git command

* git clone 주소 : 
* 

### boot strap을 이용해서 페이지 만들기

- github.com/new  접속
- 나의 아이디와 똑같은 페이지 생성 (airpong.github.io)

- `git clone 주소`를 사용해서 폴더 생성(git의 관리대상으로 자동지정,init 동기화가 이미 되어있다)

- 트위터 회사에서 만든 이미 꾸며진 프레임 워크. 만들어진 템플릿을 가져다 쓰기만 하면된다.

- bootstram template로 검색

- 원하는 템플릿 다운로드

- 내가 만든 폴더에 붙여넣은 뒤 vs code로 열기

- 커밋,푸쉬

- 내가 만든 사이트에 생성된 것 확인


### HTML

- VS code에서 `html:5`를 통해 기본 폼을 작성
- "<title>"사이트의 제목을 표시하는 곳"</title>"
- 화면에 보이는 대부분의 텍스트, 컨텐츠는 `<body>` 태그 안에 작성
  - `<h> `하이라이트 문자를 만들어줌`</h> `
  - `<p>` 하나의 paragraph를 만드는 태그. 별도의 태그가 없으면 줄바꿔서 작성을 해도 수행 되지 않는다.`</p>`
  - `<br>` 줄바꿈 태그. 마침 태그(`</bt>`)가 필요없다.
  - `<ul>` unordered list 의 약자로, 점으로 찍힌 리스트가 나열`</ul>`
  - `<li>`하나의 list`</li>`
  - `<ol>`ordered list 의 약자로, 숫자로 리스트 나열`</ol>`
  - `<div>` 텍스트,컨텐츠를 쓰는 박스, p태그와 다르게 정렬, 위아래 여백 등이 없다. `</div>`
  - `<img src="./ocean.jpg" alt="">`:이미지를 입력하는 방법
    - src 안에 이미지 주소를 복사해서 넣어도 가능

### CSS

- `<style>`태그는 헤드와 바디 사이에 적으며 태그별 속성을 정할 수 있다.

- ```css
  <style>
      h1,h3 {
          color:beige;
  
      }
      ul{
          color: aqua;
      }
  </style>
  ```

- id와 클래스를 통해서 내가 지정하는 대상 or 집단에 속성 부여 가능

  - id에 대한 style은 id이름 앞에 #을 붙여서 작성한다

    - ```css
      #green{
              color: green;
          }
      ```

  - class는 해당 클래스를 가지고 있는 모든 태그에 적용이 되며 클래스 이름 앞에 . 을 붙인다

    - ```css
          .yellow{
              color:yellow;
          }
      ```



- ######  인라인 스타일

  - 가장 최우선으로 적용되는 css이며 적용시키는 태그 안에 작성하게 된다

  - ``` html
    <p style="color:pink;">이것은 p태그입니다.이것은 p태그입니다.<br>이것은 p태그입니다.이것은 p태그입니다.</p>
    ```

- 적용 순서는 인라인->id->class->태그 이름(h1,ul)등으로 하는것 순이다.

### flask

-  기본적으로 사이트를 새로 만들때는 아래와 같이한다

  - ```python
    from flask import Flask
    app = Flask(__name__)
    @app.route("/")     #decorator
    def hello():
        return "Hello World!"
    ```

    - 새로운 주소를 만들고 싶을 때 마다 `@app.route("/") `여기서` /새로운 주소`를 입력하면 작성 가능하다

- string,int 와 같은 변수를 함께 받을 수 있다

  - ```python
    @app.route("/greeting/<string:name>")
    def greeting(name):
        return f'{name}님 반갑습니다.
    ```

    - 주소창에 작성 할때는 `/greeting/창언`과 같이 넘겨준다. 

- html 태그를 사용할 수 있다.

  - ```python
    @app.route("/html")
    def httt():
        return '''
            <h1>여기는 </h1>
        '''
    ```

- html 파일을 새로 만들어서 주소창에 접근할 때 그 파일을 불러와 페이지에 뿌릴수 있다.

  1. import render_template 

  2. flask.py 가 있는 폴더에 templates 폴더를 생성

  3. 아래와 같이 리턴값 작성

     - ```PYTHON
       @app.route("/html_file")
       def heml_file():
           return render_template('html_file.html')
       ```

     - render_template() 함수 안의 인자와 같은 파일을 templates 폴더에 생성

     - 생성한 파일에 html 코드 작성, css 작성도 가능함

     - string, int 형 변수를 받아 생성한 문서에 사용가능

       - ```python
         @app.route("/hi/<string:name>")
         def hi(name):
             return render_template('hi.html',name=name)
         ```

         - 대상이 되는 html 문서에서 변수의 사용은 `{{}}`을 사용한다

           - ```html
             <style>
                 h1 {
                     color: red;
                 } 
             </style>
             <h1>만나서 반갑습니다!{{name}} 님!</h1>
             ```

### 오늘 할일

- 만들어논 사이트 나에 해당 하는 정보로 바꾸고 여러 가지 작업 해보기.
- 내가 만든 사이트 코드 분석하고 이해하기