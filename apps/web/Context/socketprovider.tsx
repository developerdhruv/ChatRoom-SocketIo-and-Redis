'use client'

import React, { Children, useCallback, useContext, useEffect, useState } from "react"
import { io, Socket } from "socket.io-client";
interface SocketProviderProps{
    children ?: React.ReactNode
}

interface ISocketContext{
    sendMessage:(msg:string)=> any;
}

const SocketContext = React.createContext<ISocketContext | null>(null);



export const useSocket = ()=>{
    const state = useContext(SocketContext);
    if (!state) throw new Error(`state is undefined`)
    return state

}

export const SocketProvider : React.FC<SocketProviderProps>=({children})=>{
    const [socket, setsocket] = useState<Socket>()
    const sendMessage : ISocketContext['sendMessage']= useCallback((msg)=>{
        console.log('send Messgae', msg)
        if(socket){
            socket.emit("event:message", {message : msg});

        }
    },[]);

    useEffect (()=>{
        const _socket = io('https://localhost:4040')

        return ()=>{
            _socket.disconnect
            setsocket(undefined)
        }
    })



    return(
        <SocketContext.Provider value={{sendMessage}}>
            {children}
        </SocketContext.Provider>
    )
}