import app from '@entity/Application';

const config = require('@config');

app.server.listen(config.server.port, () => {
    console.log('Server listening on port ' + config.server.port)
});