/**
 * This file stores all data fetching functions. Each function performs an SQL query.
 * The data returned from each query is modeled by an interface defined in `defintions.tsx`
 *   For example: //TODO
 */

'use server';

import { sql } from '@vercel/postgres';


export async function selectChildIDRows(ParentID : number): Promise <Array<number>> {
    try { const id = await sql`
    SELECT idchild
    FROM child
    WHERE idparent = ${ParentID};
    `;

    const idArray: Array<number> = id.rows.map(row => row.idchild);
        console.log(idArray);
        return idArray;
    } catch (err) {
        console.log('Error =>' + err);
        throw err;
    }
}

export async function selectOrderRows(): Promise <Array<number>> {
    try { const id = await sql`
    SELECT orderid
    FROM orders;
    `;

    const idArray: Array<number> = id.rows.map(row => row.orderid);
        console.log(idArray);
        return idArray;
    } catch (err) {
        console.log('Error =>' + err);
        throw err;
    }
}
export async function selectParentIDfromOrder(OrderID: number): Promise<number> {
    try {const id = await sql`
    SELECT idparent
    FROM orders
    WHERE OrderID = ${OrderID};
    `;
    const idAsString = id.rows[0].idparent;
    const idAsInt = parseInt(idAsString, 10);
    
    //console.log(idAsInt)
    return idAsInt} catch(err) {
            console.log('Error =>' + err);
            throw err;
        }
    
}

export async function selectParentfname(ParentID: number): Promise<string> {
    try {const name = await sql` 
    SELECT fname
    FROM parent
    WHERE idparent = ${ParentID};
    `;

    const nameAsString = name.rows[0].fname;
    
    console.log(nameAsString);
    return nameAsString} catch(err) {
            console.log('Error =>' + err);
            throw err;
        }
}

export async function selectParentlname(ParentID: number): Promise<string> {
    try {const lname = await sql`
    SELECT lname
    FROM parent
    WHERE idparent = ${ParentID};
    `;

    const lnameAsString = lname.rows[0].lname;

    return lnameAsString} catch(err) {
        console.log('Error =>' + err);
        throw err;
    }
}