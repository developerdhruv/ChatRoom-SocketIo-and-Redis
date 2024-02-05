'use client'
import { useState } from 'react'
import { useSocket } from '../Context/socketprovider'
import classes from './page.module.css'

export default function Page() {

 
  const {sendMessage} = useSocket();

 
 
  const [message, setmessage] = useState('')
 
 
  return(
 
 <div>
 
    <div>All message section</div>
    <div className={classes["divr"]}>
 
 
      <input onChange={e=>setmessage(e.target.value)} type="text" className={classes["chat-input"]}placeholder="Enter message" />
       <button onClick={(e)=>sendMessage(message)} className={classes["button"]}>Send</button>
 
    </div>
  </div>
  )
}
