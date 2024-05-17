'use server';

import { sql } from '@vercel/postgres';

export async function modifyInventoryNum(shoeid: number, inventory: number) {
    await sql`
    UPDATE available_shoe
    SET inventory = ${inventory}
    WHERE shoeid = ${shoeid}`
    ;
}