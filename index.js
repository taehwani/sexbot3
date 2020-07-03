const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "일반";
const byeChannelName = "일반";
const welcomeChannelComment = "누구세요";
const byeChannelComment = "드디어 서버 나갔네 씨발람ㅋㅋ";

client.on('ready', () => {
  console.log('야스봇 on');
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = member.guild.channels.cache.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = member.guild.channels.cache.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', message => {
  if (message.content === '섹스') {
    message.reply('이게 야스지');
  }
});

client.on('message', message => {
  if (message.content === '야스') {
    message.reply('자지 박으면 꼼짝못해');
  }
});

client.on('message', message => {
  if (message.content === '야스봇') {
    message.reply('아이 옘병할년 니애미');
  }
});

client.on('message', message => {
  if (message.content === '야') {
    message.reply('깝죽거리지마라 새끼야');
  }
});

client.on('message', message => {
  if (message.content === '?') {
    message.reply('뭐요');
  }
});

client.on('message', message => {
  if (message.content === '산스') {
    message.reply('그게뭔데 씹덕아');
  }
});

client.on('message', message => {
  if (message.content === '!') {
    message.reply('뭘 느끼고 있어 씨발련이ㅋㅋ');
  }
});

client.on('message', message => {
  if (message.content === '박진우') {
    message.reply('아 그 장애인?ㅋㅋ');
  }
});

client.on('message', message => {
  if (message.content === 'ㄹㅇㅋㅋ') {
    message.reply('진짜 병신같다..ㅋㅋ');
  }
});

client.on('message', message => {
  if (message.content === '롤할사람') {
    message.reply('친구 없지 않나? ㅋㅋ');
  }
});

client.on('message', message => {
  if (message.content === '잘자') {
    message.reply('넌 뭐야 씨발 역겹네');
  }
});

client.on('message', message => {
  if (message.content === '니애미') {
    message.reply('자지박으면 너는 꼼짝못해');
  }
});

client.login(process.env.token);
