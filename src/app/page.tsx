/**
 * Starting page. Hosts the information entry component to get info from customers.
 */
import Link from 'next/link'

export default function Home() {

  return (
    <main className="flex flex-col min-h-screen bg-white">
    <div className="w-auto content-center flex flex-col items-center p-10">
      <Link href="/parent-information"><button className="w-80 px-4 py-2 mb-2 bg-green-500 text-white rounded-full">Add Gaurdian</button></Link>
      <Link href="/kidInfo"><button className="w-80 px-4 py-2 mb-2 bg-green-500 text-white rounded-full">Add Child</button></Link>
      <Link href=""><button className="w-80 px-4 py-2 mb-2 bg-green-500 text-white rounded-full">Checkout</button></Link>
    </div>

    {/* footer */}
    <div className="h-12 mb-3 p-1 border-t-2 border-gray-400">
      <p className="text-black text-center pt-3">Copyright 2024</p>
    </div>
  </main>
  )
}
