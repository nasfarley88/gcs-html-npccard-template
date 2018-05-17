const pug = require('./node_modules/pug/lib/index.js')
const fs = require('fs')

console.log(pug.renderFile('./gcs-npccard-template.pug'));

fs.writeFileSync('gcs-npccard-template.html', pug.renderFile('./gcs-npccard-template.pug'))