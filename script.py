#!/usr/bin/python3.5
import json
import sys
f = open('log.txt', 'a+')
data = json.loads(sys.argv[1])
f.write(data['name'])
