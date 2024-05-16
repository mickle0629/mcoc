/**
 * Starting page. Hosts the information entry component to get info from customers.
 */



export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
    {/* footer */}
    <div className="h-12 mb-3 p-1 border-t-2 border-gray-400">
        <button  className=" flex justify-center px-10 py-2 mb-2 bg-green-500 text-white rounded-full" >Add Parent</button>
      {/*TODO: has too much bottom padding/margin */}
      <p className="text-black text-center pt-3">Copyright 2024</p>
    </div>
  </main>
  )
}
