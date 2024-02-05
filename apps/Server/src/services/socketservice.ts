import {Server} from 'socket.io';

class SocketService {
    private_io: Server; 
    constructor(){
        console.log('SocketService constructor');
        this.private_io = new Server({
            cors:{
                origin: '*',
                allowedHeaders: ['*'],
            }
        });
        
    }
    public initlistener(){  
        const io = this.io;
        console.log('initialising socket listener.....');
        io.on('connection', (socket) => {
            console.log('a user connected', socket.id);
            socket.on("event:message",async({message}: {message: string}) => {
                console.log('new message recieved', message);
                
            })
        })
    }


    get io(){
        return this.private_io;
    }
    
}

export default  SocketService;