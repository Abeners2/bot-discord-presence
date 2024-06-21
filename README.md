# bot-discord-presence

## Simples porém como ele funciona

### Importação da biblioteca do Discord.js

```javascript
const Discord = require('discord.js');
```
Que facilita a interação com a API do Discord.


### Criação de uma nova instância do cliente do Discord:

```javascript
const client = new Discord.Client();
```
Aqui, criamos uma nova instância do cliente, que será usada para interagir com a API do Discord.


### Login no Discord:

```javascript
client.login('SEU-TOKEN-DISCORD');
```
Esta linha faz login na conta do Discord usando o token fornecido. Lembre-se de manter seu token em segredo e não compartilhá-lo publicamente. Substitua 'SEU-TOKEN-DISCORD' pelo seu token real.


### Evento 'presenceUpdate':

```javascript
client.on('presenceUpdate', (oldPresence, newPresence) => {
  if (newPresence.status === 'online' && newPresence.member.id === 'ID-ALVO') {
    client.users.fetch('DESTINATARIO-MENSAGEM').then(user => {
      user.send('O membro acabou de ficar online!');
    });
  }
});
```
Este evento é disparado sempre que a presença de um usuário é atualizada.
Verifica se o usuário ficou online (newPresence.status === 'online') e se o ID do usuário é o esperado (newPresence.member.id === 'ID-ALVO').
Se ambas as condições forem verdadeiras, o bot envia uma mensagem privada para outro usuário informando que o membro ficou online. Substitua 'ID-ALVO' pelo ID do usuário alvo e 'DESTINATARIO-MENSAGEM' pelo ID do destinatário.

***Observações Importantes***
## Segurança do Token:
**Nunca compartilhe seu token publicamente. Considere usar variáveis de ambiente para armazenar seu token de forma segura.
IDs de Usuário:
Os IDs de usuário no exemplo são placeholders. Certifique-se de substituir pelos IDs corretos conforme necessário para seu uso.**


## Como Rodar o Código

### Instale as dependências necessárias:

```bash
npm install discord.js
```
Salve o código em um arquivo, por exemplo bot-presenca.js.


### Execute o bot:

```bash
node bot-discord-presence.js
```
## Licença

Este projeto está licenciado sob a licença MIT.
