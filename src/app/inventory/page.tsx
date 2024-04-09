import React from 'react';

interface InventoryItem {
  id: string;
  type: string;
  size: string;
  quantity: number;
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
    <main className="flex flex-col bg-white min-h-screen">
    <div
      style={{
        backgroundColor: 'white',
        color: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <h1 style={{fontSize: '200%', padding: '10px', paddingBottom: '15px'}}>Current Inventory</h1>
      <div style={{ width: '100%', maxWidth: '400px' }}>
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
      </div>
    </div>
    </main>
  );
};

export default InventoryPage;
