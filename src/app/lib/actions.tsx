/**
 * This file stores all data fetching functions. Each function performs an SQL query.
 * The data returned from each query is modeled by an interface defined in `defintions.tsx`
 *   For example: //TODO
 */
'use server';

import { sql } from '@vercel/postgres';
import { Parent } from './definitions';
/*import { Order } from '../inventory/definitions';
*/
export async function insertParent(parentData: Parent) {

    await sql`
        INSERT INTO parent(Fname, Lname, Email, Phone, Zip) VALUES
            (${parentData.firstName}, 
             ${parentData.lastName}, 
             ${parentData.email}, 
             ${parentData.phoneNumber}, 
             ${parentData.zip})
    `;
}



export async function FindParent(parent:Parent): Promise <number>
{
    try {const id = await sql`
    SELECT idparent
    FROM parent
    WHERE email = ${parent.email}`

    const ID = id.rows[0].idparent
    return ID} catch(err) {
            console.log('Error =>' + err);
            throw err;
        }
}

export async function selectShoeRows(): Promise <Array<number>> {
    try { const id = await sql`
    SELECT shoeid, shoetype
    FROM available_shoe
    where inventory > 0;
    `;
    
    const idArray: Array<number> = id.rows.map(row => row.shoeid);

        
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
    console.log(typeAsString);

    

    return typeAsString} catch(err) {
            console.log('Error =>' + err);
            throw err;
        }
}

export async function SelectInventoryNum(shoeid: number): Promise <number> {
    try{const inventory = await sql`
    SELECT inventory
    FROM available_shoe
    WHERE shoeid = ${shoeid}`

    const typeAsString = inventory.rows[0].inventory;
    const typeAsInt = parseInt(typeAsString, 10);

    
    return typeAsInt} catch(err) {
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

    
    return typeAsInt} catch(err) {
            console.log('Error =>' + err);
            throw err;
        }
}



export async function GetParentName(parentId:number): Promise <string>
{
    try{const type = await sql`
    SELECT fname , lname
    FROM parent
    WHERE idparent = ${parentId}`

    const Name:string  = type.rows[0].fname + " " + type.rows[0].lname;
    console.log(Name);
    return Name}
    catch(err)
    {
        console.log('Error =>' + err);
        throw err;
    }
}
/*
export async function insertShoeOrder(orderData: Order) {
    await sql`
        INSERT INTO orders(shoeid, idchild, idparent) VALUES
            (${orderData.shoeid}, 
             ${orderData.idchild}, 
             ${orderData.idparent}
            )`;
}Seth's Working on This*/