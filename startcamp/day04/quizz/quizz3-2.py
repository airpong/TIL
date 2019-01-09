# 3. 도시별 최근 3일의 온도입니다.
city = {
    '서울': [-6, -10, 5],
    '대전': [-3, -5, 2],
    '광주': [0, -2, 10],
    '부산': [2, -2, 9],
}
# 3-2. 도시 중에 최근 3일 중에 가장 추웠던 곳, 가장 더웠던 곳은?
mintem = 100
maxtem = -100
maxcit = ""
mincit = ""
for cit in city.keys() : 
    for tem in city[cit]:
        if tem > maxtem :
            maxcit = cit
            maxtem = tem
        if tem < mintem :
            mincit = cit
            mintem = tem
        
# 아래에 코드를 작성해 주세요.
print(f'최근 3일중 가장 온도가 높았던 지역은 {maxcit}에서 {maxtem}도 이였고, 가장 온도가 낮았던 지역은 {mincit}에서 {mintem}도 였습니다.')