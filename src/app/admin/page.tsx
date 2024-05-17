
'use client'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
    <div className="w-auto content-center flex flex-col items-center p-10 h-screen">
    <Link href="/fullinventory"><button className="mt-3 w-80 px-4 py-2 mb-2 bg-green-500 text-white rounded-full hover:bg-sky-700">Inventory</button></Link>
    <Link href="/addInventory"><button className="mt-3 w-80 px-4 py-2 mb-2 bg-green-500 text-white rounded-full hover:bg-sky-700">Add Inventory</button></Link>
      <Link href="/browse"><button className="mt-3 w-80 px-4 py-2 mb-2 bg-green-500 text-white rounded-full hover:bg-sky-700">Orders</button></Link>
    </div>

    {/* footer */}
    <div className="mb-3 p-1 border-t-2 border-gray-400 h-1">
      <p className="text-black text-center pt-3">Copyright 2024</p>
    </div>
  </main>
  )
}
