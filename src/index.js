const TeleBot = require('telebot');
const bot = new TeleBot('614327753:AAEeXj1rF4B1OPbFpnDl-t1Uk6sp1YLv84I');

var exec = require('child_process').exec;

bot.on('text', (msg) => {
    if (msg.text.startsWith('youtube-dl')) {
        console.log(process.cwd());
        console.log(msg.text);
        command = msg.text;
        exec(command,
            function (error, stdout, stderr) {
                msg.reply.text(stdout);
                console.log('stdout: ' + stdout);
                console.log('stderr: ' + stderr);
                if (error !== null) {
                   console.log('exec error: ' + error);
                }
            });
    } else {
        msg.reply.text(msg.text + ' from bot');
    }
});

bot.start();