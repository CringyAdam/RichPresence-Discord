const Discord = require('discord.js');
const client = new Discord.Client( { autoreconnect: true } );
const config = require("./config.json");
console.log('Connecting...');



process.on('uncaughtException', err => {
    console.log(`Process Error: \n${err}`);
});


client.on('warn', info => {
    console.log(`D.js Warning: \n${info}`)
});


process.on('unhandledRejection', (reason) => {
    console.log(`Unhandled Promise Rejection: \n${reason}`);
});


client.on('ready', () => {
    console.log(`READY,\nLogged in as ${client.user.tag} (${client.user.id})\n`);
    client.user.setPresence({
      status: 'online',
      game: {
        type: 1,
        url: `${config.twitchurl}`,
        name: `${config.name}`,
        state: `${config.state}`,
        details: `${config.subText}`,
        application_id: `${config.applicationID}`,
        assets: {
          small_image: `${config.smallImgID}`,
          small_text: `${config.smallImgText}`,
          large_image: `${config.largeImgID}`,
          large_text: `${config.largeImgText}`
        }
      }
    },);
    console.log(`\nGET BANNED BY B1NZY`);
});


client.login(config.token);
