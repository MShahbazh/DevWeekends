import { Client, Events, GatewayIntentBits, MessageSearchEmbedType } from 'discord.js';
const rest = new REST({ version: '10' }).setToken("");
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });

client.on('messageCreate',message=>{
    if(message.author.bot) return
    message.reply({
        content:"Hi I am the Tester Bot!"
    })
})

client.login("").then(()=>console.log("Logged In Successfully"));


import { REST, Routes } from 'discord.js';

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];



try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands(""), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}

client.on("interactionCreate",(interaction)=>{
    interaction.reply("Pong!")
})