export default function Dashboard() {
  return (

   <html data-theme="halloween">
   <body>
 <main>
 <section className="max-w-6xl mx-auto p-6 pb-0">
 <header className="flex justify-between gap-4 mb-8 md:mb-16"><a className="flex items-center gap-2" href="/"><p className="font-semibold text-2xl">Indie Page</p></a><div className="hidden md:inline-flex items-center gap-12 flex-1 px-16"><a className="link link-hover" href="/#pricing">Priser</a><a className="link link-hover" href="/#signup">FAQ</a></div><button className="btn btn-m bg-primary shadow-none text-black hover:bg-base-100 hover:text-white">Log in</button></header>
 <div>
 <div className="flex flex-col gap-8 items-center"><h1 className="lg:backdrop:-mb-4 group text-6xl font-bold text-center	">Turn visitors into<span className="relative mr-2 lg:backdrop:mr-3"><span className=""> customers</span></span> with <span className="border-b-8 border-dashed border-primary whitespace-nowrap duration-200 group-hover:border-secondary">wake-up call</span> popups</h1></div>
 </div>
</section>
</main>
</body>
 </html>
  )
}