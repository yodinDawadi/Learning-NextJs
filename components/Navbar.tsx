"use client";
import Button from './Button'
import { useRouter } from 'next/navigation';
const Navbar = () => {
  const router = useRouter();
  return (
    <div className='w-full h-20 flex items-center justify-center flex-wrap bg-slate-100 mt-2 '>
      <div className='w-1/2 flex justify-center' id="image">
        <p className='text-black font-bold text-2xl'>NextJs</p>
      </div>
      <div className='w-1/2 flex justify-center gap-5 items-center' id="links">
      <p>cart items: 20</p>
        <Button
        value="Login"
        type='button'
        className='w-20  hover:bg-slate-800'
        onClick={()=> router.push("/login")}
        />
        <p>OR</p>
        <Button
        value="Signup"
        type='button'
        onClick={()=> router.push("/signup")}
        className='w-20 bg-slate-800 hover:bg-black'
        />
      </div>
    </div>
  )
}

export default Navbar
