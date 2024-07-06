import Link from "next/link";
export default function Dashboard() {
  return (

   <html data-theme="halloween">
     <header className="flex justify-between gap-4 mb-8 md:mb-16"><a className="flex items-center gap-2" href="/"><p className="font-semibold text-2xl">Indie Page</p></a><div className="hidden md:inline-flex items-center gap-12 flex-1 px-16"><a className="link link-hover" href="/#pricing">Priser</a><a className="link link-hover" href="/#signup">FAQ</a></div><Link href="/logind"><button className="btn btn-m">Log ind</button></Link></header>
   <body>
 <main className="min-h-screen max-w-5xl mx-auto max-lg:px-8 py-12 pb-24 bg-base-200"><section className="grid grid-cols-6 gap-12"><div className="col-span-full md:col-span-2"><div className="p-8 rounded-box bg-base-100 min-h-0"><form className="space-y-8 w-full"><h2 className="font-bold text-lg">Build features users <span className="bg-neutral text-neutral-content px-1.5">really</span> want</h2><div className="form-control w-full"><div className="label"><span className="label-text">Board Name</span></div><input placeholder="Future Unicorn Inc. 🦄" className="input input-bordered w-full placeholder:opacity-60" type="text" value=""></input></div><div className="space-y-2"><button className="btn btn-primary group w-full" type="submit">Create Board</button></div></form></div></div><div className="space-y-6 col-span-full md:col-span-4"><h1 className="font-extrabold text-lg md:text-xl">1 Boards</h1><ul className="grid md:grid-cols-2 gap-4"><li><a className="rounded-box block p-6 bg-base-100 hover:bg-neutral hover:text-neutral-content duration-150" href="/dashboard/666aeae1205dbbf1617def3e"><div className="space-y-2"><p className="font-bold">test111</p></div></a></li></ul></div></section></main>
</body>
 </html>
  )
}