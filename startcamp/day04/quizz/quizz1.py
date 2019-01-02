score = {
    '수학': 80,
    '국어': 90,
    '음악': 100
}
j=0
sum=0
for i in score.values() :
    j+=1
    sum+=i

print(sum/j)  