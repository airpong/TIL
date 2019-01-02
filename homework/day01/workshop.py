"""
1번
n = int(input())
m = int(input())
word = "*"*n
word = word + "\n"
word = word*m
word=word.rstrip("\n")
print(word,end="")
"""

"""
2번
Sum=0
student = {'python' : 80, 'algorithm': 99, 'django':80,'flask':83}
for key in student.values():
    Sum+=key
print(Sum/len(student))
"""

"""
3번
blood_types = ['A', 'B', 'A', 'O', 'AB', 'AB' ,'O', 'A' , 'B', 'O', 'B','AB']
blood = ['A','B','O','AB']
for bl in blood:
    print(bl,"형:",blood_types.count(bl))
"""