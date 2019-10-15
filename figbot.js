// Import packages
const discord = require('discord.js');
const figlet = require('figlet');
const client = new discord.Client();

module.exports = function(command, args, message, client, config){
  if (command == 'fig'){
    console.log(args);
    if (args[0] != undefined){ // Checks for something to work with
      if (args[0].startsWith('#')){ // Checks to see if the first argument is a font (string starting with #)
        var font = args[0].substring(1); // If it does, set the specified font in the variable
        font = font.charAt(0).toUpperCase() + font.substring(1).toLowerCase(); // And make sure its capitalized and the rest is lowercase
        console.log(font);
        msg = args.slice(1).join(' '); // All array items after the first one (specified font) are concatenated for figlet
        figlet.text(msg, font, function(err, data) {
          if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            message.channel.send(`"${font}" is not a valid font!`);
            return;
          }
          if (data.length <= 2000){
            message.channel.send('```' + data + '```').catch(console.error);
          } else if (data.length >= 2000){
            message.channel.send('Sorry, the output of FIGlet creates more than 2000 characters!').catch(console.error);
          }
        });
      } else { // If the first argument is not a font, its text to be printed in the default font
        msg = args.slice(0).join(' '); // No specified font, so every array element is concatenated because its all text to be processed
        figlet.text(msg, function(err, data) { // For this case, we dont need the second argument which is the font specifier, just a callback
          if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
          }
          message.channel.send('```' + data + '```').catch(console.error);
        });
      }
    } else { // If no text is specified after !fig, even to be displayed with no custom font
      message.channel.send('You must at least give me something to say!');
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
          .setDescription('A bot that uses figlet to make text art. Now supporting font selection and whitespace!')
          .addField('Commands','----------------------------------------------------------')
          .addField('!fighelp','Displays this dialogue')
          .addField('!fighelp fonts','Displays a list of fonts for use with the main command')
          .addField('!fig #(font) <your text here>','Makes ASCII text out of a word or sentence with the choice of font. If none is specified, figbot will use the default font.')
          .addBlankField()
          .addField('Example','!fig #computer hello world!')
          .addBlankField()
          .setURL('https://github.com/Dizeeee/FIGbot')
          .setFooter('Original bot in Python by Dizee. Ported to nodejs and improved by trevor229.')
          message.channel.send({embed});
      }
    }
}
