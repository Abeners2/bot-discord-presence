const Discord = require('discord.js');
const client = new Discord.Client();
client.login('SEU-TOKEN-DISCORD');

/**
 * Evento disparado quando a presença de um usuário é atualizada.
 * @param {Presence} oldPresence - A presença antiga do usuário.
 * @param {Presence} newPresence - A nova presença do usuário.
 */
client.on('presenceUpdate', (oldPresence, newPresence) => {
 
  if (newPresence.status === 'online' && newPresence.member.id === 'ID-ALVO') {
    client.users.fetch('DESTINATARIO-MENSAGEM').then(user => {
      user.send('O membro acabou de ficar online!');
    });
  }
});
