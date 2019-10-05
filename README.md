# FIGbot
Discord bot for ASCII text art with figlet. Now written in node.js and slightly improved

## Requirements
* latest version of npm and node
  * `sudo apt-get install curl`
  * `curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -`
  * `sudo apt-get install nodejs`

* Required npm packages
	* discord.js
	* figlet

## Startup
* `cd FIGbot` | cd to the directory

* `sudo npm install` | to install the required npm packages

* `sudo npm start index.js` | To start for the first time

**Note that the first time you will get an error, stating**
>Config not found, creating...
Please set your token in config.json!
(node:78) UnhandledPromiseRejectionWarning: Error: An invalid token was provided....

*This is fine*, as the first two lines say, the config file was generated for you. In there you must paste your bot token in the `token` section of the generated `config.json` and optionally change the command prefix (the symbol to activate the bot commands).

After inputting your token, rereun `sudo npm start index.js` to start the bot and test it.

## Running as a Service
* You must create an unprivileged account for the node scripts to run under to avoid potential hassle when running with systemd.

Create the file `/etc/systemd/system/fig-bot.service` and input the following
> [Unit]
> Description=ORRERbot for Discord
>
> After=network.target
>
>[Service]
>
>Type=simple
>
>User=botuser
>
>ExecStart=/usr/bin/npm --prefix=/home/botuser/FIGbot/  start /home/botuser/FIGbot/index.js
>
> Restart=always
>
> RestartSec=3
>
>[Install]
>WantedBy=multi-user.target
