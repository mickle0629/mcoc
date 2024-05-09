import { string } from "yup";

/**
 * Lists each data models that represents data in the database.
 * This is done to ensure data integrity.
 *   For example:  type Parent is used in actions.tsx/insertParent to ensure
 *   all data entered are strings.
 */
export type Parent = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    zip: string
}

export type Child = {
    idParent: string;
    firstName: string;
    lastName: string;
    age: string;
    grade: string;
    shoeSize: string;
    school: string;
}

export interface InventorySizes {
    id: string;
    type: string;
    size: string;
}

export interface Order {
    parent: Parent;
    shoes: Shoe[]
}

export interface Shoe {
    shoeId: string;
    shoeType: string;
    shoeSize: string;
}