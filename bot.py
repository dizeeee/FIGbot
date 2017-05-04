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
    print('Connected!')
    print('User: ' + bot.user.name)
    print('ID: ' + bot.user.id)

@bot.command(description='Prints ASCII text')
async def fig(input):
    await bot.say('```' + figlet(input) + '```')

bot.run(token)
