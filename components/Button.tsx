import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from '@/store'

export default function Button() {
    const count  = useSelector((state : any) => state.counter);
    const [booll, setBooll] = useState(false)

    const dispatch = useDispatch()
    const increment = ()=>{
        dispatch(actions.increment());
    }
    function sub(){
        dispatch(actions.decrement())
    }
    
    function toggle(){
        setBooll(prebooll => true)
    }
    function toggleback(){
        setBooll(prebooll => false)
    }
    return(
        <>
            {booll === false ? (
                <div>
                    <div>
                        <button onClick={toggle} className='text-[2rem] text-white bg-slate-800'>show cart</button>
                    </div>
                </div>
            ) : (
                <>
                    <div className='fixed z-[1100] bg-white'>
                    <div className='text-[3rem]'> {count} </div>
                    <div className='flex flex-row w-full h-[5rem] justify-center'>
                        <div className='text-[3rem] mr-20 cursor-pointer' onClick={increment}>+</div>
                        <div className='text-[3rem] ml-10 cursor-pointer' onClick={sub}>-</div>
                    </div>
                    
                    </div>
                    <div onClick={toggleback} className='fixed z-[1000] top-0 left-0 w-full h-full bg-black opacity-[50%] 
                    overflow-y-hidden'>
                    </div>
                 </>
            )}
        </>
    )
    
}


// if (booll === false) {
//     return (
//         <div>
//             <div>
//             <button onClick={toggle} className='text-[2rem] text-white bg-slate-800'>show cart</button>
//             </div>
//         </div>
//     )
// }
// else {
//     return(
//         <>
//             <div className='fixed z-[1100] bg-white'>
//                 <div className='text-[3rem]'> {count} </div>
//                 <div className='flex flex-row w-full h-[5rem] justify-center'>
//                     <div className='text-[3rem] mr-20 cursor-pointer' onClick={increment}>+</div>
//                     <div className='text-[3rem] ml-10 cursor-pointer' onClick={sub}>-</div>
//                 </div>
                
//             </div>
//             <div onClick={toggleback} className='fixed z-[1000] top-0 left-0 w-full h-full bg-black opacity-[50%] 
//                 overflow-y-hidden'>
//                 </div>   
            
//         </>
//     )
// }
