import random
ssafy = {
    "location": ["서울", "대전", "구미", "광주"],
    "language": {
        "python": {
            "python standard library": ["os", "random", "webbrowser"],
            "frameworks": {
                "flask": "micro",
                "django": "full-functioning"
            },
            "data_science": ["numpy", "pandas", "scipy", "sklearn"],
            "scrapying": ["requests", "bs4"],
        },
        "web" : ["HTML", "CSS"]
    },
    "classes": {
        "gm":  {
            "lecturer": "junwoo",
            "manager": "pro-gm",
            "class president": "엄윤주",
            "groups": {
                "1조": ["강대현", "권민재", "서민수", "이규진"],
                "2조": ["박재형", "서민호", "윤종원", "이지현"],
                "3조": ["김미진", "김영훈", "엄윤주", "여성우"],
                "4조": ["김교훈", "김유림", "송현우", "이현수", "진민재", "하창언"],
            }
        },
        "gj": {
            "lecturer": "change",
            "manager": "pro-gj"
        }
    }
}
print(len(ssafy['location']))
print("requests" in list(ssafy["language"]["python"]["python standard library"]))
print(ssafy["classes"]["gm"]["class president"])
for i in ssafy["language"].keys():
    print(i)
for i in ssafy["classes"]["gj"].values():
    print(i)
for i,j in (ssafy["language"]["python"]["frameworks"].items()):
    print(f'{i}는 {j}이다.')
print(F'오늘의 당번은 {random.choice(ssafy["classes"]["gm"]["groups"][random.choice(list(ssafy["classes"]["gm"]["groups"].keys()))])}')
