import cv2

cap=cv2.VideoCapture('R1ckR0ll.avi')
success, frame =cap.read()
qcd=cv2.QRCodeDetector()
i=0;
while True:
    decoded, points, _ =qcd.detectAndDecode(frame)
    success, frame =cap.read()
    if points is not None and len(decoded)>1:print(decoded,i)
    i+=1
