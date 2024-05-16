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

export async function selectParentemail(ParentID: number): Promise <string> {
    try {const email = await sql`
    SELECT email
    FROM parent
    WHERE idparent = ${ParentID};
    `;

    const emailAsString = email.rows[0].email;

    return emailAsString} catch(err) {
        console.log('Error =>' + err);
        throw err;
    }
}

export async function selectParentNumber(ParentID: number): Promise <string> {
    try{ const number = await sql`
    SELECT phone
    FROM parent
    WHERE idparent = ${ParentID};
    `;

    const numberAsString = number.rows[0].phone;

    return numberAsString} catch(err) {
        console.log('Error =>' + err);
        throw err;
    }
}

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

export async function selectChildname(ChildID : number) : Promise <string> {
    try{ const name = await sql`
    SELECT fname 
    FROM child
    WHERE idchild = ${ChildID}`
    
    const nameAsString = name.rows[0].fname
    
    return nameAsString} catch(err) {
        console.log('Error =>' + err);
        throw err;
    }
}

export async function selectChildlname(ChildID : number) : Promise <string> {
    try{ const lname = await sql`
    SELECT lname 
    FROM child
    WHERE idchild = ${ChildID}`
    
    const nameAsString = lname.rows[0].lname
    console.log(nameAsString);
    return nameAsString} catch(err) {
        console.log('Error =>' + err);
        throw err;
    }
}

export async function selectChildShoeType(ChildID: number): Promise <number> {
    try{const type = await sql`
    SELECT shoetype
    FROM child
    WHERE idchild = ${ChildID}`

    const typeAsString = type.rows[0].idparent;
    const typeAsInt = parseInt(typeAsString, 10);
    
    console.log(typeAsInt)
    return typeAsInt} catch(err) {
            console.log('Error =>' + err);
            throw err;
        }

}

export async function selectShoeName(ShoeTypeID: number): Promise <string> {
    try{const shoeName = await sql`
    SELECT shoename
    FROM shoetype
    WHERE shoetypeid = ${ShoeTypeID}`

    const nameAsString = shoeName.rows[0].shoename;
    console.log(nameAsString)

    return nameAsString} catch(err) {
        console.log('Error =>' + err);
        throw err;
    }
}

export async function selectShoeSize(ChildID: number): Promise <string> {
    try{const shoesize = await sql`
    SELECT shoesize
    FROM child
    WHERE idchild = ${ChildID}` 
    const sizeAsString = shoesize.rows[0].shoesize;
    return sizeAsString} catch(err){
        console.log('Error =>' + err);
        throw err;
    }
}

