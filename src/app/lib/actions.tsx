/**
 * This file stores all data fetching functions. Each function performs an SQL query.
 * The data returned from each query is modeled by an interface defined in `defintions.tsx`
 *   For example: //TODO
 */
'use server';

import { sql } from '@vercel/postgres';
import { Parent } from './definitions';

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