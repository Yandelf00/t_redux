import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full h-[20rem] bg-slate-100 flex justify-center items-center">
      <div className='w-[50%] h-full flex flex-col items-center justify-center'>
        <div className='text-[3rem]'> 5 </div>
        <div className='flex flex-row w-full h-[5rem] justify-center'>
          <div className='text-[3rem] mr-20 cursor-pointer'>+</div>
          <div className='text-[3rem] ml-10 cursor-pointer'>-</div>
        </div>
        <div>
          <button className='text-[2rem] text-white bg-slate-800'>show cart</button>
        </div>
      </div>
    </main>
  )
}
