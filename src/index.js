import '@babel/polyfill'
import app from './server'
import { connect } from './config/database'

async function main() {
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
    await connect();
}

main();