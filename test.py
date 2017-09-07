
import requests

goal = requests.get('http://localhost:3000/robot/goal')
print(goal.text)