import Link from "next/link";
export default function Dashboard() {
  return (

   <html data-theme="halloween">
     <header className="flex justify-between gap-4 mb-8 md:mb-16 max-w-6xl mx-auto pt-6 pb-0"><div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="btn m-1 bg-base-200">Min Profil</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div><div className="hidden md:inline-flex items-center gap-12 flex-1 px-16"></div><Link href="/logind"><button className="btn btn-m bg-base-200">Log ind</button></Link></header>
   
 <main className="min-h-screen max-w-6xl mx-auto max-lg:px-8 py-12 pb-24"><section className="grid grid-cols-6 gap-12"><div className="col-span-full md:col-span-2"><div className="p-8 rounded-box bg-base-200 min-h-0"><form className="space-y-8 w-full"><h2 className="font-bold text-lg">Build features users <span className="bg-neutral text-neutral-content px-1.5">really</span> want</h2><div className="form-control w-full"><div className="label"><span className="label-text">Board Name</span></div><input placeholder="Future Unicorn Inc. 🦄" className="input input-bordered w-full placeholder:opacity-60" type="text" value=""></input></div><div className="space-y-2"><button className="btn btn-secondary group w-full" type="submit">Create Board</button></div></form></div></div><div className="space-y-6 col-span-full md:col-span-4"><h1 className="font-extrabold text-lg md:text-xl">1 Boards</h1><ul className="grid md:grid-cols-2 gap-4"><li><a className="rounded-box block p-6 bg-base-200 hover:bg-secondary hover:text-neutral-content duration-150" href="/dashboard/666aeae1205dbbf1617def3e"><div className="space-y-2"><p className="font-bold">test111</p></div></a></li></ul></div></section></main>

 </html>
  )
}