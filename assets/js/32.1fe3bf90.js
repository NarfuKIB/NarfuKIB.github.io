(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{325:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"a-needle-in-a-havestack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-needle-in-a-havestack"}},[t._v("#")]),t._v(" a needle in a havestack")]),t._v(" "),a("hr"),t._v(" "),a("ol",[a("li",[t._v("Разархивируем и видим что в папке ещё куча папок, углубляемся и находим файл. Но в файте пароля нет.")]),t._v(" "),a("li",[t._v("Напишем скприпт на Python, который переберёт все файлы и выведет нам уникальные значения")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\n\nhavstack "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("r'havstack'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# путь до папки")]),t._v("\n\nfile_data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dirs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" files "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("walk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("havstack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("file")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" files"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        file_path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file_path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            file_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Получили такой результат, видим строчку "),a("code",[t._v("you password - dzMza3tjODYyMjgxMTA4NDNmZDk4MTBmYjg1NGJlNzY1MDAxMjg2ZjRmNmY2N2QyMjNkY2ZjYmMzY2NlNmY3OGZmYzI2fQ==")]),t._v(" "),a("img",{attrs:{src:"images/img.png",alt:"img.png"}})]),t._v(" "),a("li",[t._v("Суём в "),a("code",[t._v("base64decoder")]),t._v(" и забираем флаг")])]),t._v(" "),a("p",[a("strong",[t._v("Флаг")]),t._v(" "),a("code",[t._v("w33k{c86228110843fd9810fb854be765001286f4f6f67d223dcfcbc3cce6f78ffc26}")])])])}),[],!1,null,null,null);a.default=e.exports}}]);