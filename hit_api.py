import requests
import json

url = 'http://192.168.1.3:8080/rpi_led'
payload = { 'name' : 'Change lights \n' } 
print requests.post(url,json=payload).json()

