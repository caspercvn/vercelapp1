import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


export default function Dashboard() {
    return (
        <>
<html lang="en" data-theme="light">
  <body className="bg-base-200">
  <header className="bg-base-100 fixed z-50 w-full border-b">
  <nav className="container flex items-center justify-between px-8 py-4 mx-auto max-w-7xl">
  <div>
  <button className="bg-[#d9d9d9] font-medium	rounded-lg text-sm px-4 py-2">Min Profil</button>
  </div>
  <div className="relative z-10" data-headlessui-state=""><button className="btn" type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:r8:"><img src="https://lh3.googleusercontent.com/a/ACg8ocIBCPckc1OVdrib1HyeXMAOpvIntQkpD4PwrbPmNA8C5IJspA=s96-c" alt="casper" className="w-6 h-6 rounded-full shrink-0" width="24" height="24"></img>casper<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 duration-200 opacity-50 "><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg></button></div>
<div>
<button className="bg-[#d9d9d9] font-medium rounded-lg text-sm px-4 py-2">Feedback</button>
      </div>
  </nav>
</header>
<main>
  <div className="h-full">
  <section>
    <div className="container flex items-center justify-between px-8 py-4 mx-auto max-w-7xl lg:py-32 ">
        
        <h1 className="mb-4 text-2xl font-bold">Dashboard</h1>
       
        </div> 
        </section>
    </div>
</main>

</body>
</html>



</>
    )
}