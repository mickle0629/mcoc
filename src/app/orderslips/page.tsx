 'use client'

import React, { useState, useEffect } from 'react';


import { sql } from '@vercel/postgres';
import { selectParentIDfromOrder } from "./actions";
import { selectParentfname } from "./actions";
import { selectParentlname } from "./actions";
import { selectParentemail } from "./actions";
import { selectParentNumber } from "./actions";
import { validateHeaderValue } from 'http';
import { pid } from 'process';
import { object } from 'yup';
import { parse } from 'path';


interface InventoryItem {
  id: string;
  type: string;
  size: string;
  quantity: number;
}

interface Parent {
    orderID : number;
    lName: string;
    name : string;
    email: string;
    phoneNum: string;
  }

  interface child {
    lname: string;
    name: string;
    style: string;
    size: string;
  }

const OrderSlips: React.FC = () => {
  // Placeholder data for inventory items


  const placeholderParent: Parent[] = [
    { name: 'Steve', lName: 'Johnson', email: 'sjohnson24@my.whitworth.edu', phoneNum: "5096718282", orderID: 1 }
  ];

  /*
  async function fetchParentID() {
    try {
      const result = await selectParentIDfromOrder(1);
      return result;
        //console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
  }


  async function fetchParentName(parent: number) {
    try {
      const result = await selectParentfname(parent);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  */

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
      <h1 style={{fontSize: '200%', padding: '10px', paddingBottom: '15px'}}>Order Slip</h1>
      

      <div style={{ width: '100%', maxWidth: '400px' }}>
        {placeholderParent.map((item) => (
          <div
            key={item.orderID}
            style={{
              backgroundColor: '#f2f2f2',
              borderRadius: '10px',
              padding: '10px',
              marginBottom: '10px',
            }}
          >
          
            <p>{`Name: ${item.lName}, ${item.name}`}</p>
            <p>{`Email: ${item.email}`}</p>
            <p>{`Phone Number: ${item.phoneNum}`}</p>
            <br></br>
            <p>{`Order Information:`}</p>
            <p>{`Child – `} </p>
            <br></br>
            <p>{`Order Summary:`}</p>
            <p>{`Child`}</p>
          </div>

                
        ))}
      </div>
    </div>
    </main>
  );
};

export default OrderSlips;
