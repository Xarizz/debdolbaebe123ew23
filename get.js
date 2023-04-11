

const { createCanvas, loadImage, registerFont } = require('canvas');
const fs = require("fs")
const path = require("path")
const wait = function (milliseconds) {
    return new Promise((resolve) => {
        if (typeof milliseconds !== 'number') {
            throw new Error('milliseconds not a number');
        }
        setTimeout(() => resolve("done!"), milliseconds)
    });
};
async function gen_photo(photnum, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, ctx) {
    if (photnum == 1) {
        loadImage('./h1.jpg').then(async image => {
            const canvas = createCanvas(image.width, image.height);
            const ctxs = canvas.getContext('2d');

            ctxs.drawImage(image, 0, 0);

            const fontWeight = '400';
            const fontStyle = 'normal';
            const fontFamily = 'Arial';
            const fontSize = 12;

            ctxs.fillStyle = 'black';
            ctxs.font = `${fontStyle} ${fontWeight} ${fontSize}px ${fontFamily}`;
            ctxs.textBaseline = 'middle';

            function zalupWRITE(context, text, x, y, letterSpacing, drawStroke = false) {
                let currentPosition = x;
                for (let i = 0; i < text.length; i++) {
                    context.fillText(text[i], currentPosition, y);
                    if (drawStroke) {
                        context.strokeText(text[i], currentPosition, y);
                    }
                    currentPosition += context.measureText(text[i]).width + letterSpacing;
                }
            }

            const letterSpacing = 0;
            const lineWidth = 0.3;
            ctxs.lineWidth = lineWidth;
            ctxs.strokeStyle = 'black';

            const text = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17];
            let positions
            if (photnum == 1) {
                positions = [
                    { x: 116, y: 252 }, //1
                    { x: 159, y: 287 },//2
                    { x: 147, y: 306 },//3
                    { x: 149, y: 324 },//4
                    { x: 149, y: 341 },//5
                    { x: 116, y: 429 }, //6
                    { x: 160, y: 465 },//7
                    { x: 147, y: 484 },//8
                    { x: 150, y: 503 },//9
                    { x: 149, y: 522 },//10
                    { x: 643, y: 368 },//11
                    { x: 604, y: 477 },//12
                    { x: 638, y: 503 },//13
                    { x: 115, y: 677 }, //14
                    { x: 774, y: 677 }, //15
                    { x: 773, y: 961 },//16
                    { x: 530, y: 1117 },//17


                ];
            }
            else {
                return "invalid photo";
            }
            console.log(positions)
            for (let i = 0; i < text.length; i++) {
                console.log(positions[i].x)
                zalupWRITE(ctxs, text[i], positions[i].x, positions[i].y, letterSpacing, true);
            }

            canvas.toBuffer((err, buffer) => {
                require('fs').writeFileSync('output1.jpg', buffer);
            });
            await wait(1000)
            const photo = fs.readFileSync('./output1.jpg')
            await ctx.replyWithPhoto({ source: photo }, {
                reply_markup: {
                    keyboard: [["Фото 1", "Фото 2"], ["Фото 3"]],
                    resize_keyboard: true
                }
            })
        });
    }
    else if (photnum == 2) {
        loadImage('./h2.jpg').then(async image => {
            const canvas = createCanvas(image.width, image.height);
            const ctxs = canvas.getContext('2d');

            ctxs.drawImage(image, 0, 0);

            const fontWeight = '400';
            const fontStyle = 'normal';
            const fontFamily = 'Arial';
            const fontSize = 12;

            ctxs.fillStyle = 'black';
            ctxs.font = `${fontStyle} ${fontWeight} ${fontSize}px ${fontFamily}`;
            ctxs.textBaseline = 'middle';

            function zalupWRITE(context, text, x, y, letterSpacing, drawStroke = false) {
                let currentPosition = x;
                for (let i = 0; i < text.length; i++) {
                    context.fillText(text[i], currentPosition, y);
                    if (drawStroke) {
                        context.strokeText(text[i], currentPosition, y);
                    }
                    currentPosition += context.measureText(text[i]).width + letterSpacing;
                }
            }

            const letterSpacing = 0;
            const lineWidth = 0.3;
            ctxs.lineWidth = lineWidth;
            ctxs.strokeStyle = 'black';

            const text = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17];
            let positions
            if (photnum == 2) {
                positions = [
                    { x: 97, y: 238 },//1
                    { x: 140, y: 276 },//2
                    { x: 136, y: 294 },//3
                    { x: 134, y: 313 },//4
                    { x: 134, y: 332 },//5
                    { x: 97, y: 421 },//6
                    { x: 138, y: 458 },//7
                    { x: 129, y: 477 },//8
                    { x: 129, y: 497 },//9
                    { x: 129, y: 516 },//10
                    { x: 641, y: 358 },//11
                    { x: 610, y: 470 },//12
                    { x: 643, y: 497 },//13
                    { x: 102, y: 672 },//14
                    { x: 774, y: 677 },//15
                    { x: 774, y: 965 },//16
                    { x: 528, y: 1127 },//17




                ];
            }
            else {
                return "invalid photo";
            }


            for (let i = 0; i < text.length; i++) {
                zalupWRITE(ctxs, text[i], positions[i].x, positions[i].y, letterSpacing, true);
            }

            canvas.toBuffer((err, buffer) => {
                require('fs').writeFileSync('output2.jpg', buffer);
            });
            await wait(1000)
            const photo = fs.readFileSync('./output2.jpg')
            await ctx.replyWithPhoto({ source: photo }, {
                reply_markup: {
                    keyboard: [["Фото 1", "Фото 2"], ["Фото 3"]],
                    resize_keyboard: true
                }
            })
        });
    }
    else if (photnum == 3) {
        loadImage('./h3.jpg').then(async image => {
            const canvas = createCanvas(image.width, image.height);
            const ctxs = canvas.getContext('2d');

            ctxs.drawImage(image, 0, 0);

            const fontWeight = '400';
            const fontStyle = 'normal';
            const fontFamily = 'Arial';
            const fontSize = 12;

            ctxs.fillStyle = 'black';
            ctxs.font = `${fontStyle} ${fontWeight} ${fontSize}px ${fontFamily}`;
            ctxs.textBaseline = 'middle';

            function zalupWRITE(context, text, x, y, letterSpacing, drawStroke = false) {
                let currentPosition = x;
                for (let i = 0; i < text.length; i++) {
                    context.fillText(text[i], currentPosition, y);
                    if (drawStroke) {
                        context.strokeText(text[i], currentPosition, y);
                    }
                    currentPosition += context.measureText(text[i]).width + letterSpacing;
                }
            }

            const letterSpacing = 0;
            const lineWidth = 0.3;
            ctxs.lineWidth = lineWidth;
            ctxs.strokeStyle = 'black';

            const text = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17];
            let positions
            if (photnum == 3) {
                positions = [
                    { x: 136, y: 176 },//1
                    { x: 179, y: 208 },//2
                    { x: 171, y: 227 },//3
                    { x: 171, y: 243 },//4
                    { x: 171, y: 261 },//5
                    { x: 136, y: 352 },//6
                    { x: 179, y: 385 },//7
                    { x: 171, y: 404 },//8
                    { x: 171, y: 424 },//9
                    { x: 171, y: 444 },//10
                    { x: 667, y: 289 },
                    { x: 630, y: 398 },
                    { x: 663, y: 425 },//
                    { x: 145, y: 593 },
                    { x: 791, y: 596 },
                    { x: 812, y: 881 },
                    { x: 550, y: 1037 },
                ];
            }
            else {
                return "invalid photo";
            }


            for (let i = 0; i < text.length; i++) {
                zalupWRITE(ctxs, text[i], positions[i].x, positions[i].y, letterSpacing, true);
            }

            canvas.toBuffer((err, buffer) => {
                require('fs').writeFileSync('output3.jpg', buffer);
            });
            await wait(1000)
            const photo = fs.readFileSync('./output3.jpg')
            await ctx.replyWithPhoto({ source: photo }, {
                reply_markup: {
                    keyboard: [["Фото 1", "Фото 2"], ["Фото 3"]],
                    resize_keyboard: true
                }
            })
        });
    }



}
module.exports = gen_photo