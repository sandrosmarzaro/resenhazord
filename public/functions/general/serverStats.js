module.exports = async function(client, message) {
    const os = require('os');
    let cpus = os.cpus();
    let freeMemory = os.freemem();
    const uptime = os.uptime() / 3600;

    cpus = (cpus[0].model).split('S');
    cpus = cpus[0];
    freeMemory /= 1024000;
    await client.reply(
        await message.chatId, 
        `\tš *RESENHAZORD SERVER* š\nš» _OS:_    \t${os.platform()} ${os.arch}\nš¾ _MEM_: \t${freeMemory.toFixed(2)}MB FREE\nā _CPU_:  \t${cpus}AF\nā° _ON_:    \t${uptime.toFixed(2)}h`,
        await message.id
        );
}