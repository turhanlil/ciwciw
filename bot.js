const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`aktif ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.channel.send('cami mi burası aq cocugu');
  }


    if (msg.content.toLowerCase() === 'mcavoy') {
      msg.channel.send('yakisikli kardesim');
    }


      if (msg.content.toLowerCase() === 'huaj') {
        msg.channel.send('mimar kardes kolay gelsin');
      }


        if (msg.content.toLowerCase() === 'melih') {
          msg.channel.send('goztepeye selam olsun');
        }


          if (msg.content.toLowerCase() === 'among') {
            msg.channel.send('cabuk toplan @here');
          }


            if (msg.content.toLowerCase() === 'crewmateyim') {
              msg.channel.send('görev yap orospu cocugu');
            }


              if (msg.content.toLowerCase() === '31') {
                msg.channel.send('adam şakamatik mk');
              }


                if (msg.content.toLowerCase() === 'iyi geceler') {
                  msg.channel.send('iyi uykular kardeşim benim :full_moon:');
                }


                  if (msg.content.toLowerCase() === 'günaydın') {
                    msg.channel.send('günaydın abi :sun_with_face:');
                  }

                  if (msg.content.toLowerCase() === 'abut') {
                    msg.channel.send('adam geldi ya adam');
                  }

                  });



                  client.on('message', message => {
if (message.content.toLowerCase() === 'bruh') {
  message.react('🇧')
  message.react('🇷')
  message.react('🇺')
  message.react('🇭')
    .then(console.log)
    .catch(console.error);
}

if (message.content.toLowerCase() === 'gürcan') {
  message.react('🇰')
  message.react('🇴')
  message.react('🇾')
  message.react('🇱')
  message.react('🇺')
    .then(console.log)
    .catch(console.error);
}

if (message.content.toLowerCase() === 'turhan') {
  message.react('3️⃣')
  message.react('1️⃣')
    .then(console.log)
    .catch(console.error);

}

});
