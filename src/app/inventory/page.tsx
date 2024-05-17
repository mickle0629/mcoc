'use client'
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link'
import {selectOrderRows, selectParentIDfromOrder, selectParentfname, selectParentlname} from "./actions";
import { selectInventoryNum, selectShoeName, selectShoeRows, selectShoeSize, selectShoeType } from "./actions";

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

interface InventorySizes {
  id: string;
  type: string;
  size: string;
  inventory: number;
}

interface Shoe {
  name: string; // this should pull from the db
  size: number; // this should also pull from the db
}


const InventoryPage: React.FC = () => {
  const [placeholderQuantity, setPlaceholderQuantity] = useState<InventoryItem[]>([
      { id: '1', type: 'Toddler Boy ', size: '5T', quantity: 0 },
      { id: '1', type: 'Toddler Boy ', size: '6T', quantity: 0 },
      { id: '1', type: 'Toddler Boy ', size: '7T', quantity: 0 },
      { id: '1', type: 'Toddler Boy ', size: '8T', quantity: 0 },
      { id: '1', type: 'Toddler Boy ', size: '9T', quantity: 0 },
      { id: '1', type: 'Toddler Boy ', size: '10T', quantity: 0 },
      { id: '1', type: 'Toddler Boy ', size: '11T', quantity: 0 },
      { id: '1', type: 'Toddler Boy ', size: '12T', quantity: 0 },
      { id: '1', type: 'Toddler Boy ', size: '13T', quantity: 0 },

      { id: '2', type: 'Toddler Girl ', size: '5T', quantity: 0 },
      { id: '2', type: 'Toddler Girl ', size: '6T', quantity: 0 },
      { id: '2', type: 'Toddler Girl ', size: '7T', quantity: 0 },
      { id: '2', type: 'Toddler Girl ', size: '8T', quantity: 0 },
      { id: '2', type: 'Toddler Girl ', size: '9T', quantity: 0 },
      { id: '2', type: 'Toddler Girl ', size: '10T', quantity: 0 },
      { id: '2', type: 'Toddler Girl ', size: '11T', quantity: 0 },
      { id: '2', type: 'Toddler Girl ', size: '12T', quantity: 0 },
      { id: '2', type: 'Toddler Girl ', size: '13T', quantity: 0 },

      { id: '3', type: 'Boy ', size: '1', quantity: 0 },
      { id: '3', type: 'Boy ', size: '2', quantity: 0 },
      { id: '3', type: 'Boy ', size: '3', quantity: 0 },
      { id: '3', type: 'Boy ', size: '4', quantity: 0 },
      { id: '3', type: 'Boy ', size: '5', quantity: 0 },
      { id: '3', type: 'Boy ', size: '6', quantity: 0 },
      { id: '3', type: 'Boy ', size: '7', quantity: 0 },

      { id: '4', type: 'Girl ', size: '1', quantity: 0 },
      { id: '4', type: 'Girl ', size: '2', quantity: 0 },
      { id: '4', type: 'Girl ', size: '3', quantity: 0 },
      { id: '4', type: 'Girl ', size: '4', quantity: 0 },
      { id: '4', type: 'Girl ', size: '5', quantity: 0 },
      { id: '4', type: 'Girl ', size: '6', quantity: 0 },
      { id: '4', type: 'Girl ', size: '7', quantity: 0 },

      { id: '5', type: 'Men ', size: '6', quantity: 0 },
      { id: '5', type: 'Men ', size: '7', quantity: 0 },
      { id: '5', type: 'Men ', size: '8', quantity: 0 },
      { id: '5', type: 'Men ', size: '9', quantity: 0 },
      { id: '5', type: 'Men ', size: '10', quantity: 0 },
      { id: '5', type: 'Men ', size: '11', quantity: 0 },
      { id: '5', type: 'Men ', size: '12', quantity: 0 },
      { id: '5', type: 'Men ', size: '13', quantity: 0 },
      { id: '5', type: 'Men ', size: '14', quantity: 0 },
      { id: '5', type: 'Men ', size: '15', quantity: 0 },
      { id: '5', type: 'Men ', size: '16', quantity: 0 },

      { id: '6', type: 'Women ', size: '5', quantity: 0 },
      { id: '6', type: 'Women ', size: '6', quantity: 0 },
      { id: '6', type: 'Women ', size: '7', quantity: 0 },
      { id: '6', type: 'Women ', size: '8', quantity: 0 },
      { id: '6', type: 'Women ', size: '9', quantity: 0 },
      { id: '6', type: 'Women ', size: '10', quantity: 0 },
      { id: '6', type: 'Women ', size: '11', quantity: 0 },
      { id: '6', type: 'Women ', size: '12', quantity: 0 },
      { id: '6', type: 'Women ', size: '13', quantity: 0 },
      { id: '6', type: 'Women ', size: '14', quantity: 0 }
  ]);

  const [ShoeRows, setShoeRows] = useState<Array<number> | null>(null);

  useEffect(() => {
      async function fetchShoeRows() {
          try {
              const result = await selectShoeRows();
              setShoeRows(result);
              console.log(result);
          } catch (error) {
              console.error(error);
          }
      }

      fetchShoeRows();
  }, []);

  useEffect(() => {
      async function updatePlaceholderQuantity() {
          if (ShoeRows !== null) {
              const updatedQuantity = await Promise.all(
                  ShoeRows.map(async (id) => {
                      const Shoetype = await selectShoeType(id);
                      const size = await selectShoeSize(id);
                      const type = await selectShoeName(Shoetype);
                      const quantity = await selectInventoryNum(id); // Simulating fetched inventory value

                      return { id: id.toString(), type, size: size.toString(), quantity };
                  })
              );

              setPlaceholderQuantity(updatedQuantity);
          }
      }

      updatePlaceholderQuantity();
  }, [ShoeRows]);

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
    <main className="flex bg-[url('./MCOCBackground.jpeg')] justify-center min-h-screen">
      <div className="bg-white text-black flex flex-col items-left p-7 border-black border-2 m-4 rounded-lg">
        <h1 className="text-3xl p-10 pb-15 pl-16">Current Inventory</h1>
        <div className="w-full max-w-md">
          {placeholderQuantity.slice(0,6).map((item) => (
            <div key={item.id} className="bg-slate-200 rounded-lg p-5 mb-2.5">
              <p>{`${item.type} - Size ${item.size}`}</p>
              <p>{`Quantity: ${item.quantity}`}</p>
              
            </div>
          ))}
          <button type="submit" className="px-10 py-2 mb-2 bg-green-500 justify-center text-white text-md rounded-full hover:bg-sky-700">Print List</button><br></br>
          <button type="submit" className="px-10 py-2 mb-2 bg-green-500 justify-center text-white text-lg rounded-full px-12 hover:bg-sky-700"><Link href="/fullinventory">View Full Inventory</Link></button>
        </div>
      </div>

      <div className="bg-white text-black flex flex-col items-right p-7 border-black border-2 m-4 rounded-lg">
      <h1 className="text-3xl p-10 pb-15 pl-16">Recent Orders</h1>
        <div className="w-full max-w-md">
        {orderEntries.map(([id, parent]) => (
             <div key ={id} className="bg-slate-200 rounded-lg p-5 mb-2.5">
                <p >{`${parent.name}, ${parent.lname} - ${parent.orderid}`}</p>
                <button className="text-green-500">{`View Order Info`}</button>
             </div>
                            
          ))}
          <br></br><br></br><button type="submit" className="px-10 py-2 mb-2 bg-green-500 justify-center text-white text-lg rounded-full px-12 hover:bg-sky-700"><Link href="/orders">View All Orders</Link></button>
        </div>
      </div>
    </main>
  );
};

export default InventoryPage;