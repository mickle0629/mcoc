import React from 'react';

interface InventoryItem {
  id: string;
  type: string;
  size: string;
  quantity: number;

}
interface RecentOrders{
  orderName: string; // this should pull from the db
  orderNumber: number; // this should also pull from the db
}

const InventoryPage: React.FC = () => {
  // Placeholder data for inventory items
  const placeholderInventory: InventoryItem[] = [
    { id: '1', type: 'Toddler Boy', size: '5T', quantity: 8 },
    { id: '2', type: 'Toddler Girl', size: '6T', quantity: 6 },
    { id: '3', type: 'Boy', size: '10', quantity: 10 },
    { id: '4', type: 'Girl', size: '7', quantity: 5 },
    { id: '5', type: 'Men', size: '9', quantity: 12 },
    { id: '6', type: 'Women', size: '8', quantity: 15 },
  ];

  return (
    <main className="flex bg-white justify-left min-h-screen py-2 px-20">
        <div className="bg-white text-black flex flex-col items-left p-7">
        <h1 className="text-3xl py-7">Orders</h1>
        <div className="w-full">
            {placeholderInventory.map((item) => (
            <div key={item.id} className="bg-slate-200 rounded-lg p-5 mb-2.5">
                <p>{`${item.type} - Size ${item.size}`}</p>
                <p>{`Quantity: ${item.quantity}`}</p>
                
            </div>
            ))}
            <button type="submit" className="px-10 py-2 mb-2 bg-green-500 justify-center text-white text-md rounded-full">Print Shopping List</button>
            <button type="submit" className="px-10 py-2 mb-2 bg-green-500 justify-center text-white text-lg rounded-full px-12">View Full Inventory</button>
        </div>
        </div>
    </main>
  );
};

export default InventoryPage;
