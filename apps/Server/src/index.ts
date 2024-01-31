import http from 'http';
import SocketService from './services/socketservice';

async function init() {
    const server = http.createServer((req, res) => {})
    const socketservice = new SocketService()
    const port = 4040
    socketservice.io.attach(server)


    server.listen(port, () => {
        console.log(`Server listening on port ${port}`)
    })
    socketservice.initlistener()

}
init()