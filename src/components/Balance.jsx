import React, { useContext } from 'react'
import { Context, useGlobalState } from '../context/GlobalState'

export const Balance = () => {
  const data = useGlobalState()
  
  console.log(data)
  return (
    <div>
    <h1>Balance</h1>
    <div>{JSON.stringify(data)}</div>
    
    </div>
  )
}
