import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


export default function Dashboard() {
    return (
        <>
<html data-theme="emerald">
  <body className="">
  <header className="bg-base-100 fixed z-50 w-full">
  <nav className="container flex items-center justify-between px-8 py-4 mx-auto max-w-7xl">
  <details className="dropdown">
  <summary className="btn m-1">Min Profil</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>
<div>
<button className="btn m-1">Feedback</button>
      </div>
  </nav>
</header>
<main>
  <div className="h-full">
  <section>
    <div className="px-8 py-4 mx-auto max-w-7xl lg:py-32 ">
        
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