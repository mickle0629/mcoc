'use client'
import React, { useState, useEffect } from 'react';
import { selectParentIDfromOrder, selectParentNumber } from '@/app/orderslips/actions';
import{selectChildIDRows, selectChildname, selectChildlname, selectShoeSize, selectChildShoeType, selectShoeName} from"@/app/orderslips/actions"

interface Child {
    name: string | null;
    lname: string | null;
    shoeType: string | null;
    size: string | null;
}

const OrderSlips: React.FC = () => {
    // Placeholder data for inventory items
    
    
    const [pid, setPid] = useState<number | null>(null); 
    const [cidRows, setChildIDRows] = useState<Array<number>| null>(null); 
    const [childDictionary, setChildDictionary] = useState<{ [key: number]: Child }>({});
    const childEntries = Object.entries(childDictionary);

    useEffect(() => {
        async function fetchParentID() {
            try {
                const result = await selectParentIDfromOrder(3);
                setPid(result); 
            } catch (error) {
                console.error(error);
            }
        }

        fetchParentID();
    }, []); 

    useEffect(() => {
        async function fetchChildIDRows(pid: number){
           try {
                const result = await selectChildIDRows(pid); 
                setChildIDRows(result);
                console.log(result);
            } catch (error) {
              console.error(error);
            } 
        }         
        
        if (pid !== null) {
            fetchChildIDRows(pid);
        }
    }, [pid]); 

    useEffect(() => {
        async function updateChildDictionary() {
            if (cidRows !== null) {
                const newChildDictionary: { [key: number]: Child } = {};

                for (let i = 0; i < cidRows.length; i++) {
                    const cid = cidRows[i];
                    const name = await selectChildname(cid);
                    const lname = await selectChildlname(cid);
                    const size = await selectShoeSize(cid);
                    const type = await selectChildShoeType(cid);
                    const shoeType = await selectShoeName(type);

                    newChildDictionary[cid] = { name, lname, shoeType ,size};
                }

                setChildDictionary(newChildDictionary);
            }
        }

        updateChildDictionary();
    }, [cidRows]);

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
                <h1 style={{ fontSize: '200%', padding: '10px', paddingBottom: '15px' }}>Order Slip</h1>

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
                            
                            {childEntries.map(([id, child]) => (
                                <div key ={id}>
                                   <p >{`Child - [${child.lname}, ${child.name}]`}</p> 
                                   <p>{`Shoe Type: Shoe Size: ${child.size}`}</p>
                                </div>
                            
                            ))}
                            
                            
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
