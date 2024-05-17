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
<main className="flex bg-[url('./MCOCBackground.jpeg')] justify-center min-h-screen py-2 px-20">
    <div className="bg-white text-black flex flex-col items-center p-7 p-10 w-[80vw] border-black border-2 m-2 rounded-lg">
        <div className="flex justify-between w-full items-center mb-5">
            <h1 className="text-3xl">Orders</h1>
            <div className="flex items-center">
                <label htmlFor="sortBy" className="mr-2">Sort by:</label>
                <select name="sortBy" id="sortBy" className="px-2 py-1 border border-gray-300 rounded-md">
                    <option value="orderNumber">Order Number</option>
                    {/* Add more sorting options as needed */}
                </select>
                <input type="text" placeholder="Search orders" className="ml-2 px-2 py-1 border border-gray-300 rounded-md" />
            </div>
        </div>
        <div className="w-full">
            {placeholderInventory.map((item) => (
                <div key={item.id} className="bg-slate-200 rounded-lg p-5 mb-2.5 flex justify-between items-center">
                    <div>
                        <p>{`${item.type} - Size ${item.size}`}</p>
                        <p>{`Quantity: ${item.quantity}`}</p>
                    </div>
                    <button type="button" className="bg-slate-500 px-4 py-1 bg-blue-500 text-white text-sm rounded-full">
                        View Order Info
                    </button>
                </div>
            ))}
            <div className="flex justify-center">
                <button type="submit" className="px-10 py-2 mb-2 bg-green-500 text-white text-md rounded-full">
                    Print Orders
                </button>
            </div>
        </div>
    </div>
</main>



  );
};

export default InventoryPage;
