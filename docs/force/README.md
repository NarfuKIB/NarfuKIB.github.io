# Обрести силу

---

Пробуем открыть полностью и видим хинт:

image

Хинтец неоднозначно указывает на использование stegsolve'а  - юзаем. В поисках по plane'ам находим вот это:

image

:smirking_face: Хмм а это судя по всему какие то данные давайте прочитаем в data extract'е

image

а вот и скриптец!

image

Вынимаем его оттуда любым способом и вставляем в редактор, запускаем применимо к этому файлу и видим brainfuck? тут таска ломается есть 2 решения:

## Ломанное решение

Мы просто пытаемся ломанный брейнфак восстановить обрезанием предполагая что флаг/следующее задание безумца зашито именно там

> Брейнфак - стековая вм так что даа в стеке данные )))

Получаем **флаг** week{}

## Решение починенной таски(ту которую я думал изначально)

Запускаем bf видим нас просят что-то ввести:

image

Либо брутим(глупо) либо реверсим/читаем bf(чисто для машин):

image

можно поступить как в старом решении и удалить кусок ну или сделать вставку бакса и получить флаг!!

p.s. Не ленитесть делать тесты даже для тасок на ctf а то получится точно такой же факап!
