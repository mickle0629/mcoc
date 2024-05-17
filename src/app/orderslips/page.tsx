'use client'
import React, { useState, useEffect } from 'react';
import { selectParentIDfromOrder, selectParentfname, selectParentlname, selectParentemail, selectParentNumber} from "./actions";
import{selectChildIDRows, selectChildname, selectChildlname, selectShoeSize, selectChildShoeType, selectShoeName} from"./actions"
interface Parent {
    orderID : number;
    lName: string;
    name : string;
    email: string;
    phoneNum: string;
}

interface Child {
    name: string | null;
    lname: string | null;
    shoeType: string | null;
    size: string | null;
}

const OrderSlips: React.FC = () => {
    // Placeholder data for inventory items
    const placeholderParent: Parent[] = [
        { name: 'Steve', lName: 'Johnson', email: 'sjohnson24@my.whitworth.edu', phoneNum: "5096718282", orderID: 1 }
    ];

    const [pid, setPid] = useState<number | null>(null); 
    const [fname, setFname] = useState<string | null>(null); 
    const [lname, setlname] = useState<string | null>(null); 
    const [email, setEmail] = useState<string | null>(null); 
    const [number, setNumber] = useState<string | null>(null); 
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
        async function fetchParentName(pid: number) {
            try {
                const result = await selectParentfname(pid); 
                setFname(result);
                console.log(result);
            } catch (error) {
              console.error(error);
            }
        }
        
        async function fetchParentlName(pid: number) {
            try {
                const result = await selectParentlname(pid); 
                setlname(result);
                console.log(result);
            } catch (error) {
              console.error(error);
            }
        }
        
        async function fetchParentEmail(pid: number) {
            try {
                const result = await selectParentemail(pid); 
                setEmail(result);
                console.log(result);
            } catch (error) {
              console.error(error);
            }
        }

        async function fetchParentNumber(pid: number) {
            try {
                const result = await selectParentNumber(pid);
                setNumber(result);
                console.log(result);
            } catch (error) {
              console.error(error);
            }
        }

        
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
            fetchParentName(pid); 
            fetchParentlName(pid);
            fetchParentEmail(pid);
            fetchParentNumber(pid);
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
        <main className="flex flex-col bg-[url('./MCOCBackground.jpeg')] min-h-screen">
            <div
                style={{
                    backgroundImage: './MCOCBackground.jpeg',
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
                            <p>{`Name: ${lname}, ${fname}`}</p>
                            <p>{`Email: ${email}`}</p>
                            <p>{`Phone Number: ${number}`}</p>
                            <br></br>
                            <p>{`Order Information:`}</p>
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
