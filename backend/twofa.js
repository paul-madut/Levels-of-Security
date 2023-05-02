const speakeasy = require("speakeasy");
const qrcode = require("qrcode");

const secret = speakeasy.generateSecret({ length: 20 });

console.log(secret);

const code = qrcode.toDataURL(secret.otpauth_url, (err, data) => {});

console.log(qrcode.toDataURL(secret.otpauth_url, (err, data) => {}));
