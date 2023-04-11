const { Telegraf, Markup, Composer, Scenes } = require("telegraf");
const { BaseScene } = Scenes;
const gen_photo = require("./get")
const bot = new Telegraf("6162765907:AAFB2b2rDiWMFjcT-fesYvD5vLv6sJoAU6k");
const fs = require("fs")
const { session } = require("grammy");

function initial() {
    return {
        t1: 0,
        t2: 0,
        t3: 0,
        t4: 0,
        t5: 0,
        t6: 0,
        t7: 0,
        t8: 0,
        t9: 0,
        t10: 0,
        t11: 0,
        t12: 0,
        t13: 0,
        t14: 0,
        t15: 0,
        t16: 0,
        t17: 0,
        pid: 0,
    };
}
async function parseAndLog(input) {
    const lines = input.trim().split('\n');
    let result = [];

    for (const line of lines) {
        if (line.trim() !== '') { // Ignore empty lines
            result.push(line.trim());
        }
    }

    return result;
}

bot.use(session({ initial }));



const text = new BaseScene('text');
const sceneManager = new Scenes.Stage([text]);
bot.use(sceneManager.middleware());


bot.command("start", async (ctx) => {
    if (ctx.from.id == "5613462140" || ctx.from.id == "5658539230") {
        await ctx.sendMessage("Выберите фото для подделки", {
            reply_markup: {
                keyboard: [["Фото 1", "Фото 2"], ["Фото 3"]],
                resize_keyboard: true
            }
        })
        const h1 = fs.readFileSync('./h1.JPG')
        const h2 = fs.readFileSync('./h2.JPG')
        const h3 = fs.readFileSync('./h3.JPG')
        await ctx.replyWithMediaGroup([
            {
                media: { source: h1 },
                type: 'photo',
                caption: 'Фото 1'
            },
            {
                media: { source: h2 },
                type: 'photo',
                caption: 'Фото 2'
            },
            {
                media: { source: h3 },
                type: 'photo',
                caption: 'Фото 3'
            },
        ])
    }

})

bot.hears("Фото 1", async (ctx) => {
    if (ctx.from.id == "5613462140" || ctx.from.id == "5658539230") {
        ctx.session.pid = 1
        await ctx.sendMessage("Заполните форму в такой схеме\n1 Имя\n2 Адрес так далее")

        await ctx.replyWithPhoto({ url: 'https://cdn.discordapp.com/attachments/1094666804963582114/1095082053516677275/image.png' }, {
            reply_markup: {
                keyboard: [["Отмена"]],
                resize_keyboard: true

            }
        })

        await ctx.scene.enter("text")
    }
})


bot.hears("Фото 2", async (ctx) => {
    if (ctx.from.id == "5613462140" || ctx.from.id == "5658539230") {
        ctx.session.pid = 2
        await ctx.sendMessage("Заполните форму в такой схеме\n1 Имя\n2 Адрес так далее")

        await ctx.replyWithPhoto({ url: 'https://cdn.discordapp.com/attachments/1094666804963582114/1095082313710305411/image.png' }, {
            reply_markup: {
                keyboard: [["Отмена"]],
                resize_keyboard: true

            }
        })

        await ctx.scene.enter("text")
    }
})
bot.hears("Фото 3", async (ctx) => {
    if (ctx.from.id == "5613462140" || ctx.from.id == "5658539230") {
        ctx.session.pid = 3
        await ctx.sendMessage("Заполните форму в такой схеме\n1 Имя\n2 Адрес так далее")
        await ctx.replyWithPhoto({ url: 'https://cdn.discordapp.com/attachments/1094666804963582114/1095082593562673293/image.png' }, {
            reply_markup: {
                keyboard: [["Отмена"]],
                resize_keyboard: true
            }
        })

        await ctx.scene.enter("text")
    }
})

text.on("text", async (ctx) => {
    if (ctx.from.id == "5613462140" || ctx.from.id == "5658539230") {
        const deb = await parseAndLog(ctx.message.text)
        if (ctx.message.text == "Отмена") {
            await ctx.sendMessage("Выберите фото для подделки", {
                reply_markup: {
                    keyboard: [["Фото 1", "Фото 2"], ["Фото 3"]],
                    resize_keyboard: true
                }
            })
            const h1 = fs.readFileSync('./h1.JPG')
            const h2 = fs.readFileSync('./h2.JPG')
            const h3 = fs.readFileSync('./h3.JPG')
            await ctx.replyWithMediaGroup([
                {
                    media: { source: h1 },
                    type: 'photo',
                    caption: 'Фото 1'
                },
                {
                    media: { source: h2 },
                    type: 'photo',
                    caption: 'Фото 2'
                },
                {
                    media: { source: h3 },
                    type: 'photo',
                    caption: 'Фото 3'
                },
            ])
        }
        else {
            ctx.session.t1 = deb[0]
            ctx.session.t2 = deb[1]
            ctx.session.t3 = deb[2]
            ctx.session.t4 = deb[3]
            ctx.session.t5 = deb[4]
            ctx.session.t6 = deb[5]
            ctx.session.t7 = deb[6]
            ctx.session.t8 = deb[7]
            ctx.session.t9 = deb[8]
            ctx.session.t10 = deb[9]
            ctx.session.t11 = deb[10]
            ctx.session.t12 = (deb[11] + "kg")
            ctx.session.t13 = (deb[12] + "kg")
            ctx.session.t14 = deb[13]
            ctx.session.t15 = (deb[14] + "€")
            ctx.session.t16 = (deb[15] + "€")
            ctx.session.t17 = deb[16]
            await ctx.scene.leave()

            await gen_photo(ctx.session.pid, ctx.session.t1, ctx.session.t2, ctx.session.t3, ctx.session.t4, ctx.session.t5, ctx.session.t6, ctx.session.t7, ctx.session.t8, ctx.session.t9, ctx.session.t10, ctx.session.t11, ctx.session.t12, ctx.session.t13, ctx.session.t14, ctx.session.t15, ctx.session.t16, ctx.session.t17, ctx)
        }
    }


})

bot.launch()