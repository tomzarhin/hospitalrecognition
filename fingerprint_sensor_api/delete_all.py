""" This module will DELETE all fingers in sensor database.

USAGE: python ./delete_all.py
"""

import serial
import time

returned_id = None

# set up the serial line
with serial.Serial('/dev/ttyUSB0', 9800, timeout=1) as ser:
    time.sleep(2)

    finger_id = 'DELETEALL' + '\n'
    to_bytes = bytes(finger_id, "utf8")
    print(to_bytes)
    b = ser.write(to_bytes)  # read a byte string
    time.sleep(2)

    while read_val != "Now database is empty :)":
        read_val = ser.read(size=64)
        decoded = read_val.decode("utf-8")
        print(decoded)
    ser.close()
