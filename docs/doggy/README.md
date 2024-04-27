# Friendly-Doggy

---

1. Сначала необходимо проверить изображение с помощью утилиты Binwalk, чтобы убедиться, вшит ли архив с дампом процесса в изображение:

2. Если Binwalk показывает наличие архива, можно изменить расширение изображения, чтобы получить доступ к дампу процесса.

3. После этого используем volatility для анализа дампа: so interesting

4. Посмотрим список процессов python .\vol.py -f .\memdump.mem windows.pslist

5. Чтобы посмтотреть MFT таблицу используем python .\vol.py -f .\umemdump.mem windows.mftscan:

6. и найдем там файл с названиемм "so interesting.txt"
   по его временным меткам и меткам процесса notepad.exe пойдем, что нужно сдампить процесс notepad.exe

7. для дальнейшего анализа неоходимо сдампить процесс блокнота, его pid 4676
python .\vol.py -f .\memdump.mem windows.memmap --dump --pid 4676

8. Используя утилиту strings запишем дамп процесса в текстовый файл.

9. Откроем текстовый файл через Notepad++ и будем искать фалг по подстроке "dzMza3" (w33k в кодировке base64).
10. найдем dzMza3tmNTEyMWEzOGFjY2FlNTBkMGZlMDM0MmRjOTBiOWQ5N2VmOGI0OTliNzE5ZjFiNTNkNGQ1YmQ3NmU0OWY1YzRifQ==, переведеи из base64 и получим 
w33k{f5121a38accae50d0fe0342dc90b9d97ef8b499b719f1b53d4d5bd76e49f5c4b}

Флаг: w33k{f5121a38accae50d0fe0342dc90b9d97ef8b499b719f1b53d4d5bd76e49f5c4b}
