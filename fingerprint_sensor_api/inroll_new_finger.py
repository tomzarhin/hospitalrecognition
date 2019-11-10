""" This module will INROLL new finger ID.

USAGE: python ./inroll_new_finger.py -id 3
"""

import serial
import time
import argparse

# construct the argument parse and parse the arguments
ap = argparse.ArgumentParser()
ap.add_argument("-id", "--new_id", type=int, required=True,
                help="new ID to assign for a new finger.")
args = vars(ap.parse_args())

# display a friendly message to the user
print("New ID entered: {}".format(args["new_id"]))

# set up the serial line
with serial.Serial('/dev/ttyUSB0', 9800, timeout=1) as ser:
    time.sleep(2)

    id = args["new_id"]
    read_val = None

    inroll_new_finger = 'INROLL' + str(id) + '\n'
    to_bytes = bytes(inroll_new_finger, "utf8")
    print(to_bytes)
    b = ser.write(to_bytes)  # read a byte string
    time.sleep(2)

    # Read the feedback from Serial. and check if Fingerprint matched.
    # theres too stages authentications,
    # so if the result is "Fingerprints did not match", the INROLLMENT failed.

    while (read_val != "DONE INROLLING"):
        read_val = ser.read(size=64)
        decoded = read_val.decode("utf-8")
        print(decoded)
        if (decoded.find('Fingerprints did not mat') != -1):
            print("Fingerprints did not match!!!")
    ser.close()
