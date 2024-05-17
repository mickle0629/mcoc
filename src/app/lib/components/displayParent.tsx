'use client'
import React, { useState, useEffect } from 'react';
import { selectParentIDfromOrder, selectParentfname, selectParentlname, selectParentemail,selectParentNumber } from '@/app/orderslips/actions';

interface Parent {
    orderID : number;
    lName: string;
    name : string;
    email: string;
    phoneNum: string;
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
        
        if (pid !== null) {
            fetchParentName(pid); 
            fetchParentlName(pid);
            fetchParentEmail(pid);
            fetchParentNumber(pid);
        }
    }, [pid]); 

    return (
        <main className="flex flex-col bg-[url('./MCOCBackground.jpeg')] min-h-screen">
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
                            <p>{`Name: ${lname}, ${fname}`}</p>
                            <p>{`Email: ${email}`}</p>
                            <p>{`Phone Number: ${number}`}</p>
                            <br></br>
                            <p>{`Order Information:`}</p>
                            
                            
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
