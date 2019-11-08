"# 은 헤더를 나타낸다. 개수에 따라서 크기가 달라진다 (6개 까지가능)."

# TIL

## Day 01

### github rkdlq

#### h4

##### h5

###### h6

"*은 리스트를 만들수 있습니다..."

* 리스트를 만들 수 있습니다.
* 이렇게 말이죠.

"숫자를 매기면 숫자인덱싱 가능."

1. 숫자가 있는 리스트.
2. 무엇을 써야할까



"```는 코드를 칠수가 있음"

```python
import requests
import bs4

response = requests.get('https://finance.naver.com/marketindex/').text
soup = bs4.BeautifulSoup(response, 'html.parser')
result= soup.select_one('#exchangeList > li.on > a.head.usd > div > span.value').text

print('미국 환율은 '+result+' 입니다')
print("미국 환율은 {0} 입니다!!!".format(result))
print('^o^')
```

```bash
git config --global user.name 'Changun Ha
```

#### vscode 기본  terminal 변경

- `ctrl + shift + p` > shell > default > git bash