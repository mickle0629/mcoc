'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { selectInventoryNum, selectShoeName, selectShoeRows, selectShoeSize, selectShoeType } from "../actions";
import Image from 'next/image'

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
    const [placeholderInventory, setPlaceholderInventory] = useState<InventorySizes[]>([
        { id: '1', type: 'Toddler Girl ', size: '8T', inventory: 0 },
        { id: '2', type: 'Toddler Girl ', size: '9T', inventory: 0 },
        { id: '3', type: 'Toddler Girl ', size: '10T', inventory: 0 },

        { id: '20', type: 'Toddler Boy ', size: '8T', inventory: 0 },
        { id: '21', type: 'Toddler Boy ', size: '9T', inventory: 0 },
        { id: '22', type: 'Toddler Boy ', size: '10T', inventory: 0 },

        { id: '4', type: 'Girl ', size: '11', inventory: 0 },
        { id: '5', type: 'Girl ', size: '12', inventory: 0 },
        { id: '6', type: 'Girl ', size: '13', inventory: 0 },
        { id: '7', type: 'Girl ', size: '1', inventory: 0 },
        { id: '8', type: 'Girl ', size: '2', inventory: 0 },
        { id: '9', type: 'Girl ', size: '3', inventory: 0 },
        { id: '10', type: 'Girl ', size: '4', inventory: 0 },
        { id: '11', type: 'Girl ', size: '5', inventory: 0 },
        { id: '12', type: 'Girl ', size: '6', inventory: 0 },

        { id: '23', type: 'Boy ', size: '11', inventory: 0 },
        { id: '24', type: 'Boy ', size: '12', inventory: 0 },
        { id: '25', type: 'Boy ', size: '13', inventory: 0 },
        { id: '26', type: 'Boy ', size: '1', inventory: 0 },
        { id: '27', type: 'Boy ', size: '2', inventory: 0 },
        { id: '28', type: 'Boy ', size: '3', inventory: 0 },
        { id: '29', type: 'Boy ', size: '4', inventory: 0 },
        { id: '30', type: 'Boy ', size: '5', inventory: 0 },
        { id: '31', type: 'Boy ', size: '6', inventory: 0 },


        { id: '13', type: 'Women ', size: '7', inventory: 0 },
        { id: '14', type: 'Women ', size: '8', inventory: 0 },
        { id: '15', type: 'Women ', size: '9', inventory: 0 },
        { id: '16', type: 'Women ', size: '10', inventory: 0 },
        { id: '17', type: 'Women ', size: '11', inventory: 0 },
        { id: '18', type: 'Women ', size: '12', inventory: 0 },
        { id: '19', type: 'Women ', size: '13', inventory: 0 },

        { id: '32', type: 'Men ', size: '7', inventory: 0 },
        { id: '33', type: 'Men ', size: '8', inventory: 0 },
        { id: '34', type: 'Men ', size: '9', inventory: 0 },
        { id: '35', type: 'Men ', size: '10', inventory: 0 },
        { id: '36', type: 'Men ', size: '11', inventory: 0 },
        { id: '37', type: 'Men ', size: '12', inventory: 0 },
        { id: '38', type: 'Men ', size: '13', inventory: 0 },
        { id: '39', type: 'Men ', size: '14', inventory: 0 },
        { id: '40', type: 'Men ', size: '15', inventory: 0 }
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
        async function updatePlaceholderInventory() {
            if (ShoeRows !== null) {
                const updatedInventory = await Promise.all(
                    ShoeRows.map(async (id) => {
                        const Shoetype = await selectShoeType(id);
                        const size = await selectShoeSize(id);
                        const type = await selectShoeName(Shoetype);
                        const inventory = await selectInventoryNum(id); // Simulating fetched inventory value

                        return { id: id.toString(), type, size: size.toString(), inventory };
                    })
                );

                setPlaceholderInventory(updatedInventory);
            }
        }

        updatePlaceholderInventory();
    }, [ShoeRows]);


 
    return (
      <main className="flex bg-[url('./MCOCBackground.jpeg')] justify-center min-h-screen">
      <div className="bg-white text-black flex flex-col items-left p-7 border-black border-2 m-2 rounded-lg">
        <h1 className="text-3xl p-10 pb-15 pl-16">Full Inventory</h1>
        <div className="w-full max-w-md">
          {placeholderInventory.map((item) => (
            <div key={item.id} className="bg-slate-200 min-w-96 rounded-lg p-5 mb-2.5">
              <Image
               src = "/../../Shoes2.png" 
               fill={true}
               alt="Green Shoe Icon"
              />
              <p>{`${item.type} - Size ${item.size}`}</p>
              <p>{`Inventory - ${item.inventory}` }</p>
              
            </div>
          ))}
          {/*
          {shoeEntries.map(([id, shoe]) => (
            <div key={id} className="bg-slate-200 rounded-lg p-5 mb-2.5 py-20">
              <p>{`${shoe.name} - Size ${shoe.size}`}</p>
              <button type="submit" className="px-8 py-2 mb-2 bg-green-500 btn-sm float-right text-white text-md rounded-full">Add To Cart</button>
              
            </div>
          ))}*/}
          <button type="submit" className="px-10 py-2 mb-2 bg-green-500 justify-center text-white text-md rounded-full hover:bg-sky-700"><Link href="/kidInfo">Submit</Link></button>
        </div>
      </div>
      </main>
    );
  };
  
  export default InventoryPage;