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
  const placeholderInventory2: RecentOrders[] = [
    { orderName: 'Pete Tucker', orderNumber: 101 },
    { orderName: 'Kent Jones', orderNumber: 102 },
    { orderName: 'Qian Mao', orderNumber: 103 },
    { orderName: 'Scott Griffith', orderNumber: 104 }
    
  ];

  return (
    <main className="flex bg-white justify-center min-h-screen borderRadius-10px">
    <div className="bg-white text-black flex flex-col items-left p-7">
      <h1 style={{fontSize: '200%', padding: '10px', paddingBottom: '15px', alignItems: 'center'}}>Current Inventory</h1>
      <div style={{ width: '100%', maxWidth: '300px' }}>
        {placeholderInventory.map((item) => (
          <div
            key={item.id}
            style={{
              backgroundColor: '#f2f2f2',
              borderRadius: '10px',
              padding: '10px',
              marginBottom: '10px',
            }}
          >
            <p>{`${item.type} - Size ${item.size}`}</p>
            <p>{`Quantity: ${item.quantity}`}</p>
            
          </div>
        ))}
        <button type="submit" className="px-14 py-2 mb-2 bg-green-500 items-center text-white text-md rounded-full width-100">Print Shopping List</button>
        <button type="submit" className="px-14 py-2 mb-2 bg-green-500 items-center text-white text-lg rounded-full px-12">View Full Inventory</button>
      </div>
    </div>

    <div className="bg-white text-black flex flex-col items-right p-7">
      <h1 style={{fontSize: '200%', padding: '10px', paddingBottom: '15px', alignItems: 'center'}}>Recent Orders</h1>
      <div style={{ width: '100%', maxWidth: '400px' }}>
      {placeholderInventory2.map((item) => (
          <div
            key={item.orderName}
            style={{
              backgroundColor: '#f2f2f2',
              borderRadius: '10px',
              padding: '10px',
              marginBottom: '10px',
            }}
          >
            <p>{`${item.orderName} - ${item.orderNumber}`}</p>
            <button type="submit" className="px-10 py-2 mb-2 bg-white-500 text-black text-sm rounded-full">View Order Info</button>
            
          </div>
        ))}
        <button type="submit" className="px-10 py-2 mb-2 bg-green-500 justify-center text-white text-lg rounded-full">View All Orders</button>
      </div>
    </div>
    </main>
  );
};

export default InventoryPage;
