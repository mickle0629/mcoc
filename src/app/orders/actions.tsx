/**
 * This file stores all data fetching functions. Each function performs an SQL query.
 * The data returned from each query is modeled by an interface defined in `defintions.tsx`
 *   For example: //TODO
 */

'use server';

import { sql } from '@vercel/postgres';




export async function selectSoldRows(): Promise <Array<number>> {
    try { const id = await sql`
    SELECT shoeid
    FROM available_shoe
    WHERE numsold > 0;
    `;

    const idArray: Array<number> = id.rows.map(row => row.shoeid);
        
        return idArray;
    } catch (err) {
        console.log('Error =>' + err);
        throw err;
    }
}

export async function selectSoldNum(shoeid: number): Promise <number> {
    try{const inventory = await sql`
    SELECT numsold
    FROM available_shoe
    WHERE shoeid = ${shoeid}`

    const typeAsString = inventory.rows[0].numsold;
    const typeAsInt = parseInt(typeAsString, 10);
    console.log(typeAsString);
    console.log(typeAsInt);
    
    
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
   

    
    
    return typeAsString} catch(err) {
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
