"use client"


import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from '@/store'


export default function Home() {
  const count  = useSelector((state : any) =>state.counter);
  const dispatch = useDispatch()
  const increment = ()=>{
    dispatch(actions.increment());
  }
  function sub(){
    dispatch(actions.decrement())
  }
  return (
    <main className="w-full h-[20rem] bg-slate-100 mt-20 flex flex-col justify-center items-center">
      <div className='w-[50%] h-full flex flex-col items-center justify-center'>
        <div className='text-[3rem]'> {count} </div>
        <div className='flex flex-row w-full h-[5rem] justify-center'>
          <div className='text-[3rem] mr-20 cursor-pointer' onClick={increment}>+</div>
          <div className='text-[3rem] ml-10 cursor-pointer' onClick={sub}>-</div>
        </div>
      </div>
    </main>
  )
}
