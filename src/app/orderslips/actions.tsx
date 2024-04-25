/**
 * This file stores all data fetching functions. Each function performs an SQL query.
 * The data returned from each query is modeled by an interface defined in `defintions.tsx`
 *   For example: //TODO
 */

'use server';

import { createPool, sql } from '@vercel/postgres';
import { Order } from './definitions';
import pg from 'pg';

 export async function selectParentIDfromOrder(OrderID: number) {
    try {await sql`
    SELECT idparent
    FROM orders
    WHERE OrderID = ${OrderID};
    `;} catch(err) {
        console.log('Error =>' + err);
        return err;
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