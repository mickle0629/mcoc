/**
 * This file stores all data fetching functions. Each function performs an SQL query.
 * The data returned from each query is modeled by an interface defined in `defintions.tsx`
 *   For example: //TODO
 */

'use server';

import { sql } from '@vercel/postgres';
import { Parent } from './definitions';
import { get } from 'https';




export async function selectParentIDfromOrder(OrderID: number): Promise<number> {
    try {const id = await sql`
    SELECT idparent
    FROM orders
    WHERE OrderID = ${OrderID};
    `;
    const idAsString = id.rows[0].idparent;
    const idAsInt = parseInt(idAsString, 10);
    
    console.log(idAsInt)
    return idAsInt} catch(err) {
            console.log('Error =>' + err);
            throw err;
        }
    
    }

export async function selectParentfname(ParentID: number) {
    await sql`
    SELECT fname
    FROM parent
    WHERE Parentid = ${ParentID};
    `;
}

export async function selectParentlname(ParentID: number) {
    await sql`
    SELECT lname
    FROM parent
    WHERE Parentid = ${ParentID});
    `;
}

export async function selectParentemail(ParentID: number) {
    await sql`
    SELECT email
    FROM parent
    WHERE Parentid = ${ParentID});
    `;
}

export async function selectParentNumber(ParentID: number) {
    await sql`
    SELECT phone
    FROM parent
    WHERE Parentid = ${ParentID});
    `;
}