// Import Packages
const discord = require('discord.js');
const figlet = require('figlet')
const client = new discord.Client();

// File system IO
const fs = require('fs');

// Check if config exists and generate template if false
if (!fs.existsSync('./config.json')) {
  fs.writeFileSync('./config.json', '{\n  \"token\": \"\",\n  "prefix": "!"\n}', 'utf8');
  console.log('Config not found, creating...');
  console.log('Please set your token in config.json!');
}

// Pull config info
var config = fs.readFileSync('./config.json');
config = JSON.parse(config);

// Store config values
var token = config.token;

// Ready message
client.on('ready', () => {
  console.log('FIGbot loaded!\n');
  client.user.setPresence({ game: { name: '!fighelp' }, status: 'online' })
    .then(console.log('ID: ' + client.user.id))
    .then(console.log('Username: ' + client.user.username))
    .then(console.log('Discrim.: ' + client.user.discriminator))
    .then(console.log('Avatar: ' + client.user.avatar))
    .catch(console.error)
});

// Commands
client.on('message', message => {
  // Check if message was not written by bot and starts with prefix
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;

  // Convert input into usable command with arguments in array
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase(); // Yeet the input to lowercase so all cases of the command work

  if (command == 'fig' || command == 'fighelp') {
    var cmd = require('./figbot.js')(command, args, message, client, config);
  }
});

client.login(token);
