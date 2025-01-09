"use client";
import Button from "@/components/Button";
import '@/app/globals.css';
import Link from "next/link"

function Signup() {
  return (  
    <>
    <div className="h-screen flex items-center justify-center">
        <form
        method="post"
        className="h-2/3 w-1/4 flex items-center justify-center flex-wrap flex-col rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
        >
            <p className="w-full text-center text-3xl font-bold">Signup</p>

          <label htmlFor="username" className="mt-5 w-3/4 text-left font-medium">Username</label>
          <input className="h-10 w-3/4 pl-3 rounded-lg border outline-none" type="text"  placeholder="Enter your username" />
          <label htmlFor="email" className="mt-5 w-3/4 text-left font-medium">Email</label>
          <input className="h-10 w-3/4 pl-3 rounded-lg border outline-none" type="email"  placeholder="example@gmail.com" />
          <label htmlFor="password" className="mt-5 w-3/4 text-left font-medium">Password</label>
          <input className="h-10 w-3/4 pl-3 rounded-lg border outline-none mb-10" type="password" placeholder="Enter your password" />
          <Button
          type="submit"
          className="text-white bg-black rounded-md px-7 py-2"
          value={"Login"}
          />
          <Link href={"/login"}>Already have an account?</Link>
        </form>
      </div>
    </>
  )
}

export default Signup
