const fs = require('fs');

const dankMeme = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getMeme = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(dankMeme);
  response.end();
};

module.exports.getMeme = getMeme;
