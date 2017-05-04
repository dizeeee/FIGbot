# just gonna get figlet working atm
import subprocess
result = subprocess.run(['figlet', 'a'], stdout=subprocess.PIPE)
print(result.stdout.decode('utf-8'))
'''
 ___ _
/  _` |
| (_| |
\___,_|'''
