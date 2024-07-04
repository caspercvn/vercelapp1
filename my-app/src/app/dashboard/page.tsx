import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


export default function Dashboard() {
    return (
        <>
<html data-theme="autumn">
  <body className="">
  <header className="bg-base-100 fixed z-50 w-full border-b">
  <nav className="container flex items-center justify-between px-8 py-4 mx-auto max-w-7xl">
  <div>
  <button className="bg-[#d9d9d9] font-medium	rounded-lg text-sm px-4 py-2">Min Profil</button>
  </div>
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