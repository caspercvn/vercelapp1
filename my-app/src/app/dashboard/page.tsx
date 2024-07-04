import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


export default function Dashboard() {
    return (
        <>
<html lang="en" data-theme="light">
  <body className="">
  <header className="bg-base-100 fixed z-50 w-full border-b">
  <nav className="container flex items-center justify-between max-w-5xl py-3 max-lg:px-4 mx-auto flex gap-4">
  <div className="dropdown">
  <div tabIndex={0} role="button"  className="btn m-1 ">Min Profil</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"> 
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
  
</div>
  <div className=""><a className="btn btn-ghost" href="https://insigh.to/b/insighto" target="_blank">💡 Feedback?</a></div>
  </nav>
</header>
<main className="min-h-screen bg-base-200">
  <div className="">
  <section>
    <div className="max-w-5xl mx-auto max-lg:px-8 py-12 pb-24 lg:py-32 ">
        
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