""" This module will INROLL new finger ID.

USAGE: python ./get_finger_id.py
"""

import serial
import time
import re

returned_id = None

# set up the serial line
with serial.Serial('/dev/ttyUSB0', 9800, timeout=1) as ser:
    time.sleep(2)

    read_val = None

    finger_id = 'GETFINGERID' + '\n'
    to_bytes = bytes(finger_id, "utf8")
    print(to_bytes)
    b = ser.write(to_bytes)  # read a byte string
    time.sleep(2)

    while read_val != "Found ID":
        read_val = ser.read(size=64)
        decoded = read_val.decode("utf-8")
        print(decoded)
        if decoded.find('Found ID') is not -1:
            print("Found ID:")
            returned_id = map(int, re.findall(r'\d+', decoded))
            print(returned_id)
    ser.close()
