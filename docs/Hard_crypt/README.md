# Жоская воронцовская крипта

---

Ситуация следующаяя:

```
from base64 import b64decode,b64encode
#flag = w6USWUASwp98U1TDh15hZHvDuXkEw6/CoErDsMKKwoPCmE3CkTAkwqwoLXsZPStGOQUdY1sZAcO+w7BOXcO+GMKxwqxLOEjDgmEcw4F+wqXCicOtJ8OWw47Cl1jDusOuVg==
#test RXhhbXBsZW9meG9y -> w5dZC0YZwpF8DQDDmwlx

inp,n1,n2= input().split()
inp=b64decode(inp).decode()
def get_key(n,x):
    m=[62057,56713,52957]
    rez=[(x[0]+x[1])%i for i in m]
    for i in range(n-3):
        rez.append((rez[i]*x[0]+x[1]*((i+1)%2))%m[i%3])
    return rez

inp = [(ord(inp[i])<<8) +ord(inp[i+1]) for i in range(0,len(inp),2)]`                
print(b64encode(''.join(( chr(k>>8)+chr(k&0xff) for k in [(i^j) for i, j in zip(inp,get_key(len(inp),[int(n1),int(n2)]))])).encode()))
```
Если всмотреться в код внимательно можно увидеть следующие моменты:
- Помимо флага есть какой-то test в комментах
- base64 ничего не решает, а просто путает
- Есть xor'инг на какие то чиселки

Если поксорить тест то можно найти ключики генератора и проверить будет ли флаг криптоваться теми же числами:

```
from base64 import b64decode


flag = "w6USWUASwp98U1TDh15hZHvDuXkEw6/CoErDsMKKwoPCmE3CkTAkwqwoLXsZPStGOQUdY1sZAcO+w7BOXcO+GMKxwqxLOEjDgmEcw4F+wqXCicOtJ8OWw47Cl1jDusOuVg=="

flag=b64decode(flag).decode()

t1="RXhhbXBsZW9meG9y"
t2="w5dZC0YZwpF8DQDDmwlx"

t1=b64decode(t1).decode()
print(t1)
t2=b64decode(t2).decode()

def toArray(inp):
    return [(ord(inp[i])<<8) +ord(inp[i+1]) for i in range(0,len(inp),2)]

key=[i^j for i,j in zip(toArray(t1),toArray(t2))]
print(''.join(( chr(k>>8)+chr(k&0xff) for k in [(i^j) for i, j in zip(toArray(flag),key)])).encode())

print(f"t1 numbers{toArray(t1)} \nt2 numbers{toArray(t2)} \npart of key {key}")
```

Вывод будет такой:

```
Exampleofxor
b'w33k{be12d8b'
t1 numbers[17784, 24941, 28780, 25967, 26232, 28530] 
t2 numbers[55129, 2886, 6545, 31757, 219, 2417] 
part of key [37409, 27179, 27133, 6498, 26275, 26115]
```

Теперь вторая часть надо раскурить генератор(дважды китайская теорема об остатках, тупо кидаем в SageMath - https://sagecell.sagemath.org/ и ждем числеки):

```
l=[37409, 27179, 27133, 6498, 26275, 26115]
m=[62057,56713,52957]
c=CRT_list([37409, 27179, 27133],[62057,56713,52957])
r=[(l[3]-c)%m[0],(l[4])%m[1],(l[5]-c)%m[2]]
i=[inverse_mod(l[0]-1,m[0]),inverse_mod(l[1],m[1]),inverse_mod(l[2]-1,m[2])]
a=[(r[0]*i[0])%m[0],(r[1]*i[1])%m[1],(r[2]*i[2])%m[2]]
t=CRT_list(a,m)
b=[(l[0]-t)%m[0],(l[1]-t)%m[1],(l[2]-t)%m[2]]
t2=CRT_list(b,m)
print(t,t2)
```

Добавляем числа в таску получаем флаг(в base64):

```
w6USWUASwp98U1TDh15hZHvDuXkEw6/CoErDsMKKwoPCmE3CkTAkwqwoLXsZPStGOQUdY1sZAcO+w7BOXcO+GMKxwqxLOEjDgmEcw4F+wqXCicOtJ8OWw47Cl1jDusOuVg== 105972126952042 106632950324271
b'dzMza3tiZTEyZDhiYjNjZWQzZjQwNTkyNDU5YWVjNzhiZTk3MjZkYWY1NjcwOGZiZmY1OTA4ZDI2MDZlYWRhN2E5ZTlhfQ=='
```

Декодим и...

**Флаг** w33k{be12d8bb3ced3f40592459aec78be9726daf56708fbff5908d2606eada7a9e9a}
