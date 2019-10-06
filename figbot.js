// Import packages
const discord = require('discord.js');
const figlet = require('figlet');
const client = new discord.Client();

module.exports = function(command, args, message, client, config){
  if (command == 'fig'){
    if (args[0] != undefined){ // If !fig is sent with something in the first array slot (text to be processed), move on
      if (args[1] != undefined){ // If there is something in the first slot, check to see if there is something in the second (the font)
        var font = args[1].charAt(0).toUpperCase() + args[1].substring(1).toLowerCase(); // Set the specified font in the variable and format
        figlet.text(args[0], font, function(err, data) {
          if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            message.channel.send(`There is no font named "${font}"!`);
            return;
          }
          message.channel.send('```' + data + '```');
        });
      } else { // If there is text to be processed but no font specified, set the standard font and move on
        var font = 'Standard'
        figlet.text(args[0], font, function(err, data) {
          if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
          }
          message.channel.send('```' + data + '```');
        });
      }
    } else { // If there is nothing in the first array slot (text to be processed) tell the user to input text
      message.channel.send('You must specify text to be printed!');
    }
  } else if (command == 'fighelp'){
      if (args[0] != undefined){
        var subcommand = args[0]
        if (subcommand == 'fonts'){
          const embed = new discord.RichEmbed()
          .setTitle('FIGBot Help - Fonts')
          .setColor(0x03e8fc); // Light Blue
          embed
          .setDescription('Theres over 200 fonts, no way in Hell am I adding them all one by one.')
          .addField('http://www.figlet.org/examples.html','Here is a website with examples of each by figlet. Go there.')
          .setURL('http://www.figlet.org/examples.html')
          .setFooter('Original bot in Python by Dizee. Ported to nodejs and improved by trevor229.')
          message.channel.send({embed});
        } else if (subcommand != 'fonts' && subcommand != undefined){
            message.channel.send(`"${args[0]}" is not a help menu item!`);
        }
      } else {
          const embed = new discord.RichEmbed()
          .setTitle('FIGBot Help')
          .setColor(0x03e8fc); // Light Blue
          embed
          .setDescription('A bot that uses figlet to make text art. Now supporting font selection.')
          .addField('Commands','----------------------------------------------------------')
          .addField('!fighelp','Displays this dialogue')
          .addField('!fighelp fonts','Displays a list of fonts for use with the main command')
          .addField('!fig (word) (font)','Makes ASCII text out of a word or sentence with the choice of font. If none is specified, figbot will use the default font.')
          .setURL('https://github.com/Dizeeee/FIGbot')
          .addBlankField()
          .setFooter('Original bot in Python by Dizee. Ported to nodejs and improved by trevor229.')
          message.channel.send({embed});
      }
    }
}
