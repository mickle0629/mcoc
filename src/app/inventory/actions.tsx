/**
 * This file stores all data fetching functions. Each function performs an SQL query.
 * The data returned from each query is modeled by an interface defined in `defintions.tsx`
 *   For example: //TODO
 */

'use server';

import { sql } from '@vercel/postgres';

export async function selectShoeRows(): Promise <Array<number>> {
    try { const id = await sql`
    SELECT shoeid, shoetype
    FROM available_shoe
    where inventory > 0;
    `;
    
    const idArray: Array<number> = id.rows.map(row => row.shoeid);
        console.log(idArray)
        
        return idArray;
    } catch (err) {
        console.log('Error =>' + err);
        throw err;
    }
}

export async function selectShoeType(shoeid: number): Promise <number> {
    try{const type = await sql`
    SELECT shoetype
    FROM available_shoe
    WHERE shoeid = ${shoeid}`

    const typeAsString = type.rows[0].shoetype;
    const typeAsInt = parseInt(typeAsString, 10);
    
    
    return typeAsInt} catch(err) {
            console.log('Error =>' + err);
            throw err;
        }

}

export async function selectShoeSize(shoeid: number): Promise <number> {
    try{const type = await sql`
    SELECT shoesize
    from available_shoe
    WHERE shoeid = ${shoeid}`

    const typeAsString = type.rows[0].shoesize;
    const typeAsInt = parseInt(typeAsString, 10);
    
    
    return typeAsInt} catch(err) {
            console.log('Error =>' + err);
            throw err;
        }
}

export async function selectShoeName(shoeid: number): Promise <string> {
    try{const type = await sql`
    SELECT shoename
    FROM shoetype
    WHERE shoetypeid = ${shoeid}`

    const typeAsString = type.rows[0].shoename;

    
    console.log(typeAsString)
    return typeAsString} catch(err) {
            console.log('Error =>' + err);
            throw err;
        }
}


export async function selectInventoryNum(shoeid: number): Promise <number> {
    try{const inventory = await sql`
    SELECT inventory
    FROM available_shoe
    WHERE shoeid = ${shoeid}`

    const typeAsString = inventory.rows[0].inventory;
    const typeAsInt = parseInt(typeAsString, 10);

    
    console.log(typeAsInt)
    return typeAsInt} catch(err) {
            console.log('Error =>' + err);
            throw err;
        }
}


export async function selectOrderRows(): Promise <Array<number>> {
    try { const id = await sql`
    SELECT orderid
    FROM orders
    ORDER BY orderid DESC;
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

    if (name.rows.length === 0) {
        throw new Error(`No parent found with id ${ParentID}`);
    }

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