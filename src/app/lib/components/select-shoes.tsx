'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { selectInventoryNum, selectShoeName, selectShoeRows, selectShoeSize, selectShoeType } from "../actions";

interface InventorySizes {
    id: string;
    type: string;
    size: string;
}

interface Shoe {
    name: string; // this should pull from the db
    size: number; // this should also pull from the db
}

const InventoryPage: React.FC = () => {
    const [placeholderInventory, setPlaceholderInventory] = useState<InventorySizes[]>([
        { id: '1', type: 'Toddler Girls\' Shoes ', size: '8T'},
        { id: '2', type: 'Toddler Girls\' Shoes ', size: '9T'},
        { id: '3', type: 'Toddler Girls\' Shoes ', size: '10T'},

        { id: '20', type: 'Toddler Boys\' Shoes ', size: '8T'},
        { id: '21', type: 'Toddler Boys\' Shoes ', size: '9T'},
        { id: '22', type: 'Toddler Boys\' Shoes ', size: '10T'},

        { id: '4', type: 'Girls\' Shoes ', size: '11'},
        { id: '5', type: 'Girls\' Shoes ', size: '12'},
        { id: '6', type: 'Girls\' Shoes ', size: '13'},
        { id: '7', type: 'Girls\' Shoes ', size: '1'},
        { id: '8', type: 'Girls\' Shoes ', size: '2'},
        { id: '9', type: 'Girls\' Shoes ', size: '3'},
        { id: '10', type: 'Girls\' Shoes ', size: '4'},
        { id: '11', type: 'Girls\' Shoes ', size: '5'},
        { id: '12', type: 'Girls\' Shoes ', size: '6'},

        { id: '23', type: 'Boys\' Shoes ', size: '11'},
        { id: '24', type: 'Boys\' Shoes ', size: '12'},
        { id: '25', type: 'Boys\' Shoes ', size: '13'},
        { id: '26', type: 'Boys\' Shoes ', size: '1'},
        { id: '27', type: 'Boys\' Shoes ', size: '2'},
        { id: '28', type: 'Boys\' Shoes ', size: '3'},
        { id: '29', type: 'Boys\' Shoes', size: '4'},
        { id: '30', type: 'Boys\' Shoes', size: '5'},
        { id: '31', type: 'Boys\' Shoes', size: '6'},


        { id: '13', type: 'Women\'s Shoes ', size: '7'},
        { id: '14', type: 'Women\'s Shoes ', size: '8'},
        { id: '15', type: 'Women\'s Shoes ', size: '9'},
        { id: '16', type: 'Women\'s Shoes ', size: '10'},
        { id: '17', type: 'Women\'s Shoes ', size: '11'},
        { id: '18', type: 'Women\'s Shoes ', size: '12'},
        { id: '19', type: 'Women\'s Shoes ', size: '13'},

        { id: '32', type: 'Men\'s Shoes ', size: '7'},
        { id: '33', type: 'Men\'s Shoes ', size: '8'},
        { id: '34', type: 'Men\'s Shoes ', size: '9'},
        { id: '35', type: 'Men\'s Shoes ', size: '10'},
        { id: '36', type: 'Men\'s Shoes ', size: '11'},
        { id: '37', type: 'Men\'s Shoes ', size: '12'},
        { id: '38', type: 'Men\'s Shoes ', size: '13'},
        { id: '39', type: 'Men\'s Shoes ', size: '14'},
        { id: '40', type: 'Men\'s Shoes ', size: '15'}
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

                        return { id: id.toString(), type, size: size.toString()};
                    })
                );

                setPlaceholderInventory(updatedInventory);
            }
        }

        updatePlaceholderInventory();
    }, [ShoeRows]);


 
    return (
      <main className="flex bg-[url('./MCOCBackground.jpeg')] justify-center min-h-screen">
      <div className="bg-white border-2 border-black text-black flex flex-col items-left p-7 mt-6 rounded-lg">
        <h1 className="text-3xl p-10 pb-15 pl-16">Current Inventory</h1>
        <div className="w-full max-w-md">
          {placeholderInventory.map((item) => (
            <div key={item.id} className="bg-slate-200 rounded-lg p-5 mb-2.5 py-20">
              <div className="bg-[url('./Shoes2(copy).png')] w-24 h-24 flex flex-col items-left border-black border-2  rounded-lg">
              
                  </div>

              <p>{`${item.type} - Size ${item.size}`}</p>

              <button type="submit" className="px-8 py-2 mb-2 bg-green-500 btn-sm float-right text-white text-md rounded-full">Assign to Child</button>

              <button type="submit" className="px-8 py-2 mb-2 bg-green-500 btn-sm float-right text-white text-md rounded-full hover:bg-sky-700 drop-shadow-sm">Assign Shoe</button>
              
            </div>
          ))}
          <Link href="/"><button type="submit" className="px-10 py-2 mb-2 bg-green-500 justify-center text-white text-md rounded-full hover:bg-sky-700">Submit</button></Link>
        </div>
      </div>
      </main>
    );
  };
  
  export default InventoryPage;