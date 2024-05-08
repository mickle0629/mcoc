/**
 * This file stores all data fetching functions. Each function performs an SQL query.
 * The data returned from each query is modeled by an interface defined in `defintions.tsx`
 *   For example: //TODO
 */
'use server';

import { sql } from '@vercel/postgres';
import { Child } from './definitions';

export async function insertKid(childData: Child) {
    await sql`
        INSERT INTO kid(fname, lname, age, grade, schoolattending) VALUES
            (${childData.firstName}, 
             ${childData.lastName}, 
             ${childData.age}, 
             ${childData.grade},
            ${childData.schoolattending}})
    `;
}