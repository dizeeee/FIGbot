import discord
from discord.ext import commands
import subprocess

def figlet(text):
    result = subprocess.run(['figlet', text], stdout=subprocess.PIPE)
    return result.stdout.decode('utf-8')

token = input('What is your token?: ')

bot = commands.Bot(command_prefix='!')

@bot.event
async def on_ready():
    print(''' _____ ___ ____ _           _
|  ___|_ _/ ___| |__   ___ | |_
| |_   | | |  _| '_ \ / _ \| __|
|  _|  | | |_| | |_) | (_) | |_
|_|   |___\____|_.__/ \___/ \__|''')
    print('Connected!')
    print('User: ' + bot.user.name)
    print('ID: ' + bot.user.id)

@bot.command()
async def fig(input):
    await bot.say('```' + figlet(input) + '```')

@bot.command()
async def fighelp():
    await bot.say('''``` _____ ___ ____ _           _
|  ___|_ _/ ___| |__   ___ | |_
| |_   | | |  _| '_ \ / _ \| __|
|  _|  | | |_| | |_) | (_) | |_
|_|   |___\____|_.__/ \___/ \__|```
A bot made by Dizee with FIGlet

`!fig (word)` - Makes ASCII text out of a word (Note: cannot have any spaces)
`!fighelp` - Displays this dialogue

You can donate Bitcoin to: 1G2gxfbRNgPfW6ajM6PpCFDWeuWfLePpUW
Github: https://github.com/Dizeeee/FIGbot''')

bot.run(token)
