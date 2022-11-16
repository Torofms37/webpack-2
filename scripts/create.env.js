const fs = require('fs');

fs.writeFileSync('./.env', `APII = ${process.env.API}\N`)