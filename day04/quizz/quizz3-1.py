# 3. 도시별 최근 3일의 온도입니다.
city = {
    '서울': [-6, -10, 5],
    '대전': [-3, -5, 2],
    '광주': [0, -2, 10],
    '부산': [2, -2, 9],
}

# 3-1. 도시별 최근 3일의 온도 평균은?

# 아래에 코드를 작성해 주세요.
for cit in city.keys() :
    sum=0
    for tem in city[cit]:
        sum += tem
    print('{0} : {1}'.format(cit,round(sum/len(city[cit]),2)))
