const { Discord, Client, MessageEmbed, ReactionUserManager, TextChannel, Guild } = require('discord.js');
const client = global.client = new Client({fetchAllMembers: true});
const asgard = new Client();
const config = require("./config.json")
const logs = require("discord-logs");
const chalk = require('chalk');
const request = require('request');
const fs = require('fs');
logs(client)


const send = async function send(type, content, imageURL) {
const embed = new MessageEmbed().setAuthor("ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ", "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif").setThumbnail("https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif").setColor("BLACK").setTitle(type).setDescription(content).setFooter(`ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ`, "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif")

if (imageURL) {
embed.setImage(imageURL)
}
  let entry = await (audit => audit.entries.first());
  if (!entry || !config.AsgardDiscordLogger) return;
asgard.channels.cache.get(config.AsgardDiscordLoggerLogKanalı).send(embed)
};




// Asgard Otorol
asgard.on("guildMemberAdd", async (member, type, content, imageURL) => {
  let entry = await (audit => audit.entries.first());
  if (!entry || !config.AsgardOtorol) return;
  let rol = config.AsgardOtorolId
  member.roles.add(rol)
  let logKanali = asgard.channels.cache.get(config.AsgardOtorolKanal);
  if (logKanali) { logKanali.send(new MessageEmbed().setAuthor("ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ", "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif").setThumbnail("https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif").setColor("BLACK").setTitle('Sunucuya Yeni Bir Üye Katıldı!').setDescription(`${member} **Kişisine <@&${rol}> Rolünü Verdim, Hoşgeldin.**`).setFooter(`ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ`, "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif"))}});


// Asgard Güvenli Kişi

function AsgardKanalGuncellemeWH(asgardkanalguncelleme) {
let uye = asgard.guilds.cache.get(config.AsgardGuild).members.cache.get(asgardkanalguncelleme);
let asgardrolesafe = config.AsgardKanalGuncellemeWH || [];
if (!uye || uye.id === asgard.user.id || uye.id === config.OwnerID || uye.id === uye.guild.owner.id || asgardrolesafe.some(asgard => uye.id === asgard || uye.roles.cache.has(asgard))) return true
else return false};
const guncellemeyetkipermleri = ["ADMINISTRATOR", "MANAGE_ROLES", "MANAGE_CHANNELS", "MANAGE_GUILD", "BAN_MEMBERS", "KICK_MEMBERS", "MANAGE_NICKNAMES", "MANAGE_EMOJIS", "MANAGE_WEBHOOKS"];
function cezaver(asgardkanalguncelleme, tur) {
  let userID = asgard.guilds.cache.get(config.AsgardGuild).members.cache.get(asgardkanalguncelleme);
  if (!userID) return;
  if (tur == "jail") return userID.roles.cache.has(config.boosterRole) ? userID.roles.set([config.boosterRole, config.jailRole]) : userID.roles.set([config.jailRole]);
  if (tur == "ban") return userID.ban({ reason: "ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ - Koruma Sistemi" }).catch()};

function guvenli(kisiID) {
    let uye = asgard.guilds.cache.get(config.AsgardGuild).members.cache.get(kisiID);
    let asgardsafe = config.whitelist || [];
    if (!uye || uye.id === asgard.user.id || uye.id === config.OwnerID || uye.id === uye.guild.owner.id || asgardsafe.some(asgard => uye.id === asgard || uye.roles.cache.has(asgard))) return true
else return false};
  const yetkiPermleri = ["ADMINISTRATOR", "MANAGE_ROLES", "MANAGE_CHANNELS", "MANAGE_GUILD", "BAN_MEMBERS", "KICK_MEMBERS", "MANAGE_NICKNAMES", "MANAGE_EMOJIS", "MANAGE_WEBHOOKS"];
  function cezalandir(kisiID, tur) {
    let userID = asgard.guilds.cache.get(config.AsgardGuild).members.cache.get(kisiID);
    if (!userID) return;
    if (tur == "jail") return userID.roles.cache.has(config.boosterRole) ? userID.roles.set([config.boosterRole, config.jailRole]) : userID.roles.set([config.jailRole]);
    if (tur == "ban") return userID.ban({ reason: "ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ - Koruma Sistemi" }).catch()};

function AsgardRolOlusturmaWH(asgardrololusturma) {
  let uye = asgard.guilds.cache.get(config.AsgardGuild).members.cache.get(asgardrololusturma);
  let asgardrolesafe = config.AsgardRolOlusturmaWH || [];
  if (!uye || uye.id === asgard.user.id || uye.id === config.OwnerID || uye.id === uye.guild.owner.id || asgardrolesafe.some(asgard => uye.id === asgard || uye.roles.cache.has(asgard))) return true
  else return false};
  const rololusturmayetkipermleri = ["ADMINISTRATOR", "MANAGE_ROLES", "MANAGE_CHANNELS", "MANAGE_GUILD", "BAN_MEMBERS", "KICK_MEMBERS", "MANAGE_NICKNAMES", "MANAGE_EMOJIS", "MANAGE_WEBHOOKS"];
  function cezaver(asgardrololusturma, tur) {
    let userID = asgard.guilds.cache.get(config.AsgardGuild).members.cache.get(asgardrololusturma);
    if (!userID) return;
    if (tur == "jail") return userID.roles.cache.has(config.boosterRole) ? userID.roles.set([config.boosterRole, config.jailRole]) : userID.roles.set([config.jailRole]);
    if (tur == "ban") return userID.ban({ reason: "ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ - Koruma Sistemi" }).catch()};

function AsgardRolSilmeWH(asgardrolsilme) {
  let uye = asgard.guilds.cache.get(config.AsgardGuild).members.cache.get(asgardrolsilme);
  let asgardrolesafe = config.AsgardRolSilmeWH || [];
  if (!uye || uye.id === asgard.user.id || uye.id === config.OwnerID || uye.id === uye.guild.owner.id || asgardrolesafe.some(asgard => uye.id === asgard || uye.roles.cache.has(asgard))) return true
  else return false};
  const rolsilmeyetkipermleri = ["ADMINISTRATOR", "MANAGE_ROLES", "MANAGE_CHANNELS", "MANAGE_GUILD", "BAN_MEMBERS", "KICK_MEMBERS", "MANAGE_NICKNAMES", "MANAGE_EMOJIS", "MANAGE_WEBHOOKS"];
  function cezaver(asgardrolsilme, tur) {
    let userID = asgard.guilds.cache.get(config.AsgardGuild).members.cache.get(asgardrolsilme);
    if (!userID) return;
    if (tur == "jail") return userID.roles.cache.has(config.boosterRole) ? userID.roles.set([config.boosterRole, config.jailRole]) : userID.roles.set([config.jailRole]);
    if (tur == "ban") return userID.ban({ reason: "ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ - Koruma Sistemi" }).catch()};

function AsgardRolGuncellemeWH(asgardrolguncelleme) {
let uye = asgard.guilds.cache.get(config.AsgardGuild).members.cache.get(asgardrolguncelleme);
let asgardrolesafe = config.AsgardRolGuncellemeWH || [];
if (!uye || uye.id === asgard.user.id || uye.id === config.OwnerID || uye.id === uye.guild.owner.id || asgardrolesafe.some(asgard => uye.id === asgard || uye.roles.cache.has(asgard))) return true
else return false};
const rolguncellemeyetkipermleri = ["ADMINISTRATOR", "MANAGE_ROLES", "MANAGE_CHANNELS", "MANAGE_GUILD", "BAN_MEMBERS", "KICK_MEMBERS", "MANAGE_NICKNAMES", "MANAGE_EMOJIS", "MANAGE_WEBHOOKS"];
function cezaver(asgardrolguncelleme, tur) {
  let userID = asgard.guilds.cache.get(config.AsgardGuild).members.cache.get(asgardrolguncelleme);
  if (!userID) return;
  if (tur == "jail") return userID.roles.cache.has(config.boosterRole) ? userID.roles.set([config.boosterRole, config.jailRole]) : userID.roles.set([config.jailRole]);
  if (tur == "ban") return userID.ban({ reason: "ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ - Koruma Sistemi" }).catch()};

function AsgardKanalOlusturmaWH(asgardkanalolusturma) {
let uye = asgard.guilds.cache.get(config.AsgardGuild).members.cache.get(asgardkanalolusturma);
let asgardrolesafe = config.AsgardKanalOlusturmaWH || [];
if (!uye || uye.id === asgard.user.id || uye.id === config.OwnerID || uye.id === uye.guild.owner.id || asgardrolesafe.some(asgard => uye.id === asgard || uye.roles.cache.has(asgard))) return true
else return false};
const kanalolusturmakyetkipermleri = ["ADMINISTRATOR", "MANAGE_ROLES", "MANAGE_CHANNELS", "MANAGE_GUILD", "BAN_MEMBERS", "KICK_MEMBERS", "MANAGE_NICKNAMES", "MANAGE_EMOJIS", "MANAGE_WEBHOOKS"];
function cezaver(asgardkanalolusturma, tur) {
  let userID = asgard.guilds.cache.get(config.AsgardGuild).members.cache.get(asgardkanalolusturma);
  if (!userID) return;
  if (tur == "jail") return userID.roles.cache.has(config.boosterRole) ? userID.roles.set([config.boosterRole, config.jailRole]) : userID.roles.set([config.jailRole]);
  if (tur == "ban") return userID.ban({ reason: "ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ - Koruma Sistemi" }).catch()};

function AsgardKanalSilmeWH(asgardkanalsilme) {
let uye = asgard.guilds.cache.get(config.AsgardGuild).members.cache.get(asgardkanalsilme);
let asgardrolesafe = config.AsgardKanalSilmeWH || [];
if (!uye || uye.id === asgard.user.id || uye.id === config.OwnerID || uye.id === uye.guild.owner.id || asgardrolesafe.some(asgard => uye.id === asgard || uye.roles.cache.has(asgard))) return true
else return false};
const kanalsilmeyetkipermleri = ["ADMINISTRATOR", "MANAGE_ROLES", "MANAGE_CHANNELS", "MANAGE_GUILD", "BAN_MEMBERS", "KICK_MEMBERS", "MANAGE_NICKNAMES", "MANAGE_EMOJIS", "MANAGE_WEBHOOKS"];
function cezaver(asgardkanalsilme, tur) {
  let userID = asgard.guilds.cache.get(config.AsgardGuild).members.cache.get(asgardkanalsilme);
  if (!userID) return;
  if (tur == "jail") return userID.roles.cache.has(config.boosterRole) ? userID.roles.set([config.boosterRole, config.jailRole]) : userID.roles.set([config.jailRole]);
  if (tur == "ban") return userID.ban({ reason: "ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ - Koruma Sistemi" }).catch()};

function AsgardBanWH(asgardbanyetki) {
let uye = asgard.guilds.cache.get(config.AsgardGuild).members.cache.get(asgardbanyetki);
let asgardrolesafe = config.AsgardBanWH || [];
if (!uye || uye.id === asgard.user.id || uye.id === config.OwnerID || uye.id === uye.guild.owner.id || asgardrolesafe.some(asgard => uye.id === asgard || uye.roles.cache.has(asgard))) return true
else return false};
const banyetkipermleri = ["ADMINISTRATOR", "MANAGE_ROLES", "MANAGE_CHANNELS", "MANAGE_GUILD", "BAN_MEMBERS", "KICK_MEMBERS", "MANAGE_NICKNAMES", "MANAGE_EMOJIS", "MANAGE_WEBHOOKS"];
function cezaver(asgardbanyetki, tur) {
  let userID = asgard.guilds.cache.get(config.AsgardGuild).members.cache.get(asgardbanyetki);
  if (!userID) return;
  if (tur == "jail") return userID.roles.cache.has(config.boosterRole) ? userID.roles.set([config.boosterRole, config.jailRole]) : userID.roles.set([config.jailRole]);
  if (tur == "ban") return userID.ban({ reason: "ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ - Koruma Sistemi" }).catch()};

  function AsgardKickWH(asgardkickyetki) {
  let uye = asgard.guilds.cache.get(config.AsgardGuild).members.cache.get(asgardkickyetki);
  let asgardrolesafe = config.AsgardKickWH || [];
  if (!uye || uye.id === asgard.user.id || uye.id === config.OwnerID || uye.id === uye.guild.owner.id || asgardrolesafe.some(asgard => uye.id === asgard || uye.roles.cache.has(asgard))) return true
  else return false};
  const kickyetkipermleri = ["ADMINISTRATOR", "MANAGE_ROLES", "MANAGE_CHANNELS", "MANAGE_GUILD", "BAN_MEMBERS", "KICK_MEMBERS", "MANAGE_NICKNAMES", "MANAGE_EMOJIS", "MANAGE_WEBHOOKS"];
  function cezaver(asgardkickyetki, tur) {
    let userID = asgard.guilds.cache.get(config.AsgardGuild).members.cache.get(asgardkickyetki);
    if (!userID) return;
    if (tur == "jail") return userID.roles.cache.has(config.boosterRole) ? userID.roles.set([config.boosterRole, config.jailRole]) : userID.roles.set([config.jailRole]);
    if (tur == "ban") return userID.ban({ reason: "ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ - Koruma Sistemi" }).catch()};

function AsgardSagTikWH(asgardsagtik) {
  let uye = asgard.guilds.cache.get(config.AsgardGuild).members.cache.get(asgardsagtik);
  let asgardrolesafe = config.AsgardSagTikWH || [];
  if (!uye || uye.id === asgard.user.id || uye.id === config.OwnerID || uye.id === uye.guild.owner.id || asgardrolesafe.some(asgard => uye.id === asgard || uye.roles.cache.has(asgard))) return true
else return false};
  const sagtikyetkipermleri = ["ADMINISTRATOR", "MANAGE_ROLES", "MANAGE_CHANNELS", "MANAGE_GUILD", "BAN_MEMBERS", "KICK_MEMBERS", "MANAGE_NICKNAMES", "MANAGE_EMOJIS", "MANAGE_WEBHOOKS"];
  function cezaver(asgardsagtik, tur) {
    let userID = asgard.guilds.cache.get(config.AsgardGuild).members.cache.get(asgardsagtik);
    if (!userID) return;
    if (tur == "jail") return userID.roles.cache.has(config.boosterRole) ? userID.roles.set([config.boosterRole, config.jailRole]) : userID.roles.set([config.jailRole]);
    if (tur == "ban") return userID.ban({ reason: "ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ - Koruma Sistemi" }).catch()};



//

asgard.on('message', async (message, member, user, guild, channel) => {
      let entry = await message.guild.fetchAuditLogs({type: 'MANAGE_MESSAGES'}).then(audit => audit.entries.first());
      if (!entry || !config.AsgardReklamEngel) return;
      const asgardreklam = ['https://','http://','www','.org','.tr','.space','.funy','.fun','.com','.xyz','.glitch-me','.eueo.org','free.biz','.biz','.free','.blogspot-com','.alan','.com.tr','.sexs','.hub','.dance','.in','.net','.shop','.store','.click','.tech','.best','.college','.me','.site','.online','.art','.host','.baby','.website','.blog','.link','.top','.info','.press','.monster','.services']
      if(asgardreklam.some(asgard => message.content.includes(asgard))){
        message.delete()
        const asgardsend = new MessageEmbed().setAuthor("ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ", "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif").setThumbnail("https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif").setDescription(`**Birdaha Reklam Yapma Orosbu Evladı ${message.author}**`).setColor('#BLACK').setFooter(`ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ - Koruma Sistemi`).setTimestamp()
        message.channel.send(asgardsend)
        let logKanali = asgard.channels.cache.get(config.AsgardReklamEngelLogKanalı);
        if (logKanali) { logKanali.send(new MessageEmbed().setAuthor("ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ", "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif").setThumbnail("https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif").setColor("BLACK").setTitle('Sunucuda Reklam Yapıldı!').setDescription(`**Reklam Algılanan Kullanıcı : **${message.author}\n\n **Reklam Algılanan Kanal : ** <#${message.channel.id}> \n\n **Reklam Algılanan Mesaj : ** ${message.content}`).setFooter(`ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ`, "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif"))}
      }
  })

// Asgard Sunucu Koruması

asgard.on("guildUpdate", async (oldGuild, newGuild) => {
  let entry = await newGuild.fetchAuditLogs({type: 'GUILD_UPDATE'}).then(audit => audit.entries.first());
  if (!entry || !entry.executor || Date.now()-entry.createdTimestamp > 5000 || guvenli(entry.executor.id) || !config.AsgardServerGuard) return;
  if (!newGuild.setName(config.AsgardSunucuIsım));
  if (!newGuild.setIcon(config.AsgardSunucuResim));
  if (!newGuild.setBanner(config.AsgardSunucuResim));
  cezalandir(entry.executor.id, "ban");
  let user = asgard.users.cache.get(entry.executor.id)
  let logKanali = asgard.channels.cache.get(config.AsgardServerGuardLogKanalı);
  if (logKanali) { logKanali.send(new MessageEmbed().setAuthor("ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ", "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif").setThumbnail(user.displayAvatarURL({dynamic:true})).setColor("BLACK").setTitle('Sunucu izinsiz güncellendi!').setDescription(`${entry.executor} adlı yetkili tarafından Sunucu izinsiz güncellendi! \nGüncelleyen yetkili sunucudan yasaklandı ve sunucu eski haline getirildi.`).setFooter(`ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ`, "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif"))}});

//-                                                                        ROL KORUMA                                                                        -\\

// Rol Oluşturma

asgard.on("roleCreate", async role => {
  let entry = await role.guild.fetchAuditLogs({type: 'ROLE_CREATE'}).then(audit => audit.entries.first());
  if (!entry || !entry.executor || Date.now()-entry.createdTimestamp > 5000 || guvenli(entry.executor.id) || AsgardRolOlusturmaWH(entry.executor.id) || !config.AsgardRolOlusturmaKoruması) return;
  role.delete({ reason: "ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ - Koruma Sistemi" });
  cezalandir(entry.executor.id, "ban");
  let user = asgard.users.cache.get(entry.executor.id)
  let logKanali = asgard.channels.cache.get(config.AsgardRolKorumaLogKanalı);
  if (logKanali) { logKanali.send(new MessageEmbed().setAuthor("ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ", "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif").setThumbnail(user.displayAvatarURL({dynamic:true})).setColor("BLACK").setTitle('Sunucuda ayarları izinsiz güncellendi!').setDescription(`${entry.executor} adlı yetkili tarafından sunucu ayarları izinsiz güncellendi! \n\nSunucu ayarlarını değiştiren yetkilinin rolleri alındı ve banlandı!`).setFooter(`ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ`, "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif"))}});

// Rol Silme
asgard.on("roleDelete", async role => {
  let entry = await role.guild.fetchAuditLogs({type: 'ROLE_DELETE'}).then(audit => audit.entries.first());
  if (!entry || !entry.executor || Date.now()-entry.createdTimestamp > 5000 || guvenli(entry.executor.id) || AsgardRolSilmeWH(entry.executor.id) || !config.AsgardRolSilmeKoruması) return;
  cezalandir(entry.executor.id, "ban");
  let user = asgard.users.cache.get(entry.executor.id)
  let yeniRol = await role.guild.roles.create({
  data: {
    name: role.name,
    color: role.hexColor,
    hoist: role.hoist,
    position: role.position,
    permissions: role.permissions,
    mentionable: role.mentionable},
    reason: "Rol Silindiği İçin Tekrar Oluşturuldu!"});
  let logKanali = asgard.channels.cache.get(config.AsgardRolKorumaLogKanalı);
  if (logKanali) { logKanali.send(new MessageEmbed().setAuthor("ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ", "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif").setThumbnail(user.displayAvatarURL({dynamic:true})).setColor("BLACK").setTitle('Sunucuda bir rol izinsiz silindi!').setDescription(`${entry.executor} adlı yetkili tarafından **${role.name}** isimli rol silindi, silen kişi banlandı! \nRol tekrar oluşturuldu.`).setFooter(`ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ`, "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif"))}});

// Rol Guncelleme
asgard.on("roleUpdate", async (oldRole, newRole) => {
  let entry = await newRole.guild.fetchAuditLogs({type: 'ROLE_UPDATE'}).then(audit => audit.entries.first());
  if (!entry || !entry.executor || !newRole.guild.roles.cache.has(newRole.id) || Date.now()-entry.createdTimestamp > 5000 || AsgardRolGuncellemeWH(entry.executor.id) || guvenli(entry.executor.id) || !config.AsgardRolGuncellemeKoruması) return;
  cezalandir(entry.executor.id, "ban");
  let user = asgard.users.cache.get(entry.executor.id)
  if (yetkiPermleri.some(p => !oldRole.permissions.has(p) && newRole.permissions.has(p))) {
  newRole.setPermissions(oldRole.permissions);
  newRole.guild.roles.cache.filter(r => !r.managed && (r.permissions.has("ADMINISTRATOR") || r.permissions.has("MANAGE_ROLES") || r.permissions.has("MANAGE_GUILD"))).forEach(r => r.setPermissions(36818497));
};
  newRole.edit({
    name: oldRole.name,
    color: oldRole.hexColor,
    hoist: oldRole.hoist,
    permissions: oldRole.permissions,
    mentionable: oldRole.mentionable});
 let logKanali = asgard.channels.cache.get(config.AsgardRolKorumaLogKanalı);
 if (logKanali) { logKanali.send(new MessageEmbed().setAuthor("ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ", "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif").setThumbnail(user.displayAvatarURL({dynamic:true})).setColor("BLACK").setTitle('Sunucuda izinsiz bir rol güncellendi!').setDescription(`${entry.executor} adlı yetkili tarafından **${oldRole.name}** isimli rol izinsiz güncellendi! \n\nGüncelleyen yetkilinin rolleri alındı ve cezalı rol verildi! \n\nRol eski haline getirildi!`).setFooter(`ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ`, "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif"))}});

//-

// Kanal Oluşturma
asgard.on("channelCreate", async channel => {
  let entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_CREATE'}).then(audit => audit.entries.first());
  if (!entry || !entry.executor || Date.now()-entry.createdTimestamp > 5000 || AsgardKanalOlusturmaWH(entry.executor.id) || guvenli(entry.executor.id) || !config.AsgardKanalOlusturmaKoruması) return;
  channel.delete({reason: "ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ - Koruma Sistemi"});
  let user = asgard.users.cache.get(entry.executor.id)
  cezalandir(entry.executor.id, "ban");
  let logKanali = asgard.channels.cache.get(config.AsgardKanalKorumaLogKanalı);
  if (logKanali) { logKanali.send(new MessageEmbed().setAuthor("ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ", "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif").setThumbnail(user.displayAvatarURL({dynamic:true})).setColor("BLACK").setTitle('Sunucuda bir kanal izinsiz oluşturuldu!').setDescription(`${entry.executor} adlı yetkili tarafından sunucuda izinsiz kanal oluşturuldu! Oluşturan yetkilinin rolleri alındı ve banlandı orosbu evladı! \nOluşturulan Kanal Silindi.`).setFooter(`ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ - Koruma Sistemi`).setTimestamp().setThumbnail(user.displayAvatarURL({dynamic: true })))}});


// Kanal Silme
asgard.on("channelDelete", async channel => {
  let entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => audit.entries.first());
  if (!entry || !entry.executor || Date.now()-entry.createdTimestamp > 5000 || AsgardKanalSilmeWH(entry.executor.id) || guvenli(entry.executor.id) || !config.AsgardKanalSilmeKoruması) return;
  cezalandir(entry.executor.id, "ban");
  let user = asgard.users.cache.get(entry.executor.id)
  await channel.clone({ reason: "ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ - Koruma Sistemi" }).then(async kanal => {
  if (channel.parentID != null) await kanal.setParent(channel.parentID);
  await kanal.setPosition(channel.position);
  if (channel.type == "category") await channel.guild.channels.cache.filter(k => k.parentID == channel.id).forEach(x => x.setParent(kanal.id));});
  let logKanali = asgard.channels.cache.get(config.AsgardKanalKorumaLogKanalı);
  if (logKanali) { logKanali.send(new MessageEmbed().setAuthor("ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ", "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif").setThumbnail(user.displayAvatarURL({dynamic:true})).setColor("BLACK").setTitle('İzinsiz bir kanal silindi!').setDescription(`${entry.executor} adlı yetkili tarafından **${channel.name}** isimli kanal silindi! Silen yetkilinin rolleri alındı ve banlandı orosbu evladı! \nSilinen kanal tekrar oluşturuldu.`).setFooter(`ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ`, "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif"))}});

// Kanal Güncelleme
asgard.on("channelUpdate", async (oldChannel, newChannel) => {
  let entry = await asgard.guilds.cache.get(newChannel.guild.id).fetchAuditLogs({ type: 'CHANNEL_UPDATE' }).then(audit => audit.entries.first())
  if (Date.now()-entry.createdTimestamp > 5000) {
  entry = await asgard.guilds.cache.get(newChannel.guild.id).fetchAuditLogs({ type: 'CHANNEL_OVERWRITE_UPDATE' }).then(audit => audit.entries.first())}
  if (!entry || !entry.executor || Date.now()-entry.createdTimestamp > 5000 || AsgardKanalGuncellemeWH(entry.executor.id) || guvenli(entry.executor.id) || !config.AsgardKanalGuncellemeKoruması) return;
  let user = asgard.users.cache.get(entry.executor.id)
  cezalandir(entry.executor.id, "ban");
  if (newChannel.type !== "category" && newChannel.parentID !== oldChannel.parentID) newChannel.setParent(oldChannel.parentID);
  if (newChannel.type === "category") {newChannel.edit({name: oldChannel.name})} else if (newChannel.type === "text") {newChannel.edit({name: oldChannel.name, topic: oldChannel.topic, nsfw: oldChannel.nsfw, rateLimitPerUser: oldChannel.rateLimitPerUser})} else if (newChannel.type === "voice") {newChannel.edit({name: oldChannel.name, bitrate: oldChannel.bitrate, userLimit: oldChannel.userLimit,})}; oldChannel.permissionOverwrites.forEach(perm => {let thisPermOverwrites = {}; perm.allow.toArray().forEach(p => {thisPermOverwrites[p] = true;}); perm.deny.toArray().forEach(p => {thisPermOverwrites[p] = false;}); newChannel.createOverwrite(perm.id, thisPermOverwrites)});
  let logKanali = asgard.channels.cache.get(config.AsgardKanalKorumaLogKanalı);
  if (logKanali) { logKanali.send(new MessageEmbed().setAuthor("ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ", "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif").setThumbnail(user.displayAvatarURL({dynamic:true})).setColor("BLACK").setTitle('İzinsiz bir kanal güncellendi!').setDescription(`${entry.executor} adlı yetkili tarafından **${newChannel.name}** isimli kanal güncellendi! Güncellenyen yetkilinin rolleri alındı ve banlandı orosbu evladı! \nKanal eski haline getirildi.`).setFooter(`ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ`, "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif"))}});

//-                                                                        SUNUCU KORUMA                                                                        -\\

asgard.on("guildMemberRemove", async member => {
  let entry = await member.guild.fetchAuditLogs({type: 'MEMBER_KICK'}).then(audit => audit.entries.first());
  if (!entry || !entry.executor || Date.now()-entry.createdTimestamp > 5000 || guvenli(entry.executor.id) || AsgardKickWH(entry.executor.id) || !config.AsgardKickKoruması) return;
  cezalandir(entry.executor.id, "ban");
  let user = asgard.users.cache.get(entry.executor.id)
  let logKanali = asgard.channels.cache.get(config.AsgardKickKorumasıLogKanalı);
  if (logKanali) { logKanali.send(new MessageEmbed().setAuthor("ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ", "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif").setThumbnail(user.displayAvatarURL({dynamic: true })).setColor("BLACK").setTitle('Bir kullanıcı izinsiz sunucudan atıldı!').setDescription(`${member} adlı üye, ${entry.executor} adlı yetkili tarafından sunucudan izinsiz atıldı! \n\nKullanıcıyı sunucudan atan yetkilinin yetkileri alındı ve banlandı!.`).setFooter(`ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ`, "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif"))}});

// Sağ tık Ban
asgard.on("guildBanAdd", async (guild, user) => {
  let entry = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'}).then(audit => audit.entries.first());
  if (!entry || !entry.executor || AsgardBanWH(entry.executor.id) || guvenli(entry.executor.id) || !config.AsgardBanKoruması) return;
  cezalandir(entry.executor.id, "ban");
  guild.members.unban(user.id, "İzinsiz banlandığı için ban geri açıldı!").catch(console.error);
  let logKanali = asgard.channels.cache.get(config.AsgardBanKorumasıLogKanalı);
  if (logKanali) { logKanali.send(new MessageEmbed().setAuthor("ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ", "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif").setThumbnail(user.displayAvatarURL({dynamic:true})).setColor("BLACK").setTitle('Bir kullanıcı izinsiz sunucudan yasaklandı!').setDescription(`${user} adlı üye, ${entry.executor} adlı yetkili tarafından sunucudan izinsiz yasaklandı! \n\n Kullanıcıyı sunucudan yasaklayan yetkilinin rolleri alındı ve banlandı!.`).setFooter(`ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ`, "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif"))}});


asgard.on("guildMemberAdd", async member => {
  let entry = await member.guild.fetchAuditLogs({type: 'BOT_ADD'}).then(audit => audit.entries.first());
  if (!member.user.bot || !entry || !entry.executor || Date.now()-entry.createdTimestamp > 5000 || guvenli(entry.executor.id) || !config.AsgardBotKoruması) return;
  cezalandir(entry.executor.id, "ban");
  cezalandir(member.id, "ban");
  let user = asgard.users.cache.get(entry.executor.id)
  let logKanali = asgard.channels.cache.get(config.AsgardBotKorumasıLogKanalı);
  if (logKanali) { logKanali.send(new MessageEmbed().setAuthor("ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ", "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif").setThumbnail(user.displayAvatarURL({dynamic:true})).setColor("BLACK").setTitle('Sunucuya izinsiz bir bot eklendi!').setDescription(`${member} adlı botu, ${entry.executor} adlı yetkili tarafından sunucuya izinsiz eklendi! \n\nEkleyen yetkili ve bot sunucudan yasaklandı.`).setFooter(`ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ`, "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif"))}});

// Sag Tık İzni

asgard.on("guildMemberUpdate", async (oldMember, newMember, member, role) => {
    let entry = await newMember.guild.fetchAuditLogs({type: 'MEMBER_ROLE_UPDATE'}).then(audit => audit.entries.first());
    if (!entry || !entry.executor || Date.now()-entry.createdTimestamp > 5000 || AsgardSagTikWH(entry.executor.id) || guvenli(entry.executor.id) || !config.AsgardSagTikKorumasi) return;
      newMember.roles.set(oldMember.roles.cache.map(r => r.id));
      cezaver(entry.executor.id, "ban");
      let user = asgard.users.cache.get(entry.executor.id)
      let logKanali = asgard.channels.cache.get(config.AsgardRolKorumaLogKanalı);
if (logKanali) { logKanali.send(new MessageEmbed().setAuthor("ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ", "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif").setThumbnail(user.displayAvatarURL({dynamic:true})).setColor("BLACK").setTitle('Bir kullanıcıya izinsiz rol verildi!').setDescription(`**Rol Veren Kullancı : ** ${entry.executor}\n\n **Rol Verilen Kullanıcı : ** ${member} \n\n **Sağ tık izni olmayan bir kullanıcı sağ tık ile yetki vermeye çalıştı. Rol verilen kullanıcının rolleri geri alındı ve Rol vermeye çalışan kullanıcı banlandı**`).setFooter(`ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ`, "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif"))}});


// Sag Tık İzni

// Discord Logger

asgard.on("guildBannerAdd", (guild, bannerURL) => {
send("Sunucunun Afişi Değişti!", `**${guild.name}** isimli sunucunun **afişi** değiştirildi! Yeni afiş ekte gösterilmektedir.`, bannerURL)
});
asgard.on("messageUpdate", (message, oldContent, newContent) => {
send("Sunucuda Bir Mesaj Düzenlendi!", `**Mesajı Güncelleyen Kullanıcı:** ${message.author} \n\n ** Mesajın Düzenlendiği Kanal : ** <#${message.channel.id}>\n\n **Eski Mesaj : ** ${message.content} \n\n **Yeni Mesaj : ** ${oldContent} `)
});

asgard.on("guildMemberAdd", async (member) => {
  const send = async function send(type, content, imageURL) {
  const embed = new MessageEmbed().setAuthor("ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ", "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif").setThumbnail("https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif").setColor("BLACK").setTitle(type).setDescription(content).setFooter(`ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ`, "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif")
  if (imageURL) {
  embed.setImage(imageURL)
  }
  asgard.channels.cache.get(config.AsgardGirisCikisLogKanalı).send(embed)
  };
  let rol = config.AsgardOtorolId
send("Bir Kullanıcı Sunucuya Giriş Yaptı!", `** Sunucuya Giriş Yapan Kullanıcı : ** ${member}*\n\n **Kullanıcıya Verilen Role : ** <@&${rol}>`)
});

asgard.on("guildMemberRemove", async (member) => {
  const send = async function send(type, content, imageURL) {
  const embed = new MessageEmbed().setAuthor("ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ", "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif").setThumbnail("https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif").setColor("BLACK").setTitle(type).setDescription(content).setFooter(`ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ`, "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif")
  if (imageURL) {
  embed.setImage(imageURL)
  }
  asgard.channels.cache.get(config.AsgardGirisCikisLogKanalı).send(embed)
  };
send("Bir Kullanıcı Sunucudan Ayrıldı!", `** Sunucudan Ayrılan Kullanıcı : ** ${member} `)
});

asgard.on("guildBanAdd", async (guild, user) => {
const send = async function send(type, content, imageURL) {
const embed = new MessageEmbed().setAuthor("ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ", "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif").setThumbnail("https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif").setColor("BLACK").setTitle(type).setDescription(content).setFooter(`ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ`, "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif")
if (imageURL) {
embed.setImage(imageURL)
}
asgard.channels.cache.get(config.AsgardBanLogKanalı).send(embed)
};
const entry = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'}).then(audit => audit.entries.first());
if (!entry || !entry.executor || Date.now()-entry.createdTimestamp > 5000 || !config.AsgardBanLog) return;
send("Bir Kullanıcı Yasaklandı!", `** Yasaklayan Kullancı : ** <@${entry.executor.id}> \n\n ** Yasaklanan Kullanıcı : ** <@${user.id}> \n\n **Yasaklanma Nedeni : ** ${entry.reason} \n\n `, "https://cdn.discordapp.com/attachments/709728847209168957/876625577287757824/CMGn.gif")
});

asgard.on("guildBanRemove", async (guild, user) => {
const entry = await guild.fetchAuditLogs({type: "MEMBER_BAN_REMOVE"}).then(audit => audit.entries.first());
const send = async function send(type, content, imageURL) {
const embed = new MessageEmbed().setAuthor("ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ", "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif").setThumbnail("https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif").setColor("BLACK").setTitle(type).setDescription(content).setFooter(`ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ`, "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif")
if (imageURL) {
embed.setImage(imageURL)
}
asgard.channels.cache.get(config.AsgardBanKaldırmaLogKanalı).send(embed)
};
if (!entry || !entry.executor || Date.now()-entry.createdTimestamp > 5000 || !config.AsgardBanKaldırmaLog) return;
send("Bir Kullanıcının Yasaklaması Kaldırıldı!", `**Yasağı Kadlıran Kullanıcı : ** <@${entry.executor.id}> \n\n ** Yasağı Kaldırılan Kullanıcı : **<@${user.id}>`, "https://cdn.discordapp.com/attachments/709728847209168957/876635796042579988/goodnight-amy-poehler.gif")
});
asgard.on("roleCreate", async (role) => {
const entry = await role.guild.fetchAuditLogs({type: 'ROLE_CREATE'}).then(audit => audit.entries.first());
send("Bir Rol Oluşturuldu!", `**Rol Oluşturan Kullanıcı : ** <@${entry.executor.id}> \n\n **Oluşturulan Rolün Adı : ** ${role.name} \n\n ** Oluşturulan Rolün Etiketi : ** <@&${role.id}> `)
});
asgard.on("roleDelete", async (role) => {
const entry = await role.guild.fetchAuditLogs({type: 'ROLE_DELETE'}).then(audit => audit.entries.first());
send("Bir Rol Silindi!", `**Rolü Silen Kullancı : ** <@${entry.executor.id}> \n\n ** Silinen Rolün Adı : ** ${role.name}\n\n **Silinen Rolün İdsi : ** ${role.id} `)
});
asgard.on("roleUpdate", async (role, oldPermissions, newPermissions) => {
const entry = await role.guild.fetchAuditLogs({type: 'ROLE_UPDATE'}).then(audit => audit.entries.first());
send("Bir Rol Güncellendi!", `**Rolü Güncelleyen Kullancı : ** <@${entry.executor.id}> \n\n **Güncellenen Rol : ** <@&${role.id}>`)
});
asgard.on("messageDelete", async (message, member) => {
const entry = await message.guild.fetchAuditLogs({type: 'MESSAGE_DELETE'}).then(audit => audit.entries.first());
send("Bir Mesaj Silindi!", `**Mesajı Silinen Kullanıcı: ${message.author} ** \n\n **Mesajın Silindiği Kanal: **<#${message.channel.id}> \n\n **Silinen Mesaj :** ${message.content}`)
})
asgard.on("channelDelete", async (channel) => {
const entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => audit.entries.first());
send("Bir Kanal Silindi!", `**Kanalı Silen Kullanıcı : ** <@${entry.executor.id}> \n\n **Silinen Kanal** ${channel.name} \n\n **Silinen Kanalın Türü : ** ${channel.type == "text" ? "Yazı" : "Ses"}`)
})
asgard.on("channelCreate", async (channel) => {
const entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_CREATE'}).then(audit => audit.entries.first());
send("Bir Kanal Oluşturuldu!", `**Kanalı Oluşturan Kullanıcı : ** <@${entry.executor.id}> \n\n **Oluşturulan Kanal : **<#${channel.id}> \n\n **Oluşturulan Kanalın Türü : **${channel.type == "text" ? "Yazı" : "Ses"}`)
})
asgard.on("channelUpdate", async (oldChannel, channel) => {
const entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_UPDATE'}).then(audit => audit.entries.first());
send("Bir Kanal Güncellendi!", `**Kanalı Güncelleyen Kullanıcı : ** <@${entry.executor.id}> \n\n ** Güncellenen Kanal : **<#${channel.id}> \n\n ** Kanalın Eski Adı : **${oldChannel.name}\n\n ** Kanalın Yeni Adı : **${channel.name}`)
})



// Komutlar

asgard.on("message", async (message, member) => {
    if (message.content.startsWith('!rolver')) {
      const entry = await message.guild.fetchAuditLogs({type: 'MEMBER_ROLE_UPDATE'}).then(audit => audit.entries.first());
      if (!entry || !config.AsgardRolVer) return;
      if (!message.member.hasPermission('MANAGE_EMOJIS')) return message.channel.send('Bunu Yapmak İçin Yetkiniz Bulunmamaktadır.')
      let role = message.mentions.roles.first();
      let member = message.mentions.members.first();
      member.roles.add(role)

      const kanal = new MessageEmbed()
.setAuthor("ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ", "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif")
.setTitle('Sunucuda Rol Verildi!')
.setThumbnail("https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif")
.setDescription(`**Rol Veren Kullancı : ** ${message.author}\n\n ** Rol Verilen Kullancı : ** ${member}\n\n **Kullanıya Verilen Rol : ** ${role}`)
.setFooter(`ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ`, "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif")
.setColor("BLACK")
      message.channel.send(kanal)
      let logKanali = asgard.channels.cache.get(config.AsgardRolVerLogKanalı);
      if (logKanali) { logKanali.send(new MessageEmbed()
        .setAuthor("ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ", "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif")
        .setThumbnail("https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif")
        .setColor("BLACK")
        .setTitle('Bir kullanıcının Rolleri Güncellendi!')
        .setDescription(`**Rol Veren Kullancı : ** ${message.author}\n\n ** Rol Verilen Kullancı : ** ${member}\n\n **Kullanıya Verilen Rol : ** ${role}`)
        .setFooter(`ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ`, "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif"))}
  }
  });

  asgard.on("message", async (message, member) => {
      if (message.content.startsWith('!rolal')) {
        const entry = await message.guild.fetchAuditLogs({type: 'MEMBER_ROLE_UPDATE'}).then(audit => audit.entries.first());
        if (!entry || !config.AsgardRolAl) return;
        if (!message.member.hasPermission('MANAGE_EMOJIS')) return message.channel.send('Bunu Yapmak İçin Yetkiniz Bulunmamaktadır.')
        let role = message.mentions.roles.first();
        let member = message.mentions.members.first();
        member.roles.remove(role)

        const kanal = new MessageEmbed()
  .setAuthor("ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ", "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif")
  .setTitle('Sunucuda Rol Alındı!')
  .setThumbnail("https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif")
  .setDescription(`**Rol Alan Kullancı : ** ${message.author} \n\n ** Rol Alınan Kullancı : ** ${member}\n\n **Kullanıcıdan Alınan Rol : ** ${role}`)
  .setFooter(`ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ`, "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif")
  .setColor("BLACK")
        message.channel.send(kanal)
        let logKanali = asgard.channels.cache.get(config.AsgardRolAlLogKanalı,);
        if (logKanali) { logKanali.send(new MessageEmbed()
          .setAuthor("ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ", "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif")
          .setThumbnail("https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif")
          .setColor("BLACK")
          .setTitle('Bir kullanıcının Rolleri Güncellendi!')
          .setDescription(`**Rol Alan Kullancı : ** ${message.author}\n\n ** Rol Alınan Kullancı : ** ${member}\n\n **Kullanıcıdan Alınan Rol : ** ${role}`)
          .setFooter(`ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ`, "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif"))}
    }
    });


asgard.on("ready", async () => {
  asgard.user.setActivity(`${config.Status}`, { status: "online"} ,{ type: 'PLAYİNG'})
  let entry = await (audit => audit.entries.first());
  if (!entry || !config.AsgardStart) return;
  let logKanali = asgard.channels.cache.get(config.AsgardStartKanal);
  if (logKanali) { logKanali.send(new MessageEmbed()
    .setAuthor("ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ", "https://cdn.discordapp.com/attachments/876899345075699712/877313115564433408/thor-ragnarok.gif")
    .setThumbnail("https://cdn.discordapp.com/attachments/709728847209168957/876779327876923422/d53jht4-0d5c2f55-9bf3-4175-9a55-38e78a3c59bd_1.gif")
    .setColor("BLACK").setTitle('ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ - GUARD')
    .setDescription(`
:white_heart: Sunucu Ayar Koruması - Calistirildi
:white_heart: Sağ Tık Ban Koruması - Calistirildi
:white_heart: Sağ Tık Kick Koruması - Calistirildi
:white_heart: Sağ Tık Rol Koruması - Calistirildi
:white_heart: Rol Güncelleme Koruması - Calistirildi
:white_heart: Rol Oluşturma Koruması - Calistirildi
:white_heart: Rol Silme Koruması - Calistirildi
:white_heart: Kanal Güncelleme Koruması - Calistirildi
:white_heart: Kanal Oluşturma Koruması - Calistirildi
:white_heart: Kanal Silme Koruması - Calistirildi
:white_heart: Bot Ekleme Koruması - Calistirildi
:white_heart: Sunucu Otorol - Calistirildi
:white_heart: Sunucu Logosu ve Adı Başarıyla Yüklendi
:white_heart: Bot Güvenli Listesi Başarıyla Yüklendi

ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ `)
    .setFooter(`ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ - Koruma Sistemi`)
    .setTimestamp())}});

asgard.on('ready', async () => {
  //asgard.channels.cache.get(config.AsgardBotYazıyor).startTyping();
  //aktif edilirse config içine   "AsgardBotYazıyor": "yazı kanalı id",
  asgard.channels.cache.get(config.AsgardBotSes).join();
  asgard.user.setActivity(`${config.Status}`, { status: "online"} ,{ type: 'PLAYİNG'})
  .then(console.log(`
      -- ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ --

Sunucu Ayar Koruması - Calistirildi
Sağ Tık Rol Koruması - Calistirildi
Sağ Tık Ban Koruması - Calistirildi
Sağ Tık Kick Koruması - Calistirildi
Rol Güncelleme Koruması - Calistirildi
Rol Oluşturma Koruması - Calistirildi
Rol Silme Koruması - Calistirildi
Kanal Güncelleme Koruması - Calistirildi
Kanal Oluşturma Koruması - Calistirildi
Kanal Silme Koruması - Calistirildi
Bot Ekleme Koruması - Calistirildi
Discord Logger - Calistirildi
Sunucu Logosu ve Adı Başarıyla Yüklendi
Bot Güvenli Listesi Başarıyla Yüklendi

ᴡ𝟹ᴛ𝟹ʀ𝟺ɴɴ - Bot Çalışmaya Başladı

W 3 T 3 R 4 N N
`))
  .catch(() => console.log(`Bir hata ile karşılaştım.`))
});

asgard.login(config.Token).catch(() => console.log('Tokeni kontrol ediniz.'));
