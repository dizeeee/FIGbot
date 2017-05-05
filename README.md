# FIGbot
A Discord bot that prints ASCII text using FIGlet.

## Requirements
- [FIGlet](http://www.figlet.org/)
- [Python 3.5+](https://www.python.org/)
- [discord.py](https://github.com/Rapptz/discord.py)
- A GNU/Linux distro of your choice

## Setup
First things first, get FIGlet installed. You should check your distro's repos for a packaged version first, otherwise, you can find the source code [here.](http://www.figlet.org/) To compile FIGlet, simply download the source in a directory of your choice open a command prompt and type `make`, then `sudo make install`. You can test FIGlet by typing `figlet test`, you should get an ASCII string that says test.

Python is bundled with virtually every distro in existance, so I'm not going to say much more than to type `python3` into a console and checking the version number it gives.

discord.py has installation instructions on its Github page, however all you really need to know is that `python3 -m pip install -U discord.py` installs everything you need for this bot, and `python3 -m pip install -U discord.py[voice]` installs the additional voice library.
