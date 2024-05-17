/**
 * Starting page. Hosts the information entry component to get info from customers.
 */
'use client'
import Link from 'next/link'
import { DisplayParent } from './lib/components/displayParent'

function reload()
{
    location.reload()
}
export default function Home() {

    const urlParams = new URLSearchParams(window.location.search);
    const idFromURL: string | null = urlParams.get('id');
    console.log(idFromURL);
    let idNumber:number = -1;
    if(idFromURL !== null)
        {
            idNumber = parseInt(idFromURL, 10);
        }
        else{
            console.log("No param in url");
            //setTimeout(reload,500);
        }

  return (
    <main className="flex flex-col min-h-screen">
    <div className="w-auto content-center flex flex-col items-center p-10 h-screen">
      <Link href="/parent-information"><button className="mt-3 w-80 px-4 py-2 mb-2 bg-green-500 text-white rounded-full hover:bg-sky-700">Add Guardian</button></Link>
        <DisplayParent parentId = {idNumber}></DisplayParent>
      <Link href="/kidInfo"><button className="mt-3 w-80 px-4 py-2 mb-2 bg-green-500 text-white rounded-full hover:bg-sky-700">Add Child</button></Link>
      <Link href="/confirmation"><button className="mt-3 w-80 px-4 py-2 mb-2 bg-green-500 text-white rounded-full hover:bg-sky-700">Checkout</button></Link>
    </div>

    {/* footer */}
    <div className="mb-3 p-1 border-t-2 border-gray-400 h-1">
      <p className="text-black text-center pt-3">Copyright 2024</p>
    </div>
  </main>
  )
}
