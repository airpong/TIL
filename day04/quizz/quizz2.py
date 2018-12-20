# 2. 반 평균을 구하시오.
scores = {
    'a': {
        '수학': 80,
        '국어': 90,
        '음악': 100
    },
    'b': {
        '수학': 70,
        '국어': 90,
        '음악': 100
    },
    'c': {
        '수학': 80,
        '국어': 80,
        '음악': 97
    }
}
# a ,b ,c 따로 나오게
'''
aver = []
classes = scores.keys()
for clas in classes :
    sum=0
    scoreOfclas=scores[clas].values()
    for score in scoreOfclas:
        sum += score
    aver.append(sum/len(scoreOfclas))
for average,clas in zip(aver,classes):
    print(f'{clas}반의 평균은 {round(average,1)}입니다.')
'''    

# a,b,c 합쳐서 나오게
aver = []
sum=0
count = 0
for clas in scores.keys() :
    scoreOfclas=scores[clas].values()
    for score in scoreOfclas:
        count +=1
        sum += score
print(f'반의 평균은 {round(sum/count,2)}입니다.')


