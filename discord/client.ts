import Discord, { GatewayIntentBits } from "discord.js"

// Developer Portal: https://discord.com/developers/applications
const client = new Discord.Client({
  intents: [
    // https://discord.com/developers/docs/topics/gateway#list-of-intents
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
})

const discordReady = new Promise((resolve) =>
  client.on("ready", () => resolve(true))
)

const startClient = async () => {
  if (!client.isReady()) {
    client.login(process.env.BOT_TOKEN)
    await discordReady
  }

  return client
}

export default startClient
