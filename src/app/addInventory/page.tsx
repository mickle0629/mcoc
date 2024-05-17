import React from 'react';
import AddInventory from "../lib/components/addInventoryForm";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <div className="w-auto content-center">
        <AddInventory/>
      </div>
      

      {/* footer */}
      <div className="h-12 mb-3 p-1 border-t-2 border-gray-400">
        {/*TODO: has too much bottom padding/margin */}
        <p className="text-black text-center pt-3">Copyright 2024</p>
      </div>
    </main>
    
  );
}
