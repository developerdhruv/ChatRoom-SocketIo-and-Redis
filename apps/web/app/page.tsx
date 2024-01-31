'use client'
import { useState } from 'react'
import { useSocket } from '../Context/socketprovider'
import classes from './page.module.css'

export default function Page() {
  const { sendmsg }= useSocket();
  const [msg, setmsg] = useState('')
  return(
  <div>
    <div>All message section</div>
    <div className={classes["divr"]}>
      <input onChange={e=>setmsg(e.target.value)} type="text" className={classes["chat-input"]}placeholder="Enter message" />
      <button onClick={(e)=>sendmsg(msg)} className={classes["button"]}>Send</button>
    </div>
  </div>
  )
}
