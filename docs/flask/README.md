# Flask Calculator

---

1. В Dockerfile, видим что флаг находится в файле flag в директории /
2. Попробуем что-нибудь по-вводить в калькулятор, видим что упираемся в лимит 9 символом. Отредактируем значение `maxlength`. (вообще можно юзать Postman так будет намного удобнее)
3. Попробуем использовать не ASCII символы в калькуляторе, например Italic. Видим что всё проходи, но файл читаться не будет.
4. Напишем название файла в восьмеричном формате, закинем в калькулятор и получим флаг
`𝑜𝓅𝑒𝓃('/57/146/154/141/147').𝓇𝑒𝒶𝒹()`



**Флаг** `w33k{fb649ec371fd7c8950ec0c7c8cc2eea48a53b9f4100a4b15970dfae99caafafc}`
