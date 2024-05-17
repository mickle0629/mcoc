'use client'

/*import React, { useState, useEffect } from 'react';
import {
    selectParentIDfromOrder,
    selectParentfname,
    selectParentlname,
    selectParentemail,
    selectParentNumber,
    selectOrderRows,
    selectChildIDfromParentID
} from "./actions";
import {
    selectChildIDRows,
    selectChildname,
    selectChildlname,
    selectShoeSize,
    selectChildShoeType,
    selectShoeName,
    selectShoeID
} from "./actions";

interface Parent {
    orderID: number;
    lName: string;
    name: string;
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
    const [parentDictionary, setParentDictionary] = useState<{ [key: number]: Parent }>({});
    const parentEntries = Object.entries(parentDictionary);
    const [childDictionary, setChildDictionary] = useState<{ [key: number]: Child[] }>({});
    const [OrderRows, setOrderRows] = useState<Array<number> | null>(null);

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 2;
    const [loading, setLoading] = useState(false);
    const [totalItems, setTotalItems] = useState<number>(0);

    useEffect(() => {
        async function fetchOrderRows() {
            setLoading(true);
            try {
                const result = await selectOrderRows();
                setOrderRows(result);
                setTotalItems(result.length);
            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        }

        fetchOrderRows();
    }, []);

    useEffect(() => {
        async function updateParentDictionary() {
            if (OrderRows !== null) {
                setLoading(true);
                const newParentDictionary: { [key: number]: Parent } = {};
                const newChildDictionary: { [key: number]: Child[] } = {};

                for (let i = 0; i < OrderRows.length; i++) {
                    const orderID = OrderRows[i];
                    const pid = await selectParentIDfromOrder(orderID);
                    const lName = await selectParentfname(pid);
                    const name = await selectParentlname(pid);
                    const email = await selectParentemail(pid);
                    const phoneNum = await selectParentNumber(pid);
                    const childIDs = await selectChildIDRows(pid);

                    newParentDictionary[orderID] = { orderID, name, lName, email, phoneNum };

                    const children = [];
                    for (let j = 0; j < childIDs.length; j++) {
                        const cid = childIDs[j];
                        const childName = await selectChildname(cid);
                        const childLname = await selectChildlname(cid);
                        const shoeID = await selectShoeID(cid);
                        const size = await selectShoeSize(shoeID);
                        const type = await selectChildShoeType(shoeID);
                        const shoeType = await selectShoeName(type);
                        children.push({ name: childName, lname: childLname, shoeType, size });
                    }
                    newChildDictionary[orderID] = children;
                }

                setParentDictionary(newParentDictionary);
                setChildDictionary(newChildDictionary);
                setLoading(false);
            }
        }

        updateParentDictionary();
    }, [OrderRows]);

    const handlePrevious = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };

    const handleNext = () => {
        if ((currentPage + 1) * itemsPerPage < totalItems) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const startIndex = currentPage * itemsPerPage;
    const selectedParentEntries = parentEntries.slice(startIndex, startIndex + itemsPerPage);

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

                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <div style={{ width: '100%', maxWidth: '400px' }}>
                        {selectedParentEntries.map(([orderIDStr, parent]) => {
                            const orderID = parseInt(orderIDStr);
                            return (
                                <div
                                    key={parent.orderID}
                                    style={{
                                        backgroundColor: '#f2f2f2',
                                        borderRadius: '10px',
                                        padding: '10px',
                                        marginBottom: '10px',
                                    }}
                                >
                                    <p>{`Order Slip# ${parent.orderID}`}</p>
                                    <p>{`Name: ${parent.lName}, ${parent.name}`}</p>
                                    <p>{`Email: ${parent.email}`}</p>
                                    <p>{`Phone Number: ${parent.phoneNum}`}</p>
                                    <br></br>
                                    <p>{`Order Information:`}</p>

                                    {childDictionary[orderID] && childDictionary[orderID].map((child, index) => (
                                        <div key={index}>
                                            <p>{`Child - [${child.lname}, ${child.name}]`}</p>
                                            <p>{`Shoe Type: ${child.shoeType}, Shoe Size: ${child.size}`}</p>
                                        </div>
                                    ))}

                                    <br></br>
                                    <p>{`Order Summary:`}</p>
                                </div>
                            );
                        })}
                    </div>
                )}

<div className="flex justify-between mt-4">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage * itemsPerPage >= totalItems}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
              Next
            </button>
            </div>
        </main>
    );
};

export default OrderSlips;

*/
import React, { useState, useEffect } from 'react';
import {
    selectParentIDfromOrder,
    selectParentfname,
    selectParentlname,
    selectParentemail,
    selectParentNumber,
    selectOrderRows,
    selectChildIDfromParentID
} from "./actions";
import {
    selectChildIDRows,
    selectChildname,
    selectChildlname,
    selectShoeSize,
    selectChildShoeType,
    selectShoeName,
    selectShoeID
} from "./actions";

interface Parent {
    orderID: number;
    lName: string;
    name: string;
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
    const [parentDictionary, setParentDictionary] = useState<{ [key: number]: Parent }>({});
    const parentEntries = Object.entries(parentDictionary);
    const [childDictionary, setChildDictionary] = useState<{ [key: number]: Child[] }>({});
    const [OrderRows, setOrderRows] = useState<Array<number> | null>(null);

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 2;
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchOrderRows() {
            setLoading(true);
            try {
                const result = await selectOrderRows();
                setOrderRows(result);
            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        }

        fetchOrderRows();
    }, []);

    useEffect(() => {
        async function updateParentDictionary() {
            if (OrderRows !== null) {
                setLoading(true);
                const newParentDictionary: { [key: number]: Parent } = {};
                const newChildDictionary: { [key: number]: Child[] } = {};

                for (let i = 0; i < OrderRows.length; i++) {
                    const orderID = OrderRows[i];
                    const pid = await selectParentIDfromOrder(orderID);
                    const lName = await selectParentfname(pid);
                    const name = await selectParentlname(pid);
                    const email = await selectParentemail(pid);
                    const phoneNum = await selectParentNumber(pid);
                    const childIDs = await selectChildIDRows(pid);

                    newParentDictionary[orderID] = { orderID, name, lName, email, phoneNum };

                    const children = [];
                    for (let j = 0; j < childIDs.length; j++) {
                        const cid = childIDs[j];
                        const childName = await selectChildname(cid);
                        const childLname = await selectChildlname(cid);
                        const shoeID = await selectShoeID(cid);
                        const size = await selectShoeSize(shoeID);
                        const type = await selectChildShoeType(shoeID);
                        const shoeType = await selectShoeName(type);
                        children.push({ name: childName, lname: childLname, shoeType, size });
                    }
                    newChildDictionary[orderID] = children;
                }

                setParentDictionary(newParentDictionary);
                setChildDictionary(newChildDictionary);
                setLoading(false);
            }
        }

        updateParentDictionary();
    }, [OrderRows]);

    const handlePrevious = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };

    const handleNext = () => {
        if ((currentPage + 1) * itemsPerPage < parentEntries.length) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const startIndex = currentPage * itemsPerPage;
    const selectedParentEntries = parentEntries.slice(startIndex, startIndex + itemsPerPage);

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

                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <div style={{ width: '100%', maxWidth: '400px' }}>
                        {selectedParentEntries.map(([orderIDStr, parent]) => {
                            const orderID = parseInt(orderIDStr);
                            return (
                                <div
                                    key={parent.orderID}
                                    style={{
                                        backgroundColor: '#f2f2f2',
                                        borderRadius: '10px',
                                        padding: '10px',
                                        marginBottom: '10px',
                                    }}
                                >
                                    <p>{`Order Slip# ${parent.orderID}`}</p>
                                    <p>{`Name: ${parent.lName}, ${parent.name}`}</p>
                                    <p>{`Email: ${parent.email}`}</p>
                                    <p>{`Phone Number: ${parent.phoneNum}`}</p>
                                    <br></br>
                                    <p>{`Order Information:`}</p>

                                    {childDictionary[orderID] && childDictionary[orderID].map((child, index) => (
                                        <div key={index}>
                                            <p>{`Child - [${child.lname}, ${child.name}]`}</p>
                                            <p>{`Shoe Type: ${child.shoeType}, Shoe Size: ${child.size}`}</p>
                                        </div>
                                    ))}

                                    <br></br>
                                    <p>{`Order Summary:`}</p>
                                </div>
                            );
                        })}
                    </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '400px', padding: '10px' }}>
                    <button onClick={handlePrevious} disabled={currentPage === 0}>
                        Previous
                    </button>
                    <button onClick={handleNext} disabled={(currentPage + 1) * itemsPerPage >= parentEntries.length}>
                        Next
                    </button>
                </div>
            </div>
        </main>
    );
};

export default OrderSlips;
