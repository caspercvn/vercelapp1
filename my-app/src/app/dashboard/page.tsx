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
<div className='max-w-6xl mx-auto p-6 pb-0'>
    
    <header className="flex justify-between gap-4 mb-8 md:mb-16"><a className="flex items-center gap-2" href="/"><p className="font-semibold text-2xl">Indie Page</p></a><div className="hidden md:inline-flex items-center gap-12 flex-1 px-16"><a className="link link-hover" href="/#pricing">Priser</a><a className="link link-hover" href="/#signup">FAQ</a></div><Link href="/logind"><button className="btn btn-m">Log ind</button></Link></header>
    </div>
    <main className="min-h-screen max-w-5xl mx-auto max-lg:px-8 py-12 pb-24 bg-base-200"><section className="grid grid-cols-6 gap-12"><div className="col-span-full md:col-span-2"><div className="p-8 rounded-box bg-base-100 min-h-0"><form className="space-y-8 w-full"><h2 className="font-bold text-lg">Build features users <span className="bg-neutral text-neutral-content px-1.5">really</span> want</h2><div className="form-control w-full"><div className="label"><span className="label-text">Board Name</span></div><input  type="text"  placeholder="Future Unicorn Inc. 🦄" className="input input-bordered w-full placeholder:opacity-60" value=""></input></div><div className="space-y-2"><button className="btn btn-primary group w-full" type="submit">Create Board</button></div></form></div></div><div className="space-y-6 col-span-full md:col-span-4"><h1 className="font-extrabold text-lg md:text-xl">1 Boards</h1><ul className="grid md:grid-cols-2 gap-4"><li><a className="rounded-box block p-6 bg-base-100 hover:bg-neutral hover:text-neutral-content duration-150" href="/dashboard/666aeae1205dbbf1617def3e"><div className="space-y-2"><p className="font-bold">test111</p></div></a></li></ul></div></section>
    
    
    <div>
      <h1>Create a new Board</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Board Title"
      />
      <button onClick={handleCreateBoard}>Create Board</button>
    </div>
    
    </main>
    </html>
    </>
  );
}
