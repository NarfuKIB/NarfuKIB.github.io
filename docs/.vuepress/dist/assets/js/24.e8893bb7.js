(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{317:function(n,e,t){"use strict";t.r(e);var r=t(14),a=Object(r.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"жоская-воронцовская-крипта"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#жоская-воронцовская-крипта"}},[n._v("#")]),n._v(" Жоская воронцовская крипта")]),n._v(" "),e("hr"),n._v(" "),e("p",[n._v("Ситуация следующаяя:")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("from base64 import b64decode,b64encode\n#flag = w6USWUASwp98U1TDh15hZHvDuXkEw6/CoErDsMKKwoPCmE3CkTAkwqwoLXsZPStGOQUdY1sZAcO+w7BOXcO+GMKxwqxLOEjDgmEcw4F+wqXCicOtJ8OWw47Cl1jDusOuVg==\n#test RXhhbXBsZW9meG9y -> w5dZC0YZwpF8DQDDmwlx\n\ninp,n1,n2= input().split()\ninp=b64decode(inp).decode()\ndef get_key(n,x):\n    m=[62057,56713,52957]\n    rez=[(x[0]+x[1])%i for i in m]\n    for i in range(n-3):\n        rez.append((rez[i]*x[0]+x[1]*((i+1)%2))%m[i%3])\n    return rez\n\ninp = [(ord(inp[i])<<8) +ord(inp[i+1]) for i in range(0,len(inp),2)]`                \nprint(b64encode(''.join(( chr(k>>8)+chr(k&0xff) for k in [(i^j) for i, j in zip(inp,get_key(len(inp),[int(n1),int(n2)]))])).encode()))\n")])])]),e("p",[n._v("Если всмотреться в код внимательно можно увидеть следующие моменты:")]),n._v(" "),e("ul",[e("li",[n._v("Помимо флага есть какой-то test в комментах")]),n._v(" "),e("li",[n._v("base64 ничего не решает, а просто путает")]),n._v(" "),e("li",[n._v("Есть xor'инг на какие то чиселки")])]),n._v(" "),e("p",[n._v("Если поксорить тест то можно найти ключики генератора и проверить будет ли флаг криптоваться теми же числами:")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('from base64 import b64decode\n\n\nflag = "w6USWUASwp98U1TDh15hZHvDuXkEw6/CoErDsMKKwoPCmE3CkTAkwqwoLXsZPStGOQUdY1sZAcO+w7BOXcO+GMKxwqxLOEjDgmEcw4F+wqXCicOtJ8OWw47Cl1jDusOuVg=="\n\nflag=b64decode(flag).decode()\n\nt1="RXhhbXBsZW9meG9y"\nt2="w5dZC0YZwpF8DQDDmwlx"\n\nt1=b64decode(t1).decode()\nprint(t1)\nt2=b64decode(t2).decode()\n\ndef toArray(inp):\n    return [(ord(inp[i])<<8) +ord(inp[i+1]) for i in range(0,len(inp),2)]\n\nkey=[i^j for i,j in zip(toArray(t1),toArray(t2))]\nprint(\'\'.join(( chr(k>>8)+chr(k&0xff) for k in [(i^j) for i, j in zip(toArray(flag),key)])).encode())\n\nprint(f"t1 numbers{toArray(t1)} \\nt2 numbers{toArray(t2)} \\npart of key {key}")\n')])])]),e("p",[n._v("Вывод будет такой:")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("Exampleofxor\nb'w33k{be12d8b'\nt1 numbers[17784, 24941, 28780, 25967, 26232, 28530] \nt2 numbers[55129, 2886, 6545, 31757, 219, 2417] \npart of key [37409, 27179, 27133, 6498, 26275, 26115]\n")])])]),e("p",[n._v("Теперь вторая часть надо раскурить генератор(дважды китайская теорема об остатках, тупо кидаем в SageMath - https://sagecell.sagemath.org/ и ждем числеки):")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("l=[37409, 27179, 27133, 6498, 26275, 26115]\nm=[62057,56713,52957]\nc=CRT_list([37409, 27179, 27133],[62057,56713,52957])\nr=[(l[3]-c)%m[0],(l[4])%m[1],(l[5]-c)%m[2]]\ni=[inverse_mod(l[0]-1,m[0]),inverse_mod(l[1],m[1]),inverse_mod(l[2]-1,m[2])]\na=[(r[0]*i[0])%m[0],(r[1]*i[1])%m[1],(r[2]*i[2])%m[2]]\nt=CRT_list(a,m)\nb=[(l[0]-t)%m[0],(l[1]-t)%m[1],(l[2]-t)%m[2]]\nt2=CRT_list(b,m)\nprint(t,t2)\n")])])]),e("p",[n._v("Добавляем числа в таску получаем флаг(в base64):")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("w6USWUASwp98U1TDh15hZHvDuXkEw6/CoErDsMKKwoPCmE3CkTAkwqwoLXsZPStGOQUdY1sZAcO+w7BOXcO+GMKxwqxLOEjDgmEcw4F+wqXCicOtJ8OWw47Cl1jDusOuVg== 105972126952042 106632950324271\nb'dzMza3tiZTEyZDhiYjNjZWQzZjQwNTkyNDU5YWVjNzhiZTk3MjZkYWY1NjcwOGZiZmY1OTA4ZDI2MDZlYWRhN2E5ZTlhfQ=='\n")])])]),e("p",[n._v("Декодим и...")]),n._v(" "),e("p",[e("strong",[n._v("Флаг")]),n._v(" w33k{be12d8bb3ced3f40592459aec78be9726daf56708fbff5908d2606eada7a9e9a}")])])}),[],!1,null,null,null);e.default=a.exports}}]);