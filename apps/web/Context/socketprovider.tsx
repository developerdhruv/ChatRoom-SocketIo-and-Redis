'use client'


import React, { useCallback, useContext, useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client'
interface SocketProviderProps{
    children: React.ReactNode
}
interface SocketContextInt{
    sendmsg: (msg: string) => any;
}

const socketContext = React.createContext<SocketContextInt | null > (null)


export const useSocket = () => {
    const state=useContext(socketContext)
    if(!state)throw new Error('SocketProvider not found');
        return state
    
}

export const SocketProvider: React.FC <SocketProviderProps> = ({children}) => {
    const [socket, setSocket] = useState<Socket>()
    const sendmsg: SocketContextInt['sendmsg'] = useCallback((msg) => {
        console.log(msg)
        if(socket){
            socket.emit('event:message',{message: msg})
        }

    }, []);

    useEffect(() => {
        const _socket = io('http://localhost:4040');
        setSocket( _socket )

    

        return () => {
            _socket.disconnect()
            setSocket(undefined)
        }
    })




    return (
        <socketContext.Provider value={{sendmsg}}>
            {children}
        </socketContext.Provider>
    )

}