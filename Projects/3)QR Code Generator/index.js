/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import { default as inquirer } from "inquirer";
import { image } from "qr-image";

const questions = [
    {
        type: 'input',
        name: 'website',
        message: 'Type the address that you want to convert to QR',
    },
];

inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, ''));
});

var qr = require('qr-image');

var qr_img = qr.image(answers.website, {type: 'img'});
qr_img.pipe(require('fs').createWriteStream('lets_go.img'));

var img_string = qr.imageSync(answers.website, {type: 'img'});