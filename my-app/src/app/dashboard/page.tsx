// src/app/dashboard/page.tsx
"use client";
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // next/navigation is used instead of next/router in app directory
import { generateSlug } from '@/utils/generateSlug';
import { v4 as uuidv4 } from 'uuid';

export default function Dashboard() {
  const [title, setTitle] = useState('');
  const router = useRouter();

  const handleCreateBoard = async () => {
    const slug = generateSlug(title);
    const newBoard = { id: uuidv4(), title, slug };

    // Save the new board to your database here

    router.push(`/${slug}`);
  };

  return (
    <>
<html data-theme="acid">
  <body>
<div className=' mx-auto pt-6 pb-0 max-w-6xl'>
    
    <header className="flex justify-between gap-4 mb-8 md:mb-16"><Link href="/logind"><button className="btn btn-m">Min Profil</button></Link><Link href="/logind"><button className="btn btn-m">Feedback</button></Link></header>
    </div>
    <main className="min-h-screen mx-auto max-lg:px-8 py-12 pb-24 max-w-6xl "><section className=" grid grid-cols-6 gap-12"><div className="col-span-full md:col-span-2"><div className="border shadow-sm	 p-8 rounded-box bg-base-100 min-h-0 space-y-8 w-full"><h2 className="font-bold text-lg">Build features users <span className="bg-neutral text-neutral-content px-1.5">really</span> want</h2><div className="form-control w-full"><div className="label"><span className="label-text">Board Name</span></div><input className='input input-bordered w-full placeholder:opacity-60'
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Board Title"
      /></div><div className="space-y-2"><button className='btn btn-neutral group w-full' onClick={handleCreateBoard}>Create Board</button></div></div></div><div className="space-y-6 col-span-full md:col-span-4"><h1 className="font-extrabold text-lg md:text-xl">1 Boards</h1><ul className="grid md:grid-cols-2 gap-4"><li><a className="border shadow-sm	rounded-box block p-6 bg-base-100 hover:bg-neutral hover:text-neutral-content duration-150" href="/dashboard/666aeae1205dbbf1617def3e"><div className="space-y-2"><p className="font-bold">test111</p></div></a></li></ul></div></section>
    
    </main>
    </body>
    </html>
    </>
  );
}
