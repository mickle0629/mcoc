'use client'
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link'
import {selectOrderRows, selectParentIDfromOrder, selectParentfname, selectParentlname} from "./actions";


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

interface Parent {
  name: string | null;
  lname: string | null;
  orderid: number | null;
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
 

  const [OrderRows, setOrderRows] = useState<Array<number>| null>(null);
  const [OrderDictionary, setOrderDictionary] = useState<{ [key: number]: Parent }>({});
  const orderEntries = Object.entries(OrderDictionary);


  useEffect(() => {
    async function fetchOrderRows() {
        try {
            const result = await selectOrderRows();
            setOrderRows(result); 
            console.log(result[0]);
            
        } catch (error) {
            console.error(error);
        }
    }

    fetchOrderRows();
}, []); 

useEffect(() => {
  async function updateOrderDictionary() {
      if (OrderRows !== null) {
          const newOrderDictionary: { [key: number]: Parent } = {};

  let temp = 0        
          for (let i = OrderRows.length - 1; i >= 0; i--) {
            if (OrderRows.length - i > 7) break; // Stop after 7 entries

            const ID = OrderRows[i];
            const orderid = OrderRows[(temp)];
            const ParentID = await selectParentIDfromOrder(ID);
            const name = await selectParentfname(ParentID);
            const lname = await selectParentlname(ParentID);
            newOrderDictionary[ID] = { name, lname, orderid };
            temp++
          }
          
          setOrderDictionary(newOrderDictionary);
      }
      
  }
  
  updateOrderDictionary();
}, [OrderRows]);

  return (
    <main className="flex bg-white justify-center min-h-screen">
      <div className="bg-white text-black flex flex-col items-left p-7 ">
        <h1 className="text-3xl p-10 pb-15 pl-16">Current Inventory</h1>
        <div className="w-full max-w-md">
          {placeholderInventory.map((item) => (
            <div key={item.id} className="bg-slate-200 rounded-lg p-5 mb-2.5">
              <p>{`${item.type} - Size ${item.size}`}</p>
              <p>{`Quantity: ${item.quantity}`}</p>
              
            </div>
          ))}
          <button type="submit" className="px-10 py-2 mb-2 bg-green-500 justify-center text-white text-md rounded-full">Print List</button><br></br>
          <button type="submit" className="px-10 py-2 mb-2 bg-green-500 justify-center text-white text-lg rounded-full px-12">View Full Inventory</button>
        </div>
      </div>

      <div className="bg-white text-black flex flex-col items-right p-7">
      <h1 className="text-3xl p-10 pb-15 pl-16">Recent Orders</h1>
        <div className="w-full max-w-md">
        {orderEntries.map(([id, parent]) => (
             <div key ={id} className="bg-slate-200 rounded-lg p-5 mb-2.5">
                <p >{`${parent.name}, ${parent.lname} - ${parent.orderid}`}</p>
                <button className="text-green-500">{`View Order Info`}</button>
             </div>
                            
          ))}
          <br></br><br></br><button type="submit" className="px-10 py-2 mb-2 bg-green-500 justify-center text-white text-lg rounded-full px-12"><Link href="/orders">View All Orders</Link></button>
        </div>
      </div>
    </main>
  );
};

export default InventoryPage;