'use client'
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from 'yup'
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import {selectShoeName, selectShoeRows, selectShoeSize, selectShoeType} from "../actions"

interface InventorySizes {
    id: string;
    type: string;
    size: string;
  
  }
  interface RecentOrders{
    orderName: string; // this should pull from the db
    orderNumber: number; // this should also pull from the db
  }

  interface Shoe{
    name: string; // this should pull from the db
    size: number; // this should also pull from the db
  }
  

  const InventoryPage: React.FC = () => {
    // Placeholder data for inventory items
    const placeholderInventory: InventorySizes[] = [
      { id: '1', type: 'Toddler Boy ', size: '5T' },
      { id: '1', type: 'Toddler Boy ', size: '6T' },
      { id: '1', type: 'Toddler Boy ', size: '7T' },
      { id: '1', type: 'Toddler Boy ', size: '8T' },
      { id: '1', type: 'Toddler Boy ', size: '9T' },
      { id: '1', type: 'Toddler Boy ', size: '10T' },
      { id: '1', type: 'Toddler Boy ', size: '11T' },
      { id: '1', type: 'Toddler Boy ', size: '12T' },
      { id: '1', type: 'Toddler Boy ', size: '13T'},

      { id: '2', type: 'Toddler Girl ', size: '5T' },
      { id: '2', type: 'Toddler Girl ', size: '6T' },
      { id: '2', type: 'Toddler Girl ', size: '7T' },
      { id: '2', type: 'Toddler Girl ', size: '8T' },
      { id: '2', type: 'Toddler Girl ', size: '9T' },
      { id: '2', type: 'Toddler Girl ', size: '10T' },
      { id: '2', type: 'Toddler Girl ', size: '11T' },
      { id: '2', type: 'Toddler Girl ', size: '12T' },
      { id: '2', type: 'Toddler Girl ', size: '13T'},

      { id: '3', type: 'Boy ', size: '1'},
      { id: '3', type: 'Boy ', size: '2'},
      { id: '3', type: 'Boy ', size: '3'},
      { id: '3', type: 'Boy ', size: '4'},
      { id: '3', type: 'Boy ', size: '5'},
      { id: '3', type: 'Boy ', size: '6'},
      { id: '3', type: 'Boy ', size: '7'},

      { id: '4', type: 'Girl ', size: '1'},
      { id: '4', type: 'Girl ', size: '2'},
      { id: '4', type: 'Girl ', size: '3'},
      { id: '4', type: 'Girl ', size: '4'},
      { id: '4', type: 'Girl ', size: '5'},
      { id: '4', type: 'Girl ', size: '6'},
      { id: '4', type: 'Girl ', size: '7'},

      { id: '5', type: 'Men ', size: '6'},
      { id: '5', type: 'Men ', size: '7'},
      { id: '5', type: 'Men ', size: '8'},
      { id: '5', type: 'Men ', size: '9'},
      { id: '5', type: 'Men ', size: '10'},
      { id: '5', type: 'Men ', size: '11'},
      { id: '5', type: 'Men ', size: '12'},
      { id: '5', type: 'Men ', size: '13'},
      { id: '5', type: 'Men ', size: '14'},
      { id: '5', type: 'Men ', size: '15'},
      { id: '5', type: 'Men ', size: '16'},

      { id: '6', type: 'Women ', size: '5' },
      { id: '6', type: 'Women ', size: '6' },
      { id: '6', type: 'Women ', size: '7' },
      { id: '6', type: 'Women ', size: '8' },
      { id: '6', type: 'Women ', size: '9' },
      { id: '6', type: 'Women ', size: '10' },
      { id: '6', type: 'Women ', size: '11' },
      { id: '6', type: 'Women ', size: '12' },
      { id: '6', type: 'Women ', size: '13' },
      { id: '6', type: 'Women ', size: '14' }
    ];
    const [ShoeRows, setShoeRows] = useState<Array<number>| null>(null);
    const [ShoeDictionary, setShoeDictionary] = useState<{ [key: number]: Shoe }>({});
    const shoeEntries = Object.entries(ShoeDictionary);

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
  
      //fetchShoeRows();
  }, []);

  useEffect(() => {
    async function updateShoeDictionary() {
        if (ShoeRows !== null) {
            const newShoeDictionary: { [key: number]: Shoe } = {};

            for (let i = 0; i < ShoeRows.length; i++) {
                const id = ShoeRows[i];
                const shoeType = await selectShoeType(id);
                const name = await selectShoeName(shoeType);
                const size = await selectShoeSize(id);

                newShoeDictionary[id] = { name, size};
            }

            setShoeDictionary(newShoeDictionary);
        }
    }

    updateShoeDictionary();
  }, [ShoeRows]);
  

  
    return (
      <main className="flex bg-white justify-center min-h-screen">
      <div className="bg-white text-black flex flex-col items-left p-7">
        <h1 className="text-3xl p-10 pb-15 pl-16">Current Inventory</h1>
        <div className="w-full max-w-md">
          {placeholderInventory.map((item) => (
            <div key={item.id} className="bg-slate-200 rounded-lg p-5 mb-2.5 py-20">
              <p>{`${item.type} - Size ${item.size}`}</p>
              <button type="submit" className="px-8 py-2 mb-2 bg-green-500 btn-sm float-right text-white text-md rounded-full">Add To Cart</button>
              
            </div>
          ))}
          {/*
          {shoeEntries.map(([id, shoe]) => (
            <div key={id} className="bg-slate-200 rounded-lg p-5 mb-2.5 py-20">
              <p>{`${shoe.name} - Size ${shoe.size}`}</p>
              <button type="submit" className="px-8 py-2 mb-2 bg-green-500 btn-sm float-right text-white text-md rounded-full">Add To Cart</button>
              
            </div>
          ))}*/}
          <button type="submit" className="px-10 py-2 mb-2 bg-green-500 justify-center text-white text-md rounded-full"><Link href="/kidInfo">Order Checkout</Link></button>
        </div>
      </div>
      </main>
    );
  };
  
  export default InventoryPage;